var TrackActions = window.TrackActions = {

  saveTrack: function(track) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.CREATE_TRACK,
      track: track
    });
  },

  deleteTrack: function(track) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.DELETE_TRACK,
      track: track
    });
  }

};
