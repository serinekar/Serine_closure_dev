goog.provide('widjdev.tabdev');

goog.provide('widjdev.tabdev.tabRow');

goog.require('widjdev.Component'); // this is a custom dependency
goog.require('goog.dom');
goog.require('goog.ui.Zippy');
goog.require('goog.ui.CustomButton'); // this is a standard dependency
goog.require('goog.ui.Toolbar');
goog.require('goog.ui.ToolbarButton');
goog.require('goog.object');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.ui.Component.EventType');
goog.require('goog.ui.RoundedTabRenderer');
goog.require('goog.ui.Tab');
goog.require('goog.ui.TabBar');

var rowList;

widjdev.tabdev.setTabs= function(container) {

 		//container for the rows, will attach to first tab
 	 rowList = goog.dom.createDom('div', { 'class': 'snipList' });

    var topTab = new goog.ui.TabBar();
    topTab.decorate(goog.dom.getElement(container));
    var contentElement = goog.dom.getElement(topTab.getId() + '_content');
    
    // set the initial view
    goog.dom.setTextContent(rowList,  'You have added the rows');
    contentElement.appendChild(rowList); 
    
     // called when we make the rows below
 		var makeRowData = function(summary, description, priority) {  
 
 		return { 'summary': summary, 'description': description }; };
 		
    widjdev.tabdev.makeRows('active', [ makeRowData("Header first row", "header second row"),  makeRowData("Header first row", "header second row"),
              makeRowData("Header first row", "header second row")], rowList );
    
      
        // Handle SELECT events dispatched by tabs.
    goog.events.listen(topTab, goog.ui.Component.EventType.SELECT,
            function(e) {
              var tabSelected = e.target;
              // note class for content div is menu_content
              if(tabSelected.getCaption() != 'List') {              
              goog.dom.setTextContent(contentElement, 'You selected the "' + tabSelected.getCaption() + '" tab.');
              
             }  else {
             // clear the view
             goog.dom.setTextContent(contentElement, '');
             contentElement.appendChild(rowList);   
             
             }
               
           
                  
            });

}
// a rowList object
widjdev.tabdev.rowLists = {};

// the row class  widjdev.tabdev.tabRow
widjdev.tabdev.tabRow = function(data, container) {

// these are the instance variables, they will needto become custom widgets
// data is a javascript object
    
    this.summary = data.summary;
    this.description = data.description;
    // main root node in html for rows
    this.parent = container;
    
}
 // static(class) methods to open and close the editor
widjdev.tabdev.tabRow.prototype.closeEditor = function() {

  this.editorContainer.style.display = "none";
};

widjdev.tabdev.tabRow.prototype.openEditor = function(e) {

  this.editorContainer.style.display = "inline";
};

// create instances of the row class  widjdev.list.Row
widjdev.tabdev.makeRows = function(name, data, container) {

        for (var i = 0; i < data.length; i++) {
            var row = new widjdev.tabdev.tabRow(data[i], container);
            row.makeDom();
        }
		// add row to rowList object
    widjdev.tabdev.rowLists[name] = container;
}

widjdev.tabdev.tabRow.prototype.makeDom = function() {

    this.summaryDiv = goog.dom.createDom('div', { 'class': 'summary' }, this.summary);
    
    // create  custom controls for top row
    var customControl11 = new widjdev.Component('acitve label 11');
    var customControl12 = new widjdev.Component('acitve label 12');
    // create  divs for this controll
    var  div11 = goog.dom.createDom('div', { 'class': 'customControl11' } );
    var  div12 = goog.dom.createDom('div', { 'class': 'customControl12' } );
    // render the controls
    customControl11.render(div11);
    customControl12.render(div12);
    // add the control to the first row by adding the div we created
    this.summaryDiv = goog.dom.createDom('div', { 'class': 'summary' }, this.summary, div11, div12 );

    // create  custom controls for second row
    var customControl21 = new widjdev.Component('acitve label 21');
    var customControl22 = new widjdev.Component('acitve label 22');
    // create  divs for this controll
    var  div21 = goog.dom.createDom('div', { 'class': 'customControl21' } );
    var  div22 = goog.dom.createDom('div', { 'class': 'customControl22' } );
    // render the controls
    customControl21.render(div21);
    customControl22.render(div22);

    this.contentElement = goog.dom.createDom('div', { 'class': 'description' }, this.description, div21, div22 );

    this.editorElement = goog.dom.createDom('textarea', null, '');

    this.editorContainer = goog.dom.createDom('div', {'style': 'display:block;'},  this.editorElement);

    this.descriptionContainer = goog.dom.createDom('div', null,  this.contentElement,  this.editorContainer);

    var rowDiv = goog.dom.createDom('div', { 'class': 'row' }, this.summaryDiv, this.descriptionContainer );
		
		//instance variable defined in Row class
    this.parent.appendChild(rowDiv);
    
    // events and zippy
    goog.events.listen(this.contentElement, goog.events.EventType.CLICK, this.openEditor, false, this);

    this.zippy = new goog.ui.Zippy( this.summaryDiv, this.descriptionContainer);
    
    

	}






goog.exportSymbol('widjdev.tabdev', widjdev.tabdev);
goog.exportSymbol('widjdev.tabdev.tabRow', widjdev.tabdev.tabRow);
goog.exportSymbol('widjdev.tabdev.setTabs', widjdev.tabdev.setTabs); 
