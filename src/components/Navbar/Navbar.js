import React from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import TransitionLink from "gatsby-plugin-transition-link";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { elastic as Menu } from "react-burger-menu";

require("./Navbar.scss");

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  showSettings(event) {
    event.preventDefault();
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <nav className="is-transparent">
        <Menu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          isOpen={this.state.menuOpen}
          left
        >
          <StaticQuery
            query={graphql`
              query {
                allMarkdownRemark(
                  filter: { frontmatter: { templateKey: { eq: "menu" } } }
                  sort: { fields: [frontmatter___menuorder], order: ASC }
                ) {
                  totalCount
                  edges {
                    node {
                      id
                      frontmatter {
                        title
                        menupath
                        menuorder
                      }
                    }
                  }
                }
              }
            `}
            render={data => (
              <ul>
                <li>
                  <AniLink cover bg="#e48c35" to="/">
                    Home
                  </AniLink>
                </li>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <li key={node.id}>
                    <AniLink cover bg="#e48c35" to={node.frontmatter.menupath}>
                      {node.frontmatter.title}
                    </AniLink>
                  </li>
                ))}
              </ul>
            )}
          />
        </Menu>
      </nav>
    );
  }
}

export default Navbar;
