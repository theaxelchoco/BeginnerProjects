let Count = 0

function Increase(){
    Count ++
    UpdateVisual()
}

function ClearCount(){
    Count = 0
    UpdateVisual()
}

function UpdateVisual(text){
    let Visual = document.getElementById("Count")
    if (Visual){
        Visual.innerHTML = text && text || Count
    }
}