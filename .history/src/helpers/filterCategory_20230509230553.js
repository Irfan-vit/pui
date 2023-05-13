export function filterCategory({ casual, sports, track, fitness }, products) {
  let sortedList = []
  if (casual === false && womens === false && track === false) {
    sortedList = [...products]
  }
  if (mens) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'mens'),
    )
  }
  if (womens) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'womens'),
    )
  }
  if (track) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'track'),
    )
  }
  return sortedList
}
