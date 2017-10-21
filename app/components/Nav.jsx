var React = require('react');
var {Link, IndexLink} = require('react-router')


var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Timer</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/Countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>CountDown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by Mindaugas Pakalniskis
            </li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Nav;
