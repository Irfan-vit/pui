export function filterSearch(search, list) {
  if (search.trim() === '') {
    return list
  } else {
    return list.filter((item) => item.title.toLowerCase().includes(search))
  }
}
