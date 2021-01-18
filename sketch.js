var pet,petimg,petimg2;
var database,foodS,foodstockref;
var feed,addFood;
var feedTime,lastFed;
var foodObj;
function preload()
{
  petimg = loadImage("images/Dog.png");
  petimg2 = loadImage("images/Dog2.png");
}

function setup() {
  createCanvas(1000, 500);
  database = firebase.database();
  foodObj=new Food();
  

  pet = createSprite(800,220,150,150);
  pet.addImage(petimg);
  pet.scale =0.25;
  feed=createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}


function draw() {  
background(46,139,87);
  feedTime=database.ref('FeedTime');
  feedTime.on("value",function(data){
    lastFed=data.val();
  })
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+lastFed%12+"PM",350,30);
  }else if(lastFed==0){
    text("Last Feed: 12 AM",350,30)
  }else{
    text("Last Feed : "+lastFed,350,30);
  }

  foodObj.display();
  drawSprites();


}
function readStock(data){
  foodS=data.val;
  foodObj.updateFoodStock(foodS);
}
function feedDog(){
  pet.addImage(Dog2.png);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}
function addFoods(){
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}


