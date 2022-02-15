var lastResult =[];
var colors= [];
var diamonds = [];
var betAmount=[];
var currentIndex;
var balance;
function startSlot(){

  document.getElementById("info").innerHTML="";
  if(balance-betAmount[currentIndex]<0){
    document.getElementById("info").innerHTML="you dont have enough money";
  }else{
    document.getElementById("spinButton").disabled=true;
    const elem = document.getElementById("anim");
    balance-=betAmount[currentIndex];
    document.getElementById("balance").innerHTML=balance;
    hideUpperDiamonds();
    var result=[];
    if(lastResult.length==0){
      for(var i = 0 ; i<18;i++){
        let rnd =Math.random()*100;

        switch(true){
          case rnd>=0&&rnd<=50:
            diamonds[i].src=colors[0];
            if((i==3||i==4||i==5)&&result.indexOf(colors[0])==-1){result.push(colors[0]);}
            lastResult[i]=colors[0];
            break;
          case rnd>=50 && rnd <80:
            diamonds[i].src=colors[1];
            if((i==3||i==4||i==5)&&result.indexOf(colors[1])==-1){result.push(colors[1]);}
            lastResult[i]=colors[1];
            break;
          case rnd >= 80 && rnd <95:
            diamonds[i].src=colors[2];
            if((i==3||i==4||i==5)&&result.indexOf(colors[2])==-1){result.push(colors[2]);}
            lastResult[i]=colors[2];
            break;
          case rnd >=95 && rnd<=100:
            diamonds[i].src=colors[3];
            if((i==3||i==4||i==5)&&result.indexOf(colors[3])==-1){result.push(colors[3]);}
            lastResult[i]=colors[3];
            break;
        }
      }
    }else{
      
      for(var i = 0;i<9;i++){
        diamonds[i+9].src=lastResult[i];
      }

      elem.style.marginTop=-63+"vh";
      diamonds[12].style.transform="scale("+1+")";
      diamonds[13].style.transform="scale("+1+")";
      diamonds[14].style.transform="scale("+1+")";
      diamonds[3].style.transform="scale("+0.7+")";
      diamonds[4].style.transform="scale("+0.7+")";
      diamonds[5].style.transform="scale("+0.7+")";

      showLowerDiamonds();

      for(var i = 0 ; i<9;i++){
        let rnd =Math.random()*100;

        switch(true){
          case rnd>=0&&rnd<=50:
            diamonds[i].src=colors[0];
            if((i==3||i==4||i==5)&&result.indexOf(colors[0])==-1){result.push(colors[0]);}
            lastResult[i]=colors[0];
            break;
          case rnd>=50 && rnd <80:
            diamonds[i].src=colors[1];
            if((i==3||i==4||i==5)&&result.indexOf(colors[1])==-1){result.push(colors[1]);}
            lastResult[i]=colors[1];
            break;
          case rnd >= 80 && rnd <95:
            diamonds[i].src=colors[2];
            if((i==3||i==4||i==5)&&result.indexOf(colors[2])==-1){result.push(colors[2]);}
            lastResult[i]=colors[2];
            break;
          case rnd >=95 && rnd<=100:
            diamonds[i].src=colors[3];
            if((i==3||i==4||i==5)&&result.indexOf(colors[3])==-1){result.push(colors[3]);}
            lastResult[i]=colors[3];
            break;
        }
      }

    }

    let id = null;
    let pos = -63;
    clearInterval(id);
    id = setInterval(frame, 6);

    var idUp;
    var idDown;

    let scaledown =1;
    let scaleup = 0.7;

    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {

        pos+=0.25;
        elem.style.marginTop=pos+"vh";

        switch(true){
          case pos>=-63 && pos<-42:
            idUp =[9,10,11];
            idDown =[12,13,14];
            scaledown-=0.0036;
            scaleup+=0.0036;
            if(pos==-45){
              diamonds[15].style.visibility="hidden";
              diamonds[16].style.visibility="hidden";
              diamonds[17].style.visibility="hidden";
            }
            if(pos==-59){
              diamonds[6].style.visibility="visible";
              diamonds[7].style.visibility="visible";
              diamonds[8].style.visibility="visible";
            }

            if(scaledown>=0.7){
              for(var i = 0;i<3;i++){
                diamonds[idDown[i]].style.transform="scale("+scaledown+")";
              }
            }
            if(scaleup<=1){
              for(var i = 0;i<3;i++){
                diamonds[idUp[i]].style.transform="scale("+scaleup+")";
              }
            }
            if(pos+0.25==-42){
              scaledown =1;
              scaleup = 0.7;
            }

            break;
          case pos>=-42 && pos<-21:
            idUp =[6,7,8];
            idDown =[9,10,11];
            scaledown-=0.0036;
            scaleup+=0.0036;
            
            if(pos==-25){
              diamonds[12].style.visibility="hidden";
              diamonds[13].style.visibility="hidden";
              diamonds[14].style.visibility="hidden";
            }
            if(pos==-38){
              diamonds[3].style.visibility="visible";
              diamonds[4].style.visibility="visible";
              diamonds[5].style.visibility="visible";
            }
            if(scaledown>=0.7){
              for(var i = 0;i<3;i++){
                diamonds[idDown[i]].style.transform="scale("+scaledown+")";
              }
            }
            if(scaleup<=1){
              for(var i = 0;i<3;i++){
                diamonds[idUp[i]].style.transform="scale("+scaleup+")";
              }
            }
            if(pos+0.25==-21){
              scaledown =1;
              scaleup = 0.7;
            }


            break;
          case pos>=-21 && pos<=0:
            idUp =[3,4,5];
            idDown =[6,7,8];
            scaledown-=0.0036;
            scaleup+=0.0036;
            if(pos==-4){   

              diamonds[9].style.visibility="hidden";
              diamonds[10].style.visibility="hidden";
              diamonds[11].style.visibility="hidden";
            }
            if(pos==-17){
              diamonds[0].style.visibility="visible";
              diamonds[1].style.visibility="visible";
              diamonds[2].style.visibility="visible";
            }
            if(scaledown>=0.7){
              for(var i = 0;i<3;i++){
                diamonds[idDown[i]].style.transform="scale("+scaledown+")";
              }
            }
            if(scaleup<=1){
              for(var i = 0;i<3;i++){
                diamonds[idUp[i]].style.transform="scale("+scaleup+")";
              }
            }
            if(pos==0){
              scaledown =1;
              scaleup = 0.7;
              
              //if win
              if(result.length==1){
                let whatColor=colors.indexOf(result[0]);
                switch(whatColor){
                  case 0:
                    document.getElementById("info").innerHTML="congratulation! you won "+betAmount[currentIndex]*9;
                    balance+=betAmount[currentIndex]*9;
                    document.getElementById("balance").innerHTML=balance;
                    break;
                  case 1:
                    document.getElementById("info").innerHTML="congratulation! you won "+betAmount[currentIndex]*30;
                    balance+=betAmount[currentIndex]*30;
                    document.getElementById("balance").innerHTML=balance;
                    break;
                  case 2:
                    document.getElementById("info").innerHTML="congratulation! you won "+betAmount[currentIndex]*400;
                    balance+=betAmount[currentIndex]*400;
                    document.getElementById("balance").innerHTML=balance;
                    break;
                  case 3:
                    document.getElementById("info").innerHTML="congratulation! you won "+betAmount[currentIndex]*20000;
                    balance+=betAmount[currentIndex]*20000;
                    document.getElementById("balance").innerHTML=balance;
                    break;
                }

              }
              document.getElementById("spinButton").disabled=false;
            }
            break;
        }  
      }
    }
  }
}

function hideUpperDiamonds(){
  diamonds[0].style.visibility="hidden";
  diamonds[1].style.visibility="hidden";
  diamonds[2].style.visibility="hidden";
  diamonds[3].style.visibility="hidden";
  diamonds[4].style.visibility="hidden";
  diamonds[5].style.visibility="hidden";
  diamonds[6].style.visibility="hidden";
  diamonds[7].style.visibility="hidden";
  diamonds[8].style.visibility="hidden";
}

function showLowerDiamonds(){
  diamonds[9].style.visibility="visible";
  diamonds[10].style.visibility="visible";
  diamonds[11].style.visibility="visible";
  diamonds[12].style.visibility="visible";
  diamonds[13].style.visibility="visible";
  diamonds[14].style.visibility="visible";
  diamonds[15].style.visibility="visible";
  diamonds[16].style.visibility="visible";
  diamonds[17].style.visibility="visible";
}

function loadVariables(){
  diamonds = [
    document.getElementById(0),
    document.getElementById(1),
    document.getElementById(2),
    document.getElementById(3),
    document.getElementById(4),
    document.getElementById(5),
    document.getElementById(6),
    document.getElementById(7),
    document.getElementById(8),
    document.getElementById(9),
    document.getElementById(10),
    document.getElementById(11),
    document.getElementById(12),
    document.getElementById(13),
    document.getElementById(14),
    document.getElementById(15),
    document.getElementById(16),
    document.getElementById(17),
  ];
  colors = ["./icons/gem-solid-red.svg",
  "./icons/gem-solid-yellow.svg",
  "./icons/gem-solid-green.svg",
  "./icons/gem-solid-blue.svg"];
  betAmount=[10,50,100,250,500,1000,2000,5000,10000];
  document.getElementById("betSize").innerHTML=betAmount[2];
  currentIndex=2;
  balance=10000;
  document.getElementById("balance").innerHTML=balance;
  
}

function riseAmount(){
  
  if(currentIndex!=betAmount.length-1){
    currentIndex++;
    document.getElementById("betSize").innerHTML=betAmount[currentIndex];
  }
  if(currentIndex==betAmount.length-1){
    document.getElementById("buttonRise").disabled = true;
  }
  if(document.getElementById("buttonDrop").disabled){
    document.getElementById("buttonDrop").disabled=false;
  }
}

function dropAmount(){
  if(currentIndex!=0){
    currentIndex--;
    document.getElementById("betSize").innerHTML=betAmount[currentIndex];
  }
  if(currentIndex==0){
    document.getElementById("buttonDrop").disabled = true;
  }
  if(document.getElementById("buttonRise").disabled){
    document.getElementById("buttonRise").disabled=false;
  }
}