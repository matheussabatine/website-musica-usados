class Produto {
    constructor() {
        this.produtos = localStorage.getItem('chave') === null
        ? []
        :JSON.parse(localStorage.getItem('chave'))
    }
    salva(produto){
        if(document.getElementById('codigo').getAttribute('disabled')==='disabled'){
            this.apaga(produto.codigo)
        }
        this.produtos.push(produto)
        localStorage.setItem('chave', JSON.stringify(this.produtos))
        alert('registro bem-sucedido !')
    }

    apaga(codigo){
        let index = this.produtos.findIndex(produto => produto.codigo == codigo)
        this.produtos.splice(index, 1)
        localStorage.setItem('chave',JSON.stringify(this.produtos))
        produto.atualiza()
    }

    edita(produto){
        document.getElementById('codigo').setAttribute('disabled','disabled')
        document.getElementById('codigo').value = produto.codigo
        document.getElementById('tipo').value = produto.tipo
        document.getElementById('marca').value = produto.marca
        document.getElementById('modelo').value = produto.modelo
        document.getElementById('preço').value = produto.preço
        document.getElementById('tempo').value = produto.tempo
        document.getElementById('lucro').value = produto.tempo
    }

    lista(){
        const listagem = this.produtos.map((produto) =>(
            `<tr>
                <td>${produto.codigo}</td>
                <td>${produto.tipo}</td>
                <td>${produto.marca}</td>
                <td>${produto.modelo}</td>
                <td>${produto.preço}</td>
                <td>${produto.lucro}</td>
                <td>${produto.tempo}</td>
                <td>
                <button id='apagar' onClick='produto.apaga(${produto.codigo})'>
                🧹REMOVER🧹</button>
                <button id='editar' onClick='produto.edita(${JSON.stringify(produto)})'>
                🧰EDITAR🧰</button>
                </td>
            </tr>`
        ))
        return (`<table border='1' class='cinereousTable'>
        <caption style="font-size:33px;text-decoration:underline;">Instrumentos Publicados 🧾</caption>
        <thead>
        <th>código</th> <th>tipo</th>  <th>marca</th> <th>modelo</th> 
        <th>preço</th> <th>lucro</th> <th>tempo</th> <th>Opções</th>
        </thead>
        <tbody>${listagem}</tbody>      
        </table>
        `)
    }
    atualiza(){
        document.getElementById('listagem').innerHTML = produto.lista()
    }
}
/*PARTE 2*/
const produto = new Produto()
document.getElementById('salvar').onclick = function (){
    const registro = {
        codigo: document.getElementById('codigo').value,
        tipo: document.getElementById('tipo').value,
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        preço: document.getElementById('preço').value,
        tempo: document.getElementById('tempo').value,
        lucro: document.getElementById('lucro').value
    }
    produto.salva(registro)
}
window.onload = function() {
    produto.atualiza()
}
// conta para calcular lucro
document.getElementById('preço').onchange = function ()  {
    let preço = document.getElementById('preço').value
    let lucro = (preço * 95)/100
    document.getElementById('lucro').value = lucro.toFixed(2)
    
    }