var KeyActions = window.KeyActions = {

  playKey: function(keyName) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.PRESS_KEY,
      keyName: keyName
    });
  },

  releaseKey: function(keyName) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.RELEASE_KEY,
      keyName: keyName
    });
  }

};
