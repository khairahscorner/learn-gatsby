import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

// for layout for dymanically generated pages, the slug gets passed frm the context property when creating pages
export const query = graphql`
query (
    $slug:String!
  ) {
    contentfulBlogPost(
      slug: {
        eq:$slug
      }
    ) {
      title,
      slug,
      publishedDate (formatString:"MMMM Do, YYYY"),
      body {
          json
      }
    }
  }
` 
// props that gets passed is from the result returned from query exported above
const Blog = (props) => {
    console.log(props)
    const options = {
      // options you can pass to customise nodes, marks,text. "renderMark", "rnderText"
        renderNode: {
            "embedded-asset-block" : (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return (
                  <>
                  <p>Testing this</p>
                  <img src={url} alt={alt}/></>
                )
            }
        }
    }
    return (
        <Layout page={props.data.contentfulBlogPost.title}>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    )
}
export default Blog;