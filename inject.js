const TARGET_REDIRECT_URL = "https://www.google.com";
const URL_BLACKLIST = ["x.com", "youtube.com"](function () {
  for (const blacklistedUrl of URL_BLACKLIST) {
    if (window.location.href.includes(blacklistedUrl)) {
      window.location.href = TARGET_REDIRECT_URL;
    }
  }
})();
