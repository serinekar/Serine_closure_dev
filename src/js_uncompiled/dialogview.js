/**
 * this is the maincontainer, 
 * extend the html in the "widjdev.Dialog = function(dom)"
 * exyend the compontets in the "widjdev.Dialog.setDialog =  function ()"
 *  
 */

goog.provide('widjdev.Dialog');

goog.require('goog.dom');
goog.require('goog.dom.TagName');
goog.require('goog.editor.BrowserFeature');
goog.require('goog.editor.focus');
goog.require('goog.events.ActionHandler');
goog.require('goog.events.ActionHandler.EventType');
goog.require('goog.events.Event');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventType');
goog.require('goog.json');
goog.require('goog.net.EventType');
goog.require('goog.net.IframeIo');
goog.require('goog.string');
goog.require('goog.ui.Dialog');
goog.require('goog.ui.Button');
goog.require('goog.ui.ButtonRenderer');
goog.require('goog.ui.ButtonSide');
goog.require('goog.ui.CustomButton');
goog.require('goog.ui.CustomButtonRenderer');
goog.require('goog.ui.FlatButtonRenderer');
goog.require('goog.ui.LinkButtonRenderer');
goog.require('goog.ui.ToggleButton');
goog.require('goog.ui.decorate');
goog.require('widjdev.Component');
goog.require('widjdev.setEditor'); 


 var closureMenuEVENTS;

widjdev.Dialog = function(dom) {
  goog.ui.Dialog.call(this, dom);
  closureMenuEVENTS = goog.object.getValues(goog.ui.Component.EventType);

  this.setContent(
		"<div id='toprowContainer'>"+
		"<span id = 'toprow1'></span><span id = 'toprow2'></span><span id = 'toprow3'></span>"+
		"</div>"+
		"<div id='secondrowContainer'>"+
		"<span id = 'trCombo1'></span>"+
		"</div><div id='toolbar' style='width:602px'></div>"+
		"<div id='editorDiv'></div>");
		
	        this.setModal(false);
	        this.setVisible(true);
   	    


}


widjdev.Dialog.setDialog =  function () {
			// create the customcomponents "widgdevComponent.js"
	    var menuLabel1 = new widjdev.Component('acitve label 1');
  	  var menuLabel2 = new widjdev.Component('active label 2');
 
  	  
  	// now a closure main api fancy button  
    var menuClosuerWidg1 = new goog.ui.ToggleButton([
      goog.dom.createDom('div', 'icon insert-image-icon goog-inline-block'),
      goog.dom.createDom('span', {'style': 'vertical-align:middle'},
          'Insert Image')
    ]);
  	  
  	  // create the main combo box with the core categories
 	    var combo1 = createMainComboBox() ;
 	    // main tags
      var div1;
	    var divcombo1;
  	  var div2;
  	  var div3;
			// wrap the tags at line 40 ++
	    div1 = goog.dom.getElement('toprow1');
      divcombo1  = goog.dom.getElement('trCombo1');
	    div2 = goog.dom.getElement('toprow2');
 			div3 = goog.dom.getElement('toprow3');
 			// create the components
	    menuLabel1.render(div1);
 	    menuLabel2.render(div2);
 	    menuClosuerWidg1.render(div3);
 	    //setsome events
 	    goog.events.listen(menuClosuerWidg1, closureMenuEVENTS, menuClosuerWidgEvent);
 	    // create the combo and its events
 	    combo1.render(divcombo1);
    	goog.events.listen(combo1, 'change', handleChangeEvent);
    	
    	// now set the editor
    	widjdev.setEditor();
    	
    	
	}
	
	// various event handlers

 function menuClosuerWidgEvent(e) {
 		
 			if((e.type == 'enter')| (e.type == 'leave')) return;
 			
      alert('"' + e.target.getCaption() + '" dispatched: ' + e.type);
   
    }

   function handleChangeEvent(e) {
    		alert( e.target.getValue());
  		}

 
 // creates a combobox, clone this method to creare new combos

  function createMainComboBox() {
    var cb = new goog.ui.ComboBox();
    cb.setUseDropdownArrow(true);
    cb.setDefaultText('Select a category');

    var caption = new goog.ui.ComboBoxItem('Select a category');
    caption.setSticky(true);
    caption.setEnabled(false);
    cb.addItem(caption);

    cb.addItem(new goog.ui.ComboBoxItem('Teach & Learn (Ideas)'));
    cb.addItem(new goog.ui.ComboBoxItem('Talk & Listen (Stories) '));
    cb.addItem(new goog.ui.ComboBoxItem('Propose & Vote  (Improvements)'));
    cb.addItem(new goog.ui.ComboBoxItem('Offer & Rate (Services)'));

    return cb;
  }


// export the main namespace and public functions
goog.inherits(widjdev.Dialog,  goog.ui.Dialog);
goog.exportSymbol('widjdev.Dialog', widjdev.Dialog);
goog.exportSymbol('widjdev.Dialog.setDialog', widjdev.Dialog.setDialog);
goog.exportSymbol('widjdev.Dialog.show', widjdev.Dialog.show);













