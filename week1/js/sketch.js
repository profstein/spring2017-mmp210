function setup(){
createCanvas(800,800);
    
 line(55, 25, 70, 800);
//two points, numbers in (x1, y1, x2, y2)
    
  //head
    ellipse(300,300,600);
    //eyes
    ellipse(150, 230, 150, 75);
    ellipse(450, 230, 150, 75);
    //nose
    triangle(30, 75, 58, 20, 86, 75);
}