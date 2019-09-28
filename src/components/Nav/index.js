import React from "react"
import logo from "../../assets/img/rawberri-logo-cropped-bg.png"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <nav
      style={{
        background: `#fff`,
        marginBottom: `1.45rem`,
        position: "sticky",
        top: "0",
        background: "#fff",
        zIndex: "1",
        boxShadow: "2px 4px 10px rgba(0,0,0,0.2)",
        marginBottom: "50px",
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1400,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            textAlign: "center",
            margin: "auto",
            display: "block",
          }}
        >
          <span>
            <img src={logo} style={{ margin: 0, height: "70px" }} />
          </span>
        </Link>
      </div>
    </nav>
  )
}
