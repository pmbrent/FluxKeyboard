var Key = React.createClass({

  getInitialState: function () {
    this.note = new Note(TONES[this.props.noteName]);
    return {playing: false};
  },

  componentDidMount: function() {
    KeyStore.addChangeHandler(this.changePlaying);
  },

  changePlaying: function() {
    if (_playingKeys.indexOf(this.props.noteName) != -1) {
      this.note.start();
      this.setState({playing: true});
    } else
    {
      this.note.stop();
      this.setState({playing: false});
    }
  },

  render: function () {
    var classStr = this.state.playing ? "key playing" : "key";
    if (this.props.noteName.indexOf("#") != -1) {
      classStr += " sharp";
    }
    return (
          <div className={classStr}
                key={this.props.noteName}>{this.props.noteName}
          </div>
    );
  }
});
