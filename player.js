class Player{
constructor(x,y){
this.width = 50;
this.height = 50;
this.size = 50;
this.x = x;
this.y = y;
this.image = loadImage("images/trex_1.png","images/trex_2.png","images/trex_3.png");

}
move(x,y){
    this.x = this.x + x;
    this.y = this.y + y;
    
}
display(){
    imageMode(CENTER);
    image(this.image,this.x,this.y,50,60);
}



}