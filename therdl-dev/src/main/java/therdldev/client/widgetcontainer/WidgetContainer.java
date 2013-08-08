package therdldev.client.widgetcontainer;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.*;
import therdldev.client.widgetcontainer.widgdev.EditorClientWidget;
import therdldev.client.widgetcontainer.widgdev.LeftPanelWidget;

public class WidgetContainer  extends Composite {




    interface Binder extends UiBinder<Widget, WidgetContainer> {
    }


    @UiField
    HTMLPanel header;
    @UiField
    FlowPanel widgBox;




    public WidgetContainer() {

        initWidget(GWT.<Binder>create(Binder.class).createAndBindUi(this));
    }

    public void addWidget(Composite c) {
        System.out.println( "widgBox.getWidgetCount() "+widgBox.getWidgetCount() );
        widgBox.clear();
        widgBox.add(c);
    }

    public void addHeader(Composite c) {
        header.clear();
        header.add(c);
        header.setVisible(true);
        c.setVisible(true);
    }



}
