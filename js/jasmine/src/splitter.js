function Splitter(numberOfGroups) {
  this.numberOfGroups = numberOfGroups;

  this.getContentsFrom = function(textareaId) {
    var textarea = document.getElementById(textareaId);
    return textarea.value;
  };

  this.getAttendees = function(userInput) {
    return String.split(userInput, "\n");
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
