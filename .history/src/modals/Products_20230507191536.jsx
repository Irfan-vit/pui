import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import SideNav from '../components/SideBar/SideBar'
import FlexCards from '../components/cards/Generic/FlexCards'

const ProductsWrapper = styled.div`
  @media (min-width: 550px) {
    display: flex;
    flex-flow: column wrap;
    > div {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      flex-flow: row wrap;
      /* gap: 2%; */
      > div:first-child {
        flex-basis: 10%;
      }
      > div:last-child {
        flex-basis: 84%;
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
    </ProductsWrapper>
  )
}

export default Products
