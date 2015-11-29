
Card = React.createClass({
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.props.image} />
        </div>
        <div className="card-action">
          <a href={this.props.link}>{this.props.linkText}</a>
        </div>
      </div>
    );
  }
});
