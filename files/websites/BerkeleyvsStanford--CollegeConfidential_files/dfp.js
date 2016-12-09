var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') +
	    '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
})();

function getSectionId(additionalInfo) {
    var href = location.href;
    var match = href.match(/.com\/(.*?)(?:\/|\?|$)/);
    if (match) {
	sectionId = match[1].substring(0, 40);
    } else {
	sectionId = false;
    }
    return sectionId;
}

googletag.cmd.push(function() {
    var sectionId = getSectionId('');
    if (sectionId) {
	sectionId = sectionId.replace(/\.php/, '');
	sectionId = sectionId.replace(/\.html/, '');
	sectionId = sectionId.replace(/\.htm/, '');
	googletag.defineSlot('/1006408/Talk_Welcome_300x250', [300, 250], 'div-gpt-ad-1368025631271-0').addService(googletag.pubads()).setTargeting("section",sectionId);
	googletag.defineSlot('/1006408/Talk_Top_Leaderboard', [728, 90], 'div-gpt-ad-1368025589958-0').addService(googletag.pubads()).setTargeting("section",sectionId);
	googletag.defineSlot('/1006408/Talk_Skyscraper_160x600', [160, 600], 'div-gpt-ad-1368024474897-0').addService(googletag.pubads()).setTargeting("section",sectionId);
    googletag.defineSlot('/1006408/Talk_Top_Leaderboard', [728, 90], 'div-gpt-ad-1417707685435-0').addService(googletag.pubads()).setTargeting("section",sectionId);
    googletag.defineSlot('/1006408/Talk_Skyscraper_160x600', [160, 600], 'div-gpt-ad-1417708637782-0').addService(googletag.pubads()).setTargeting("section",sectionId);
    } else {
	googletag.defineSlot('/1006408/Talk_Welcome_300x250', [300, 250], 'div-gpt-ad-1368025631271-0').addService(googletag.pubads());
	googletag.defineSlot('/1006408/Talk_Top_Leaderboard', [728, 90], 'div-gpt-ad-1368025589958-0').addService(googletag.pubads());
	googletag.defineSlot('/1006408/Talk_Skyscraper_160x600', [160, 600], 'div-gpt-ad-1368024474897-0').addService(googletag.pubads());
    googletag.defineSlot('/1006408/Talk_Top_Leaderboard', [728, 90], 'div-gpt-ad-1417707685435-0').addService(googletag.pubads());
    googletag.defineSlot('/1006408/Talk_Skyscraper_160x600', [160, 600], 'div-gpt-ad-1417708637782-0').addService(googletag.pubads());
    }
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    if (!is_safari) {
	googletag.pubads().enableSingleRequest();
    }
    googletag.enableServices();
});