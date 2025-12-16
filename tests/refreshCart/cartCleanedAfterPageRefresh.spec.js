import { test, expect } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import {
  priceFormatStr,
  unitPriceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart cleaned after page refresh', async ({
  menuPage,
  cartPage,
}) => {
  // Otwieramy stronę menu
  await menuPage.open();

  // Dodajemy produkty
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  // Przechodzimy do koszyka
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  // Sprawdzamy, że Cappuccino jest widoczne
  await cartPage.assertCappuccinoItemIsVisible();

  // Odświeżamy stronę koszyka
  await cartPage.reload();

  // Sprawdzamy, że koszyk jest pusty
  await cartPage.assertCappuccinoItemIsHidden();
  await cartPage.assertNoCoffeeMessageIsVisible();
});
