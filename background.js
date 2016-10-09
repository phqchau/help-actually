chrome.runtime.onInstalled.addListener(function(details) {
    chrome.storage.sync.set({clean_news_feed: true});
});

// listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(id, info, tab){
    if (tab.url.toLowerCase().indexOf("autismspeaks.org") > -1){
        chrome.pageAction.show(tab.id);
    }
	  else if (tab.url.toLowerCase().indexOf("redcross.org") > -1){
        chrome.pageAction.show(tab.id);
    }
	  else if (tab.url.toLowerCase().indexOf("komen.org") > -1){
        chrome.pageAction.show(tab.id);
    }
	  else if (tab.url.toLowerCase().indexOf("kidswishnetwork.org") > -1){
        chrome.pageAction.show(tab.id);
    }
	  else if (tab.url.toLowerCase().indexOf("nvsf.org") > -1){
        chrome.pageAction.show(tab.id);
    }
	  else if (tab.url.toLowerCase().indexOf("childrenscharityfund.org") > -1){
        chrome.pageAction.show(tab.id);
    }
	  else if (tab.url.toLowerCase().indexOf("ffcf.org") > -1){
        chrome.pageAction.show(tab.id);
    }
	  else if (tab.url.toLowerCase().indexOf("findthekids.org") > -1){
        chrome.pageAction.show(tab.id);
    }
	  else if (tab.url.toLowerCase().indexOf("cancersurvivorsfund.org") > -1){
        chrome.pageAction.show(tab.id);
    }
    else if (tab.url.toLowerCase().indexOf("spcai.org") > -1){
        chrome.pageAction.show(tab.id);
    }
    else if (tab.url.toLowerCase().indexOf("peta.org") > -1){
        chrome.pageAction.show(tab.id);
    }
    else if (tab.url.toLowerCase().indexOf("clintonfoundation.org") > -1){
        chrome.pageAction.show(tab.id);
    }
    else if (tab.url.toLowerCase().indexOf("salvationarmyusa.org") > -1){
        chrome.pageAction.show(tab.id);
    }
    else if (tab.url.toLowerCase().indexOf("pva.org") > -1){
        chrome.pageAction.show(tab.id);
    }
    else if (tab.url.toLowerCase().indexOf("diabetes.org") > -1){
        chrome.pageAction.show(tab.id);
    }
    else if (tab.url.toLowerCase().indexOf("worldwildlife.org") > -1){
        chrome.pageAction.show(tab.id);
    }
});
