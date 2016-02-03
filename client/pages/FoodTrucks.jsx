const { History, Link } = ReactRouter;

FoodTrucks = React.createClass({

  mixins: [ReactMeteorData, History],

  // Runs only once
  componentDidMount() {
    if (navigator.geolocation) {
      let context = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        var initialPosition = JSON.stringify(position);
        context.setState({initialPosition});
      });
    }
  },

  // On load, load the trucks we have
  getMeteorData() {
    var data = {};
    data.trucks = Trucks.find({loc : {$exists: true}}).fetch();
    var handle = Meteor.subscribe('nearbyTrucks', []);

    if(handle.ready()) {
      data.trucks = Trucks.find({loc : {$exists: true}}).fetch();
    }

    return data;
  },

  // Use an underscore for custom methods
  _renderTrucksList() {
    return this.data.trucks.map(function(truck) {
      return (
        <div className="truck col s12 m6 l4">
          <Truck
            truckId={truck._id}
            truck={truck}>
          </Truck>
        </div>
      );
    });
  },

  render() {
    return (
      <div className="row">
        {this._renderTrucksList()}
      </div>
    );
  }
});
