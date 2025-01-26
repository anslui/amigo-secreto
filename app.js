//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [] // Cria um array vazio

function adicionarAmigo(){ 
    let nome = document.querySelector('input').value; // Atribui o input à variável
    if (nome != ''){ // Condicional de validação
        amigos.push(nome); // Adiciona um nome ao array
        mostrarListaDeNomes(); 
    } 
    else{
        alert('Por favor, insira um nome.'); // Mensagem de erro
    }
    campo = document.querySelector('input'); 
    campo.value = ''; // Limpa a barra de input
};

function mostrarListaDeNomes(){
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('listaAmigos').innerHTML = ""; // Limpa a iteração prévia
    for(let amigo of amigos){ // Puxa cada item do array e o injeta como lista no HTML
        document.getElementById('listaAmigos').innerHTML += ('<li>'+amigo+'</li>');
          };
};

function sortearAmigo(){
    let numeroSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório para o array amigos 
    let amigoSorteado = amigos[numeroSorteado]
    if (amigos.length != 0){ // Anuncia o nome sorteado e limpa o array 
        document.getElementById('listaAmigos').innerHTML = "";
        let mensagem = `O amigo secreto sorteado é: ${amigoSorteado}`;
        alterarTextoNaTag('resultado', mensagem);
        amigos = [];
    } 
    else{ // Mostra alerta caso o array esteja vazio
        alert('Por favor, insira um nome.');
    };
};

function alterarTextoNaTag(id, texto){
    let elemento = document.getElementById(id);
    elemento.innerHTML = texto; // Substitui o conteúdo do elemento pela mensagem de texto desejada
    if ('speechSynthesis' in window) { // Text to speech
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    };
};