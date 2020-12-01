import React from "reactjs"
import { graphql, Link} from "gatsby"
import Layout from "../components/layout"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {INLINES, BLOCKS} from "@contentful/rich-text-types"

export const data = graphql`

       query($slug: String!) {
            contentfulBlog(slug:{eq: $slug}) {
                author
                publishedDate(fromNow: true)
                slug
                title
                body {
                    json
                }
            }
       }
`
const BlogPost = (props) => {
    const options = {
        renderNode: {
            [INLINES.HYPERLINK]: (node) => {
              if(node.data.uri.includes("youtube")) {
                  var url = node.dta.uri.replace("watch?v=","embed/")
                  return <iframe title={node.title} width="560" height="315" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              }  
            },
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const alt = node.data.target.field.title["en-US"]
                const alt = node.data.target.field.file["en-US"].url
                return <img src={url} alt={alt} />
            }
        }
    }
    return (
     <Layout>
        <div> 
             <h2>{props.data.contentfulBlog.title}</h2>
             <p style={{fontWeight: 300, fontSize: "0.9rem"}}> Published {props.data.contentfulBlog.publishedDate}</p>
             <p style={{fontWeight: 300, fontSize: "0.9rem"}}> Written by {props.data.contentfulBlog.author}</p>
             {
                 documentToReactComponents(props.data.contentfulBlog.body.json, options)
             }
             <Link to="/blog"> Back to Blog</Link>

        </div>
     </Layout>   
    )
}