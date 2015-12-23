const { History, Link } = ReactRouter;

FoodTrucks = React.createClass({

  mixins: [ReactMeteorData, History],

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
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

  renderTrucksList() {
    return this.data.trucks.map(function(truck) {
      return <div className="truck">
        <Truck
          truckId={truck._id}
          truck={truck}>
        </Truck>
      </div>;
    });
  },

  render() {
    return (
      <div className="row masonry">
        {this.renderTrucksList()}
      </div>
    );
  }
});
