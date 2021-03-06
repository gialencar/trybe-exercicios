

//gerar lista de estados
const estados = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];
const select = document.getElementById('estado');
for (const estado of estados) {
  // console.log(estado);
  const opt = document.createElement('option');
  opt.value = estado;
  opt.text = estado;
  select.appendChild(opt);
}

new window.JustValidate('.js-form', {
  colorWrong: 'red',
  rules: {
    cpf: {
      required: true,
      maxLength: '11',
    },
    end: {
      maxLength: '200',
      required: true,
    },
  },
});


// function btnFunc(event) {
//   event.preventDefault;
// }

// const btn = document.getElementById('submit-btn');
// btn.addEventListener('click', btnFunc);
