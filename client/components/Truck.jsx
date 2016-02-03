// Import the History plugin from ReactRouter
const {History, Link} = ReactRouter;

// Task component - represents a single todo item
Truck = React.createClass({

  mixins: [History],

  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    truck: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.props.truck.image ? this.props.truck.image : "generic_truck.png"} />
          <a href={'/truck/' + this.props.truckId} className="card-title truck-name">{this.props.truck.name}</a>
        </div>
      </div>
    );
  }
});
