import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
import SideNav from '../components/SideBar/SideBar'
import FlexCards from '../components/cards/Generic/FlexCards'

const ProductsWrapper = styled.div`
  display: flex;
  flex-flow: ;
`

const Products = () => {
  return (
    <ProductsWrapper>
      <NavBar />
      <SideNav />
      <FlexCards />
    </ProductsWrapper>
  )
}

export default Products
