
Navbar = React.createClass({
  render() {
    return (
      <nav className="white" role="navigation">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo  grey-text text-darken-3">Lazy Trucks</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html" className="grey-text text-darken-3">Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
