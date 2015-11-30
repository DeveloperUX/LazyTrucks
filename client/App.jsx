const { Link, State, RouteHandler } = ReactRouter;

App = React.createClass({

  render() {
    return (
      <div className="page-wrapper">
        <Navbar></Navbar>
        <main className="container">
          {/* Should be this.props.children */}
          {this.props.children}
        </main>
      </div>
    );
  }
});
