describe("Button", function() {
  var button;
  var splitter;
  var displayer;
  var buttonWrapper;

  var createButton = function() {
    button = document.createElement("button");
    button.setAttribute("id", "split");
    document.body.appendChild(button);
  };

  var removeButton = function() {
    document.body.removeChild(button);
  };

  var createTextArea = function() {
    textarea = document.createElement("textarea");
    textarea.setAttribute("id", "attendees");
    textarea.value = "Jon Doe\nJane Doe";
    document.body.appendChild(textarea);
  };

  var removeTextArea = function() {
    document.body.removeChild(textarea);
  };

  beforeEach(function() {
    createButton();
    splitter      = new Splitter();
    displayer     = new Displayer();
    buttonWrapper = new Button("split", splitter, displayer);
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
    inputId  = "attendees";
    outputId = "results";
    buttonWrapper.initialize(inputId, outputId);
    spyOn(splitter, "splitInGroups");
    button.click();
  	expect(splitter.splitInGroups).toHaveBeenCalledTimes(1);
  	expect(splitter.splitInGroups).toHaveBeenCalledWith(inputId);
  });

  it("doesn't display attendees if button is not initialized", function() {
    spyOn(displayer, "injectDataInTable");
    button.click();
  	expect(displayer.injectDataInTable).not.toHaveBeenCalled();
  });

  it("displays attendees if button is initialized", function() {
    createTextArea();
    inputId  = "attendees";
    outputId = "results";
    buttonWrapper.initialize(inputId, outputId);
    spyOn(displayer, "injectDataInTable");
    button.click();
  	expect(displayer.injectDataInTable).toHaveBeenCalledTimes(1);
    removeTextArea();
  });
});
