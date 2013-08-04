goog.provide('widjdev.list');
// this decalsres a class
goog.provide('widjdev.list.Row');
goog.require('goog.dom');
goog.require('goog.ui.Zippy');
goog.require('goog.ui.CustomButton');
goog.require('goog.ui.Toolbar');
goog.require('goog.ui.ToolbarButton');

widjdev.list.rowLists = {};

widjdev.list.noRows = function(container) {
    container.appendChild(
        goog.dom.createDom('h2', { 'class': 'empty' }, 'This list is empty!'));
}

widjdev.list.tabPanel = function(target) {
    return function() {
        goog.dom.$('snipList').style.display = "none";
        goog.dom.$('tab1').style.display = "none";
        goog.dom.$('tab2').style.display = "none";
        goog.dom.$('tab3').style.display = "none";
        goog.dom.$(target).style.display = "block";
    	}
    }

widjdev.list.attachToolbarButton = function(toolbar, label, tooltip, target) {
    var button = new goog.ui.ToolbarButton(label);
    button.setTooltip(tooltip);
    toolbar.addChild(button, true);
    goog.events.listen(button.getContentElement(), goog.events.EventType.CLICK, widjdev.list.tabPanel (target));
}

widjdev.list.attachToolbar = function(container) {
    var toolbar = new goog.ui.Toolbar();

    widjdev.list.attachToolbarButton(toolbar, 'List', 'List snips.', 'snipList');
    widjdev.list.attachToolbarButton(toolbar, 'Tab1', 'Tab 1 toolTip info', 'tab1');
    widjdev.list.attachToolbarButton(toolbar, 'Tab2', 'Tab 2 toolTip info', 'tab2');
    widjdev.list.attachToolbarButton(toolbar, 'Tab3', 'Tab 3 toolTip info', 'tab3');

    toolbar.render(container);
}


// thisd is a class

widjdev.list.Row = function(data, container) {
    this.summary = data.summary;
    this.description = data.description;
    this.priority = data.priority;
    this.parent = container;
}

widjdev.list.Row.prototype.closeEditor = function() {
  this.contentElement.innerHTML = this.description;
  this.contentElement.style.display = "block";
  this.editorContainer.style.display = "none";
};

widjdev.list.Row.prototype.openEditor = function(e) {
  this.editorElement.value = this.description;
  this.contentElement.style.display = "none";
  this.editorContainer.style.display = "inline";
};

widjdev.list.Row.prototype.save = function(e) {
  this.description = this.editorElement.value;
  this.closeEditor();
};



widjdev.list.Row.prototype.clickActionButton = function(row, element, target) {
    return function(e) {
        var parent = element.parentNode;
        parent.removeChild(element);
        if (parent.childNodes.length == 0)
            widjdev.list.noRows(parent);

        row.parent = widjdev.list.rowLists[target];
        if (row.parent.childNodes[0].className == 'empty')
           row.parent.removeChild(row.parent.childNodes[0]);

        row.makeDom();
        e.stopPropagation();
    };
}

widjdev.list.Row.prototype.makeDom = function() {
    this.summaryDiv = goog.dom.createDom('div', { 'class': 'summary' }, this.summary);
    this.contentElement = goog.dom.createDom('div', { 'class': 'description' }, this.description);
    this.editorElement = goog.dom.createDom('textarea', null, '');

    this.editorContainer = goog.dom.createDom('div', {'style': 'display:none;'},  this.editorElement);

    this.descriptionContainer = goog.dom.createDom('div', null,
                                                   this.contentElement,
                                                   this.editorContainer);

    var taskDiv = goog.dom.createDom('div', { 'class': 'row' },
                                     this.summaryDiv,
                                     this.descriptionContainer );

    this.parent.appendChild(taskDiv);

    this.makeButtons(this, taskDiv);

    goog.events.listen(this.contentElement, goog.events.EventType.CLICK, this.openEditor, false, this);

    this.zippy = new goog.ui.Zippy( this.summaryDiv, this.descriptionContainer);
}

widjdev.list.Row.prototype.makeActionButton = function(task, element, target, name) {
    var button = new goog.ui.CustomButton(name);

    button.addClassName('rowButton');

    button.render(element.childNodes[0]);

    goog.events.listen(
        button.getContentElement(),  goog.events.EventType.CLICK, this.clickActionButton(task, element, target));

}

widjdev.list.Row.prototype.makeEditorButton = function(element, name, callback) {
    var button = new goog.ui.CustomButton(name);

    button.addClassName('editorButton');

    button.render(element.childNodes[1].childNodes[1]);

    goog.events.listen( button.getContentElement(), goog.events.EventType.CLICK, callback, false, this);
}


widjdev.list.Row.prototype.makeButtons = function(row, element) {
    if (row.parent.id == 'snipList') {
        this.makeActionButton(row, element, 'completed', 'Done');
        this.makeActionButton(row, element, 'deleted', 'Delete');
    }
    else
        this.makeActionButton(row, element, 'active', 'Undo');

    this.makeEditorButton(element, 'Save', this.save);
    this.makeEditorButton(element, 'Cancel', this.closeEditor);
}


widjdev.list.makeRows = function(name, data, container) {
    if (data.length == 0)
        widjdev.list.noRows(container);
    else
        for (var i = 0; i < data.length; i++) {
            var row = new widjdev.list.Row(data[i], container);
            row.makeDom();
        }

    widjdev.list.rowLists[name] = container;
}


goog.exportSymbol('widjdev.list', widjdev.list);
goog.exportSymbol('widjdev.list.Row', widjdev.list.Row);
goog.exportSymbol('widjdev.list.makeRows', widjdev.list.makeRows); 
goog.exportSymbol('widjdev.list.attachToolbar', widjdev.list.attachToolbar); 





