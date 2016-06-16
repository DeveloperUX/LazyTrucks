const { History, Link } = ReactRouter;

FoodTrucks = React.createClass({

  mixins: [ReactMeteorData, History],

  // Runs only once
  componentDidMount() {
    if (navigator.geolocation) {
      let context = this;
      navigator.geolocation.getCurrentPosition(function(position) {
        context.setState({position: position.coords});
      });
    }
  },

  // On load, load the trucks we have
  getMeteorData() {
    // var data = {};
    // data.trucks = Trucks.find({loc : {$exists: true}}).fetch();

    let loc = this.state && this.state.position && _.pick(this.state.position, 'latitude', 'longitude');;

    var handle = Meteor.subscribe('nearbyTrucks', loc);

    return {
      isReady: !!handle.ready(),
      trucks: Trucks.find().fetch()
    }
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
