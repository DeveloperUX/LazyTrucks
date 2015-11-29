
Searchbar = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="input-field col s12 center-block">
          <input id="truck_name" type="text" className="validate" />
          <label className="active" for="truck_name">Search For Truck</label>
        </div>
      </div>
    );
  }
});
