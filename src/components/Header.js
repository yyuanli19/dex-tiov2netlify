import * as React from "react"
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Link} from './styles/Link.styled'
import { Container, LeftContainer, RightContainer } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

export default function Header() {
  return (
    <StyledHeader>
      <Container>
       
        <Nav>
          <LeftContainer>
          <Logo src='../images/logo.svg' alt='' />
          </LeftContainer>
          <RightContainer>
            <ul>
              <Link href="#">Solutions</Link>
              </ul>
              <ul>
              <Link href="#">Blog</Link>
              </ul>
              <ul>
              <Button>Get in Touch </Button>
            </ul>
          </RightContainer>
        </Nav>
            
          {/*
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
              <Container>
                  <Navbar.Brand href="#home"  className="img-container">
                    <img style={{ maxHeight: '300px', maxWidth: '300px'}} src='../images/logo.svg'  />
                  </Navbar.Brand>
          
          <Col md="auto">
                      <Nav>
                          <Nav.Link href="#blog/index">Blog</Nav.Link>
                          <Nav.Link href="#home">Dank memes</Nav.Link>
                      </Nav>
                  <Button>Get in Touch </Button>
          </Col>
              </Container>
          </Navbar>
            */}

          
        <Flex>
          <div>
            <h1>Your Data Analyst </h1>

            <p>
                Boost your business with the RIGHT DATA, using the RIGHT Tool
            </p>

            <Button bg='#ff0099' color='#fff'>
              Request a demo
            </Button>
          </div>

          <Image src='../images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
