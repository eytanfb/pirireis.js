var Navigation = (function() {
  this.backDiv, this.currentDiv;
  var history = [];
  this.backCallback;
  this.callback;

  var addToHistory = function(backDiv, currentDiv) {
    history.push({
      backDiv: backDiv,
      currentDiv: currentDiv
    });
  };

  var back = function() {
    this.currentDiv.toggle('slide').hide();
    var lastAction = history.pop();
    if (this.backCallback) {
      this.backCallback();
    }
    this.currentDiv = lastAction.currentDiv.toggle('slide').show();
  };

  var forwardTo = function(div) {
    addToHistory(this.backDiv, this.currentDiv);
    this.backDiv = this.currentDiv.toggle('slide').hide();
    this.currentDiv = div.toggle('slide').show();
    if (this.callback) {
      this.callback();
    }
  };

  return {
    back: back,
    backDiv: this.backDiv,
    currentDiv: this.currentDiv,
    forwardTo: forwardTo,
    backCallback: this.backCallback,
    callback: this.callback
  };
}());
