import styled from 'styled-components'
import NavBar from '../components/NavBar/NavBar'
import SideNav from '../components/SideBar/SideBar'
import FlexCards from '../components/cards/Generic/FlexCards'

const ProductsWrapper = styled.div``

const Products = () => {
  return (
    <div>
      <NavBar />
      <SideNav />
      <FlexCards />
    </div>
  )
}

export default Products
