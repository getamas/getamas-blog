import React, { Component } from "react"

import Footer from "./footer"
import Header from "./header"

class Layout extends Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath

    return (
      <div className="page__container">
        <Header title={title} isRootPath={isRootPath} />
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout
