function Button(buttonId, splitter, displayer) {
  this.button    = document.getElementById(buttonId);
  this.splitter  = splitter;
  this.displayer = displayer;

  this.initialize = function(inputId, outputId) {
    var that = this;
    this.button.addEventListener("click", function() {
    	that.displayer.injectDataInTable(outputId, that.splitter.splitInGroups(inputId));
    }, false);
  };
}
