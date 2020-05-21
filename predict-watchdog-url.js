/**
 * Usage:
 * The following snippet should be the link saved as a bookmarklet by the user.
 * Instead of a regular website adress, this will execute the remotely located javascript on
 * the page where the user is currently located. Replace the test address with you own.
 *
 * <a alt="Predict Watchdog URL" href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://gist.githubusercontent.com/PWarrenGRV/ad194a387016ca019e3719969be3c512/raw/e7b6a4c17f28e8cd1d723e1f9d83eb845d7977c5/predict-watchdog-news-url.js');})();">Drag to Bookmarks Bar to save this Bookmarklet</a>
 */

function getFlavourTitle(s) {
  try {
    const url = new URL(s);
    const parts = url.pathname.split('/').filter(Boolean);
    const safe = /[a-z0-9\-]+/;
    const last = parts.length - 1;
    if (last > 0 && safe.test(parts[last])) {
      return parts[last];
    } else {
      return '';
    }
  } catch {
    return '';
  }
}

function getCode(s) {
  const url = new URL(s);
  return url.searchParams.get('p');
}

function predictWatchdogURL(site) {
  const shortLink = document
    .querySelector('link[rel=shortlink]')
    .getAttribute('href');
  const canonical = document
    .querySelector('link[rel=canonical]')
    .getAttribute('href');
  const code = getCode(shortLink);
  const title = getFlavourTitle(canonical);
  return `https://watchdog.grv.org.au/news/${site}${code}/${title}`;
}

function run() {
  try {
    const host = window.location.host;
    if (host === 'www.grv.org.au') {
      alert(predictWatchdogURL('g'));
    } else if (host === 'www.sandowngreyhounds.com.au') {
      alert(predictWatchdogURL('s'));
    } else {
      throw new Error(`Unsupported host: ${host}`);
    }
  } catch (err) {
    alert(err.toString());
  }
}

run();
