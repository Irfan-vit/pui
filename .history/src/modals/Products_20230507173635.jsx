import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import SideNav from '../components/SideBar/SideBar'
import FlexCards from '../components/cards/Generic/FlexCards'

const ProductsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  > div {
    display: flex;
    flex-flow: row;
    gap: 1%;
    > div:first-child {
      flex-basis: 60%;
    }
    > div:las {
      /* flex-basis: 40%; */
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
