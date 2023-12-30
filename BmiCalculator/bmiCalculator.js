const form=document.querySelector('form')
// this usecase will give you empty
// const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(s){
   s.preventDefault()

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const result=document.querySelector('#result')

if(height===''|| height < 0|| isNaN(height)){
    result.innerHTML=`please give a Valid Height ${height}`;
}else if(weight===''|| weight < 0|| isNaN(weight)){
    result.innerHTML=`please give a Valid weight ${weight}`;
}
 else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    //show the result
    result.innerHTML=`<span>${bmi}</span>`;
    if(bmi<18.6){
        result.innerHTML="You are under Weight";
    }else if(bmi>18.6 && bmi<24.9){
        result.innerHTML="You are Normal";
    }else if(bmi>24.9){
        result.innerHTML="you are Overweight";
    }else{
        result.innerHTML="your data is not correct";
    }

 }

}); 