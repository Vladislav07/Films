export function render (data){
  console.log(data)
/*
Детальная страница эпизода должна загружать и показывать информацию об эпизоде, 
номер которого должен быть передан в URL страницы. На детальной странице должны быть следующие элементы:
h1 заголовок с названием эпизода и его episode_id
Кнопка "Back to episodes" со ссылкой на список эпизодов (главную).
Описание из свойства opening_crawl объекта эпизода
Список планет, встречающихся в эпизоде, с их названиями.
Перед списком нужно вывести h2 заголовок "Planets".
Получить планеты можно из API с использованием URL из массива planets в объекте эпизода.
Список рас, встречающихся в эпизоде, с их названиями. 
Перед списком нужно вывести h2 заголовок "Species".
 Получить планеты можно из API с использованием URL из массива species в объекте эпизода.
  */


const container = document.createElement('div');
const h1 = document.createElement('h1');
const spanTitle = document.createElement('span');
const descr = document.createElement('p');
const btn = document.createElement('button');
btn.classList.add("btn", "btn-primary")
btn.textContent = "Back to episodes"

h1.textContent =data.episode_id + data.title;
descr.textContent = data.opening_crawl;


// group.classList.add('list-group');

// for (const film of data.results) {
//   const a = document.createElement('a');
//   const span = document.createElement('span');
//   const title = document.createElement('h3');

//   a.setAttribute('href', '#');
//   a.classList.add('list-group-item', 'list-group-item-action')
//   span.textContent ='Episode - ' + film.episode_id;
//   title.textContent = film.title;

//   a.append(span);
//   a.append(title);
//   group.append(a);
// }
container.append(h1);
container.append(btn);
container.append(descr);

return container;

}