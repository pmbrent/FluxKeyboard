(function() {

  var _playingKeys = [];

  var KeyStore = window.KeyStore = $.extend({}, EventEmitter.prototype);

  KeyStore.all = function () {
    return _playingKeys.slice();
  };

  Keystore.addKey = function (keyName) {
    _playingKeys.push(keyName);
  };

  Keystore.removeKey = function (keyName) {
    _playingKeys.splice(_playingKeys.indexOf(keyName), 1);
  };

  Keystore.changed = function () {
    this.emit(CHANGE_EVENT);
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
