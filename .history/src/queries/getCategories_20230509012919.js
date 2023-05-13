expoert default async function getCategories() {
    const {
      data: { categories },
    } = await fetchCategories('https://sprint/sprint-api/v1/categories')
  
    return categories
  }