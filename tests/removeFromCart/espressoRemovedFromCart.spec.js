import { test, expect } from '../fixtures/fixtures';

test('Check Espresso removed from Cart after clicking remove button', async ({
  menuPage,
  cartPage,
}) => {
  // Otwieramy stronę menu
  await menuPage.open();

  // Dodajemy Espresso
  await menuPage.clickEspressoCup();

  // Przechodzimy do koszyka
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  // Usuwamy wszystkie Espresso z koszyka
  await cartPage.clickRemoveAllEspressoButton();

  // Sprawdzamy, że koszyk jest pusty
  await cartPage.assertNoCoffeeMessageIsVisible();
});
