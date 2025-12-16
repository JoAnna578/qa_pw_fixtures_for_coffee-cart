import { test, expect } from '../fixtures/fixtures';

test('Assert cart updated correctly after clicking minus for drinks', async ({
  menuPage,
  cartPage,
}) => {
  // Otwieramy stronę menu
  await menuPage.open();

  // Dodajemy Cappuccino i Espresso
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  // Przechodzimy do koszyka
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  // Sprawdzamy, że Espresso jest widoczne
  await cartPage.assertEspressoItemIsVisible();

  // Usuwamy jedno Espresso
  await cartPage.clickRemoveOneEspressoButton();
  await cartPage.assertEspressoItemIsHidden();
  await cartPage.assertCappuccinoItemIsVisible();

  // Usuwamy jedno Cappuccino
  await cartPage.clickRemoveOneCappuccinoButton();
  await cartPage.assertCappuccinoItemIsHidden();
  await cartPage.assertNoCoffeeMessageIsVisible();
});
