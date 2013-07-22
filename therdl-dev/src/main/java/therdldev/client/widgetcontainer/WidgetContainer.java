package therdldev.client.widgetcontainer;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Widget;
import therdldev.client.widgetcontainer.widgdev.EditorClientWidget;

/**
 * Created with IntelliJ IDEA.
 * User: n
 * Date: 7/22/13
 * Time: 2:36 AM
 * To change this template use File | Settings | File Templates.
 */
public class WidgetContainer  extends Composite {




    interface Binder extends UiBinder<Widget, WidgetContainer> {
    }


    @UiField
    FlowPanel widgBox;



    public WidgetContainer() {

        initWidget(GWT.<Binder>create(Binder.class).createAndBindUi(this));
    }

    public void addWidget(Composite c) {

        widgBox.add(c);
    }



}
