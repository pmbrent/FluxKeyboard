(function() {

  var _playingKeys = window._playingKeys = [];
  var CHANGE_EVENT = window.CHANGE_EVENT = "change";


  var KeyStore = window.KeyStore = $.extend({}, EventEmitter.prototype);

  KeyStore.all = function () {
    return _playingKeys.slice();
  };

  KeyStore.addKey = function (keyName) {
    if (_playingKeys.indexOf(keyName) === -1) {
      _playingKeys.push(keyName);
      this.changed();
    }
  };

  KeyStore.removeKey = function (keyName) {
    _playingKeys.splice(_playingKeys.indexOf(keyName), 1);
    this.changed();
  };

  KeyStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  KeyStore.addChangeHandler = function(callback) {
    this.on("change", callback);
  };

  KeyStore.dispatcherID = AppDispatcher.register(function (payload) {
  switch(payload.actionType) {
  case KeyConstants.PRESS_KEY:
    KeyStore.addKey(payload.keyName);
    break;
  case KeyConstants.RELEASE_KEY:
    KeyStore.removeKey(payload.keyName);
    break;
  }
});



})();
