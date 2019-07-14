import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

const Header = ({ isRootPath }) => {
  const headingClass = classNames("header__title", {
    "header__title--tertiary": !isRootPath,
  })

  return (
    <header className="header">
      <h1 className={headingClass}>
        <Link className="header__link" to={`/`}>
          React Blog | @getamasdev
        </Link>
      </h1>
    </header>
  )
}

export default Header
