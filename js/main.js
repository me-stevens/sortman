(function main() {
  var numberOfGroups = 4;
	var splitter  = new Splitter(numberOfGroups);
	var displayer = new Displayer(numberOfGroups);
	var button    = new Button("split", splitter, displayer);
	button.initialize("attendees", "results");
})();
