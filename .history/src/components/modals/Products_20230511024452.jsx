import styled from 'styled-components'

import NavBar from '../components/navBar/NavBar'
import SideNav from '../components/sideBar/SideBar'
import FlexCards from './FlexCards'
import Footer from '../components/footer/Footer'
import { useProducts } from '../context/getProductsContext'
import ProductCards from './ProductCards'

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
  if (productsQuery.isLoading) return <h1>loading</h1>
  if (productsQuery.isSuccess)
    return (
      <ProductsWrapper>
        <NavBar />
        <div>
          <SideNav />
          <ProductCards />
        </div>
        <Footer />
      </ProductsWrapper>
    )
}

export default Products
