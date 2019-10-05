import React from "react"
import { animateScroll } from "react-scroll"

import logo from "assets/img/rawberri-logo-cropped-bg.png"
import { StyledNav } from "./StyledNav"

export default function Nav() {
  return (
    <StyledNav>
      <div className="nav-container">
        <span onClick={() => animateScroll.scrollToTop({ duration: 300 })}>
          <img src={logo} />
        </span>
      </div>
    </StyledNav>
  )
}
