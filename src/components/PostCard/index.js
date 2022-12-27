import { Link } from "gatsby"
import React from "react"
import PostMeta from "../PostMeta"
import { Cover, Post } from "./styles"
import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

// A post is a node associated with a blog post
export default function PostCard({ node }) {
  console.log(node)
  const { fields, frontmatter, excerpt, timeToRead } = node
  const { slug } = fields
  //const slug = 'stub'
  const { date, title, cover, tags } = frontmatter
  const image = getImage(cover?.img)

  return (
    <Post>
      <div
        style={{
          display: "grid",
          height: "min-content",
        }}
      >
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
            placeItems: "center",
            display: "grid",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <h3 css="margin: 0.8em auto 0.5em;">
            <Link to={slug}>{title}</Link>
          </h3>

          <PostMeta
            title={title}
            slug={slug}
            date={date}
            tags={tags}
            timeToRead={timeToRead}
          />
          <p>{excerpt}</p>
        </div>
        <GatsbyImage
          image={image}
          imgStyle={{
            objectFit: "cover",
            //height: "100%",
            //height: "50% !Important",
            //height: "75%",
          }}
          style={{
            gridArea: "1/1",
            filter: "brightness(0.3) contrast(1.1)",
            zIndex: "-1",
            //maxHeight: "250px",
            //overflow: "hidden",
            //height: "50% !Important",
            objectFit: "fill",
            height: "100%",
            //width: "100%",
          }}
        />
      </div>

      {/* 
        <Cover image={image} />
    */}
      {/* 
    <Link to={slug}>
    <Cover image={image} />
    </Link>
*/}

      {/* 
<h3 css="margin: 0.8em auto 0.5em;">
<Link to={slug}>{title}</Link>
</h3>

<PostMeta title={title} slug={slug} date={date} timeToRead={timeToRead} />
<h4>{excerpt}</h4>
*/}
    </Post>
  )
}
