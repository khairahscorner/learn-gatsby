const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    // graphql function returns a promise
    const res = await graphql(`
    query {
        allContentfulBlogPost {
            edges {
                node {
                    slug
                }
            }
        }
    }
    `)
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path:`/blog/${edge.node.slug}`,
            // context provides acccess to extra data you can pass down to the template
            context: {
                slug: edge.node.slug
            }
        })
    }) 

}