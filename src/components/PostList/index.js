import React from "react"
// import { Link } from "gatsby"
import PostCard from "../PostCard"
import { PostGrid } from "./styles"
import Masonry from "../Masonry"

export default function PostList({ posts }) {
  return (
    /* posts.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}
              {"  "}
            </h3>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </div>
      ))
 */

    <Masonry>
      {posts.edges.map(({ node }) => (
        <PostCard key={node.fields.slug} node={node} />
      ))}
    </Masonry>
    /* 
    <PostGrid minWidth="17em" maxWidth="24em" gap="1.5em">
      {posts.edges.map(({ node }) => (
        <PostCard key={node.fields.slug} node={node} />
      ))}
    </PostGrid>

 */
  )
}
