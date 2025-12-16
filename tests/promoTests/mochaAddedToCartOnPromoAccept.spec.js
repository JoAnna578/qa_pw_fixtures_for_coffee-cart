import { test, expect } from '../fixtures/fixtures';
import { COFFEE_PRICES, PROMO_PRICES } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage,
}) => {
  // Otwieramy stronę menu
  await menuPage.open();

  // Dodajemy produkty
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  // Sprawdzamy i akceptujemy promocję
  await menuPage.assertPromoMessageIsVisible();
  await menuPage.clickYesPromoButton();

  // Przechodzimy do koszyka
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  // Sprawdzamy ceny produktów w koszyku
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.espresso),
  );
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    priceFormatStr(PROMO_PRICES.mocha),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.cappuccino),
  );
  await cartPage.assertAmericanoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.americano),
  );
});
