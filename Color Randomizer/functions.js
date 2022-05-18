function Randomize(){
    let Text = document.getElementById("ChosenColor")
    if (Text){
        let Frame = document.getElementById("Frame")
       /* let RandomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()*/
       

        let X = Math.round(Math.random()*255)
        let Y = Math.round(Math.random()*255)
        let Z = Math.round(Math.random()*255)

        let RandomColor = `rgb(${X},${Y},${Z})`
        Text.innerHTML = "Chosen Color: " + RandomColor
        Frame.style.backgroundColor = RandomColor
    }
}