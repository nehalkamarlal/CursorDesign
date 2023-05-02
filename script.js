const container=document.getElementById('container');
const bodys=document.getElementsByTagName('body');
const boxs=document.getElementById('box');
container.addEventListener('mousemove',(event)=>{
    boxs.style.top=`${event.offsetY}px`;
    boxs.style.left=`${event.offsetX}px`;

})