const Buttons = [
    "AC","+/-","%","/",
    "7","8","9","x",
    "4","5","6","-",
    "1","2","3","+",
    "0",".","="
]

for (let i = 0; i < Buttons.length; i++){
    let Text = Buttons[i]
    let Button = document.createElement("button")
    Button.innerHTML = Text
    
    if (Text == "AC" || Text == "+/-" || Text == "%"){
        Button.className = "functions"
    } else if (Text == "+" || Text == "-" || Text == "x" || Text == "/" || Text == "="){
        Button.className = "operands"
    } else {
        Button.className = "digits"
    }

    document.getElementById("Buttons").appendChild(Button)
}