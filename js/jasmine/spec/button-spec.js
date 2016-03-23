describe("Button", function() {
  var button;
  var splitter;
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
    splitter      = new Splitter();
    buttonWrapper = new Button("split", splitter);
  });

  afterEach(function() {
    removeButton();
  });

  it("doesn't split attendees if button is not initialized", function() {
    spyOn(splitter, "splitInGroups");
    button.click();
  	expect(splitter.splitInGroups).not.toHaveBeenCalled();
  });

  it("splits attendees if button is initialized", function() {
    textareaId = "attendees";
    buttonWrapper.initialize(textareaId);
    spyOn(splitter, "splitInGroups");
    button.click();
  	expect(splitter.splitInGroups).toHaveBeenCalledTimes(1);
  	expect(splitter.splitInGroups).toHaveBeenCalledWith(textareaId);
  });
});
