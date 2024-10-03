var infProjeto = document.getElementsByClassName('infProjeto');
var abrir = document.querySelectorAll("[class^='pro-']");

    for (let i = 0; i < abrir.length; i++){
        abrir[i].addEventListener('click', ()=>{
            infProjeto[0].style.display = 'block';
        })
    }
var fechar = document.getElementById('fechar').addEventListener('click', ()=>{
    infProjeto[0].style.display = 'none';
})

