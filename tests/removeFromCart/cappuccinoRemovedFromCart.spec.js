import { test, expect } from '../fixtures/fixtures';

test('Check Cappuccino removed from Cart after clicking remove button', async ({
  menuPage,
  cartPage,
}) => {
  // Otwieramy stronę menu
  await menuPage.open();

  // Dodajemy Cappuccino
  await menuPage.clickCappucinoCup();

  // Przechodzimy do koszyka
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  // Usuwamy wszystkie Cappuccino z koszyka
  await cartPage.clickRemoveAllCappuccinoButton();

  // Sprawdzamy, że koszyk jest pusty
  await cartPage.assertNoCoffeeMessageIsVisible();
});
