import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { StyledHeader } from "./StyledHeader"

const Header = ({ siteTitle }) => {
  const images = useStaticQuery(graphql`
    query HeroImagesQuery {
      allContentfulProductsCarousel {
        edges {
          node {
            images {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)
  console.log(images.allContentfulProductsCarousel.edges[0].node)
  return (
    <StyledHeader>
      {images.allContentfulProductsCarousel.edges[0].node.images.map(img => (
        // <Img fluid={img.fluid} />
        <img src={img.fluid.src} />
      ))}
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
