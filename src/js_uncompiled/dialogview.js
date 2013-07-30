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




widjdev.Dialog = function(dom) {
  goog.ui.Dialog.call(this, dom);

  this.setContent(
		"<div id='toprowContainer'>"+
		"<span id = 'toprow1'></span><span id = 'toprow2'></span><span id = 'toprow3'></span>"+
		"</div>"+
		"<div id='secondrowContainer'>"+
		"<span id = 'trCombo1'></span>"+
		"</div>");
		
	        this.setModal(false);
	        this.setVisible(true);
   	    


}




widjdev.Dialog.setDialog =  function () {
	    var menuLabel1 = new widjdev.Component('acitve label 1');
  	  var menuLabel2 = new widjdev.Component('active label 2');
  	  var menuLabel3 = new widjdev.Component('active label 3');
 	    var combo1 = createTestComboBox() ;
      var div1;
	    var divcombo1;
  	  var div2;
  	  var div3;

	    div1 = goog.dom.getElement('toprow1');
      divcombo1  = goog.dom.getElement('trCombo1');
	    div2 = goog.dom.getElement('toprow2');
 			div3 = goog.dom.getElement('toprow3');
	    menuLabel1.render(div1);
 	    menuLabel2.render(div2);
 	    menuLabel3.render(div3);
 	    combo1.render(divcombo1);

    	goog.events.listen(combo1, 'change', handleChangeEvent);
	}



   function handleChangeEvent(e) {
    		alert( e.target.getValue());
  		}


  function createTestComboBox() {
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



goog.inherits(widjdev.Dialog,  goog.ui.Dialog);
goog.exportSymbol('widjdev.Dialog.setDialog', widjdev.Dialog.setDialog);
goog.exportSymbol('widjdev.Dialog.show', widjdev.Dialog.show);













