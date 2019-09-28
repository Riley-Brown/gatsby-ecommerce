import styled from "styled-components"

export const StyledProducts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .link-wrapper {
    flex: 0 0 48%;
    flex-wrap: wrap;
    display: flex;
    text-decoration: none;
  }
  .product {
    display: flex;
    cursor: pointer;
    border-radius: 15px;
    transition: 300ms;
    margin-bottom: 40px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px;
    background: #fff;
    &:hover {
      transform: translateY(-20px);
    }
    img {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      width: 50%;
      height: 210px;
      object-fit: cover;
      object-position: center;
      display: block;
      margin: 0;
    }
    .product-info {
      margin-left: 10px;
      flex: 100%;
      padding: 10px;
      color: #222;
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 1.9rem;
      }
      h3 {
        font-size: 2.2rem;
      }
    }
  }
`
