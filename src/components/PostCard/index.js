import { Link } from 'gatsby'
import React from 'react'
import PostMeta from '../PostMeta'
import { Cover, Post } from './styles'
import { getImage } from "gatsby-plugin-image"

// A post is a node associated with a blog post
export default function PostCard({ node }) {
    console.log(node)
    const { fields, frontmatter, excerpt, timeToRead } = node
    const { slug } = fields
    //const slug = 'stub'
    const { date, title, cover } = frontmatter
    const image = getImage(cover?.img)
    
    return (
        <Post>
            
            <Cover image={image} />
{/* 
        <Link to={slug}>
        <Cover image={image} />
        </Link>
         */}
         <div>
        <h3 css="margin: 0.8em auto 0.5em;">
        <Link to={slug}>{title}</Link>
        </h3>
        
        <PostMeta title={title} slug={slug} date={date} timeToRead={timeToRead} />
        <h3>{excerpt}</h3>
        </div>
        </Post>
        )
    }