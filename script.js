 toggleItem = function()  {




  var d = document.getElementById('blink');
 // var d = document.getElementById('diva');
if (d.style.display==='block') {
//if (d.style.color === 'red') {

 // if (d.style.backgroundColor === 'red') {

  d.style.display = 'none';
  //d.style.color = 'blue';
//d.style.backgroundColor = 'blue';
  } else  {
    d.style.display = 'block';
    //d.style.color = 'red';
    //d.style.backgroundColor = 'red';
  }
}
setInterval(toggleItem, 1000);
