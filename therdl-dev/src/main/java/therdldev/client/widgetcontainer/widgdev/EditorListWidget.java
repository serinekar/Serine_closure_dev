package therdldev.client.widgetcontainer.widgdev;


import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.ScriptInjector;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import therdldev.client.cssbundles.Resources;

public class EditorListWidget  extends Composite {

    private static EditorListViewUiBinder uiBinder = GWT.create(EditorListViewUiBinder.class);

    interface EditorListViewUiBinder extends  UiBinder<Widget, EditorListWidget> {  }

    public EditorListWidget() {

        Resources.INSTANCE.listCss().ensureInjected();

        initWidget(uiBinder.createAndBindUi(this));

    }

    boolean isInjected;

    @Override
    protected void onLoad() {
        super.onLoad();
        injectScript();
        bootStrapList(this);
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
            ScriptInjector.fromString(Resources.INSTANCE.widjdevList().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();
            isInjected = true;
        }
    }



    private native void resetDom() /*-{
         var toolbars  = $doc.getElementsByClassName('goog-toolbar');

         if (toolbars) {
           while(toolbars.length > 0){
                toolbars[0].parentNode.removeChild(toolbars[0]);
                 }

         }

        var popUps  = $doc.getElementsByClassName('modal-dialog');

                if (popUps) {

           while(popUps.length > 0){
                popUps[0].parentNode.removeChild(popUps[0]);
                 }

         }

      console.log($wnd.widjdev.tabdev);
       $wnd.widjdev.tabdev = null;
    }-*/;


    // JSNI set up code
    private native void  bootStrapList(EditorListWidget w ) /*-{

        		var menu = $doc.getElementById('menu');
 		        $wnd.widjdev.tabdev.setTabs(menu);

	}-*/;



}
