export function filterCategory({ casual, sports, track, fitness }, products) {
  let sortedList = []
  if (
    casual === false &&
    sports === false &&
    track === false &&
    fitness === false
  ) {
    sortedList = [...products]
  }
  if (casual) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'casual'),
    )
  }
  if (fitness) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'fitness'),
    )
  }
  if (track) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'track'),
    )
  }
  if (sports) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'sports'),
    )
  }
  return sortedList
}
