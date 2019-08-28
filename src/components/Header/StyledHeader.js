import styled from "styled-components"
import { transitionClasses } from "../../helpers/transitionClasses"

export const StyledHeader = styled.div`
  ${transitionClasses("fade", 1000)};
  height: 60vh;
  position: relative;
  width: 100%;
  display: flex;
  margin: 100px 0;
  .carousel-container {
    display: flex;

    height: 60vh;
    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
    /* position: relative; */
    width: 100%;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px;
    .tag-line {
      position: absolute;
      top: 30%;
      color: #fff;

      left: 100px;

      h1 {
        font-size: 7rem;
        margin-bottom: 10px;
      }
      p {
        font-size: 2.7rem;
        max-width: 400px;
        font-weight: 500;
        opacity: 0.9;
      }
    }

    .gatsby-image-wrapper {
      height: 100%;
      flex: 1 1 auto;
    }
    img {
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      object-fit: cover;
      height: 100%;
      object-position: top;
      border-radius: 15px;
      object-position: center;
    }
  }
`
