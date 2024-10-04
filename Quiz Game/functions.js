let Data 

fetch("questionbank.json")
    .then(response => response.json())
    .then(data => {
       // console.log(data)
        Data = data
        LoadQuestion()
    })

let Correct = 0 
let Incorrect = 0
let CorrectAnswer

const skipQuestion = () => {
    LoadQuestion()
}

const picked = (Element) => {
    if (Element.value == CorrectAnswer){
        Correct++
    } else {
        Incorrect++
    }
    LoadQuestion()
}

const LoadQuestion = () => {
    let Subject 
    switch(Math.floor((Math.random() * 3) + 1)){
        case 1: 
            Subject = Data["math"]
            break;
        case 2: 
            Subject = Data["science"]
            break;
        case 3: 
            Subject = Data["history"]
            break;
    }

    const Questions = Object.keys(Subject)
    let Number = Math.floor((Math.random() * Questions.length))

    const Answers = []

    for (let i = 0; i < 4; i++){
        Answers.push(Object.values(Subject)[Number][i])
    } 

    let Index = Math.floor((Math.random() * Answers.length))
    document.getElementById("option-button1").value = Answers[Index]
    Answers.splice(Index,1)

    Index = Math.floor((Math.random() * Answers.length))
    document.getElementById("option-button2").value = Answers[Index]
    Answers.splice(Index,1)

    Index = Math.floor((Math.random() * Answers.length))
    document.getElementById("option-button3").value = Answers[Index]
    Answers.splice(Index,1)

    Index = Math.floor((Math.random() * Answers.length))
    document.getElementById("option-button4").value = Answers[Index]
    Answers.splice(Index,1)

    document.getElementById("correct").innerHTML = "Correct: " + Correct 
    document.getElementById("incorrect").innerHTML = "Incorrect: " + Incorrect 
    document.getElementById("Question").innerHTML = Questions[Number]

    CorrectAnswer = Object.values(Subject)[Number][4]
}