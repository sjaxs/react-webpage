//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Assets
import './css/Footer.css';

class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string.isRequired,
    //items: PropTypes.array.isRequired
  };
  render() {
    const {copyright = "&copy; Default"} = this.props //Default prop value
    return (
      <div className="Footer">
        <p>Footer - ...</p>
        <p dangerouslySetInnerHTML={{__html:copyright}}/> {/* format for &copy*/}
      </div>
    );
  }
}

export default Footer;
