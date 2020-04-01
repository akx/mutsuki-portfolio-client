import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    clicked: false,
    links: [
      "https://www.facebook.com/nozosandy/",
      "https://www.instagram.com/nozosandy/",
      "https://www.youtube.com/channel/UCKXQAWUGTCbly3Sv31omkQw"
    ]
  };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    return (
      <div className='d-flex justify-content-between' id='nav'>
        <button
          className={`hamburger hamburger--slider ${
            this.state.clicked ? "is-active" : ""
          }`}
          onClick={this.handleClick}
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner' id={this.props.range < 50 ? "hamburger-white" : "hamburger-black"}></span>
          </span>
        </button>
      </div>
    );
  }
}

export default NavBar;
