import { createSelector } from 'reselect';
import { isCompositeComponent } from 'react-dom/test-utils';

const productSelector = state => state;

const testSelector = state => state.products;

export const productsSelector = createSelector(
  productSelector,
  categories =>
    Object.keys(categories)
    .map(key => categories[key])
    .map(item => item.items
      .map(single => single)
      )
)