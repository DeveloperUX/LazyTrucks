
const { Link } = ReactRouter;

Home = React.createClass({

  render() {
    return (
      <div className="content">
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
    );
  }
});
