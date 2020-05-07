
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

