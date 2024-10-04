var infProjeto = document.querySelector('.infProjeto');
var abrir = document.querySelectorAll("[class^='pro-']");

    for (let i = 0; i < abrir.length; i++){
        abrir[i].addEventListener('click', ()=>{
            infProjeto.style.display = 'block';
        })
    }



document.querySelectorAll("[class^='pro-']").forEach((item) => {
    item.addEventListener('click', function() {
        const info = this.getAttribute('data-info');
        document.querySelector('.infProjeto').innerHTML = info;
        document.querySelector('.infProjeto').style.display = 'block';
        var fechar = document.getElementById('fechar').addEventListener('click', ()=>{
            infProjeto.style.display = 'none';
    });
});




})

document.querySelectorAll("[class^='des-']").forEach((item) => {
    item.addEventListener('click', function() {
        const info = this.getAttribute('data-info');
        document.querySelector('.infProjeto').innerHTML = info;
        document.querySelector('.infProjeto').style.display = 'block';
        var fechar = document.getElementById('fechar').addEventListener('click', ()=>{
            infProjeto.style.display = 'none';
    });
});
});

document.getElementById("menu").addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-25%";
    } else {
        sidebar.style.left = "0px";
    }
});