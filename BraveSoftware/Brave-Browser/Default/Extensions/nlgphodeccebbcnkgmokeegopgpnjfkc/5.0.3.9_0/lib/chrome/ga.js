﻿(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  (i[r] =
    i[r] ||
    function() {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  'script',
  'https://www.google-analytics.com/analytics.js',
  'ga'
);

const details = chrome.runtime.getManifest()

ga('create', 'UA-266831433-1', 'auto');
ga('set', 'checkProtocolTask', function() {});
ga('require', 'displayfeatures');
ga('send', 'pageview', 'background.html?v=' + details.version);
