let capture;
let vid;
let ttt;
let hehe;

function preload() {
  capture = createVideo('build_1_1.mp4');
  capture.hide();
  capture.loop();
  capture.elt.muted = true;
  
  vid = createVideo('build_2_1.mp4');
  vid.hide();
  vid.loop();
  vid.elt.muted = true;
  
  ttt = createVideo('zoom.mp4');
  ttt.hide();
  ttt.loop();
  ttt.elt.muted = true;
  
  hehe = createVideo('zoom zoom.mp4');
  hehe.hide();
  hehe.loop();
  hehe.elt.muted = true;
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  noStroke();
  background(200);
  
  /* 좌우 움직이는 카메라
  let camX = map(mouseX,0, width,-200, 200);
  camera(camX, 0,(height/2) / tan(PI/6), camX, 0, 0, 0, 1, 0);
*/
  
  /* 
  let fov = PI/3;
  let  cameraZ = (height/2.0) / tan(fov / 2.0);
  perspective(fov, width / height, cameraZ / 10.0, mouseX);
  */
  
  
  // 카메라 비율 확대
  //let fov = PI/4;
  //let cameraZ = (height/2.0) / tan(fov / 2.0);
  //perspective(fov, width / height, cameraZ / 10.0, cameraZ * 10.0);
  
  
  //줌인 줌아웃
  let fov = map(mouseX, 0, width, 0, PI);
  let  cameraZ = (height/2.0) / tan(PI / 2.5);
  perspective(fov, width / height, cameraZ / 10.0, cameraZ * 10.0);
  
  
  
  // +X 오른쪽, -X 왼쪽
  // +Y 아래로 내려감,-Y 위로 올라감
  // +Z 뒤로 감, -Z 앞으로 감
  
  
  // 우측면
  push();
  translate(600, 0, 0);
  texture(capture);
  box(15,500,800);
  pop();
  
  push();
  translate(700, -300, -500);
  texture(capture);
  box(5,500,1500);
  pop();
  //줌인 줌아웃용
  push();
  translate(200, -300, -800);
  texture(capture);
  box(5,500,1500);
  pop();
  
  push();
  translate(850, 690, -3800);
  texture(capture);
  box(5,530,1700);
  pop();
  
  push();
  translate(940, 500, -4500);
  texture(hehe);
  box(5,530,2000);
  pop();
  
  push();
  translate(550, -500, -800);
  texture(capture);
  box(10,200,700);
  pop();
  
  push();
  translate(500, -100, 200);
  texture(vid);
  box(5, 200, 600);
  pop();
  
  push();
  translate(600, 100, -1500);
  texture(capture);
  box(5, 400, 1000);
  pop();
  
  push();
  translate(900, 150, -1000);
  texture(capture);
  box(5, 200, 900);
  pop();
  
  push();
  translate(1000, -400, -1900);
  texture(ttt);
  box(5, 500, 2000);
  pop();
  
  push();
  translate(1100, 350, -1600);
  texture(ttt);
  box(5, 400, 1800);
  pop();
  
  push();
  translate(1400, -70, -3500);
  texture(hehe);
  box(10, 400, 2500);
  pop();
  
  push();
  translate(800, -70, 100);
  texture(ttt);
  box(10, 290, 1400);
  pop();
  
  push();
  translate(650, -70, -3000);
  texture(hehe);
  box(10, 390, 2000);
  pop();
  
  push();
  translate(900, 500, -2800);
  texture(hehe);
  box(10, 390, 1800);
  pop();
  
  push();
  translate(650, 900, -3600);
  texture(ttt);
  box(10, 500, 1600);
  pop();
  
  push();
  translate(860, -500, -3300);
  texture(hehe);
  box(10, 470, 3000);
  pop();
  
  push();
  translate(940, -1200, -3400);
  texture(hehe);
  box(10, 890, 3000);
  pop();
  
  push();
  translate(765, 650, -30);
  texture(vid);
  box(10, 290, 900);
  pop();
  
  push();
  translate(835, 409, -70);
  texture(vid);
  box(10, 140, 1200);
  pop();
  
  //좌측면
  push();
  translate(-500, 200, 0);
  texture(capture);
  box(5, 200, 400);
  pop();
  
  push();
  translate(-680, 500, 250);
  texture(ttt);
  box(5, 400, 1400);
  pop();
  
  push();
  translate(-100, 400, -2900);
  texture(ttt);
  box(13, 400, 1400);
  pop();
  
  push();
  translate(-820, -800, -4800);
  texture(hehe);
  box(10, 420, 2500);
  pop();
  
  push();
  translate(-720, 200, 500);
  texture(hehe);
  box(5, 310, 1500);
  pop();
  
  push();
  translate(-720, 200, -5600);
  texture(hehe);
  box(5, 420, 1830);
  pop();
  
  push();
  translate(-300, -200, 500);
  texture(vid);
  box(5, 200, 1100);
  pop();
  
  push();
  translate(150, -200, -3000);
  texture(capture);
  box(5, 200, 1100);
  pop();
  
  push();
  translate(-340, -100, 200);
  texture(capture);
  box(5, 150, 400);
  pop();
  
  push();
  translate(100, -100, -990);
  texture(capture);
  box(5, 300, 600);
  pop();
  
  push();
  translate(-250, -80, 200);
  texture(capture);
  box(5, 150, 900);
  pop();
  
  push();
  translate(-300, 200, 200);
  texture(capture);
  box(5, 150, 500);
  pop();
  
  push();
  translate(-550, 100,-500);
  texture(vid);
  box(5, 700, 700);
  pop();
  
  push();
  translate(-450, 100, -1500);
  texture(vid);
  box(5, 400, 1000);
  pop();
  
  push();
  translate(-750, 400, -1900);
  texture(vid);
  box(5, 700, 1700);
  pop();
  
  push();
  translate(-1000, 400, -1200);
  texture(vid);
  box(5, 400, 1000);
  pop();
  
  push();
  translate(-760, 900, -4500);
  texture(hehe);
  box(5, 1000, 4000);
  pop();
  
  push();
  translate(60, 100, -4300);
  texture(hehe);
  box(5, 500, 1400);
  pop();
  
  
  push();
  translate(-900, -500, -2500);
  texture(hehe);
  box(5, 800, 2000);
  pop();
  
  push();
  translate(-900, 200, -200);
  texture(vid);
  box(5, 400, 1000);
  pop();
  
  push();
  translate(-900, -600, -4000);
  texture(hehe);
  box(5, 400, 1900);
  pop();
  
  push();
  translate(-750, -80, -300);
  texture(capture);
  box(5, 340, 1300);
  pop();
  
  push();
  translate(-630, -200, -3900);
  texture(hehe);
  box(5, 530, 2500);
  pop();
  
  push();
  translate(-780, 30, -4000);
  texture(hehe);
  box(5, 370, 2300);
  pop();
  
  //바닥 // (X,+Y,Z)
  push();
  translate(-200, 600, -1500);
  texture(vid);
  box(300, 5, 700);
  pop();
  
  push();
  translate(-100, 830, 700);
  texture(vid);
  box(320, 5, 1400);
  pop();
  
  push();
  translate(200, 830, 640);
  texture(capture);
  box(320, 5, 800);
  pop();
  
  push();
  translate(4, 700, 400);
  texture(vid);
  box(700, 5, 700);
  pop();
  
  push();
  translate(300, 450, 10);
  texture(capture);
  box(400, 5, 800);
  pop();
  
  push();
  translate(-200, 500, 700);
  texture(vid);
  box(300, 5, 1000);
  pop();
  
  push();
  translate(500, 600, 300);
  texture(vid);
  box(300, 5, 1000);
  pop();
  
  push();
  translate(-400, 700, -600);
  texture(ttt);
  box(500, 7, 1000);
  pop();
  
  push();
  translate(500, 400, -700);
  texture(hehe);
  box(500, 7, 1500);
  pop();
  
  push();
  translate(200, 550, 300);
  texture(hehe);
  box(300, 5, 2000);
  pop();
  
  push();
  translate(-200, 800,-900);
  texture(hehe);
  box(300, 10, 1500);
  pop();
  
  push();
  translate(-60, 900,-1700);
  texture(ttt);
  box(300, 10, 1500);
  pop();
  
  push();
  translate(-40, 1200,-3000);
  texture(ttt);
  box(900, 10, 1500);
  pop();
  
  push();
  translate(-700, 1400,-3500);
  texture(hehe);
  box(1000, 10, 2000);
  pop();
  
  push();
  translate(300, 800,-3200);
  texture(ttt);
  box(200, 10, 1200);
  pop();
  
  push();
  translate(-500, 650, 200);
  texture(ttt);
  box(200, 10, 900);
  pop();
  
  push();
  translate(600, 1000,-2900);
  texture(hehe);
  box(900, 10, 1800);
  pop();
  
  push();
  translate(650, 1000, 100);
  texture(ttt);
  box(340, 10, 1200);
  pop();
  
  push();
  translate(1000, -1400, -3500);
  texture(hehe);
  box(400, 10, 1900);
  pop();
  
  push();
  translate(-640, 1000, -400);
  texture(vid);
  box(560, 10, 1200);
  pop();
  
  
  //윗면 // (X,-Y,Z)
  push();
  translate(550, -1200,-2500);
  texture(vid);
  box(420, 10, 1000);
  pop();
  
  push();
  translate(600, -1000,-1000);
  texture(vid);
  box(300, 10, 1200);
  pop();
  
  push();
  translate(-600, -950,-1300);
  texture(vid);
  box(450, 10, 1100);
  pop();
  
  push();
  translate(-200, -800,-1300);
  texture(vid);
  box(600, 10, 1100);
  pop();
  
  push();
  translate(-200, -600,-1100);
  texture(vid);
  box(200, 10, 700);
  pop();
  
  push();
  translate(400, -500,-500);
  texture(vid);
  box(200, 10, 700);
  pop();
  
  push();
  translate(300, -650,-200);
  texture(capture);
  box(500, 10, 900);
  pop();
  
  push();
  translate(300, -800,-1800);
  texture(ttt);
  box(300, 10, 1500);
  pop();
  
  push();
  translate(400, -900, 500);
  texture(vid);
  box(300, 10, 1100);
  pop();
  
  push();
  translate(200, -770, 200);
  texture(vid);
  box(400, 10, 970);
  pop();
  
  push();
  translate(-400, -600, 200);
  texture(hehe);
  box(200, 10, 800);
  pop();
  
  push();
  translate(-350, -800, 200);
  texture(capture);
  box(500, 10, 500);
  pop();
  
  push();
  translate(-150, -750, -400);
  texture(capture);
  box(250, 10, 800);
  pop();
  
  push();
  translate(-20, -890, -3000);
  texture(hehe);
  box(350, 10, 2500);
  pop();
  
  push();
  translate(-900, -890, -1700);
  texture(capture);
  box(350, 10, 900);
  pop();
  
  push();
  translate(-700, -1260, -3300);
  texture(hehe);
  box(800, 10, 2000);
  pop();
  
  push();
  translate(790, -1060, -3900);
  texture(hehe);
  box(400, 10, 2000);
  pop();
  
  push();
  translate(-230, -990, 250);
  texture(hehe);
  box(380, 10, 1840);
  pop();
  
  push();
  translate(680, -730, 130);
  texture(capture);
  box(290, 10, 890);
  pop();
  
  //월드를 움직이도록 드래그
  let radius = width * 1.5;
  orbitControl();

  normalMaterial();
  translate(0, 0, -600);
  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      push();
      let a = (j / 12) * PI;
      let b = (i / 12) * PI;
      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 2,
        cos(2 * a) * radius * sin(b)
      );
    
      pop();
    }
  }
  
}