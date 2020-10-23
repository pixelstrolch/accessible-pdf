import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { NoteMessage, WarningMessage, ExternalLink } from "../components/shortcodes"

import style from "./templates.module.css"

const shortcodes = { Link, AnchorLink, NoteMessage, WarningMessage, ExternalLink } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
        <div>
            <h1 className={style.article_title}>{mdx.frontmatter.title}</h1>
            <p className={style.article_metadata}>
              <span className={style.article_category}>Tutorials</span><br/>
              <span className={style.article_author}>written by {mdx.frontmatter.author}</span><br/>
              <span className={style.article_date}>last updated on {mdx.frontmatter.date}</span>
            </p>
            <p className={style.article_lead}>{mdx.frontmatter.description}</p>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TutorialsQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        description
        author
        date
        lang
      }
    }
  }
`