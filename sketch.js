var date;
var dateTexture;
var calendarTexture;
var angle = 0;
var zoom = 180;
var font7;
function preload() {
  font7 = loadFont('assets/digital-7.ttf');
}


function setup() {
    createCanvas(900, 650, WEBGL);
    date = day() + ' ' + months[month() - 1].substr(0, 3) + ' ' + year();

    dateTexture = createGraphics(200, 100);
    dateTexture.textAlign(CENTER);
    dateTexture.fill(255)
  
}

function draw() {
  	// console.log(dateArray);
    time = (hour() < 10 ? '0'+hour() : hour()) + ':' + (minute() < 10 ? '0'+minute() : minute()) + ':' + (second() < 10 ? '0'+second() : second());
    background(200);

    camera(0,-80,zoom,0,0,0,1,0,0)

    dateTexture.background(0);
  	dateTexture.textFont(font7);
    dateTexture.textSize(30);
    dateTexture.text('' + time, dateTexture.width / 2, dateTexture.height / 2);
  	dateTexture.textSize(12);
    dateTexture.text('' + date, dateTexture.width / 2, dateTexture.height - 20);

    ambientLight(100);
    pointLight(255, 255, 255, 200, 200, 600);
    rotateY(mouseX * 0.01);  
	
  	//jam digital
  	push()
		rotateY(PI/4);
  		translate(-200,0,-200);
      //box jam
      push()
        translate(0, 0, -50.1)
        ambientMaterial('#333');
        box(220, 120, 100);
      pop();

      //layar
      push()
        texture(dateTexture);
        plane(200, 100);
      pop();
  	pop();

  
	//meja
  	push()
    translate(0, 65, 0)
    ambientMaterial('#8c634f')
    box(1200, 10, 700);
  	pop()
  	
  	//plant
  	push()
  	translate(200,0,-200)
  	translate(0,-10,0)
  	ambientMaterial('green')
  	ellipsoid(50, 70, 50);
  	translate(0,30,0)
  	ambientMaterial('#353535')
  	cylinder(60,70);
  	pop()
  	
  	translate(0,50,0);
  	push()
  	translate(0,-6,0);
  	rotateX(PI/2);
  	ambientMaterial('#4286f4')
  	plane(200,250);
  	translate(0,6,0);
  	pop()
  	ambientMaterial(255)
  	box(200,10,250);
	
}

function mouseWheel(event) {
    zoom += event.delta;
    // print(zoom);
    //uncomment to block page scrolling
    //return false;
}