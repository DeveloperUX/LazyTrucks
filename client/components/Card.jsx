
Card = React.createClass({
  render() {
    return (
      <div className="card medium">
        <div className="card-image">
          <img src={this.props.image} />
          <span className="card-title">{this.props.link}</span>
        </div>
        {/*
        <div className="card-action">
          <a href={this.props.link}>{this.props.linkText}</a>
        </div>
        */}
      </div>
    );
  }
});
