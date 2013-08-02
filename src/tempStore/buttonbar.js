goog.provide('buttonbar.setup');
    goog.require('goog.array');
    goog.require('goog.debug.DivConsole');
    goog.require('goog.debug.LogManager');
    goog.require('goog.debug.Logger');
    goog.require('goog.events');
    goog.require('goog.events.EventType');
    goog.require('goog.object');
    goog.require('goog.ui.Button');
    goog.require('goog.ui.ButtonRenderer');
    goog.require('goog.ui.ButtonSide');
    goog.require('goog.ui.CustomButton');
    goog.require('goog.ui.CustomButtonRenderer');
    goog.require('goog.ui.decorate');

buttonbar.setup = function(name, onClickCallback) {
    var button = goog.ui.decorate(goog.dom.getElement(name));
    button.setDispatchTransitionEvents(goog.ui.Component.State.ACTION, true);
    goog.events.listen(button, goog.ui.Component.EventType.ACTION, onClickCallback);
};
goog.exportSymbol('buttonbar.setup', buttonbar.setup);
