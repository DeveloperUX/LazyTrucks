
Searchbar = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <input id="truck_name" type="text" className="validate" />
          <label className="active" htmlFor="truck_name">Search For A Truck</label>
        </div>
      </div>
    );
  }
});
