var i = 0;

while (i < 100){

i++;

if(i % 3 == 0 && !(i % 5 == 0)){
  console.log('Fizz');
} else if (i % 5 == 0 && !(i % 3 == 0)){
  console.log('Buzz');
} else if ((i % 3 == 0) && (i % 5 == 0)){
  console.log('Fizz' + 'Buzz');
} else{
  lista = '<li>' + i + '</li>';
  console.log(i);
}
}
