(function () {

  var _tracks = [];
  var CHANGE_EVENT = "change";
  var TrackStore = window.TrackStore = $.extend({}, EventEmitter.prototype);

  TrackStore.addChangeHandler = function (callback) {
    this.on(CHANGE_EVENT, callback);
  };

  TrackStore.removeChangeHandler = function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  };

  TrackStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  TrackStore.dispatcherId = AppDispatcher.register(function (payload) {
    switch (payload.eventType) {
      case TrackConstants.CREATE_TRACK:
        TrackStore.create(payload.track);
        break;
    }
  });

  TrackStore.fetch = function() {
    $.ajax({
      url: '/tracks',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        _tracks = data;
        TrackStore.changed();
      }
    });
  };

  TrackStore.create = function(track) {
    $.ajax({
      url: '/tracks',
      type: 'POST',
      dataType: 'json',
      data: { track: track },
      success: function(data) {
        _tracks.push(data);
        TrackStore.changed();
      }
    });
  };


  TrackStore.all = function() {
    return _tracks.slice();
  };

  TrackStore.createTrack = function (track) {
    _tracks.push(track);
    this.changed();
  };

  TrackStore.removeTrack = function (track) {
    _tracks.splice(_tracks.indexOf(track), 1);
    this.changed();
  };

})();
