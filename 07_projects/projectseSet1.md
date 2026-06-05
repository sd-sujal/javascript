# Projects related to DOM

## Project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javaScript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id == 'grey') {
      body.style.background = e.target.id;
    }
    if (e.target.id == 'white') {
      body.style.background = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.background = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.background = e.target.id;
    }
    if (e.target.id == 'pink') {
      body.style.background = e.target.id;
    }
  });
});

```

## Project 2

``` JavaScript

const form = document.querySelector('form')
// this usecase will  give empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  const verdict = document.querySelector('#verdict')

  if(height === '' || height < 0 || isNaN(height) ){
    results.innerHTML = `Please give a vaild height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight) ){
    results.innerHTML = `Please give a vaild height ${weight}`;
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);

    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

    if(bmi<=18.6){
      verdict.innerHTML = `<span>Under Weight</span>`;
    }else if(bmi>18.6 && bmi<=24.9){
      verdict.innerHTML = `<span>Normal</span>`;
    }else{
      verdict.innerHTML = `<span>Over Weight</span>`;
    }
  }

});

```