const { Link } = ReactRouter;

App = React.createClass({
  getTrucks() {
    return [
      { _id: 1, name: "Kabob Depot", menu: {} },
      { _id: 2, name: "Tasty Kabob" },
      { _id: 3, name: "Kimchi" }
    ];
  },

  renderTrucks() {
    return this.getTrucks().map((truck) => {
      return <Truck key={truck._id} truck={truck} />;
    });
  },

  render() {
    return (
      <div className="content">
        <Navbar></Navbar>
        <div className="container">
            <div className="search_hero">
              <Searchbar></Searchbar>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <Card image="food_truck.png" link="trucks" linkText="Check out the Trucks"></Card>
              </div>
              <div className="col s12 m6">
                <Card image="food_dish_3.jpg" link="menu" linkText="Check out the Menu"></Card>
              </div>
            </div>
        </div>
      </div>
    );
  }
});
