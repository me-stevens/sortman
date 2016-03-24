function Splitter(numberOfGroups) {
  this.numberOfGroups = numberOfGroups;

  this.getContentsFrom = function(textareaId) {
    var textarea = document.getElementById(textareaId);
    return textarea.value;
  };

  this.escape = function(userInput) {
    return userInput.replace(/^\s*$[\n\r]{1,}/gm, '');
  };

  this.getAttendees = function(userInput) {
    return this.escape(userInput).split("\n");
  };

  this.sort = function(attendees) {
    var sorted = [];
    while(attendees.length > 0) {
      sorted.push(attendees.splice(0, this.numberOfGroups));
    }
    return sorted;
  };

  this.splitInGroups = function(textareaId) {
    return this.sort(this.getAttendees(this.getContentsFrom(textareaId)));
  }
}
