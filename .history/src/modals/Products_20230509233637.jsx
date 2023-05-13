import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import SideNav from '../components/SideBar/SideBar'
import FlexCards from './FlexCards'
import Footer from '../components/Footer/Footer'
import { useProducts } from '../context/getProductsContext'

const ProductsWrapper = styled.div`
  display: flex;
  @media (min-width: 900px) {
    display: flex;
    flex-flow: column wrap;
    > div {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      flex-flow: row nowrap;
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
          <FlexCards />
        </div>
        <Footer />
      </ProductsWrapper>
    )
}

export default Products
