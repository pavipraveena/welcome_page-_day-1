var light = document.getElementById("light");
light.className="lighton"

function togglelight(value){
    if(value){
        light.className="lighton"
    }
    else{
        light.className="lightoff"
    }
}