import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import SideNav from '../components/SideBar/SideBar'
import FlexCards from '../components/cards/Generic/FlexCards'

const ProductsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  > div {
    /* max-width: 1280px; */
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    gap: 1%;
    > div:first-child {
      flex-basis: 14%;
    }
    > div:last-child {
      flex-basis: 84%;
      @media (max-width: 550px) {
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
        {/* <SideNav /> */}
        <FlexCards />
      </div>
    </ProductsWrapper>
  )
}

export default Products
