package therdldev.client.widgetcontainer;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.MenuBar;
import com.google.gwt.user.client.ui.MenuItem;
import com.google.gwt.user.client.ui.Widget;
import therdldev.client.rdl;

import therdldev.client.widgetcontainer.widgdev.EditorClientWidget;
import therdldev.client.widgetcontainer.widgdev.EditorListWidget;


import java.util.logging.Logger;

public class AppMenu extends Composite  {

    private static Logger log = Logger.getLogger("");

	private static AppMenuUiBinder uiBinder = GWT.create(AppMenuUiBinder.class);
	@UiField MenuBar menuBar;
	@UiField MenuItem editor;
	@UiField MenuItem list;
	@UiField MenuItem ex1;
	@UiField MenuItem ex2;
	@UiField MenuItem ex3;
	@UiField MenuItem ex4;

    final rdl rdl1;


	interface AppMenuUiBinder extends UiBinder<Widget, AppMenu> {
	}

	public AppMenu(final rdl rdl2) {
		initWidget(uiBinder.createAndBindUi(this));
        this.rdl1 = rdl2;

        editor.setScheduledCommand(new Scheduler.ScheduledCommand() {
			@Override
			public void execute() {

                EditorClientWidget closureEditor = new EditorClientWidget();
                rdl1.setcenterPanel(closureEditor);
                rdl1.setHeader();
			}
		});
        list.setScheduledCommand(new Scheduler.ScheduledCommand() {
            @Override
            public void execute() {

                EditorListWidget closureList = new EditorListWidget();
                rdl1.setcenterPanel(closureList);
                rdl1.setHeader();
            }
        });


	}

}
