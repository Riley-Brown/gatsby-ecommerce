import styled from "styled-components"
import { transitionClasses } from "../../helpers/transitionClasses"

export const StyledHeader = styled.div`
  ${transitionClasses("fade", 1000)};
  min-height: calc(100vh - 300px);
  position: relative;
  width: 100%;
  display: flex;
  margin-bottom: 100px;
  @media (max-width: 700px) {
    min-height: calc(100vh - 200px);
    margin-bottom: 50px;
  }
  .carousel-container {
    display: flex;
    min-height: calc(100vh - 300px);
    background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
    width: 100%;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px;
    @media (max-width: 700px) {
      min-height: calc(100vh - 200px);
    }
    .tag-line {
      position: absolute;
      top: 30%;
      color: #fff;
      left: 100px;
      @media (max-width: 700px) {
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
      }
      @media (max-width: 600px) {
        width: 90%;
      }
      h1 {
        font-size: 7rem;
        @media (max-width: 600px) {
          font-size: 5rem;
        }
        @media (max-width: 420px) {
          font-size: 3.5rem;
          text-align: center;
        }
      }
      p {
        font-size: 2.7rem;
        max-width: 400px;
        font-weight: 500;
        opacity: 0.9;
        margin-bottom: 20px;
        @media (max-width: 700px) {
          max-width: initial;
        }
        @media (max-width: 420px) {
          font-size: 2.2rem;
        }
      }
      button {
        text-align: center;
        margin: auto;
        width: 200px;
        font-size: 2.2rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
          rgba(0, 0, 0, 0.23) 0px 1px 6px;
        @media (max-width: 700px) {
          display: block;
        }
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
