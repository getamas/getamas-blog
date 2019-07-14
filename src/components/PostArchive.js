import React from "react"
import { Link } from "gatsby"

export default class PostArchive extends React.Component {
  render() {
    return this.props.posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <article className="post" key={node.fields.slug}>
          <h3 className="post__title">
            <Link className="post__link" to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <small className="post__publish-date">{node.frontmatter.date}</small>
          <p
            className="post__excerpt"
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </article>
      )
    })
  }
}
