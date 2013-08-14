goog.provide('widjdev.tabdev');
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



widjdev.tabdev.setTabs= function(container) {

 		//container for the rows, will attach to first tab
 		var rowList = goog.dom.createDom('div', { 'class': 'snipList' });

    var topTab = new goog.ui.TabBar();
    topTab.decorate(goog.dom.getElement(container));
    var contentElement = goog.dom.getElement(topTab.getId() + '_content');
    
    // set the initial view
    goog.dom.setTextContent(rowList,  'You have added the rows');
    contentElement.appendChild(rowList);   
        // Handle SELECT events dispatched by tabs.
    goog.events.listen(topTab, goog.ui.Component.EventType.SELECT,
            function(e) {
              var tabSelected = e.target;
              // note class for content div is menu_content
              if(tabSelected.getCaption() != 'List') {              
              goog.dom.setTextContent(contentElement, 'You selected the "' + tabSelected.getCaption() + '" tab.');
              
             }  else {
             // clear the view
             goog.dom.setTextContent(contentElement, '');
             contentElement.appendChild(rowList);   
             
             }
               
           
                  
            });

}









goog.exportSymbol('widjdev.tabdev', widjdev.tabdev);
goog.exportSymbol('widjdev.tabdev.setTabs', widjdev.tabdev.setTabs); 
