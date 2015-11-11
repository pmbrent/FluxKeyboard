var Track = window.Track = function(attributes) {
  this.name = attributes[name];
  this.roll = attributes[roll];
};

Track.prototype.startRecording = function() {
  this.roll = [];
  this.startTime = Date.now();

};

Track.prototype.addNotes = function(notes) {
  this.roll.push({
    timeSlice: Date.now() - this.startTime,
    notes: notes || _playingKeys
  });
};

Track.prototype.stopRecording = function() {
  this.addNotes([]);
};
