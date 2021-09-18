let final_value=0;
let flag=true;
const operator=['+','*','-','/'];
function calculateValue()
{
   let x = document.getElementById("input").value 
             let y = eval(x) 
             document.getElementById("input").value = y 
}
function reset()
{
    document.getElementById('input').value="";
}
//let ttons=document.querySelectorAll('.grid button');
let buttons=document.querySelectorAll('.grid-item');
function showNumber(button)
{ 
    document.getElementById('input').value+=button.value;
}
buttons.forEach(button => {

  button.addEventListener("click", () => {
    showNumber(button)
  });
});