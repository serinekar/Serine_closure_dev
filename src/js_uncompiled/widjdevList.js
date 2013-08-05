goog.provide('widjdev.list');    // this is the closure code
// this declares a class         // note the commenst everywhere
goog.provide('widjdev.list.Row');
// end class declaration
// import custom component
goog.require('widjdev.Component'); // this is a custom dependency
goog.require('goog.dom');
goog.require('goog.ui.Zippy');
goog.require('goog.ui.CustomButton'); // this is a standard dependency
goog.require('goog.ui.Toolbar');
goog.require('goog.ui.ToolbarButton');


// make the header tabs
widjdev.list.tabPanel = function(target) {
    return function() {
        goog.dom.$('snipList').style.display = "none";
        goog.dom.$('tab1').style.display = "none";
        goog.dom.$('tab2').style.display = "none";
        goog.dom.$('tab3').style.display = "none";
        // makes the target element visible
        goog.dom.$(target).style.display = "block";
    	}
    }

widjdev.list.attachToolbarButton = function(toolbar, label, tooltip, target) {
    var button = new goog.ui.ToolbarButton(label);
    button.setTooltip(tooltip);
    toolbar.addChild(button, true);
    // tabpanel above is target
    goog.events.listen(button.getContentElement(), goog.events.EventType.CLICK, widjdev.list.tabPanel (target));
}

widjdev.list.attachToolbar = function(container) {
    var toolbar = new goog.ui.Toolbar();

    widjdev.list.attachToolbarButton(toolbar, 'List View', 'View List of snips.', 'snipList');
    widjdev.list.attachToolbarButton(toolbar, 'Tab1', 'Tab 1 toolTip info', 'tab1');
    widjdev.list.attachToolbarButton(toolbar, 'Tab2', 'Tab 2 toolTip info', 'tab2');
    widjdev.list.attachToolbarButton(toolbar, 'Tab3', 'Tab 3 toolTip info', 'tab3');

    toolbar.render(container);
}

// the row class  widjdev.list.Row
widjdev.list.Row = function(data, container) {

// these are the instance variables, they will needto become custom widgets
// data is a javascript object
    
    this.summary = data.summary;
    this.description = data.description;
    // main root node in html for rows
    this.parent = container;
    
}
 // static(class) methods to open and close the editor
widjdev.list.Row.prototype.closeEditor = function() {

  this.editorContainer.style.display = "none";
};

widjdev.list.Row.prototype.openEditor = function(e) {

  this.editorContainer.style.display = "inline";
};




// a rowList object
widjdev.list.rowLists = {};

// create instances of the row class  widjdev.list.Row
widjdev.list.makeRows = function(name, data, container) {

        for (var i = 0; i < data.length; i++) {
            var row = new widjdev.list.Row(data[i], container);
            row.makeDom();
        }
		// add row to rowList object
    widjdev.list.rowLists[name] = container;
}


widjdev.list.Row.prototype.makeDom = function() {

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
    // add the control to the first row by adding the dive we created
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



// name spcace and dependency management

goog.exportSymbol('widjdev.list', widjdev.list);
goog.exportSymbol('widjdev.list.Row', widjdev.list.Row);
goog.exportSymbol('widjdev.list.makeRows', widjdev.list.makeRows); 
goog.exportSymbol('widjdev.list.attachToolbar', widjdev.list.attachToolbar); 






