var Keyboard = React.createClass({

  render: function () {
    var keys = [];
    for (var key in TONES) {
      if (TONES.hasOwnProperty(key)) {
        keys.push(<Key noteName={key} />);
      }
    }

    return (
        <div id="keyboard">
          {keys}
          <Recorder />
        </div>
    );
  }

});
