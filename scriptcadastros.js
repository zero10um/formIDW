// Função para formatar a data no formato dia/mês/ano
function formatarData(data) {
    const dataObj = new Date(data);
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
  
  function limparCadastros() {
    localStorage.removeItem('cadastros');
    location.reload();
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || []; //verifica cadastro existente na chave cadastro
  
    const tableBody = document.getElementById('table-body');
    for (const cadastro of cadastros) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${cadastro.nome}</td>
        <td>${formatarData(cadastro.dataNasc)}</td>
        <td>${cadastro.email}</td>
        <td>${cadastro.telefone}</td>
        <td>${cadastro.endereco}</td>
      `;
      tableBody.appendChild(row);
    }
  
    const limparButton = document.getElementById('limpar-button');
    limparButton.addEventListener('click', limparCadastros);
  });
  