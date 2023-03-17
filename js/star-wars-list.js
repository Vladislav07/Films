export function render (data, cb){
  console.log(data)

/*
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <a class="list-group-item list-group-item-action disabled">A disabled link item</a>
</div>

episode_id: 4
producer: "Gary Kurtz, Rick McCallum"
release_date: "1977-05-25"
title: "A New Hope"
url: "https://swapi.dev/api/films/1/"

*/
const container = document.createElement('div');
const group = document.createElement('div');
group.classList.add('list-group');

for (const film of data.results) {
  const a = document.createElement('a');
  const span = document.createElement('span');
  const title = document.createElement('h3');

  a.setAttribute('href', `?number_episode=${film.episode_id}`);
  a.classList.add('list-group-item', 'list-group-item-action')

  a.addEventListener('click', (e)=>{
    e.preventDefault();
    history.pushState(null, '', `?number_episode=${film.episode_id}`)
    cb()
   })

  span.textContent ='Episode - ' + film.episode_id;
  title.textContent = film.title;

  a.append(span);
  a.append(title);
  group.append(a);
}
container.append(group);
return container;
}