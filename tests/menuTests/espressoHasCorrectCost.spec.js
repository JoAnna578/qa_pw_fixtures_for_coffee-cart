import { test, expect } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {
  // Otwieramy stronę menu
  await menuPage.open();

  // Sprawdzamy cenę Espresso w menu
  await menuPage.assertEspressoCupCostHasValue(
    priceFormatStr(COFFEE_PRICES.espresso),
  );
});
