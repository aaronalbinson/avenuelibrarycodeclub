import React from "react";
import Button from "react-bootstrap/lib/Button";
import { Link } from "gatsby";

require("./AaNewsItem.scss");

class AaNewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    var blogStyles = {
      backgroundImage: `url(${this.props.image})`
    };
    return (
      <div className="AaNewsItem">
        {/* <div className="content" key={this.props.id}>
          <p className="AaNewsItemHeader">
            <Link className="has-text-primary" to={this.props.slug}>
              <h3>{this.props.title}</h3>
            </Link>
            <span className="bull"> &bull; </span>
            <small>{this.props.date}</small>
          </p>
          <p>
            {this.props.excerpt}
            <br />
            <br />

            <a href={this.props.slug}>
              <Button bsStyle="primary">Keep Reading →</Button>
            </a>
          </p>
        </div> */}
        <div class="blog-card spring-fever" style={blogStyles}>
          <a href={this.props.slug}>
            <div class="blog-card-container">
              <div class="title-content">
                <h3>{this.props.title}</h3>
              </div>
              <div class="card-info">
                <div>{this.props.excerpt}</div>
              </div>
              <div class="utility-info">
                <ul class="utility-list">
                  {/* <li class="comments">12</li> */}
                  <li>
                    {this.props.date && (
                      <span class="date">{this.props.date}</span>
                    )}
                  </li>
                  <li className="permalink">{this.props.moreText}</li>
                </ul>
              </div>
            </div>

            <div class="gradient-overlay" />
            <div class="color-overlay" />
          </a>
        </div>
      </div>
    );
  }
}

export default AaNewsItem;
