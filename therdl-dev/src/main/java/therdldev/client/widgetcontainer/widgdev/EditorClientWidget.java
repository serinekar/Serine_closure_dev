package therdldev.client.widgetcontainer.widgdev;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.ScriptInjector;
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

    boolean isInjected;


	public EditorClientWidget() {
        Resources.INSTANCE.editorCss().ensureInjected();
        initWidget(uiBinder.createAndBindUi(this));


	}

    @Override
    protected void onLoad() {
        super.onLoad();
        injectScript();
        bootStrapEditor(this);
        this.setVisible(true);
    }

    @Override
    protected void onUnload() {
        super.onUnload();
        resetDom();
        doDetachChildren();

    }

    private void injectScript() {

        if(!isInjected) {
        ScriptInjector.fromString(Resources.INSTANCE.dialogView().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();
        isInjected = true;
        }
    }



    private native void bootStrapEditor(EditorClientWidget w ) /*-{

        $wnd.widjdev.setEditor.leftPanelsetup('btn3', function() { w.@therdldev.client.widgetcontainer.widgdev.EditorClientWidget::btnGetContentClick()() });
        $wnd.widjdev.setEditor.leftPanelsetup('btn4', function() { w.@therdldev.client.widgetcontainer.widgdev.EditorClientWidget::btnSetContentClick()() });

	    var dialog1 = new $wnd.widjdev.Dialog();
        $wnd.widjdev.Dialog.setDialog();


	}-*/;

    private native void resetDom() /*-{

         var toolbars  = $doc.getElementsByClassName('goog-toolbar');

         if (toolbars) { alert('some toollbars');

           while(toolbars.length > 0)  {
                toolbars[0].parentNode.removeChild(toolbars[0]);
                 }

         }


        var popUps  = $doc.getElementsByClassName('modal-dialog');

                if (popUps) { alert('some popUps' +popUps.length)

           while(popUps.length > 0)  {
                popUps[0].parentNode.removeChild(popUps[0]);
                 }

         }
         console.log($wnd.widjdev.Dialog);
         $wnd.widjdev.Dialog = null;

    }-*/;


    public void btnGetContentClick() {
        String contents = getContent();

        Window.alert(contents);

    }
    public void btnSetContentClick() {
        String temp = "this is the test content";
        setContent(temp);
        Window.alert("Set Content");

    }

    private native void getEditor() /*-{

      $wnd.document.getElementById('editorDiv').display= 'block';
    }-*/;



    private native String getContent() /*-{

       return $wnd.widjdev.setEditor.getcontents();

    }-*/;


    private native void setContent(String t) /*-{
       $wnd.widjdev.setEditort.setcontents(t);
    }-*/;


    private native void hideEditor() /*-{
    $wnd.document.getElementById('editorDiv').display= 'none';


    }-*/;


}
