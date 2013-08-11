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

        Resources.INSTANCE.editorCss().ensureInjected();

        initWidget(uiBinder.createAndBindUi(this));

    }


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


            ScriptInjector.fromString(Resources.INSTANCE.widjdevList().getText()).setWindow(ScriptInjector.TOP_WINDOW).inject();

    }


    private native final boolean isInjected() /*-{
    if (!(typeof $wnd.widjdev.list === "undefined") && !(null===$wnd.widjdev.list)) {
        return true;
    }
    return false;
    }-*/;


    private native void resetDom() /*-{

      console.log($wnd.widjdev.list );
       $wnd.widjdev.list = null;
    }-*/;


    // JSNI set up code
    private native void  bootStrapList(EditorListWidget w ) /*-{

         // header tabs
         var menu = document.getElementById('menu');

         $wnd.widjdev.list.attachToolbar(menu);

         //container for the rows
         var rowList = $doc.getElementById('snipList');

         // called when we make the rows below
         var makeRowData = function(summary, description, priority) {  return { 'summary': summary, 'description': description }; };

         //make the rows
         $wnd.widjdev.list.makeRows('active', [ makeRowData("Header first row", "header second row"),  makeRowData("Header first row", "header second row"),
                      makeRowData("Header first row", "header second row")], rowList );


	}-*/;



}
