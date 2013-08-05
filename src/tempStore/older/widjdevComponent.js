/**
 * component for controls wraps a tag and gives a closure widget
 *  add methods to create custom controls, SEE 	LINE 94
 */
 
goog.provide('widjdev.Component');

goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');
goog.require('goog.events.KeyCodes');
goog.require('goog.events.KeyHandler');
goog.require('goog.ui.Component');
goog.require('goog.ui.ComboBox');

 

/**https://code.google.com/p/closure-library/wiki/IntroToComponents
 *http://www.closurecheatsheet.com/events#event-handler
 *http://closure-library.googlecode.com/git/closure/goog/demos/button.html
 * @param {string=} opt_label A label to display. Defaults to "Click Me" if none
 *     provided.
 * @param {goog.dom.DomHelper=} opt_domHelper DOM helper to use.
 *
 * @extends {goog.ui.Component}
 * @constructor
 */


widjdev.Component = function(opt_label) {
  goog.base(this);

  /**
   * The label to display.
   * @type {string}
   * @private
   */
  this.initialLabel_ = opt_label || 'Click Me';

  /**
   * The current color.
   * @type {string}
   * @private
   */
  this.color_ = '#CCFF33';

  /**
   * Keyboard handler for this object. This object is created once the
   * component's DOM element is known.
   *
   * @type {goog.events.KeyHandler?}
   * @private
   */
  this.kh_ = null;

 


};
goog.inherits(widjdev.Component, goog.ui.Component);


/**
 * Changes the color of the element.
 * @private
 */
widjdev.Component.prototype.fireEvent = function(event) {
		alert("events wired up"+this.initialLabel_);
}


/**
 * Creates an initial DOM representation for the component.
 * @override
 */
widjdev.Component.prototype.createDom = function() {

if (this.initialLabel_.indexOf("label") !== -1 )  {
  this.decorateInternal(this.dom_.createElement('span'));

}

else {
  var cb = new goog.ui.ComboBox();

}

}


/**
 * Decorates an existing HTML DIV element as a SampleComponent.
 *
 * @param {Element} element The DIV element to decorate. The element's
 *    text, if any will be used as the component's label.
 * @override
 */
widjdev.Component.prototype.decorateInternal = function(element) {
  goog.base(this, 'decorateInternal', element);




  if (!this.getLabelText()) {
    this.setLabelText(this.initialLabel_);
  }

  var elem = this.getElement();
  goog.dom.classes.add(elem, goog.getCssName('widjdev-Component'));
  elem.style.backgroundColor = this.color_;

  
  this.kh_ = new goog.events.KeyHandler(elem);

  this.getHandler().listen(this.kh_, goog.events.KeyHandler.EventType.KEY,
      this.onKey_);


};



/**
 * Handles DIV element clicks, causing the DIV's colour to change.
 * @param {goog.events.Event} event The click event.
 * @private
 * will call back java here

 */
widjdev.Component.prototype.onDivClicked_ = function(event) {
  this.fireEvent();
}



/** @override */
widjdev.Component.prototype.disposeInternal = function() {
  goog.base(this, 'disposeInternal');
  if (this.kh_) {
    this.kh_.dispose();
  }
}


/**
 * Called when component's element is known to be in the document.
 * @override
 */
widjdev.Component.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');
  this.getHandler().listen(this.getElement(), goog.events.EventType.CLICK, this.onDivClicked_);
}


/**
 * Called when component's element is known to have been removed from the
 * document.
 * @override
 */
widjdev.Component.prototype.exitDocument = function() {
  goog.base(this, 'exitDocument');
}


/**
 * Gets the current label text.
 *
 * @return {string} The current text set into the label, or empty string if
 *     none set.
 */
widjdev.Component.prototype.getLabelText = function() {
  if (!this.getElement()) {
    return '';
  }
  return goog.dom.getTextContent(this.getElement());
}




/**
 * Fired when user presses a key while the DIV has focus. If the user presses
 * space or enter, the color will be changed.
 * @param {goog.events.Event} event The key event.
 * @private
 */
widjdev.Component.prototype.onKey_ = function(event) {
  var keyCodes = goog.events.KeyCodes;
  if (event.keyCode == keyCodes.SPACE || event.keyCode == keyCodes.ENTER) {
    this.fireEvent();
  }
}


/**
 * Sets the current label text. Has no effect if component is not rendered.
 *
 * @param {string} text The text to set as the label.
 */
widjdev.Component.prototype.setLabelText = function(text) {
  if (this.getElement()) {
    goog.dom.setTextContent(this.getElement(), text);
  }
}

