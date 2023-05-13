import { v4 as uuid } from 'uuid'

import {
  casualT1,
  casualT2,
  fitnessT1,
  fitnessT2,
  trackT1,
  trackT2,
  sportsT1,
  sportsT2,
  mensT1,
  mensT2,
  womensT1,
  womensT2,
} from '../../assets/index'

export const fetchProducts = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://sprint/sprint-api/v1/products') {
        resolve({
          status: 200,
          message: 'success',
          data: {
            products: [
              {
                _id: uuid(),
                isFeatured: false,
                title: 'Vans Old Skool',
                price: '5499',
                categoryName: 'casual',
                inWishlist: true,
                inCart
                imgSrc: casualT1,
                rating: 4.5,
              },
              {
                _id: uuid(),
                isFeatured: true,
                title: 'Adidas Gazelle',
                price: '7799',
                categoryName: 'casual',
                inWishlist: false,
                imgSrc: casualT2,
                rating: 3.0,
              },
              {
                _id: uuid(),
                isFeatured: false,
                title: 'Mizuno sneakers',
                price: '13912',
                categoryName: 'fitness',
                inWishlist: true,
                inCart
                imgSrc: fitnessT1,
                rating: 3.5,
              },
              {
                _id: uuid(),
                isFeatured: true,
                title: 'Reebok Hexaffect',
                price: '7999',
                categoryName: 'fitness',
                inWishlist: false,
                imgSrc: fitnessT2,
                rating: 3.0,
              },
              {
                _id: uuid(),
                isFeatured: true,
                title: 'Brroks Hyperion Max',
                price: '5999',
                categoryName: 'track',
                inWishlist: true,
                inCart
                imgSrc: trackT1,
                rating: 3.5,
              },
              {
                _id: uuid(),
                isFeatured: false,
                title: 'Air Zoom Pegasus',
                price: '8996',
                categoryName: 'track',
                inWishlist: true,
                inCart
                imgSrc: trackT2,
                rating: 4.5,
              },
              {
                _id: uuid(),
                isFeatured: true,
                title: 'New Balance Revlitye',
                price: '5890',
                categoryName: 'sports',
                inWishlist: true,
                inCart
                imgSrc: sportsT1,
                rating: 4,
              },
              {
                _id: uuid(),
                isFeatured: false,
                title: 'Hummel Liga GK',
                price: '7199',
                categoryName: 'sports',
                inWishlist: true,
                inCart
                imgSrc: sportsT2,
                rating: 3.5,
              },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Food list not found.',
        })
      }
    }, 3000)
  })
}

// export const products = [
//   {
//     _id: uuid(),
//     title: 'Vans Old Skool',
//     price: '5499',
//     categoryName: 'casual',
//     inWishlist: true,
inCart
//     imgSrc: casualT1,
//     isBestSeller: true,
//     rating: 4.5,
//   },
//   {
//     _id: uuid(),
//     title: 'Adidas Gazelle',
//     price: '7799',
//     categoryName: 'casual',
//     inWishlist: false,
//     imgSrc: casualT2,
//     rating: 3.0,
//   },
//   {
//     _id: uuid(),
//     title: 'Mizuno sneakers',
//     price: '13912',
//     categoryName: 'fitness',
//     inWishlist: true,
//     imgSrc: fitnessT1,
//     rating: 3.5,
//   },
//   {
//     _id: uuid(),
//     title: 'Reebok Hexaffect',
//     price: '7999',
//     categoryName: 'fitness',
//     inWishlist: false,
//     imgSrc: fitnessT2,
//     rating: 3.0,
//   },
//   {
//     _id: uuid(),
//     title: 'Air Jordan 1',
//     price: '15788',
//     categoryName: 'mens',
//     inWishlist: true,
//     imgSrc: mensT1,
//     rating: 4.5,
//   },
//   {
//     _id: uuid(),
//     title: 'Air Force 1',
//     price: '13990',
//     categoryName: 'mens',
//     inWishlist: false,
//     imgSrc: mensT2,
//     rating: 4.5,
//   },
//   {
//     _id: uuid(),
//     title: 'Asics GT-II',
//     price: '7199',
//     categoryName: 'womens',
//     inWishlist: true,
//     imgSrc: womensT1,
//     rating: 4,
//   },
//   {
//     _id: uuid(),
//     title: 'Converse Chuck 70',
//     price: '5999',
//     categoryName: 'womens',
//     inWishlist: true,
//     imgSrc: womensT2,
//     rating: 4,
//   },
//   {
//     _id: uuid(),
//     title: 'Brroks Hyperion Max',
//     price: '5999',
//     categoryName: 'track',
//     inWishlist: true,
//     imgSrc: trackT1,
//     rating: 3.5,
//   },
//   {
//     _id: uuid(),
//     title: 'Air Zoom Pegasus',
//     price: '8996',
//     categoryName: 'track',
//     inWishlist: true,
//     imgSrc: trackT2,
//     rating: 4.5,
//   },
//   {
//     _id: uuid(),
//     title: 'New Balance Revlitye',
//     price: '5890',
//     categoryName: 'sports',
//     inWishlist: true,
//     imgSrc: sportsT1,
//     rating: 4,
//   },
//   {
//     _id: uuid(),
//     title: 'Hummel Liga GK',
//     price: '7199',
//     categoryName: 'sports',
//     inWishlist: true,
//     imgSrc: sportsT2,
//     rating: 3.5,
//   },
// ]
