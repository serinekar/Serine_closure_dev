package therdldev.client.cssbundles;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.CssResource;

public interface Resources extends ClientBundle {
	//Is necessary instantiates the Resources using GWT.create(Class) technique is used under the hood to instruct the compiler to use deferred binding.
	public static final Resources INSTANCE =  GWT.create(Resources.class);


    @CssResource.NotStrict
	@Source("styles.css")
    public CssResource editorCss();
	


}
