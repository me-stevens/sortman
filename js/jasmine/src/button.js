function Button(buttonId, splitter) {
  this.button   = document.getElementById(buttonId);
  this.splitter = splitter;

  this.initialize = function(textareaId) {
    this.button.addEventListener("click", function() {
    	console.log(splitter.splitInGroups(textareaId));
    }, false);
  };
}
