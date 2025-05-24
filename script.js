const button =document.getElementById('generateBtn');
const colorText=document.getElementById('colorDisplay');

function makeRandomColor(){
  const r=Math.floor(Math.random()*256);
  const g=Math.floor(Math.random()*256);
  const b=Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`;

}

function changeColor(){
  const newColor=makeRandomColor();
  document.body.style.backgroundColor=newColor;
  colorText.textContent=newColor;
}

colorText.addEventListener('click',function(){
  navigator.clipboard.writeText(colorText.textContent).then(function(){
    const orginalText=colorText.textContent;
    colorText.textContent='Copied!';
    setTimeout(()=>{
      colorText.textContent=orginalText;
    },800);
  }).catch(function(error){
    alert('Copy failed: '+ error);
  });
});

button.addEventListener('click',changeColor);