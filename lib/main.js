var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var self = require("sdk/self");

/*
function installButton(toolbarId, id, afterId) {
    if (!document.getElementById(id)) {
        var toolbar = document.getElementById(toolbarId);

        // If no afterId is given, then append the item to the toolbar
        var before = null;
        if (afterId) {
            let elem = document.getElementById(afterId);
            if (elem && elem.parentNode == toolbar)
                before = elem.nextElementSibling;
        }

        toolbar.insertItem(id, before);
        toolbar.setAttribute("currentset", toolbar.currentSet);
        document.persist(toolbar.id, "currentset");

        if (toolbarId == "addon-bar")
            toolbar.collapsed = false;
    }
}

if (firstRun) {
    installButton("nav-bar", "wp-read");
    // The "addon-bar" is available since Firefox 4
    //installButton("addon-bar", "my-extension-addon-bar-button");
}*/

var widget = widgets.Widget({
  id: "zen-read",
  label: "ZenRead",
  contentURL: "http://www.mozilla.org/favicon.ico",
  onClick: function() {
    tabs.activeTab.attach({
      contentScriptFile: self.data.url("black_links.js")
      })
    }
});
