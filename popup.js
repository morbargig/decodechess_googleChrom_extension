
function getAnaliza() {
  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function () {
  });
}
document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('getAnaliza');
  link.addEventListener('click', function () {
    getAnaliza();
  });
});

