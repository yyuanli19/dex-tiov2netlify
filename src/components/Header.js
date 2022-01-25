import * as React from "react"
import { Navbar } from 'react-bootstrap'
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

export default function Header() {
  return (
    <StyledHeader>
      <Container>
          
        <Nav>
          <Logo src='../images/logo.svg' alt='' />
          <Button>Get in Touch </Button>
        </Nav>
            

          {/*
          <Navbar
            bg="dark"
            fixed="top"
          >
          <style>
          .navbar-brand img {
            max-height: 100%;
          }

              .navbar-brand {
                height: 100px;
              }
          </style>
          <Navbar.Brand href="#home">
            <img src='../images/logo.svg'    />
          </Navbar.Brand>
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
