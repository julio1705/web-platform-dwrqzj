function insert(num) {
  var numNaTela = document.querySelector('input').value;
  document.querySelector('input').value = numNaTela + num;

  // adição
  if (num == '-' && numNaTela[numNaTela.length - 1] == '+') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '-';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '+' && numNaTela[numNaTela.length - 1] == '+') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '+';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '*' && numNaTela[numNaTela.length - 1] == '+') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '*';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '/' && numNaTela[numNaTela.length - 1] == '+') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '/';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '%' && numNaTela[numNaTela.length - 1] == '+') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '%';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '.' && numNaTela[numNaTela.length - 1] == '+') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '+0.';
    document.querySelector('input').value = numEmArray.join('');
  }
  // subtração
  else if (num == '+' && numNaTela[numNaTela.length - 1] == '-') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '+';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '-' && numNaTela[numNaTela.length - 1] == '-') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '-';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '*' && numNaTela[numNaTela.length - 1] == '-') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '*';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '/' && numNaTela[numNaTela.length - 1] == '-') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '/';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '%' && numNaTela[numNaTela.length - 1] == '-') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '%';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '.' && numNaTela[numNaTela.length - 1] == '-') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '-0.';
    document.querySelector('input').value = numEmArray.join('');
  }
  // multiplicação
  else if (num == '+' && numNaTela[numNaTela.length - 1] == '*') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '+';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '-' && numNaTela[numNaTela.length - 1] == '*') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '-';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '*' && numNaTela[numNaTela.length - 1] == '*') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '*';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '/' && numNaTela[numNaTela.length - 1] == '*') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '/';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '%' && numNaTela[numNaTela.length - 1] == '*') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '%';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '.' && numNaTela[numNaTela.length - 1] == '*') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '*0.';
    document.querySelector('input').value = numEmArray.join('');
  }
  // divisão
  else if (num == '+' && numNaTela[numNaTela.length - 1] == '/') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '+';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '-' && numNaTela[numNaTela.length - 1] == '/') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '-';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '*' && numNaTela[numNaTela.length - 1] == '/') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '*';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '/' && numNaTela[numNaTela.length - 1] == '/') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '/';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '%' && numNaTela[numNaTela.length - 1] == '/') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '%';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '.' && numNaTela[numNaTela.length - 1] == '/') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '/0.';
    document.querySelector('input').value = numEmArray.join('');
  }
  // porcentagem
  else if (num == '+' && numNaTela[numNaTela.length - 1] == '%') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '+';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '-' && numNaTela[numNaTela.length - 1] == '%') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '-';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '*' && numNaTela[numNaTela.length - 1] == '%') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '*';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '/' && numNaTela[numNaTela.length - 1] == '%') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '/';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '%' && numNaTela[numNaTela.length - 1] == '%') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '%';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '.' && numNaTela[numNaTela.length - 1] == '%') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '%0.';
    document.querySelector('input').value = numEmArray.join('');
  }
  // ponto
  else if (num == '+' && numNaTela[numNaTela.length - 1] == '.') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '+';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '-' && numNaTela[numNaTela.length - 1] == '.') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '-';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '*' && numNaTela[numNaTela.length - 1] == '.') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '*';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '/' && numNaTela[numNaTela.length - 1] == '.') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '/';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '%' && numNaTela[numNaTela.length - 1] == '.') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '%';
    document.querySelector('input').value = numEmArray.join('');
  } else if (num == '.' && numNaTela[numNaTela.length - 1] == '.') {
    numEmArray = numNaTela.split('');
    numEmArray[numEmArray.length - 1] = '.';
    document.querySelector('input').value = numEmArray.join('');
  }
  // vazio
  else if (num == '+' && numNaTela == '') {
    document.querySelector('input').value = '0+';
  } else if (num == '-' && numNaTela == '') {
    document.querySelector('input').value = '0-';
  } else if (num == '*' && numNaTela == '') {
    document.querySelector('input').value = '0*';
  } else if (num == '/' && numNaTela == '') {
    document.querySelector('input').value = '0/';
  } else if (num == '%' && numNaTela == '') {
    document.querySelector('input').value = '0%';
  } else if (num == '.' && numNaTela == '') {
    document.querySelector('input').value = '0.';
  }
}
function cleanAll() {
  document.querySelector('input').value = '';
}
function clean() {
  var apagar = document.querySelector('input').value;
  document.querySelector('input').value = apagar.substring(
    0,
    apagar.length - 1
  );
}
function igual() {
  var resultado = document.querySelector('input').value;
  document.querySelector('input').value = eval(resultado);
  if (resultado == '') {
    document.querySelector('input').value = '0';
  }
}
