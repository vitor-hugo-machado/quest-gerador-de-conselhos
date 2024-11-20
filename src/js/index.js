const botao = document.getElementById('button');
const conselho = document.getElementById('texto-conselho')
const numeroConselho = document.getElementById('numero-conselho')

async function novoConselho(){
try{
    const url = "https://api.adviceslip.com/advice";
    const resposta = await fetch(url)
    const json = await resposta.json()
    let novoConselho = json.slip.advice
    let novoNumero = json.slip.id
    conselho.innerText = `"${novoConselho}"`
    numeroConselho.innerText = `A D V I C E #${novoNumero}`
}catch(error){
    conselho.innerText = `ocorreu um erro, tente novamente mais tarde`
}
}

novoConselho()

botao.addEventListener('click', ()=>{
    novoConselho()
})