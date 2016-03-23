function Button(buttonId, buttonAction) {
  this.button       = document.getElementById(buttonId);
  this.buttonAction = buttonAction;

  this.bindEvents = function(inputId, outputId) {
    var that = this;
    this.button.addEventListener("click", function() {
      that.buttonAction.act(inputId, outputId);
    }, false);
  };
}
