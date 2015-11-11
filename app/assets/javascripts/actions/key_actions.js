var KeyActions = window.KeyActions = {

  playKey: function(keyName) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.PRESS_KEY,
      noteName: keyName
    });
  },

  releaseKey: function(keyName) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.RELEASE_KEY,
      noteName: keyName
    });
  }

};
