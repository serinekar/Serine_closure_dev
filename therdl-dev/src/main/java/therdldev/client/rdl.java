package therdldev.client;


import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.dom.client.Style;
import com.google.gwt.user.client.ui.*;
import therdldev.client.widgetcontainer.AppMenu;
import therdldev.client.widgetcontainer.WidgetContainer;
import therdldev.client.widgetcontainer.widgdev.EditorClientWidget;
import therdldev.client.widgetcontainer.widgdev.EditorListWidget;
import therdldev.client.widgetcontainer.widgdev.LeftPanelWidget;


import java.util.logging.Logger;


public class rdl implements EntryPoint {

    private static Logger sLogger = Logger.getLogger("");
    private WidgetContainer wrappingLayoutPanel;


  public void onModuleLoad() {

      sLogger .info("Closure Widget Development onModuleLoad");

       String shtml  ="<h1> this is test code to check wire up display</h1>";

      wrappingLayoutPanel = new WidgetContainer();

      wrappingLayoutPanel.setStylePrimaryName("wrappingLayoutPanel");

      RootLayoutPanel rp = RootLayoutPanel.get();
      rp.add(wrappingLayoutPanel);

      setHeader();

  }


    public void setcenterPanel(Composite c) {

        wrappingLayoutPanel.addWidget(c);

        c.setVisible(true);
    }

    public void setHeader() {

        AppMenu menu = new AppMenu(this);
        wrappingLayoutPanel.addHeader(menu );
        menu.setVisible(true);
    }



}

