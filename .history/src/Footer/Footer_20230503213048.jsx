import styled from 'styled-components'
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { SiHandshake } from 'react-icons/si'
import { RiMapPinRangeFill } from 'react-icons/ri'

const FooterWraper = styled.section`
  background-color: ${(props) => props.theme.footer};
  color: #474a56;
`
const StyledFooter = styled.footer`
  > * h4 {
    font-size: var(--font-lg);
  }
  > * li {
    font-size: var(--font-md);
  }
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  @media (min-width: 550px) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
  > div > ul {
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  > div > ol,
  address > ol {
    list-style-type: none;
  }
  > div > ul,
  div > ol,
  div > address {
    margin-bottom: 2rem;
    @media (min-width: 550px) {
      margin: 0 auto;
    }
  }
`

const Footer = () => {
  return (
    <FooterWraper>
      <StyledFooter>
        <div>
          <h4>
            Connect with us <SiHandshake />
          </h4>
          <ul>
            <li>
              <a href="">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>
            Quick Links
            <FiArrowUpRight />
          </h4>
          <ol>
            <li>About Us</li>
            <li>Contact us</li>
          </ol>
        </div>
        <address>
          <h4>
            Locate Us At <RiMapPinRangeFill />
          </h4>
          <ol>
            <li>At Land</li>
            <li>At Street</li>
            <li>At Building</li>
          </ol>
        </address>
      </StyledFooter>
    </FooterWraper>
  )
}

export default Footer
