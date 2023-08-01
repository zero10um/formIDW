  // Código para lidar com o envio do formulário
  function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const form = event.target;
    const button = form.querySelector('.submit-button');

    // Adiciona a classe de animação para o botão de envio
    button.classList.add('loading');

    // Simula uma requisição assíncrona (você deve substituir essa parte com sua lógica de envio real)
    setTimeout(() => {
      // Remove a classe de animação após um breve intervalo (simulando o fim da requisição)
      button.classList.remove('loading');

      // Obter os valores do formulário
      const nome = form.querySelector('#nome').value;
      const dataNasc = form.querySelector('#dataNasc').value;
      const email = form.querySelector('#email').value;
      const telefone = form.querySelector('#telefone').value;
      const endereco = form.querySelector('#endereco').value;

      // Construir o objeto de cadastro com as informações do formulário
      const cadastro = {
        nome: nome,
        dataNasc: dataNasc,
        email: email,
        telefone: telefone,
        endereco: endereco
      };

      // Verificar se já há cadastros no localStorage
      const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

      // Adicionar o novo cadastro à lista de cadastros
      cadastros.push(cadastro);

      // Salvar a lista de cadastros atualizada no localStorage
      localStorage.setItem('cadastros', JSON.stringify(cadastros));

      // Exibe o SweetAlert após o fim da animação (simulando o sucesso do cadastro)
      Swal.fire({
        icon: 'success',
        title: 'Cadastro concluído com sucesso!',
        html: `
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Data de Nascimento:</strong> ${dataNasc}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contato do Telefone:</strong> ${telefone}</p>
          <p><strong>Endereço:</strong> ${endereco}</p>
        `,
        showConfirmButton: false,
        timer: 5000 // Tempo em milissegundos para fechar automaticamente após 5 segundos
      });

      // Reinicia o formulário (opcional)
      form.reset();
    }, 1500); // Tempo em milissegundos para a simulação da requisição
  }

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', handleFormSubmit);
  });