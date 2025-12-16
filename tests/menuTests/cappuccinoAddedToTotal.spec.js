import { test, expect } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
}) => {
  // Otwieramy stronę menu
  await menuPage.open();

  // Dodajemy Cappuccino
  await menuPage.clickCappucinoCup();

  // Sprawdzamy całkowitą wartość w koszyku
  await menuPage.assertTotalCheckoutContainsValue(
    totalPriceFormatStr(COFFEE_PRICES.cappuccino, 1),
  );
});
