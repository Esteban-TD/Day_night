var rectX = 10;
var rectY = 940;

function setup() {

    createCanvas(1000,1000);
}

function draw() {

    background("#1391EE");


    // Follows Mouse
    fill("#ADD8E6");
    noStroke();
    ellipse(mouseX,mouseY,60,60);

    // SUN
    fill("#ffff00");
    strokeWeight(3);
    ellipse(1000,0,600,600)

    textSize(40);
    textFont("Georgia");
    text(ITALIC);
    text('Day',10,30);
    
    
    fill('green');    
    ellipse(0, 900, 1000, 600);
    fill('green')    
    ellipse(600, 900, 1000, 600)  
    
    fill('white')

    if(keyCode == RIGHT_ARROW || rectX == 40) {
        rectX += 10
        fill('#EE2413');

    } else if(keyCode == LEFT_ARROW){

        rectX -= 10;
        fill('gray')

    } else if (keyCode == UP_ARROW) {

        rectY -= 10;
        fill('white')

    }else if (keyCode == DOWN_ARROW) {

        rectY += 10;
        fill('black')
    }

    square(rectX, rectY, 55, 20);

    if(rectX > width/2){
        background('blue');
        square(rectX, rectY, 55, 20); 
        
 fill('green');    
    ellipse(0, 900, 1000, 600);
    fill('green')    
    ellipse(600, 900, 1000, 600)

        //    Stars
        var randomWidth = random(1000);
        var randomHeight = random(1000);


        strokeWeight(1);
        fill("#ffff00");  
        ellipse(randomWidth,randomHeight,10,10);


        //    Moon   
        fill("#A4A1A1");
        ellipse(0, 0, 600, 600) 

        fill('yellow');  
        textSize(40);
        textFont("Georgia");
        text(ITALIC);
        text('Night',890,30);
    }

}