// ==UserScript==
// @name           sengokuixa-meta-mixi-support
// @description    戦国IXA-metaをmixiから使えるといいな
// @version        0.0.0.1
// @namespace      sengokuixa-meta
// @include        http://hm*.sengokuixa.jp/*
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @website        https://github.com/moonlit-g/sengokuixa-meta
// @updateURL      https://raw.githubusercontent.com/moonlit-g/sengokuixa-meta/master/mixi-support.meta.js
// ==/UserScript==

(function() {
	var topWindow = window.top;
	if( topWindow.length > 0 ) {
		$('.kamon')
		.on('click', function() {
			var season  = window.prompt('期を入力してください');
			var chapter = window.prompt('章を入力してください');

			var world = ( location.hostname.match(/(\S+\d{2,3})/) || [] )[1];
			var time = ~~( new Date().getTime() / 1000 );
			if ( world ) {
				document.cookie = world + '_st=' + time + '; domain=.sengokuixa.jp; path=/;';
				document.cookie = world + '_s=' + season + '; domain=.sengokuixa.jp; path=/;';
				document.cookie = world + '_c=' + chapter + '; domain=.sengokuixa.jp; path=/;';
			}
		});
	}
})( jQuery );
