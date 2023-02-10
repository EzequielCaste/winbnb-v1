import stays from './stays.json'

export const cities = Array.from(new Set(
  stays.map((stay) => `${stay.city}, ${stay.country}`)
))



 