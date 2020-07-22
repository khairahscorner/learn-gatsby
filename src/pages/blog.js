import React from "react"
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery} from 'gatsby'
import '../styles/blog.module.scss'

const Blog = () => {
  const posts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (sort: { fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            publishedDate (formatString:"MMMM Do, YYYY")
            slug
          }
        }
      }
    }
  `)
  const {edges} = posts.allContentfulBlogPost
  return (
        <Layout page='Blog'>
            <h1>Blog</h1>
            <ol>
              {
                edges.map((post, index) => {
                  return (
                    <li key={index}>
                      <h2>
                        <Link to={`/blog/${post.node.slug}`}>
                        {post.node.title}
                        </Link>
                      </h2>
                      <p>{post.node.publishedDate}</p>
                    </li>
                  )
                })
              }
            </ol>
        </Layout>
  )
}

export default Blog;
