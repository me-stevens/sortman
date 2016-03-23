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
    buttonAction  = { act: function(inputId, outputId) {} };
    buttonWrapper = new Button("split", buttonAction);
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
    buttonWrapper.bindEvents("inputId", "outputId");
    button.click();
    expect(buttonAction.act).toHaveBeenCalledTimes(1);
    expect(buttonAction.act).toHaveBeenCalledWith("inputId", "outputId" );
  });
});
