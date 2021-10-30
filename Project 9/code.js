var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["af93a629-357e-4c5f-af16-cbc83518c85b","84320544-61b4-4520-914b-81ddc269441f","db6770fa-d31f-4e57-9e47-e2a3edb3f2ba","18ba9bfa-da0a-48cd-82b5-920e3198f3d7","aa3b6d8e-93ae-46da-9499-69a93e4c7f46","d1848163-8de4-40ed-8a94-af799013d3d3","5f658854-6760-4d14-a6c1-8510a4dbf8ae","06a08390-7ca9-4c1f-bee6-94785bd69e5a","24c40d24-c7ce-47a7-8a81-1d11402f6816","cd07c507-8f7f-4870-a633-437e28507848","ede035c6-1ac3-4954-9b98-0361e1dec3cf"],"propsByKey":{"af93a629-357e-4c5f-af16-cbc83518c85b":{"name":"run","sourceUrl":null,"frameSize":{"x":40,"y":43},"frameCount":4,"looping":true,"frameDelay":5,"version":"EB9D1mVoEC8v2gVHfLcQ4qv70FtK4Pe2","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":86},"rootRelativePath":"assets/af93a629-357e-4c5f-af16-cbc83518c85b.png"},"84320544-61b4-4520-914b-81ddc269441f":{"name":"idle","sourceUrl":null,"frameSize":{"x":80,"y":86},"frameCount":4,"looping":true,"frameDelay":12,"version":"AdSyBdochS0T5XZlZGhPImLRaELoboad","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":172},"rootRelativePath":"assets/84320544-61b4-4520-914b-81ddc269441f.png"},"db6770fa-d31f-4e57-9e47-e2a3edb3f2ba":{"name":"dead","sourceUrl":null,"frameSize":{"x":80,"y":86},"frameCount":1,"looping":true,"frameDelay":12,"version":"TxXKI9WHdLd2vD8oKFejadYpS10lklut","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":86},"rootRelativePath":"assets/db6770fa-d31f-4e57-9e47-e2a3edb3f2ba.png"},"18ba9bfa-da0a-48cd-82b5-920e3198f3d7":{"name":"restart","sourceUrl":null,"frameSize":{"x":68,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"WxEgV1TZmSm8qA0nwqZPE1LiF1BK0dUR","loadedFromSource":true,"saved":true,"sourceSize":{"x":68,"y":60},"rootRelativePath":"assets/18ba9bfa-da0a-48cd-82b5-920e3198f3d7.png"},"aa3b6d8e-93ae-46da-9499-69a93e4c7f46":{"name":"duck","sourceUrl":null,"frameSize":{"x":110,"y":52},"frameCount":2,"looping":true,"frameDelay":12,"version":"gdNZDqxdl23NbbvArWtpppxJGi1oyQvU","loadedFromSource":true,"saved":true,"sourceSize":{"x":110,"y":104},"rootRelativePath":"assets/aa3b6d8e-93ae-46da-9499-69a93e4c7f46.png"},"d1848163-8de4-40ed-8a94-af799013d3d3":{"name":"cactus1","sourceUrl":null,"frameSize":{"x":30,"y":66},"frameCount":1,"looping":true,"frameDelay":12,"version":"x3vMYEnIU5mJwgA.CARUnXjCkJVXFMQF","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":66},"rootRelativePath":"assets/d1848163-8de4-40ed-8a94-af799013d3d3.png"},"5f658854-6760-4d14-a6c1-8510a4dbf8ae":{"name":" cactus2","sourceUrl":null,"frameSize":{"x":56,"y":92},"frameCount":1,"looping":true,"frameDelay":12,"version":"03MRZlJ5uSQwvHa1JMiGf.0GSptkVLSZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":92},"rootRelativePath":"assets/5f658854-6760-4d14-a6c1-8510a4dbf8ae.png"},"06a08390-7ca9-4c1f-bee6-94785bd69e5a":{"name":"game over","sourceUrl":null,"frameSize":{"x":500,"y":139},"frameCount":1,"looping":true,"frameDelay":12,"version":"VsS0Qxf0iL4HyM5nxDzsQN282dwvhJEB","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":139},"rootRelativePath":"assets/06a08390-7ca9-4c1f-bee6-94785bd69e5a.png"},"24c40d24-c7ce-47a7-8a81-1d11402f6816":{"name":"ground","sourceUrl":null,"frameSize":{"x":2500,"y":619},"frameCount":41,"looping":true,"frameDelay":12,"version":"oPwjagYiiTJ955y5BPX79ni_CJTNVOwa","loadedFromSource":true,"saved":true,"sourceSize":{"x":7500,"y":8666},"rootRelativePath":"assets/24c40d24-c7ce-47a7-8a81-1d11402f6816.png"},"cd07c507-8f7f-4870-a633-437e28507848":{"name":"ground stop","sourceUrl":null,"frameSize":{"x":2500,"y":619},"frameCount":1,"looping":true,"frameDelay":12,"version":"ll8z_K9GwHL3D4e7fMfDigKJD4YUcR2E","loadedFromSource":true,"saved":true,"sourceSize":{"x":2500,"y":619},"rootRelativePath":"assets/cd07c507-8f7f-4870-a633-437e28507848.png"},"ede035c6-1ac3-4954-9b98-0361e1dec3cf":{"name":"offline-sprite-2x.png_1","sourceUrl":"assets/v3/animations/exduhgAjDg5oyB31nKDUWKkJsUdjbf1k6VwPKDZrnEU/ede035c6-1ac3-4954-9b98-0361e1dec3cf.png","frameSize":{"x":2404,"y":130},"frameCount":1,"looping":true,"frameDelay":4,"version":"x1QY93991D1msyFHoTe5i.qvhHgBECza","loadedFromSource":true,"saved":true,"sourceSize":{"x":2404,"y":130},"rootRelativePath":"assets/v3/animations/exduhgAjDg5oyB31nKDUWKkJsUdjbf1k6VwPKDZrnEU/ede035c6-1ac3-4954-9b98-0361e1dec3cf.png"}}};
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

var state = 'Idle';
var score = 0;

var dino = createSprite(70, 325);
dino.setAnimation("idle");
dino.scale = 0.6;

var ground = createSprite(200, 350);
ground.setAnimation("ground stop");
ground.scale = 0.3;

var cactus = createSprite(450, 330);
cactus.setAnimation("cactus1");
cactus.scale = 0.6;

var gameover = createSprite(200, 150);
gameover.setAnimation("game over");
gameover.scale = 0.7;
gameover.visible = false;

var restart = createSprite(200, 200);
restart.setAnimation("restart");
restart.scale = 0.5;
restart.visible = false;

var dot = createSprite(-100, 330, 1, 5000);
var dot1 = createSprite(70, 180, 0.5, 0.5);
var dot3 = createSprite(70, 352, 0.5, 0.5);

function draw() {
  background("white");
  
  textSize(20);
  fill("#535353");
  textFont("Arial Black");
  text(score, 350, 30);
  
  if (state === 'Idle') {
    
    cactus.x = 450;
    dino.y = 325;
    dino.setAnimation("idle");
    ground.setAnimation("ground stop");
    
    gameover.visible = false;
    restart.visible = false;
    
    textSize(20);
    fill("#535353");
    textFont("Arial Black");
    text("Press space to start", 90, 150);
    
    if (keyDown("space")) {
      dino.setAnimation("run");
      ground.setAnimation("ground");
      dino.scale = 1.2;
      state = 'play';
    }
  }
  
  if (state === 'play') {
    
    score = World.seconds;
    
    dino.setAnimation("run");
    dino.scale = 1.2;
    
    if (keyDown("up")) {
      state = 'jump';
    }
    
    if (cactus.isTouching(dot)){
      cactus.x = 450;
      cactus_moving();
    }
    
    if (dino.isTouching(cactus)) {
      state = 'end';
    }
    
    if (keyDown("down")) {
      dino.setAnimation("duck");
      dino.scale = 0.6;
    }
    
    cactus_moving();
    
  }
  
  if (state === 'end') {
    
    gameover.visible = true;
    restart.visible = true;
    
    dino.setAnimation("dead");
    dino.scale = 0.6;
    
    ground.pause();
    
    if (mousePressedOver(restart)) {
      state = 'Idle';
    }
  }
  
  if (state === 'jump') {
    dino.setAnimation("idle");
    
    dino.scale = 0.6;
    
    cactus_moving();
    
    dino.velocityY = -8;
    
    if (dino.isTouching(dot1)) {
      state = 'gravity';
    }
    
    if (cactus.isTouching(dot)){
      cactus.x = 450;
      cactus_moving();
    }
    
    if (dino.isTouching(cactus)) {
      dino.velocityY = 0;
      state = 'end';
    }
  }
  
  if (state === 'gravity') {
    dino.velocityY = 8;
    
    dino.setAnimation("idle");
    dino.scale = 0.6;
    
    cactus_moving();
    
    if (dino.isTouching(dot3)) {
      dino.velocityY = 0;
      state = 'play';
    }
    
    if (cactus.isTouching(dot)){
      cactus.x = 450;
      cactus_moving();
    }
    
    if (dino.isTouching(cactus)) {
      dino.velocityY = 0;
      state = 'end';
    }
  }
  
  drawSprites();
}

function cactus_moving() {
  for (var q = 11; q < 130; q++) {
    cactus.x = cactus.x - 0.05;
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
