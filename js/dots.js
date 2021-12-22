const pointsDiv = document.getElementById('pointsDiv');

pointsDiv.style.height = "400px";
pointsDiv.style.width = "400px";
pointsDiv.style.border = "1px solid black";
// pointsDiv.style.margin = "50px 100px";
pointsDiv.style.position = "relative";
pointsDiv.style.float = 'left';
pointsDiv.style.left = '100px';
pointsDiv.style.top = '100px';



var points = [
    {x: 20, y: 20},
    {x: 60, y: 100},
    {x: 100, y: 220},
    {x: 180, y: 160},
    {x: 200, y: 80},
    {x: 250, y: 280},
    {x: 300, y: 40},
    {x: 320, y: 200},
    {x: 340, y: 320},
];

for(let i=0; i<points.length;i++){
    var dot = document.createElement('div');
    dot.className = "dots"
    dot.style.width = "20px";
    dot.style.height = "20px";
    dot.style.backgroundColor = "#1d86b3";
    dot.style.borderRadius="50%";
    dot.style.position = "absolute"
    dot.style.left = points[i]['x']+'px';
    dot.style.top = points[i]['y']+'px';

    pointsDiv.appendChild(dot);
}

var dots = document.getElementsByClassName('dots');
Array.from(dots).forEach(element => {
    // console.log(element);
    element.onmouseenter = (event) =>{
        element.style.transform = "scale(2)";
        element.style.backgroundColor = "#c91c9e"
    }
    
    element.onmouseleave = (event) =>{
        element.style.transform = 'scale(1)';
        element.style.backgroundColor = "#1d86b3";
    }
});

