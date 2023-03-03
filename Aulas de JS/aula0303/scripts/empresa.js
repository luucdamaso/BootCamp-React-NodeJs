const campoEmail = document.getElementById("email");
const campoCep = document.getElementById("cep");
const campoUf = document.getElementById("uf");
const campoLocalidade = document.getElementById("localidade");
const campoTelefone = document.getElementById("telefone");
const addBtn = document.getElementById("btn-add");
const conteudoTab = document.getElementById("conteudo-tabela");

addBtn.addEventListener("click", () => {
    // 1) Coletar dos inputs o que foi digitado
    let usuario = {
        email: campoEmail.value,
        cep: campoCep.value,
        uf: campoUf.value,
        localidade: campoLocalidade.value,
        telefone: campoTelefone.value,
    }

    console.log(usuario);
   
    conteudoTab.innerHTML += `
    <tr>
          <td>${usuario.email}</td>
          <td>${usuario.cep}</td>
          <td>${usuario.uf}</td>
          <td>${usuario.localidade}</td>
          <td>${usuario.telefone}</td>
    </tr>`
    
    campoEmail.value = "";
    campoCep.value = "";
    campoUf.value = "";
    campoLocalidade.value = "";
    campoTelefone.value = "";
});