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



widjdev.Dialog = function(dom) {
  goog.ui.Dialog.call(this, dom);

}



goog.inherits(widjdev.Dialog,  goog.ui.Dialog);











