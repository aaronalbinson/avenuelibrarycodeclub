import React from "react";
import Card from "../AaNewsItem/AaNewsItem";
import AniLink from "gatsby-plugin-transition-link/AniLink";

require("./Scratch.scss");

class Services extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="scratch-links">
          <div className="service-links-inner container">
            <div className="columns">
              <AaNewsItem
                slug="/cross-the-road"
                title="Cross the road"
                image=""
                excerpt="Inspired by froggo and crossy roads"
                moreText="Make →"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Scratch;
