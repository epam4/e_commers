// let btn=document.getElementsByClassName('modal')
let modalOpen1 =document.getElementById('modal1')
let modalOpen2 =document.getElementById('modal2')
let modalOpen3 =document.getElementById('modal3')

function arrowBody(){
    modalOpen1.style.display='none';
}
function arrowModal1(){
    modalOpen1.style.display='inline-block'
    modalOpen2.style.display='none';
}
function arrowModal2(){
    modalOpen2.style.display='inline-block'
    modalOpen3.style.display='none';
}
function modal1(){
    console.log('salo');
    modalOpen1.style.display='inline-block'
}

function closeModal(){
    modalOpen1.style.display='none';
    modalOpen3.style.display='none';
    modalOpen2.style.display='none';
    console.log('none')
}
function modal2(){
    modalOpen1.style.display='none'
    modalOpen2.style.display='inline-block'
}
function modal3(){
    modalOpen2.style.display='none'
    modalOpen3.style.display='inline-block'
}
