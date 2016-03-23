function ButtonAction(splitter, displayer) {
  this.splitter  = splitter;
  this.displayer = displayer;

  this.act = function(inputId, outputId) {
    this.displayer.injectDataInTable(outputId, this.splitter.splitInGroups(inputId));
  };
}
