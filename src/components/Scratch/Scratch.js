import React from "react";
import AaNewsItem from "../AaNewsItem/AaNewsItem";
import AniLink from "gatsby-plugin-transition-link/AniLink";

require("./Scratch.scss");

class Scratch extends React.Component {
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
              <AaNewsItem
                slug="/wack-a-mole"
                title="Wack a mole"
                image=""
                excerpt="Catch the objects before the time runs out"
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
