import axios from 'axios';

const INITIAL_DATA = {
  elektronik: {
    id: 'E01',
    items: [
      {
        name: 'Iphone 7',
        price: 6000000,
        stock: 6,
        image: 'https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg'
      },
      {
        name: 'Macbook Pro 16 Inci 2017',
        price: 12000000,
        stock: 12,
        image: 'https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg'
      },
      {
        name: 'Macbook Pro 13 Inci 2017',
        price: 10000000,
        stock: 10,
        image: 'https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg'
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
        image: 'https://m.ayosemarang.com/images-semarang/post/articles/2020/03/19/53883/ipad-pro-review-featured.jpg'
      }
    ]
  }
}

const DATABASE_DATA = () => {
  axios.get('http://localhost:5000/api/items')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}

console.log(DATABASE_DATA());


const productReducer = (state = INITIAL_DATA, action) => {
  switch(action) {

    default:
      return state;
  }
}

export default productReducer;
