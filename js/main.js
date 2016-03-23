(function main() {
  var numberOfGroups = 4;
  var splitter       = new Splitter(numberOfGroups);
  var displayer      = new Displayer(numberOfGroups);
  var buttonAction   = new ButtonAction(splitter, displayer);
  var button         = new Button("split", buttonAction);
  button.bindEvents("attendees", "results");
})();
