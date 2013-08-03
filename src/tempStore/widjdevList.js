// Copyright 2009 Google Inc. All Rights Reserved

goog.provide('widjdev.list');
goog.provide('widjdev.list.Row');

goog.require('goog.dom');
goog.require('goog.editor.Field');
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
  // Create DOM structure to represent the row.
   var nameButton = new goog.ui.CustomButton('list_name');
  this.headerElement = goog.dom.createDom('div', {'style': 'background-color:#EEE'}, this.title , nameButton  );
  
  this.contentElement = goog.dom.createDom('div', null, this.content);

   // Create the editor text area and save button.
  this.editorElement = goog.dom.createDom('textarea');
  var saveBtn = goog.dom.createDom('input',{'type': 'button', 'value': 'Save'});
  this.editorContainer = goog.dom.createDom('div', {'style': 'display:block'}, this.editorElement, saveBtn);

	//header in content containerwrap
  this.contentContainer = goog.dom.createDom('div', null, this.contentElement , this.editorContainer);
  
    // Wrap the editor and the content div in a single parent so they can be toggled in unison.
  var newRow = goog.dom.createDom('div', null, this.headerElement, this.contentContainer);

  // Add the note's DOM structure to the document.
  goog.dom.appendChild(this.parent, newRow );
  
   // Attach the event handler that opens the editor.
  goog.events.listen(this.contentElement, goog.events.EventType.CLICK, this.openEditor);
  
  return new goog.ui.Zippy(this.headerElement, this.contentContainer);
};




 widjdev.list.Row.prototype.openEditor = function(e) {
  var elt = e.target;
  var content = goog.dom.getTextContent(elt);
  var editorContainer = goog.dom.getNextElementSibling(elt);
  var editor = goog.dom.getFirstElementChild(editorContainer);

// Put the row contents into the editor field.
  editor.innerHTML = content;
  elt.style.display = 'none';
  editorContainer.style.display = 'inline';
};



// export the main namespace and public functions


goog.exportSymbol('widjdev.list', widjdev.list);
goog.exportSymbol('widjdev.list.Row', widjdev.list.Row);
goog.exportSymbol('widjdev.list.makeRows', widjdev.list.makeRows);




