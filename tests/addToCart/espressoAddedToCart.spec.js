import { test, expect } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import {
  unitPriceFormatStr,
  priceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso correctly added to the Cart', async ({
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

  // Assercje z użyciem helperów i constants
  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(
    unitPriceFormatStr(COFFEE_PRICES.espresso, 1),
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.espresso),
  );
});
