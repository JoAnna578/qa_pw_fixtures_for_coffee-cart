import { test, expect } from '../fixtures/fixtures';

test('Assert empty cart shows correct message', async ({ cartPage }) => {
  // Otwieramy stronę koszyka
  await cartPage.open();

  // Sprawdzamy komunikat "No coffee"
  await cartPage.assertNoCoffeeMessageIsVisible();
});
