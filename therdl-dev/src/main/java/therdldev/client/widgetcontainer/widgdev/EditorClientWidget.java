package therdldev.client.widgetcontainer.widgdev;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.SpanElement;
import com.google.gwt.dom.client.Style;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import therdldev.client.cssbundles.Resources;


public class EditorClientWidget extends Composite  {

	private static EditorClientViewUiBinder uiBinder = GWT
			.create(EditorClientViewUiBinder.class);


	interface EditorClientViewUiBinder extends
			UiBinder<Widget, therdldev.client.widgetcontainer.widgdev.EditorClientWidget> {
	}

    @UiField
    SpanElement editorview;


	public EditorClientWidget() {
        Resources.INSTANCE.editorCss().ensureInjected();
        initWidget(uiBinder.createAndBindUi(this));


	}

    @Override
    protected void onLoad() {
        super.onLoad();
        bootStrapEditor(this);
        this.setVisible(true);
    }
	
	public static native String getUserAgent() /*-{
			return navigator.userAgent.toLowerCase();
	}-*/;
	

	private native void bootStrapEditor(EditorClientWidget w) /*-{
	    $wnd.widjdev.init.leftPanelsetup('btn1', function() { w.@therdldev.client.widgetcontainer.widgdev.EditorClientWidget::btnEditorClick()() });
        $wnd.widjdev.init.leftPanelsetup('btn2', function() { w.@therdldev.client.widgetcontainer.widgdev.EditorClientWidget::btnListClick()() });
        $wnd.widjdev.init.leftPanelsetup('btn3', function() { w.@therdldev.client.widgetcontainer.widgdev.EditorClientWidget::btnGetContentClick()() });
        $wnd.widjdev.init.leftPanelsetup('btn4', function() { w.@therdldev.client.widgetcontainer.widgdev.EditorClientWidget::btnSetContentClick()() });
		$wnd.widjdev.init();
	}-*/;


    public void btnEditorClick() {
        Window.alert("Editor");
        editorview.getStyle().setDisplay(Style.Display.BLOCK);


    }
    public void btnListClick() {
        editorview.getStyle().setDisplay(Style.Display.NONE);
        Window.alert("List");

    }
    public void btnGetContentClick() {
        String contents = getContent();

        Window.alert(contents);

    }
    public void btnSetContentClick() {
        String temp = "this is the test content";
        setContent(temp);
        Window.alert("Set Content");

    }

    private native String getContent() /*-{
       return $wnd.widjdev.init.getcontents();
    }-*/;


    private native void setContent(String t) /*-{
       $wnd.widjdev.init.setcontents(t);
    }-*/;


    private native void hideEditor() /*-{
    $wnd.document.getElementById('editorview').display= 'none';


    }-*/;


}
