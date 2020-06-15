import { productsSelector } from './product.selector';
import { createStructuredSelector } from 'reselect';

const INITIAL_DATA = {
  elektronik: {
    id: 'E01',
    items: [
      {
        name: 'Iphone 7',
        price: 6000000,
        stock: 6,
        image: '../../assets/img/dummy.jpg'
      },
      {
        name: 'Macbook Pro 16 Inci 2017',
        price: 12000000,
        stock: 12,
        image: '../../assets/img/dummy.jpg'
      },
      {
        name: 'Macbook Pro 13 Inci 2017',
        price: 10000000,
        stock: 10,
        image: '../../assets/img/dummy.jpg'
      },
    ]
  },
  fashion: {
    id: 'F01',
    items: [
      {
        name: 'Topi stylish zaman now',
        price: 25000,
        stock: 25,
        image: '../../assets/img/dummy.jpg'
      }
    ]
  }
}

const productReducer = (state = INITIAL_DATA, action) => {
  switch(action) {

    default:
      return state;
  }
}
const allProducts = productsSelector(INITIAL_DATA);
console.log(allProducts);

export default productReducer;
