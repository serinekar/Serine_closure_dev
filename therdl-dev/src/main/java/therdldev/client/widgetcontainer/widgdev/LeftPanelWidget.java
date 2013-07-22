package therdldev.client.widgetcontainer.widgdev;


import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import therdldev.client.cssbundles.Resources;

public class LeftPanelWidget  extends Composite {


    private static LeftPanelViewUiBinder uiBinder = GWT.create(LeftPanelViewUiBinder.class);


    interface LeftPanelViewUiBinder extends
            UiBinder<Widget, LeftPanelWidget> {
    }



    public LeftPanelWidget() {

        Resources.INSTANCE.editorCss().ensureInjected();
        initWidget(uiBinder.createAndBindUi(this));





    }
}
