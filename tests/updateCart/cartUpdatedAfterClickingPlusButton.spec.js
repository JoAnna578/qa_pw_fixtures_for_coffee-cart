import { test, expect } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import {
  totalPriceFormatStr,
  priceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({
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

  // Sprawdzamy początkowe ceny
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    totalPriceFormatStr(COFFEE_PRICES.espresso * 1),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    totalPriceFormatStr(COFFEE_PRICES.cappuccino * 1),
  );

  // Dodajemy jedno Espresso
  await cartPage.clickAddOneEspressoButton();
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    totalPriceFormatStr(COFFEE_PRICES.espresso * 2),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    totalPriceFormatStr(COFFEE_PRICES.cappuccino * 1),
  );

  // Dodajemy jedno Cappuccino
  await cartPage.clickAddOneCappuccinoButton();
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    totalPriceFormatStr(COFFEE_PRICES.cappuccino * 2),
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    totalPriceFormatStr(COFFEE_PRICES.espresso * 2),
  );

  // Sprawdzamy całkowitą wartość w koszyku
  const total = COFFEE_PRICES.espresso * 2 + COFFEE_PRICES.cappuccino * 2;
  await cartPage.assertTotalCheckoutContainsValue(priceFormatStr(total));
});
