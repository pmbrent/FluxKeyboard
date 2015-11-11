var Recorder = React.createClass({

  getInitialState: function() {
    return {isRecording: false,
    track: new Track()};
  },

  componentDidMount: function() {
    
  },

  render: function() {
    return (
      <div>
        <button className="start" onClick={this.track.startRecording}>Start</button>
        <button className="stop" onClick={this.track.stopRecording}>Stop</button>
      </div>
    );
  }

});
