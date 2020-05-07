





function getCurrentTab() {
    console.log("kjhgvjjhvghbkljhvb")
    console.log(window.location.hostname,document.URL)
    if (document.URL.includes("https://www.chess.com/")) {
        if(document.URL.includes("https://www.chess.com/play/compute")){
            let movesDiv = document.getElementById("moveListControl_vertical")
            chessGetMovesFromComuterPage()
        }
        chessGetMoves(movesDiv)
    }
    if (document.URL.includes("https://lichess.org/")) {
        return lichessGetMoves()
    }
}

function  chessGetMovesFromComuterPage(){
    let movesDiv = document.getElementsByClassName("list-wrap computer-move-list")
    console.log(movesDiv)
    movesDiv = movesDiv[0].innerText // + movesDiv.outerText //innerText
    console.log(movesDiv) 
    movesDiv = movesDiv.split("\n")
    console.log(movesDiv)
    newMovesDiv = ""
    for (let i = 0;i < movesDiv.length; i++ ){
        let ii    
        for( ii = 0 ; ii < movesDiv[i].length -1 ; ii++ ){
            newMovesDiv += movesDiv[i][ii]
            if( movesDiv[i][ii] == "."){
                newMovesDiv += " "
                ii++
                break
            }
        }
        for (ii; ii < movesDiv[i].length -1 ; ii++){
            newMovesDiv += movesDiv[i][ii]
            if (!isNaN(movesDiv[i][ii])  ){
                ii++
                newMovesDiv += " "
                break
            }
        }
        if(movesDiv[i][ii] == "#" ){
            newMovesDiv += "#"
            ii++
        }
        if(!isNaN(movesDiv[i][ii])){
            for (ii; ii < movesDiv[i].length ; ii++){
                newMovesDiv += movesDiv[i][ii]    
            }
            console.log(newMovesDiv)
            return newMovesDiv
        }

        for (ii; ii < movesDiv[i].length ; ii++){
            console.log(movesDiv[i][ii])
            newMovesDiv += movesDiv[i][ii]
            if (!isNaN(movesDiv[i][ii])  ){
                newMovesDiv += " "
                ii++
                break
            }
        }
        
    }
    console.log(newMovesDiv)    
} 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function chessGetMoves(){
    let movesDiv = document.getElementsByClassName("vertical-move-list-component vertical-move-list-darkMode")[0].childNodes[0]
    console.log(movesDiv)
    movesDiv = movesDiv.innerText // + movesDiv.outerText //innerText
    console.log(movesDiv) 
    movesDiv = movesDiv.split("\n")
    console.log(movesDiv)
    newMovesDiv = ""
    for (let i = 1;i < movesDiv.length; i++ ){
        if(i % 5 != 0 && i % 5 != 4 ){
            newMovesDiv += movesDiv[i - 1] + " "
        }
    }
    console.log(newMovesDiv)
} 


function lichessGetMoves(){
    let movesDiv = document.getElementsByClassName("moves")[0].childNodes
    let movesLength = movesDiv.length
    let movesRes = ""
    for (let i = 0 ; i < movesLength - 1 ;i++ ){
        if(i % 3 == 0){
            movesRes+=  movesDiv[i].innerHTML + ". "
        } else {
            movesRes+=  movesDiv[i].innerHTML + " "
        }
    }
    console.log(movesRes)
    return movesRes
} 

chrome.runtime.sendMessage({
    action: "getSource",
    source: getCurrentTab(document)
});
