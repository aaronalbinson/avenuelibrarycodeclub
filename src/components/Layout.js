import React from "react";
import Helmet from "react-helmet";
import logo from "../img/logo.svg";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticQuery, graphql } from "gatsby";
import AaFooter from "./AaFooter/AaFooter";

import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "settings" } } }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                companyaddress
                sociallinks {
                  facebook
                  twitter
                  instagram
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div id="outer-container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>
            <Helmet title={node.frontmatter.title} />
            <Navbar />
            <div id="page-wrap">
              <div className="top">
                <AniLink cover bg="#e48c35" to="/">
                  <img
                    className="logo"
                    src={logo}
                    alt="Avenue Library Code Club"
                    style={{ width: "300px" }}
                  />
                </AniLink>
              </div>

              {children}
            </div>

            <AaFooter
              socialLinks={node.frontmatter.sociallinks}
              address={node.frontmatter.companyaddress}
            />
          </div>
        ))}
      </div>
    )}
  />
);

export default TemplateWrapper;
