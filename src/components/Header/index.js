import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { StyledHeader } from "./StyledHeader"
import { useCarousel } from "../../hooks/useCarousel"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import { Link as ScrollLink } from "react-scroll/"

const Header = () => {
  const carouselContainer = useRef()

  const images = useStaticQuery(graphql`
    query HeroImagesQuery {
      allContentfulProductsCarousel {
        edges {
          node {
            id
            images {
              fluid(quality: 80, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  const { node } = images.allContentfulProductsCarousel.edges[0]

  const [index] = useCarousel({
    data: node.images,
    timeout: 2500,
    element: carouselContainer,
    defaultVisible: true,
  })

  return (
    <StyledHeader>
      <div className="carousel-container" ref={carouselContainer}>
        <div className="tag-line">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            voluptate!
          </p>
          <ScrollLink smooth duration={300} offset={-130} to="products">
            <button>See More</button>
          </ScrollLink>
        </div>
        <TransitionGroup>
          <CSSTransition
            appear={true}
            key={index}
            timeout={1000}
            classNames="fade"
          >
            {/* <Img fluid={node.images[index].fluid} key={node.id} /> */}
            <img srcSet={node.images[index].fluid.srcSet} alt="" />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </StyledHeader>
  )
}

export default Header
