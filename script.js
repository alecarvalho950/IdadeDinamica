var genero = window.document.querySelector('input[name="genero"]:checked')
var enviar = window.document.getElementById('submit');
var ano = window.document.getElementById('anoNascimento');

enviar.addEventListener('click', verifica);
enviar.addEventListener('mouseenter', mudaCor);
enviar.addEventListener('mouseleave', restauraCor);
ano.addEventListener('mouseenter', aumentaTamanho);
ano.addEventListener('mouseleave', dimunuiTamanho);

function verifica(event) {
    enviar.style.background = 'black';
    event.preventDefault();
    var ano = window.document.getElementById('anoNascimento');
    var genero = window.document.querySelector('input[name="genero"]:checked')
    var divImagem = window.document.getElementById('div-imagem');
    var data = new Date();
    var AnoAtual = data.getFullYear();
    var anoFormatado = AnoAtual - parseInt(ano.value);
    var textoExistente = divImagem.querySelector('p')
    
    if(textoExistente){
        textoExistente.innerHTML = `Você é do Gênero ${genero.value} e tem ${anoFormatado} anos!`;
    } else {
        const texto = window.document.createElement('p')
        texto.innerHTML = `Você é do Gênero ${genero.value} e tem ${anoFormatado} anos!`;
        divImagem.appendChild(texto);
    }
    
     ano.value = "";

    var imagemExistente = divImagem.querySelector('img');

    if(imagemExistente) {
        divImagem.removeChild(imagemExistente);
    }

    if (genero.value === 'Masculino')  {
        const imagem = window.document.createElement('img');
        imagem.src = '/IdadeDinamica/imagens/genero-masculino.png';
        divImagem.appendChild(imagem);
    } else {
        const imagem = window.document.createElement('img');
        imagem.src = '/IdadeDinamica/imagens/genero-feminino.png';
        divImagem.appendChild(imagem);
    }   
}
function aumentaTamanho(event) {
    ano.style.transition = 'transform 0.2s';
    ano.style.transform = 'scale(1.2)';
    ano.style.border = 'solid 5px red';
    ano.style.fontSize = '16pt';
}

function dimunuiTamanho(event) {
    ano.style.transition = 'transform 0.2s';
    ano.style.transform = 'scale(1.0)';
    ano.style.border = 'solid 3px black';
    ano.style.fontSize = '12pt';
}

function mudaCor(event) {
    enviar.style.background = 'red';
    enviar.style.transition = 'transform 0.2s';
    enviar.style.transform = 'scale(1.2)';
    enviar.style.fontSize = '16pt';
}

function restauraCor(event) {
    enviar.style.background = 'green';
    enviar.style.transition = 'transform 0.2s';
    enviar.style.transform = 'scale(1.0)';
    enviar.style.fontSize = '12pt';
}
