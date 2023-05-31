const container = document.querySelector('.container'); //контейнер

//получаем данные с постами методом GET
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => {
    json.forEach((elem) => {
        const message = document.createElement('div');
        message.classList.add('message');
        message.innerHTML=`
        <h2 class="message__title">Заголовок: ${elem.title} </h2>
        <p class="message__body">Статья: ${elem.body} </p>
        ` 
        container.append(message);
    })
    .catch((err) => {
        container.innerHTML=`Возникла ошибка ${err}. Пожалуйста, попробуйте позднее.`
    })
    
});

//добавляем новый пост методом POST