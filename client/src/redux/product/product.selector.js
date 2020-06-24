import { createSelector } from 'reselect';

const productSelector = state => state.products;

export const productsSelector = createSelector(
  productSelector,
  categories =>
    Object.keys(categories)
    .map(key => categories[key])
    .map(item => item.items
        .map(single => single)
      )
)