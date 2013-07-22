package therdldev.client.widgetcontainer.widgdev;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import therdldev.client.cssbundles.Resources;

public class EditorClientWidget extends Composite  {

	private static EditorClientViewUiBinder uiBinder = GWT
			.create(EditorClientViewUiBinder.class);


	interface EditorClientViewUiBinder extends
			UiBinder<Widget, therdldev.client.widgetcontainer.widgdev.EditorClientWidget> {
	}

	public EditorClientWidget() {
        Resources.INSTANCE.editorCss().ensureInjected();
        initWidget(uiBinder.createAndBindUi(this));

	}

    @Override
    protected void onLoad() {
        super.onLoad();
        bootStrapEditor();
        this.setVisible(true);
    }
	
	public static native String getUserAgent() /*-{
			return navigator.userAgent.toLowerCase();
	}-*/;
	
	
	private native void bootStrapEditor() /*-{
		$wnd.closureeditor.init();
	}-*/;
}
