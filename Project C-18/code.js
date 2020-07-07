var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","29dc72e1-2ef7-4271-9f92-f797d8e8b6e2","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","49f523f4-212c-443e-a968-4e8d3434b89b"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":9,"looping":true,"frameDelay":12,"version":"sGeUX1e0AnhIeAOhaYgX9CV.ybJtVBrq","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"29dc72e1-2ef7-4271-9f92-f797d8e8b6e2":{"name":"monkey_copy_1","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":9,"looping":true,"frameDelay":12,"version":"WdUUbf6sJZ85yyf1Bp2FdUU_6cNxIhkz","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/29dc72e1-2ef7-4271-9f92-f797d8e8b6e2.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"t.oeychOUl3xc9bho.rrLW2.tkwJpg2f","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"4MV6yZ5m0_TesJSodLGr8_YtGYx9nBML","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"49f523f4-212c-443e-a968-4e8d3434b89b":{"name":"sunshine_showers_1","sourceUrl":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var monkey = createSprite(180, 200, 20, 20);
monkey.setAnimation("monkey_copy_1");
monkey.scale = 0.1;

var ground = createSprite(180, 380, 450, 3);
ground.velocityX = 0.00001;
ground.x = ground.width/2;

var FoodGroup = createGroup();
var obstacleGroup = createGroup();

var score = 0;
var survivalTime = 0;

score = 0;

function preload() {
 backImage = loadImage = ("jungle.jpg");

foodImage = ("Banana.png");
obstacleImage = ("stone.png");
}

function setup() {
  var background = createSprite("400, 400, 400, 400");
  background.setAnimation("sunshine_showers_1");
  background.velocityX = 10;
  ground.visible = false;
}

function draw() {

 
 if (ground.x<0) {
   ground.x = ground.width/2;
 }
 
 if (keyDown("space")) {
    monkey.velocityY = -12;
  }
   monkey.velocityY = monkey.velocityY + 0.8;
    
   monkey.collide(ground); 

drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(World.frameCount/frameRate()); 
  text("Survival Time: "+ survivalTime, 100,50);
  
  if (foodGroup.isTouching(monkey)) {
   score = score + 2; 
   foodGroup.visble = false;
  }

switch(score){
  case 10: monkey.scale = 0.12;
        break;
  case 20: monkey.scale = 0.14;
        break;
  case 30: monkey.scale = 0.16;
        break;
  case 40: monkey.scale = 0.18;
        break;
  default: break;
}

if (obstacleGroup.isTouching(monkey)) {
  monkey.scale = 0.1;
}

drawSprites();
}

function spawnFood() {
  //write code here to spawn the Food
  if (World.frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.setAnimation("Banana");
    banana.scale=0.05;
    
    //add each banana to the group
    FoodGroup.add(banana);
    
    stroke("white");
    textSize(20);
    fill(white);
    text("Score: "+ score, 500,50);
    
    drawSprites();
  }
   
    function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.setAnimation("Stone");
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
    
    drawSprites();
  }
}
  }
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
