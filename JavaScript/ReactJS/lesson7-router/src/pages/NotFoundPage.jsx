import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NotFoundPage extends Component {
  render() {
    return (
      <Link to="/">
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundImage:
              "url('https://miro.medium.com/max/1400/1*zBFBJktPD3_z0S_35kO5Hg.gif')",
            backgroundSize: "cover",
          }}
        ></div>
      </Link>
    );
  }
}

export default NotFoundPage;
