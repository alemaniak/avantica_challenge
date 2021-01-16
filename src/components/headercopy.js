import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const goToGoogle = "https://www.google.com"
const HeaderCopy = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to={goToGoogle}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p1 style={{ position: "absolute", color: "white" }}>{"(click me above)"}</p1>
    </div>
  </header>
)

HeaderCopy.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderCopy.defaultProps = {
  siteTitle: ``,
}

export default HeaderCopy
