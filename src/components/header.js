import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navbar from "./Navbar"

export default function Header({ siteTitle }) {
  return (
    <div
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        // position: `sticky`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          // position: `sticky`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
          <Navbar />
        </h1>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

//export default Header
