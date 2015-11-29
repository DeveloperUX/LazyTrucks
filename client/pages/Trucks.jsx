
Truck = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    truck: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <ul>
        <li>{this.props.truck.name}</li>
      </ul>
    );
  }
});
