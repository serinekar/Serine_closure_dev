goog.provide('closureexample.init');
    goog.require('goog.dom');
    goog.require('goog.editor.Command');
    goog.require('goog.editor.Field');
    goog.require('goog.editor.plugins.BasicTextFormatter');
    goog.require('goog.editor.plugins.EnterHandler');
    goog.require('goog.editor.plugins.HeaderFormatter');
    goog.require('goog.editor.plugins.LinkBubble');
    goog.require('goog.editor.plugins.LinkDialogPlugin');
    goog.require('goog.editor.plugins.ListTabHandler');
    goog.require('goog.editor.plugins.LoremIpsum');
    goog.require('goog.editor.plugins.RemoveFormatting');
    goog.require('goog.editor.plugins.SpacesTabHandler');
    goog.require('goog.editor.plugins.UndoRedo');
    goog.require('goog.ui.editor.DefaultToolbar');
    goog.require('goog.ui.editor.ToolbarController');
 
closureexample.init = function( appTitle, parent ){
    var header =  {'style':'background:#FF0000'};
    var content = "Application " + appTitle + " Starting"
    var element = goog.dom.createDom( 'div', header, content );
    goog.dom.appendChild( parent, element );

    var myField = new goog.editor.Field('editMe');

// Create and register all of the editing plugins you want to use.
myField.registerPlugin(new goog.editor.plugins.BasicTextFormatter());
myField.registerPlugin(new goog.editor.plugins.RemoveFormatting());
myField.registerPlugin(new goog.editor.plugins.UndoRedo());
myField.registerPlugin(new goog.editor.plugins.ListTabHandler());
myField.registerPlugin(new goog.editor.plugins.SpacesTabHandler());
myField.registerPlugin(new goog.editor.plugins.EnterHandler());
myField.registerPlugin(new goog.editor.plugins.HeaderFormatter());
myField.registerPlugin(new goog.editor.plugins.LoremIpsum('Click here to edit'));
myField.registerPlugin(new goog.editor.plugins.LinkDialogPlugin());
myField.registerPlugin(new goog.editor.plugins.LinkBubble());


var buttons = [
  goog.editor.Command.BOLD,
  goog.editor.Command.ITALIC,
  goog.editor.Command.UNDERLINE,
  goog.editor.Command.FONT_COLOR,
  goog.editor.Command.BACKGROUND_COLOR,
  goog.editor.Command.FONT_FACE,
  goog.editor.Command.FONT_SIZE,
  goog.editor.Command.LINK,
  goog.editor.Command.UNDO,
  goog.editor.Command.REDO,
  goog.editor.Command.UNORDERED_LIST,
  goog.editor.Command.ORDERED_LIST,
  goog.editor.Command.INDENT,
  goog.editor.Command.OUTDENT,
  goog.editor.Command.JUSTIFY_LEFT,
  goog.editor.Command.JUSTIFY_CENTER,
  goog.editor.Command.JUSTIFY_RIGHT,
  goog.editor.Command.SUBSCRIPT,
  goog.editor.Command.SUPERSCRIPT,
  goog.editor.Command.STRIKE_THROUGH,
  goog.editor.Command.REMOVE_FORMAT
];

myField.makeEditable();

};




