
var tiles=[];
var row=10;
var col=10;
var Field;
var OpenMonster=["Dinosaurs","Dogs","Dragons","Dwarfs","Elves","Giants","Gnolls","Goblins","Gorgons","Hobogoblins","Horses","Lions","Lycantrophes","Mastodons","Men","Pasant","Ogres","Orcs","Purple worms","Titanotheres"]
var WoodMonster=["Bears","Boars","Centaurs","Centipede","Cockatrices","Dragons","Dryads","Elves","Lycanthropes","Medusa","Men","Pasant","Ogres","Pixies","Giant Worm","Giant Snake","Giant Spieder","Treants","Unicorns","Weasels"]
var MountainMonster=["Cave Bears","Cavemen","Chimeras","Dragons","Dwarfs","Earth Elemetal","Gargoyles","Giants","Goblins","Griffons","Jippogriffons","Hobgoblins","Lions","Men","Minotaur","Pasant","Giant Rats","Sabre Tooth Tiger","Trolls","Wyverns"]
var DessertMonster=["Giant Ants","Cavemen","Centipedes","Chimeras","Cyclops","Djinn","Dragons","Efreet","Fire Elemental","Giants","Gnolls","Livings Statue","Maticores","Men","Mummies","Pasant","Purple Worms","Salamanders","Giant Scorpions","Giant Snake"]
var SwampMonster=["Basilisks","Crocodiles","Giant Crocodiles","Dinosaurs","Dragon turtles","Dragons","Giants","Hydras","Kobolds","Leeches","Lizard Men","Giant Lizard","Medusa","Men","Pasant","Slime","Giant Worm","Giant Toad","Trollss","Giant Snake"]
//var TownMonster=["Cave Bears","Cavemen","Chimeras","Dragons","Dwarfs","Earth Elemetal","Gargoyles","Giants","Goblins","Griffons","Jippogriffons","Hobgoblins","Lions","Men","Minotaur","Pasant","Giant Rats","Sabre Tooth Tiger","Trollss","Wyverns"]
var Names=["Happienes","Dispear","Horror","Sickness","Cutness","Boringness","Timeless"]
var x;
var y;
var canvas = document.getElementById("Canvas");
var ctx=canvas.getContext("2d");
var imgDessert=new Image(36,36);
var imgForest=new Image(36,36);
var imgVillage=new Image(36,36);
var imgMountain=new Image(36,36);
var imgSwamp=new Image(36,36);
var imgOpen=new Image(36,36);
var imgTrail=new Image(36,36);
var imgLair=new Image(36,36);
var imgStronghold=new Image(36,36);
var imgRiver=new Image(36,36);


 imgDessert.src = "Img/Sprites1.png";
 imgMountain.src="Img/Sprites2.png";
 imgForest.src="Img/Sprites3.png";
 imgSwamp.src="Img/Sprites4.png";
 imgOpen.src="Img/Sprites5.png";
 imgTrail.src="Img/Sprites7.png";
 imgLair.src="Img/Sprites9.png";
 imgStronghold.src="Img/Sprites8.png";
 imgRiver.src="Img/Sprites10.png";
 imgVillage.src="Img/Sprites6.png";


var deltaX = 0;
var deltaY = 0;
var textField;
 



for(y=0;y<col;y++){
    tiles[y]=[];
    for(x=0;x<row;x++){
        tiles[y][x]={type:field(),name:naming(),monster:monstering(Field)};

    }
}
imgVillage.onload =function(){
drawTile();
}

function monstering(type){

    if(type=="Open"){
        return OpenMonster[random(0,OpenMonster.length)];
    }
    if(type=="Dessert"){
        return DessertMonster[random(0,DessertMonster.length)];
    }
    if(type=="Wood"){
        return WoodMonster[random(0,WoodMonster.length)];
    }
    if(type=="Mountain"){
        return MountainMonster[random(0,MountainMonster.length)];    
    }
    if(type=="Swamp"){
        return SwampMonster[random(0,SwampMonster.length)];
    }
    if(type=="Village"){return "Townsman" }
}
function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
       // ctx.clearRect(0,0,canvas.width,canvas.height);
        if(deltaX>0){
            deltaX -= 1;
            printing(deltaX,deltaY);
            drawTile();
            coordinator(deltaX,deltaY);
        }
            
            break;
        case 38:
       // ctx.clearRect(0,0,canvas.width,canvas.height);
        if(deltaY>0){
              deltaY -= 1;
              
              printing(deltaX,deltaY);
             drawTile();
            coordinator(deltaX,deltaY);
        }
              
            break;
        case 39:
       // ctx.clearRect(0,0,canvas.width,canvas.height);
        if(deltaX<row-1){
            deltaX += 1;
            
            printing(deltaX,deltaY);
            
            drawTile();
            coordinator(deltaX,deltaY);
        }
            console.log(deltaX)
            break;
        case 40:
       // ctx.clearRect(0,0,canvas.width,canvas.height);
        if(deltaY<col-1){
           deltaY += 1;
           
            printing(deltaX,deltaY);
            
            drawTile();
            coordinator(deltaX,deltaY);
        }
           console.log(deltaY)
            break;
    }
    console.log(deltaX,deltaY);
}
function drawTile(){
    for(y=0;y<col;y++){
        for(x=0;x<row;x++){
            var currentfield=tiles[x][y].type;
            if(currentfield=="Open"){
                   ctx.drawImage(imgOpen , x*36, y*36);
            }  
            
            if(currentfield=="Swamp"){
                ctx.drawImage(imgSwamp , x*36, y*36);
            }  
            if(currentfield=="Dessert"){
                ctx.drawImage(imgDessert , x*36, y*36);
            } 
            if(currentfield=="Mountain"){
                ctx.drawImage(imgMountain , x*36, y*36);
            }
            if(currentfield=="Wood"){
                ctx.drawImage(imgForest , x*36, y*36);
            }
            if(currentfield=="Village"){
                ctx.drawImage(imgVillage , x*36, y*36);
            }
            if(currentfield=="Lair"){
                ctx.drawImage(imgLair , x*36, y*36);
            }
            if(currentfield=="River"){
                ctx.drawImage(imgRiver , x*36, y*36);
            }
            if(currentfield=="Trail"){
                ctx.drawImage(imgTrail , x*36, y*36);
            }
            if(currentfield=="Stronghold"){
                ctx.drawImage(imgStronghold , x*36, y*36);
            }
            
        }
    }
    
  }


function naming(){
return Field + " of "+Names[random(0,Names.length)]+" "  ;
}

function random(k,g){
    return Math.floor(Math.random()*g)+k;
}
function field(){
    var rand=random(0,10);
    
    if((rand==2 )||(rand==3)||(rand==7)||(rand==8)||(rand==9)){
        Field="Open";
    }
    if((rand==0 )||(rand==1)){
        Field="Dessert";
    }
    if((rand==4 )||(rand==6)){
        Field="Wood";
    }
    if(rand==5 ){
        Field="Mountain";
    }
    if(rand==10){
        Field="Swamp";
    }
    if(Field=="Open"){
        rand=random(0,10);
        if((rand==4 )||(rand==5)){
            Field="Village";
        }
        if(rand==10){
            Field="Town";
        }
        if(rand==3){
            Field="River";
        }
        if(rand==1){
            Field="Stronghold";
        }
        if(rand==0){
            Field="Lair";
        }
    }
    if(Field=="Wood"){
        rand=random(0,10);
        if((rand==0 )||(rand==1)){
            Field="River";
        }
        if(rand==9){
            Field="Trail";
        }
        if(rand==10){
            Field="Stronghold";
        }
    }
    if(Field=="Mountain"){
        rand=random(0,10);
        if(rand==1){
            Field="Lair";
        }
        if(rand==9){
            Field="Trail";
        }
        if(rand==10){
            Field="Stronghold";
        }
    }
    if(Field=="Desert"){
        rand=random(0,10);
        if(rand==0){
            Field="Lair";
        }
        if(rand==10){
            Field="Stronghold";
        }
    }
    if(Field=="Swamp"){
        rand=random(0,10);
        if(rand==1){
            Field="Lair";
        }
        if((rand==2)||(rand==3)){
            Field="River";
        }
        if(rand==4){
            Field="Trail";
        }
        if(rand==10){
            Field="Stronghold";
        }
    }
return Field;
}
function printing (X,Y){
    textField=(tiles[X][Y].name+tiles[X][Y].monster);
  document.getElementById("text").innerHTML=textField;
}
function coordinator(X,Y){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawTile();
    ctx.beginPath();
    ctx.rect(X*36,Y*36,36,36);
    ctx.stroke();
    

}
printing(deltaX,deltaY);
coordinator(deltaX,deltaY);
window.addEventListener("keydown",moveSomething,false);

