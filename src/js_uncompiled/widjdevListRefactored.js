goog.provide('widjdev.listref');    // this is the closure code
// this declares a class         // note the commenst everywhere
goog.provide('widjdev.listref.Rowref');
// end class declaration
// import custom component
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

// make the header tabs
widjdev.listref.tabPanel = function(target) {
    return function() {
        goog.dom.$('snipList').style.display = "none";
        goog.dom.$('tab1').style.display = "none";
        goog.dom.$('tab2').style.display = "none";
        goog.dom.$('tab3').style.display = "none";
        // makes the target element visible
        goog.dom.$(target).style.display = "block";
    	}
    }

widjdev.listref.attachToolbarButton = function(toolbar, label, tooltip, target) {
    var button = new goog.ui.ToolbarButton(label);
    button.setTooltip(tooltip);
    toolbar.addChild(button, true);
    // tabpanel above is target
    goog.events.listen(button.getContentElement(), goog.events.EventType.CLICK, widjdev.listref.tabPanel (target));
}

widjdev.listref.attachToolbar = function(container) {
    var topTab = new goog.ui.TabBar();
    topTab.decorate(goog.dom.getElement(container));

 //   widjdev.listref.attachToolbarButton(toolbar, 'List View', 'View List of snips.', 'snipList');



}

// the row class  widjdev.list.Row
widjdev.listref.Rowref = function(data, container) {

// these are the instance variables, they will needto become custom widgets
// data is a javascript object
    
    this.summary = data.summary;
    this.description = data.description;
    // main root node in html for rows
    this.parent = container;
    
}
 // static(class) methods to open and close the editor
widjdev.listref.Rowref.prototype.closeEditor = function() {

  this.editorContainer.style.display = "none";
};

widjdev.listref.Rowref.prototype.openEditor = function(e) {

  this.editorContainer.style.display = "inline";
};




// a rowList object
widjdev.listref.Rowref.rowLists = {};

// create instances of the row class  widjdev.list.Row
widjdev.listref.makeRows = function(name, data, container) {

        for (var i = 0; i < data.length; i++) {
            var row = new widjdev.listref.Rowref(data[i], container);
            row.makeDom();
        }
		// add row to rowList object
    widjdev.listref.rowLists[name] = container;
}


widjdev.listref.Rowref.prototype.makeDom = function() {

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



// name spcace and dependency management

goog.exportSymbol('widjdev.listref', widjdev.listref);
goog.exportSymbol('widjdev.listref.Rowref', widjdev.listref.Rowref);
goog.exportSymbol('widjdev.listref.makeRows', widjdev.listref.makeRows); 
goog.exportSymbol('widjdev.listref.attachToolbar', widjdev.listref.attachToolbar); 






