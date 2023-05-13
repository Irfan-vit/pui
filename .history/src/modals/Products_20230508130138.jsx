import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import SideNav from '../components/SideBar/SideBar'
import FlexCards from '../components/cards/Generic/FlexCards'
import Footer from '../Footer/Footer'

const ProductsWrapper = styled.div`
  @media (min-width: 1000px) {
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
  return (
    <ProductsWrapper>
      <NavBar />
      <div>
        <SideNav />
        <FlexCards />
      </div>
      <F
    </ProductsWrapper>
  )
}

export default Products
