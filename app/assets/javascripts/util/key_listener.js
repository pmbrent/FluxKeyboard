(function() {
  $(document).on("keydown", function (e) {
    KeyActions.playKey(KEYS[e.keyCode]);
  });

  $(document).on("keyup", function (e) {
    KeyActions.releaseKey(KEYS[e.keyCode]);
  });
})();
