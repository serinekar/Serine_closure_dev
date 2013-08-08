package therdldev.client.cssbundles;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.resources.client.TextResource;

public interface Resources extends ClientBundle {
	//Is necessary instantiates the Resources using GWT.create(Class) technique is used under the hood to instruct the compiler to use deferred binding.
	public static final Resources INSTANCE =  GWT.create(Resources.class);


    @CssResource.NotStrict
	@Source("editorWidget.css")
    public CssResource editorCss();

    @CssResource.NotStrict
    @Source("leftPanel.css")
    public CssResource leftPanelCss();

    @Source("widjdevList.js")
    public TextResource widjdevList();

    @Source("dialogview.js")
    public TextResource dialogView();



}
