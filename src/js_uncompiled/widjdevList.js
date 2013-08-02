// Copyright 2009 Google Inc. All Rights Reserved

goog.provide('widjdev.list');
goog.provide('widjdev.list.Row');

goog.require('goog.dom');
goog.require('goog.ui.Zippy');


widjdev.list.makeRows = function(data, rowContainer) {
  var rows = [];
  for (var i = 0; i < data.length; i++) {
    var row = 
      new widjdev.list.Row(data[i].title, data[i].content, rowContainer);
   rows.push(row);
   row.makeRowDom();
  }
  return rows;
};


widjdev.list.Row = function(title, content, rowContainer) {
  this.title = title;
  this.content = content;
  this.parent = rowContainer;
};


/**
 * Creates the DOM structure for the note and adds it to the document.
 */
widjdev.list.Row.prototype.makeRowDom = function() {
  // Create DOM structure to represent the note.
  this.headerElement = goog.dom.createDom('div', {'style': 'background-color:#EEE'}, this.title);
  this.contentElement = goog.dom.createDom('div', null, this.content);
  var newRow = goog.dom.createDom('div', null, this.headerElement, this.contentElement);

  // Add the note's DOM structure to the document.
  goog.dom.appendChild(this.parent, newRow );
  return new goog.ui.Zippy(this.headerElement, this.contentElement);
};


// export the main namespace and public functions


goog.exportSymbol('widjdev.list', widjdev.list);
goog.exportSymbol('widjdev.list.Row', widjdev.list.Row);
goog.exportSymbol('widjdev.list.makeRows', widjdev.list.makeRows);




