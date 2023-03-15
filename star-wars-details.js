export function render(data, result) {
  //{, species, starships}
  console.log(data);

  console.log(result);
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

  container.classList.add('container', 'd-flex', 'flex-column');
  h1.classList.add('pt-3', 'mb-3');
  btn.classList.add('btn', 'btn-primary', 'mb-4');
  btn.textContent = 'Back to episodes';

  h1.textContent = 'Episode: ' + data.episode_id + ' - ' + data.title;
  descr.textContent = data.opening_crawl;

  container.append(h1);
  container.append(btn);
  container.append(descr);



  const entries = Object.entries(result);

  entries.forEach(([key, value]) => {
    const h2 = document.createElement('h2');
    h2.classList.add('title', 'mb-3','')
    h2.textContent = key;
    container.append(h2);
    container.append(renderEntries(value))
  })


  function renderEntries(array) {
    const section = document.createElement('section');

    array.forEach(item => {
      const card = document.createElement('div');
      const ul = document.createElement('ul');

      card.classList.add('card', 'mb-5');
      ul.classList.add('list-group', 'list-group-flush')
      const h3 = document.createElement('h3');
      h3.classList.add('card-title', 'mb-3');
      const entries = Object.entries(item);

      entries.forEach(([key, value]) => {


        if (!Array.isArray(item[key])) {
          const li = document.createElement('li')
          const p = document.createElement('p')
          const strong = document.createElement('strong')
          const em = document.createElement('em')
          li.classList.add('list-group-item');
          switch (key) {
            case 'name':
              h3.textContent = value;
              break;
            case 'created':
              const date = new Date(value)
              const dateFormated = date.getMonth() + "." + date.getDate() + "." + date.getFullYear()
              strong.textContent = dateFormated
              em.textContent = `${key}: `
              li.append(em);
              li.append(strong);
              break;
            case 'url':
              break;
            case 'edited':
              break;
            default:
              strong.textContent = value
              em.textContent = `${key}: `
              li.append(em);
              li.append(strong);
              break;

          }
          if (li.children.length != 0) {
            ul.append(li)
          }
        }
      })
      card.append(h3)
      card.append(ul);
      section.append(card);
    });

    return section;
  }

  return container;
}
