var TrackPlayer = React.createClass({

  play: function () {
    this.props.track.play();
  },

  render: function() {

  return (
    <div key={this.props.track.name}>
      {this.props.track.name}
      <button className="play" onClick={this.play}>Play</button>
    </div>
  );
}

});
