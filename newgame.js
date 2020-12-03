var score , roundscore  ,activeplayer ,playgaming  ;
var lastvalue;
init();
  document.querySelector('.btn-roll').addEventListener('click',()=>{
  if(playgaming){
    var dice=Math.floor(Math.random()*6)+1;   
//dispaly the dice
 var diceDom=document.querySelector('.dice');
 diceDom.style.display='block';
 diceDom.src='dice-' + dice +'.png'
//ubdate the round score
if(lastvalue===6 && dice===6){
    score[activeplayer]=0;
    document.querySelector('#current-'+ activeplayer).textContent = '0';
}

  else if(dice !== 1){
    roundscore +=dice;
    document.querySelector('#current-'+ activeplayer).textContent = roundscore;
}
 else{
    //document.querySelector('.player-' + activeplayer +'-panel').classList.remove('active');
    nextplayer()
 }
lastvalue =dice;  
} 
})
  document.querySelector('.btn-hold').addEventListener('click',()=>{   
 score[activeplayer]+= roundscore;
 document.querySelector('#score-'+ activeplayer).textContent=score[activeplayer]
    if(score[activeplayer] >= 200){
   document.querySelector('#name-'+ activeplayer).textContent='Winner';
  document.querySelector('.dice').style.display='none';
  document.querySelector('.player-'+ activeplayer+'-panel').classList.add('winner');
  document.querySelector('.player-'+ activeplayer+'-panel').classList.remove('active');
  playgaming=false;
}
 else{
    nextplayer()
}
})
document.querySelector('.btn-new').addEventListener('click', init)


function init(){
  
    score=[0,0];
    roundscore=0;
    activeplayer=0;
     playgaming=true;
    document.querySelector('.dice').style.display='none';
    document.querySelector('#score-1').textContent=0;
  document.querySelector('#score-0').textContent=0;
  document.querySelector('#current-0').textContent=0;
  document.querySelector('#current-1').textContent=0;
  document.querySelector('#name-0').textContent='Player 1';
  document.querySelector('#name-1').textContent='Player 2';
     
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
}


function nextplayer(){
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
roundscore = 0;
document.querySelector('#current-0').textContent='0';
document.querySelector('#current-1').textContent='0';
//document.querySelector('.player-' + activeplayer +'-panel').classList.add('active');

document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
document.querySelector('.dice').style.display='none';

}
