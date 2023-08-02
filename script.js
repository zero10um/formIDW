function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const button = form.querySelector('.submit-button');

  button.classList.add('loading');

  const nome = form.querySelector('#nome').value;
  const dataNasc = form.querySelector('#dataNasc').value;
  const email = form.querySelector('#email').value;
  const telefone = form.querySelector('#telefone').value.replace(/\D/g, ''); // so numerico
  const endereco = form.querySelector('#endereco').value;

  // Verificar a idade
  
  const dataNascData = new Date(dataNasc);
  const hoje = new Date();

  const idade = hoje.getFullYear() - dataNascData.getFullYear();
  const mesNascimento = dataNascData.getMonth() + 1;
  const diaNascimento = dataNascData.getDate();

  if (
    idade < 18 ||
    (idade === 18 && hoje.getMonth() < mesNascimento) ||
    (idade === 18 && hoje.getMonth() === mesNascimento && hoje.getDate() < diaNascimento)
  ) {
    Swal.fire({
      icon: 'error',
      title: 'Erro no cadastro',
      text: 'Você precisa ter pelo menos 18 anos para se inscrever.'
    });

    button.classList.remove('loading');
    return;
  }

  if (telefone.length !== 11) {
    Swal.fire({
      icon: 'error',
      title: 'Erro no cadastro',
      text: 'O telefone deve conter exatamente 11 dígitos (DDD + número).'
    });

    button.classList.remove('loading');
    return;
  }

  const novoCadastro = {
    nome: nome,
    dataNasc: dataNasc,
    email: email,
    telefone: telefone,
    endereco: endereco
  };

  //criar um array vazio 
  const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

  // novo cadastro ao array de cadastros
  cadastros.push(novoCadastro);

  // salvar os cadastros no novo locstorage
  localStorage.setItem('cadastros', JSON.stringify(cadastros));

  button.classList.remove('loading');

  Swal.fire({
    icon: 'success',
    title: 'Cadastro concluído com sucesso!',
    html: 'Seu cadastro foi registrado.',
    showConfirmButton: false,
    timer: 1500
  });

  form.reset();
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);

  const inputTelefone = document.querySelector('#telefone');
  $(inputTelefone).inputmask('99 99999-9999');
});
