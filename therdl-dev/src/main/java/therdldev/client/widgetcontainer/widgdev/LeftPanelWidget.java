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

    @Override
    protected void onLoad() {
        super.onLoad();
        bootStrapPanel(this);
        this.setVisible(true);
    }

    private native void  bootStrapPanel(LeftPanelWidget w) /*-{

        $wnd.widjdev.init.leftPanelsetup('btn1', function() { w.@therdldev.client.widgetcontainer.widgdev.LeftPanelWidget::btnEditorClick()() });
        $wnd.widjdev.init.leftPanelsetup('btn2', function() { w.@therdldev.client.widgetcontainer.widgdev.LeftPanelWidget::btnListClick()() });
        $wnd.widjdev.init.leftPanelsetup('btn3', function() { w.@therdldev.client.widgetcontainer.widgdev.LeftPanelWidget::btnGetContentClick()() });
        $wnd.widjdev.init.leftPanelsetup('btn4', function() { w.@therdldev.client.widgetcontainer.widgdev.LeftPanelWidget::btnSetContentClick()() });

	}-*/;

    public void btnEditorClick() {
        GWT.log("Editor");
    }
    public void btnListClick() {
        GWT.log("List");
    }
    public void btnGetContentClick() {
        GWT.log("Get Content");
    }
    public void btnSetContentClick() {
        GWT.log("Set Content");
    }


}
