var Track = window.Track = function(attributes) {
  this.name = attributes.name;
  this.roll = attributes.roll;
};

Track.prototype.startRecording = function() {
  this.roll = [];
  this.startTime = Date.now();

};

Track.prototype.addNotes = function(notes) {
  this.roll.push({
    timeSlice: Date.now() - this.startTime,
    notes: notes
  });
};

Track.prototype.stopRecording = function() {
  this.addNotes([]);
};

Track.prototype.play = function() {
  if (typeof this.interval !== "undefined") {
    return;
  }
  var playbackStartTime = Date.now();
  var currentNote = 0;
  this.interval = setInterval(function() {
    if (currentNote < this.roll.length) {
      this.roll[currentNote].notes.forEach(function(note) {
        KeyActions.playKey(note);
        console.log("Play " + note);
      });
      if (Date.now() - playbackStartTime > this.roll[currentNote].timeSlice) {
        this.roll[currentNote].notes.forEach(function(note) {
          KeyActions.releaseKey(note);
        });
        currentNote++;
      }
    } else {
      console.log("Finished!");
      clearInterval(this.interval);
      delete this.interval;
    }
  }.bind(this), 5);
};
