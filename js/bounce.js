const bounceBallDiv = document.getElementById('ballDiv');

bounceBallDiv.style.height = '400px';
bounceBallDiv.style.width = '400px';
bounceBallDiv.style.border = "1px solid green";
bounceBallDiv.style.float = 'right';
bounceBallDiv.style.position = 'relative';
bounceBallDiv.style.right = '100px';
bounceBallDiv.style.top = '100px';

const ball = document.createElement('div');
ball.style.height = '50px';
ball.style.width = '50px';
ball.style.background ="#1d86b3";
ball.style.borderRadius = '50%';
// ball.style.margin =  '0 auto';
ball.style.position = 'absolute';
ball.style.left = '50%';
ball.style.transform = 'translateX(-50%)';

bounceBallDiv.appendChild(ball);



var counter = -1;
var speed = 1;

setInterval(() =>{


    ball.style.top = counter + 'px';

    // counter = (counter+1)%355;    
    if(counter>355){
        speed = -1;
    }
    else if(counter<-1){
        speed = 1;
    }
    counter += speed;

    
},10);







