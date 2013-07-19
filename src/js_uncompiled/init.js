goog.provide('closureexample.init');
goog.require('goog.dom');
goog.require('goog.editor.plugins');
goog.require('goog.ui.Toolbar');
goog.require('goog.ui.ToolbarButton');
goog.require('goog.ui.Zippy');
 
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
myField.registerPlugin(
    new goog.editor.plugins.LoremIpsum('Click here to edit'));
myField.registerPlugin(
    new goog.editor.plugins.LinkDialogPlugin());



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
var myToolbar = goog.ui.editor.DefaultToolbar.makeToolbar(buttons,
    goog.dom.getElement('toolbar'));
 
// Hook the toolbar into the field.
var myToolbarController =
    new goog.ui.editor.ToolbarController(myField, myToolbar);

};

myField.makeEditable();


