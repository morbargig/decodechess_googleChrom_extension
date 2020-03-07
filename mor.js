// document.addEventListener('DOMContentLoaded', function () {

//     const bg = chrome.extension.getBackgroundPage()
//     Object.keys(bg.bears).forEach(function (url) {
//       const div = document.createElement('div')
//       div.textContent = `${url}: ${bg.bears[url]}`
//       document.body.appendChild(div)
//     })

//     // document.querySelector('button').addEventListener('click', onclick, false)
//     //
//     // function onclick () {
//     //   chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
//     //     chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
//     //   })
//     // }
//     //
//     // function setCount (res) {
//     //   const div = document.createElement('div')
//     //   div.textContent = `${res.count} bears`
//     //   document.body.appendChild(div)
//     // }
//   }, false)

queryInfo = {
    active: true,
    currentWindow: true
}

chrome.tabs.query(queryInfo, getCurrentTab)

function getCurrentTab(tabs) {
    console.log(tabs, tabs[0].url)
    if (tabs[0].url.includes("https://lichess.org/") || tabs[0].url.includes("https://www.chess.com/")) {
        console.log("we can play")
    }
    else {
        console.log("we can't play")
        document.getElementById('modal-icons2').remove();
    }
}









// queryInfo = {
//     active: true,
//     currentWindow: true
// }

// chrome.tabs.query(queryInfo, getCurrentTab)

// function getCurrentTab(tabs) {
//     console.log(tabs, tabs[0].url)
//     if (tabs[0].url.includes("https://lichess.org/") || tabs[0].url.includes("https://www.chess.com/")) {
//         console.log("we can play")
//     }
//     else {
//         console.log("we can't play")
//         document.getElementById('modal-icons2').remove();
//     }
// }