const canvasColor = "#fdfbec";
const backgroundColor = "#1f180e";
const green1 = "#bbbcaa";
const green2 = "#88a69c";
const green3 = "#a3a799";
const green4 = "#68987e";
const green5 = "#404234";
const green6 = '#606b5b';
const green7 = '#769585';
const green8 = '#3d744d';
const beige = "#ede4d5";
const beige1 = "#ede1cb";
const beige2 = "#cdbc9e";
const beige3 = "#b6b5a0" ;
const brown1 = "#898584";
const brown2 = "#8e6a5e";
const orange = "#cba286"
let backgroundHeight;

function triangleGroup1() {
  fill(green6)
  quad(22, 398, 90, 286, 110, 318, 22, 420)
  quad(22, 420, 110, 318, 115, 330, 22, 450)
  quad(22, 450, 115, 330, 125, 344, 22, 470)
  fill(green4);
  quad(22, 470, 125, 344, 128, 358, 22, 490);
  quad(22, 490, 128, 358, 136, 390, 22, 550);
  fill(green3);
  quad(22, 550, 136, 390, 142, 425, 30, backgroundHeight);
  fill(green2);
  triangle(30, backgroundHeight, 142, 425, 217, backgroundHeight);
  fill(green1);
  triangle(30, backgroundHeight, 121, 484, 217, backgroundHeight);
  fill(green2)
  quad(22, 350, 125, 344, 87, 277, 22, 316)
  triangle(55, 348, 93, 288, 125, 344)
  fill(beige1)
  triangle(72, 320, 93, 288, 112, 320)
}

function triangleGroup2() {
    fill(green5)
    quad(169, 538, 197, 508, 205, 528, 176, 568)
    fill(green6)
    quad(176, 568, 248, 466, 254, 480, 181, 590)
    fill(green4)
    quad(181, 590, 254, 480, 259, 490, 189, 623)
    quad(189, 623, 259, 490, 276, 526, 196, 654)
    fill(green7)
    quad(196, 654, 276, 526, 304, 579, 217, backgroundHeight)
    fill(green2)
    quad(217, backgroundHeight, 304, 579, 328, 634, 280, backgroundHeight)
    fill(green1)
    triangle(280, backgroundHeight, 328, 634, 374, backgroundHeight)
}

function triangleGroup3() {
    fill(green5)
    quad(314, 603, 349, 513, 370, 526, 324, 626)
    fill(green4)
    quad(324, 626, 392, 477, 400, 495, 336, 654)
    quad(336, 654, 400, 495, 418, 545, 349, 682)
    fill(green7)
    quad(349, 682, 418, 545, 440, 600, 366, 720)
    fill(green2)
    quad(353, backgroundHeight, 440, 600, 460, 644, 407, backgroundHeight)
    fill(green1)
    triangle(407, backgroundHeight, 460, 644, 494, backgroundHeight)
}

function triangleGroup4(){
  fill(green6)
  triangle(430, 477, 488, 403, 530, 477)
  fill(green4)
  triangle(444, 477, 494, 414, 540, 477)
  fill(green7)
  triangle(464, 477, 506, 430, 554, 477)
  fill(green4)
  quad(218, 410, 412, 410, 444, 477, 243, 477)
  fill(green7)
  quad(412, 410, 434, 395, 464, 477, 444, 477)
  fill(green6)
  quad(265, 410, 272, 410, 302, 477, 294, 477)
  quad(316, 410, 325, 410, 360, 477, 344, 477)
  quad(355, 410, 370, 410, 412, 477, 396, 477)
  fill(green5)
  triangle(340, 477, 355, 410, 396, 477)
  triangle(280, 477, 318, 410, 344, 477)
  triangle(228, 477, 265, 410, 294, 477)
  quad(192, 433, 210, 417, 243, 477, 210, 477)
  quad(243, 477, 210, 417, 218, 410, 250, 477)
}

function triangleGroup5(){
  fill(green6)
  quad(328, 208, 342, 220, 375, 190, 367, 177)
  fill(green4)
  quad(292, 175, 328, 208, 367, 177, 346, 143)
  fill(green2)
  triangle(445, 221, 445, 262, 400, 222)
  triangle(254, 149, 346, 143, 292, 175)
  triangle(194, 154, 253, 150, 212, 186)
  fill(green4)
  quad(212, 186, 228, 214, 278, 164, 254, 149)
  fill(green6)
  quad(228, 214, 240, 225, 292, 175, 278, 164)
  fill(green2)
  triangle(159, 88, 153, 178, 205, 174)
  fill(green6)

}

function ellipseGroup(){
  fill(green2)
  rect(190, 335, 235, 75, 0, 0, 20, 20)
  fill(beige2)
  ellipse(308, 345, 245, 90)
  arc(309, 340, 242, 30, 0, PI)
}

function rectGroup1(){
    fill(green5)
    rect(438, 470, 12, backgroundHeight - 470)
    fill(green8)
    rect(450, 470, 18, backgroundHeight - 470)
    fill(green4)
    rect(468, 470, 20,  backgroundHeight - 470)
    rect(488, 470, 22, backgroundHeight - 470)
    fill(green7)
    rect(510, 528, 38, backgroundHeight - 528)
    fill(green4)
    rect(545, 465, 40, backgroundHeight - 470)
    fill(green1)
    rect(585, 460, 53, 70)
    fill(green4)
    rect(585, 530, 20, backgroundHeight - 530)
    fill(green5)
    rect(605, 530, 30, backgroundHeight - 530)
}

function rectGroup2(){
  fill(green2)
  rect(585, 328, 46, 132)
  fill(green7)
  rect(553, 328, 32, 139)
  fill(green4)
  rect(533, 328, 20, 139)
  fill(green6)
  rect(516, 328, 17, 139)
  fill(green5)
  rect(488, 328, 28, 144)
  rect(468, 328, 20, 144)
}

function rectGroup3(){
  fill(green4)
  triangle(602, 230, 670, 155, 700, 200)
  fill(green7)
  quad(670, 155, 602, 230, 593, 219, 650, 155)
  fill(green6)
  quad(593, 219, 650, 155, 633, 155, 580, 219)
  fill(green6)
  rect(515, 219, 20, 109)
  rect(535, 219, 18, 109)
  fill(green4)
  rect(553, 219, 20, 109)
  fill(green5)
  rect(573, 219, 20, 109)
  fill(green7)
  rect(593, 219, 20, 109)
  fill(green8)
  rect(613, 210, 18, 109)
  rect(631, 200, 34, 260)
  fill(green7)
  rect(665, 200, 30, 260)
  fill(beige1)
  rect(695, 200, 30, 260)
  fill(green4)
  rect(725, 200, 22, 260)
  fill(green7)
  rect(747, 200, 30, 260)
  fill(green4)
  rect(777, 50, 45, 260)
}

function rectGroup4(){
  fill(green5)
  rect(684, 0, 12, 200)
  rect(696, 0, 18, 200)
  fill(green6)
  rect(714, 0, 12, 200)
  fill(green8)
  rect(726, 0, 15, 200)
  fill(green4)
  rect(741, 0, 35, 200)
  fill(green4)
  triangle(655, 200, 680, 170, 700, 200)
}

function rectGroup5(){
  fill(green5)
  quad(22, 25, 112, 160, 164, 108, 100, 0)
  fill(green6)
  strokeWeight(0)
  triangle(22, 22, 22, 0, 75, 0)
  quad(22, 20, 116, 125, 136, 106, 75, 0)
  strokeWeight(0.3)
  fill(green6)
  quad(53, 0, 148, 120, 170, 94,  73, 0)
  fill(green4)
  triangle(500, 130, 394, 216, 345, 130)
  fill(green4)
  quad(73, 0, 99, 0, 157, 88, 162, 102)
  fill(green5)
  quad(158, 85, 154, 194, 548, 167, 548, 85)
  fill(green5)
  rect(370, 190, 18, 70)
  rect(348, 190, 22, 78)
  fill(green2)
  triangle(500, 130, 394, 216, 335, 130)
  rect(450, 130, 68, 36)
  fill(green4)
  quad(158, 85, 194, 154, 520, 130, 518, 25)
  fill(beige2)
  quad(100, 0, 458, 0, 457, 62, 158, 88)
  fill(beige1)
  triangle(196, 0, 360, 0, 225, 30)
  fill(green5)
  rect(518, 40, 132, 30)
  fill(green4)
  rect(518, 70, 132, 30)
  fill(green8)
  rect(518, 100, 132, 20)
  fill(green6)
  rect(518, 120, 132, 25)
  fill(green4)
  rect(458, 0, 192, 40)
  fill(green8)
  rect(450, 166, 66, 22)
  fill(green4)
  rect(450, 188, 65, 15)
  rect(450, 203, 65, 15)
  fill(green6)
  rect(450, 218, 65, 10)
  fill(green5)
  rect(450, 228, 65, 15)
}

function rectGroup6(){
  fill(green8)
  quad(390, 284, 430, 284, 435, 268, 390, 268)
  fill(green5)
  quad(390, 284, 430, 284, 420, 330, 380, 320)
  fill(green1)
  quad(357, 260, 390, 260, 390, 320, 357, 320)
  fill(green4)
  rect(322, 268, 35, 50)
  fill(green5)
  rect(305, 268, 17, 50)
  fill(green1)
  quad(256, 219, 304, 217, 305, 305, 256, 305)
  fill(green7)
  rect(238, 219, 18, 90)
  rect(230, 219, 8, 95)
  rect(220, 226, 10, 100)
  rect(213, 230, 7, 100)
  fill(green6)
  quad(180, 230, 213, 230, 213, 330, 190, 340)
  fill(beige1)
  rect(198, 289, 15, 40)
  fill(green7)
  quad(184, 289, 198, 289, 198, 329, 186, 340)
  quad(156, 310,184, 289, 186, 346, 163, 346)
  fill(green3)
  quad(163, 346, 198, 346, 220, 413, 188, 436)
  fill(green5)
  quad(118, 349, 120, 270, 150, 270, 163, 349)
  fill(green4)
  quad(150, 346, 163, 346, 188, 436, 176, 448)
  fill(green6)
  quad(140, 348, 150, 348, 176, 448, 168, 455)
  fill(green5)
  quad(125, 348, 140, 348, 168, 455, 150, 467)
  fill(green4)
  quad(120, 270, 118, 349, 80, 345,  60, 278)
  quad(150, 270, 130, 270, 121, 235, 140, 233)
  quad(66, 300, 78, 300, 58, 220, 46, 225)
  fill(green5)
  quad(46, 225,  40, 230, 60, 295, 68, 291)
  quad(40, 230, 40, 222, 115, 200, 115, 223)
  fill(green3)
  quad(93, 274, 72, 278, 64, 245, 91, 235 )
  quad(64, 245, 118, 230, 118, 210, 58, 228)

}

function houseGroup() {
    fill(green1)
    quad(635, 530, 824, 530, 825, backgroundHeight, 583, backgroundHeight)
    fill(beige1)
    quad(632, 416, 822, 416, 825, 530, 638, 530)
    /** house window */
    fill(orange)
    stroke(orange)
    quad(632, 416, 678, 416, 680, 453, 634, 453)
    /** house roof */
    fill(beige2)
    stroke(beige2)
    triangle(632, 416, 728, 332, 822, 416)
    fill(orange)
    quad(710, 348, 745, 348, 760, 358, 698, 358)
    quad(690, 366, 780, 374, 789, 387, 674, 379)
    quad(658, 393, 797, 393, 812, 407, 642, 407)
    /** house door  */
    fill(beige2)
    stroke(beige2)
    rect(680, 459, 58, 71, 20, 0, 0, 0)
    fill(beige3)
    stroke(beige3)
    rect(738, 459, 42, 71, 0, 20, 0, 0)
    /** grass */
    stroke(backgroundColor)
    fill(green4)
    quad(620, 588, 825, 598, 825, 664, 605, 654)
    fill(green8)
    rect(780, 530, 45, backgroundHeight - 530 )
    fill(green1)
    triangle(618, 596, 550, 623, 604, 660)
    quad(582, 645, 604, 660, 583, backgroundHeight, 571, backgroundHeight)
}

function arcGroup(){
  fill(green2)
  arc(533, 328, 200, 130, -PI, 0, CHORD);
  arc(565, 328, 130, 115, -PI, 0, CHORD);
  fill(beige1)
  arc(580, 328, 120, 85, -PI, 0, CHORD);
}

function gardenGroup() {
  fill(beige2)
  rect(822, 0, 95, backgroundHeight)
  fill(green1)
  rect(917, 0, 107, backgroundHeight)
  fill(brown1)
  quad(741, 0, 856, 0, 820, 50, 777, 50)
  fill(green4)
  rect(917, 0, 107, 25)
  fill(green7)
  quad(728, 332, 822, 235, 917, 316, 822, 416)
  fill(green8)
  triangle(822, 235, 807, 328, 742, 320)
  triangle(822, 416, 817, 325, 905, 328)
  fill(green4)
  rect(917, 586, 40, backgroundHeight - 586)
  fill(brown2)
  rect(880, 586, 37, backgroundHeight - 586)
  fill(green8)
  rect(984, 465, width - 984, backgroundHeight - 465)
  triangle(922, 85, 956, 38, 993, 85)
  triangle(926, 198, 954, 154, 1005, 198)
  triangle(933, 313, 973, 268, 1000, 314)
  triangle(932, 396, 965, 358, 990, 396)
  fill(green4)
  triangle(917, 414, 982, 462, 917, 474)
  fill(beige1)
  rect(942, 85, 38, 45)
  rect(942, 198, 34, 50)
  rect(942, 313, 33, 42)
  rect(944, 396, 26, 28)
}

function setup() {
  createCanvas(1024, 768);
  backgroundHeight = 740;
}

function draw() {
  background(canvasColor);
  stroke(backgroundColor);
  fill(backgroundColor);
  rect(22, 0, width, backgroundHeight);
  strokeWeight(0.3);
  rectGroup1();
  rectGroup2();
  rectGroup3();
  rectGroup4();
  rectGroup5()
  triangleGroup5();
  rectGroup6();
  ellipseGroup();
  arcGroup();
  triangleGroup4()
  triangleGroup3();
  triangleGroup2();
  triangleGroup1();
  houseGroup()
  gardenGroup()
  fill(beige);
  stroke(beige);
  triangle(15, backgroundHeight, 22, 476, 30, backgroundHeight);
  triangle(width, backgroundHeight, 315, backgroundHeight, width, 712);
}
