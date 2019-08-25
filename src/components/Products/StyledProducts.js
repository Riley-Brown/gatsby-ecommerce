import styled from "styled-components"

export const StyledProducts = styled.div`
  color: red;
  display: flex;
  justify-content: space-between;
  .product {
    flex: 0 0 30%;
    cursor: pointer;
    img {
      border-radius: 10px;
      width: 100%;
    }
  }
`
