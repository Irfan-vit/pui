import styled from 'styled-components'

import NavBar from '../components/navBar/NavBar'
import SideNav from '../components/SideBar/SideBar'
import Footer from '../components/footer/Footer'
import { useProducts } from '../context/getProductsContext'
import ProductCards from './products/ProductCards'
import Skeleton from '../components/animations/Loaders/Skeleton'

const ProductsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
  > :last-child {
    margin-top: auto;
    width: 100%;
  }
  @media (min-width: 900px) {
    display: flex;
    flex-flow: column wrap;
    > :nth-child(2) {
      min-height: 83vh;
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      gap: 1%;
      > :first-child {
        flex-basis: 19%;
      }
      > :last-child {
        flex-basis: 79%;
      }
    }
  }
`

const Products = () => {
  const { productsQuery } = useProducts()
  return (
    <ProductsWrapper>
      <NavBar />
      <div>
        <SideNav />
        {if (productsQuery.isLoading) ? <Skeleton /> :
        <ProductCards />
  }
      </div>
      <Footer />
    </ProductsWrapper>
  )
}

export default Products
