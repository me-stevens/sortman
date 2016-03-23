describe("Button", function() {
  var button;
  var buttonAction;
  var buttonWrapper;

  var createButton = function() {
    button = document.createElement("button");
    button.setAttribute("id", "split");
    document.body.appendChild(button);
  };

  var removeButton = function() {
    document.body.removeChild(button);
  };

  beforeEach(function() {
    createButton();
    var numberOfGroups = 4;
    buttonAction       = new ButtonAction(new Splitter(numberOfGroups), new Displayer(numberOfGroups));
    buttonWrapper      = new Button("split", buttonAction);
  });

  afterEach(function() {
    removeButton();
  });

  it("doesn't do anything if button is not initialized", function() {
    spyOn(buttonAction, "act");
    button.click();
  	expect(buttonAction.act).not.toHaveBeenCalled();
  });

  it("performs action if button is initialized", function() {
    spyOn(buttonAction, "act");
    inputId  = "attendees";
    outputId = "results";
    buttonWrapper.initialize(inputId, outputId);
    button.click();
  	expect(buttonAction.act).toHaveBeenCalledTimes(1);
  });
});
