const { History, Link } = ReactRouter;

FoodTrucks = React.createClass({

  mixins: [ReactMeteorData, History],

  // On load, load the trucks we have
  getMeteorData() {
    var data = {};
    data.trucks = Trucks.find({}).fetch();
    var handle = Meteor.subscribe('trucks');

    if(handle.ready()) {
      data.trucks = Trucks.find({}).fetch();
    }

    return data;
  },

  renderTrucksList() {
    return this.data.trucks.map(function(truck) {
      return <div className="col s12 m6 l4">
        <Truck
          truckId={truck._id}
          truck={truck}>
        </Truck>
      </div>;
    });
  },

  render() {
    return (
      <div className="row">
        {this.renderTrucksList()}
      </div>
    );
  }
});
