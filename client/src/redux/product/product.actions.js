export const productActionTypes = {
  CURRENTLY_SEARCH: 'CURRENTLY_SEARCH',
  CURRENTLY_VIEWED: 'CURRENTLY_VIEWED'
}

export const storeSearchValue = (searchKeyword, searchResult) => ({
  type: productActionTypes.CURRENTLY_SEARCH,
  payload: {
    searchKeyword,
    searchResult
  }
})

export const storeCurrentlyViewed = (id, name) => ({
  type: productActionTypes.CURRENTLY_VIEWED,
  payload: {id, name}
})