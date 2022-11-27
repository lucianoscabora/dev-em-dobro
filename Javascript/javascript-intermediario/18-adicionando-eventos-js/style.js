let selectDeEstado = document.querySelector("select[name='estado']");
selectDeEstado.addEventListener('change', function(event) {

    //tem que entrar na hierarquia do evento, abaixo pegamos o valor, do evento disparado
    console.log(event.target.value);
})