// class Produto {
//   constructor() {
//       this.id = 1;
//       this.arrayProdutos = [];
//       this.editId = null;
//   }

//   salvar() {
//  let produto = this.lerDados();

//  if(this.validaCampos(produto)){
//   if(this.editId == null){
//     this.adicionar(produto);
//   }else {
//     this.atualizar(this.editId, produto);
//   }
  
//  }

//  this.listaTabela();
//   this.cancelar();
// }

// listaTabela() {
//   let tbody = document.getElementById('tbody');
//   tbody.innerText = '';

//   for(let i = 0; i < this.arrayProdutos.length; i++) {
//        let tr = tbody.insertRow();

//        let td_id = tr.insertCell();
//        let td_produto = tr.insertCell();
//        let td_valor = tr.insertCell();
//        let td_acao = tr.insertCell();

//        td_id.innerText = this.arrayProdutos[i].id;
//        td_produto.innerText = this.arrayProdutos[i].nomeProduto;
//        td_valor.innerText = this.arrayProdutos[i].valor;
       

//        td_id.classList.add('center');

//        let imgEdit = document.createElement('img');
//        imgEdit.src = 'caneta.png';
//        imgEdit.setAttribute("onclick", "produto.preparaEditacao("+ JSON.stringify(this.arrayProdutos[i]) +")");
       
//        let imgDelete = document.createElement('img');
//        imgDelete.src = 'prancheta.png';
//        imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")");

//        td_acao.appendChild(imgEdit);
//        td_acao.appendChild(imgDelete);

//        usuario.listaDeUsuarios.push(usuario);
//   }
// }

// adicionar(produto) {
// this.arrayProdutos.push(produto);
// this.id++;
// }

// preparaEditacao(dados) {
//   document.getElementById('produto').value = dados.nomeProduto;
//   document.getElementById('preço').value = dados.valor;
//   document.getElementById('btn1').innerText = 'Atualizar';
// }

// lerDados() {
// let produto = {}

// produto.id = this.id;
// produto.nomeProduto = document.getElementById('produto').value;
// produto.valor = document.getElementById('preço').value;

// return produto;
//   }

//   validaCampos(produto) {
//      let msg = '';
      
//      if(produto.nomeProduto == ''){
//            msg += '- Informe a descrição \n';
//       }

//       if(produto.valor == ''){
//           msg += '- Informe o detalhamento \n';
//      }
     
//      if(msg != ''){
//       alert(msg);
//       return false
//      }

//      return true;
     
//   }
  
// cancelar() { 
//   document.getElementById('produto').value = '';
//   document.getElementById('preço').value = '';

//   document.getElementById('btn1').innerText = 'Salvar';
//   this.editId = null;
//   }
 
// deletar(id) {
//     if(confirm('Deseja mesmo excluir?' + id)){
//       let tbody = document.getElementById('tbody');
//     for(let i = 0; i < this.arrayProdutos.length; i++) {
//       if(this.arrayProdutos[i].id == id) {
//         this.arrayProdutos.splice(i, 1);
//         tbody.deleteRow(i);
//       }
//     }
//   }
//     }
    
// }

// var produto = new Produto();
let usuarioON=getItemStorage('UsuarioOn')
if(!usuarioON){
  sair();
}

const btnSair = document.getElementById('sair');
btnSair.addEventListener('click', () => {
  atualizarRecados();
  localStorage.removeItem('UsuarioOn');
  sair();
})

 imprimirRecados()

let detalhamentoInput=document.getElementById('detalhamento')
let descricaoInput=document.getElementById('descricao')
let btnSalvar=document.getElementById('btn1')

btnSalvar.addEventListener('click',criarRecado)

function criarRecado() {
  if ( !detalhamento.value || !descricao.value ){
    alert('ops, preencha todos os campos.')
    return;
  }
  
 const recado = {
  id:idGenerator(),
  detalhamento:detalhamentoInput.value,
  descricao:descricaoInput.value
 }

 usuarioON.recados.push(recado)

 setItemStorage('UsuarioOn',usuarioON)

 imprimirRecados()
 

}
const idGenerator = () => {
  const time = new Date().getTime();
   const id= Math.floor((1 + Math.random()) * time).toString(16).substring(1);
   return id+id
}





function imprimirRecados() {
  
      let tbody = document.getElementById('tbody');
      tbody.innerHTML = '';
    
      for(let i in usuarioON.recados) {
        console.log('foi')
           let tr = tbody.insertRow();
    
           let td_id = tr.insertCell();
           let td_detalhamento = tr.insertCell();
           let td_descricao = tr.insertCell();
           let td_acao = tr.insertCell();

           let indice=Number(i)+1
    
           td_id.innerHTML = indice ;
           td_detalhamento.innerHTML = usuarioON.recados[i].detalhamento;
           td_descricao.innerHTML = usuarioON.recados[i].descricao;
           
    
           td_id.classList.add('center');

           
           let imgEdit = document.createElement('img');
           imgEdit.src = 'caneta.png';
           imgEdit.onclick=()=>editarRecado(usuarioON.recados[i].id);
           let imgDelete = document.createElement('img');
           imgDelete.src = 'prancheta.png';
    imgDelete.onclick=()=> deletarRecado(usuarioON.recados[i].id);
      
           
           td_acao.appendChild(imgEdit)
           td_acao.appendChild(imgDelete)
           
           
          }
        }

function editarRecado(id){
    

  console.log( 'editou ',id)
}
function deletarRecado(id){
  const confirmeRecado = confirm('Tem certeza que deseja apagar?')
  if(!confirmeRecado){
    console.log( 'não apagou ',id)
    return;
  }
  const deletarRecados = usuarioON.recados.filter((value) => value.id !== id);
  usuarioON.recados = deletarRecados
  setItemStorage('UsuarioOn',usuarioON)
  imprimirRecados();

  
}
        
        
        function getItemStorage(key){
         return JSON.parse(localStorage.getItem(key))
        }

        function setItemStorage(key,valor){
          localStorage.setItem(key,JSON.stringify(valor))}


function atualizarRecados () {
  const usuarios = getItemStorage('usuarios')
  usuarios.forEach(element => {
    if(element.email === usuarioON.email){
      element.recados = usuarioON.recados;
    }
  });
  setItemStorage('usuarios', usuarios);
}

function sair(){
  window.location.href = "entrar.html";
}