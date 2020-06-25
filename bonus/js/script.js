var i = 0;
// var lista = document.getElementById('lista').innerHTML; perché non funziona???

while (i < 100){

i++;

if(i % 3 == 0 && !(i % 5 == 0)){
  document.getElementById('lista').innerHTML += '<li class=\'green\'>' + 'Fizz' + '</li>';
} else if (i % 5 == 0 && !(i % 3 == 0)){
  document.getElementById('lista').innerHTML += '<li class=\'blue\'>' + 'Buzz' + '</li>';
} else if ((i % 3 == 0) && (i % 5 == 0)){
  document.getElementById('lista').innerHTML += '<li class=\'violet\'>' + 'Fizz' + 'Buzz' + '</li>';
} else{
  document.getElementById('lista').innerHTML += '<li>' + i + '</li>';
  lista = '<li>' + i + '</li>';
}
}
