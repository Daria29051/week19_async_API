//забираем элементы из html
const postTitleInput = document.querySelector('.post__title-input'); //заголовок поста
const postBodyInput = document.querySelector('.post__body-input'); //текст поста
const button = document.querySelector('.post__button'); //кнопка
const outputContainer = document.querySelector('.output-container');//поле вывода

// деактивируем кнопку по умолчанию
button.setAttribute('disabled', true);

//делаем кнопку активной только когда оба поля заполнены
function checkInputs() {
if (postTitleInput.value.trim() !=='' && postBodyInput.value.trim() !=='') {
    button.removeAttribute('disabled', true);
} else {
    button.setAttribute('disabled', true);
}
};



// обрабочик событий на оба поля ввода на проверку заполнения
postTitleInput.addEventListener('keyup',checkInputs);
postBodyInput.addEventListener('keyup',checkInputs);




//создаем POST запрос
function addPost() {
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: postTitleInput.value,
      body: postBodyInput.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then((json) => {
    const postOutput = document.createElement('div');
    postOutput.classList.add('post-output');
    const postTitleOutput = document.createElement('div'); //поле вывода заголовка поста
    postTitleOutput.classList.add('post__title-output');
    const postBodyOutput = document.createElement('div'); //поле вывода текста поста
    postBodyOutput.classList.add('post__body-output');
    postOutput.append(postTitleOutput);
    postOutput.append(postBodyOutput);
    outputContainer.append(postOutput);
    postTitleOutput.innerText = json.title;
    postBodyOutput.innerText = json.body;
  })
  
};

//функция очистки поля ввода после нажатия на кнопку Добавить
const clearInput = () => {
    postTitleInput.value =''; 
    postBodyInput.value ='';
}


//обработчик событий на добавление поста по клику на кнопку
button.addEventListener('click', addPost);


//обработчик событий на очистку полей после отправки данных
button.addEventListener('click', clearInput);

// деактивируем кнопку после отправки
button.addEventListener('click', function() {
  button.setAttribute('disabled', true);
});
  
