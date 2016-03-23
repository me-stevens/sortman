function Displayer(numberOfGroups) {
  this.numberOfGroups = numberOfGroups;

  this.prepareForView = function(attendees) {
    if (attendees.length < this.numberOfGroups)
      for(var i=0, n=this.numberOfGroups - attendees.length; i<n; i++)
        attendees.push("");
    return attendees;
  };

  this.buildTag = function(tagName, content) {
    return "<" + tagName + ">" + content + "</" + tagName + ">";
  };

  this.createColumnsWith = function(attendees) {
    var that = this;
    return this.prepareForView(attendees).map(function(attendee) {
      return that.buildTag("td", attendee);
    }).join("");
  };

  this.createRowsWith = function(sorted) {
    var that = this;
    return sorted.map(function(row) {
      return that.buildTag("tr", that.createColumnsWith(row));
    }).join("");
  };

  this.injectDataInTable = function(tbodyId, sorted) {
    tbody = document.getElementById(tbodyId);
    tbody.innerHTML = this.createRowsWith(sorted);
  };
}
