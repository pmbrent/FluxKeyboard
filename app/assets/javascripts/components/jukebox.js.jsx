var Jukebox = React.createClass({

  render: function () {
    var tracks = TrackStore.all().map(function (track) {
      return <TrackPlayer track={track} />;
    });

    return (
      <div className="Jukebox">
        {tracks}
      </div>
    );

  }

});
