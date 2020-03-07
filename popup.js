
function getAnaliza() {
  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function () {
    // console.log(chrome.runtime)
  //   chrome.tabs.create({
  //     url: "https://app.decodechess.com/"
  // }, function(tab) {
  //     tabId = tab.id;
  // });
  // chrome.tabs.onUpdated.addListener(function(id, info) {
  //     setTimeout(() => {
  //         // if (id == tabId && info.status == "complete" && pgn != null) {
  //             chrome.tabs.sendMessage(tabId, {greeting: "hello"}
  //                , function(response) {
  //               console.log(response.farewell);
  //             });
  //           });
  //     }, 100);
  
    // if (chrome.runtime.lastError) {
    //   console.log(chrome.runtime)
    // }
    // else {
    //   console.log(chrome.runtime)
    //   console.log("open new tab")
    // }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('getAnaliza');
  link.addEventListener('click', function () {
    getAnaliza();
  });

  // chrome.windows.create({"https://app.decodechess.com/"});
});

