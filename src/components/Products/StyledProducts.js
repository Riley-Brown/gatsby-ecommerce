import styled from "styled-components"

export const StyledProducts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .link-wrapper {
    flex: 0 1 46%;
    text-decoration: none;
  }
  .product {
    flex-direction: column;
    flex: 0 1 48%;
    border-radius: 15px;
    transition: 300ms;
    margin-bottom: 40px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px;
    background: #fff;
    @media (max-width: 1100px) {
      flex: 1 1 100%;
    }
    .gatsby-image-wrapper {
      flex: 0 0 auto;
      width: 100%;
      height: 500px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      cursor: pointer;
      @media (max-width: 600px) {
        height: initial;
      }
    }

    .product-info {
      display: flex;
      padding: 25px;
      color: #222;
      align-items: center;
      justify-content: space-between;
      max-width: 90%;
      margin: auto;
      @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        max-width: 100%;
      }
      & div:first-of-type {
        max-width: 70%;
        @media (max-width: 600px) {
          max-width: 100%;
        }
      }
      h1 {
        font-size: 2.7rem;
        font-weight: 500;
      }
      p {
        font-size: 1.9rem;
      }
      h3 {
        font-size: 2.2rem;
        font-weight: 500;
      }
      & div:last-of-type {
        @media (max-width: 600px) {
          width: 100%;
        }
      }
      button {
        background: var(--secondary);
        color: #fff;
        padding: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-left: 50px;
        font-size: 2rem;
        min-width: 105px;
        transition: 200ms;
        @media (max-width: 600px) {
          margin-left: 0;
          width: 100%;
          display: block;
          margin-top: 20px;
        }
        &:hover {
          transform: translateY(-5px);
        }
      }
    }
  }
`
