describe("ButtonAction", function() {
  var splitter;
  var displayer;
  var buttonAction;

  beforeEach(function() {
    splitter     = { splitInGroups: function(inputId) {} };
    displayer    = { injectDataInTable: function(outputId, data) {} };
    buttonAction = new ButtonAction(splitter, displayer);
  });

  it("doesn't split attendees if action is not called", function() {
    spyOn(splitter, "splitInGroups");
    expect(splitter.splitInGroups).not.toHaveBeenCalled();
  });

  it("splits attendees if action is called", function() {
    spyOn(splitter, "splitInGroups");
    buttonAction.act("inputId", "outputId");
    expect(splitter.splitInGroups).toHaveBeenCalledTimes(1);
    expect(splitter.splitInGroups).toHaveBeenCalledWith("inputId");
  });

  it("doesn't display attendees if action is not called", function() {
    spyOn(displayer, "injectDataInTable");
    expect(displayer.injectDataInTable).not.toHaveBeenCalled();
  });

  it("displays attendees if action is called", function() {
    spyOn(displayer, "injectDataInTable");
    buttonAction.act("inputId", "outputId");
    expect(displayer.injectDataInTable).toHaveBeenCalledTimes(1);
    expect(displayer.injectDataInTable).toHaveBeenCalledWith("outputId", splitter.splitInGroups("inputId"));
  });
});
