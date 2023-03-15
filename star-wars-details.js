export function render(data, { planets, species, starshisp }) {
  //{, species, starships}
  console.log(data);

  console.log(planets);
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
  const descr = document.createElement('p');
  const btn = document.createElement('button');

  container.classList.add('container');
  h1.classList.add('pt-3', 'mb-3');
  btn.classList.add('btn', 'btn-primary', 'mb-4');
  btn.textContent = 'Back to episodes';

  h1.textContent = 'Episode: ' + data.episode_id + ' - ' + data.title;
  descr.textContent = data.opening_crawl;

  {
    /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Заголовок карточки</h5>
    <p class="card-text">Небольшой пример текста, который должен основываться на названии карты и составлять основную часть содержимого карты.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Элемент</li>
    <li class="list-group-item">Второй элемент</li>
    <li class="list-group-item">Третий элемент</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Ссылка карточки</a>
    <a href="#" class="card-link">Другая ссылка</a>
  </div>
</div> */
  }

  const card = document.createElement('div');
  const h2 = document.createElement('div');
  const img = document.createElement('img');

  const body = document.createElement('div');

  card.classList.add('card');

  container.append(h1);
  container.append(btn);
  container.append(descr);

  return container;
}
