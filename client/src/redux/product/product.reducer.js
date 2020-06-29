import { productActionTypes } from './product.actions';

const INITIAL_DATA = {
  beingSearch: {},
  beingViewed: {}
}

const productReducer = (state = INITIAL_DATA, action) => {
  switch(action.type) {
    case productActionTypes.CURRENTLY_SEARCH:
      return {
        ...state,
        beingSearch: action.payload
      }

    case productActionTypes.CURRENTLY_VIEWED:
      return {
        ...state,
        beingViewed: action.payload
      }

    default:
      return state;
  }
}

export default productReducer;
