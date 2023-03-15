const cssPromises = {};
const app = document.querySelector('#app');

function loadResourses(src) {
  if (src.endsWith('.js')) {
    return import(src);
  }

  if (src.endsWith('.css')) {
    if (!cssPromises[src]) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = src;
      cssPromises[src] = new Promise((resolve) => {
        link.addEventListener('load', () => resolve());
      });
      document.head.append(link);
    }
    return cssPromises[src];
  }

  return fetch(src).then((res) => res.json());
}

function renderPage(pathModule, src, style) {
  Promise.all([pathModule, src, style].map((src) => loadResourses(src))).then(
    ([pageModule, data]) => {
      app.innerHTML = '';
      if (number_episode) {
        const planets = data.planets;
        const species = data.species;
        const starships = data.starships;

        Promise.all([
          renderList(planets),
          renderList(species),
          renderList(starships),
        ]).then(([planets, species, starships]) => {
          app.append(pageModule.render(data, {planets, species, starships}));
          return;
        });
      }
      app.append(pageModule.render(data));
    }
  );
}

let number_episode = 1;

if (number_episode) {
  renderPage(
    './star-wars-details.js',
    `https://swapi.dev/api/films/${number_episode}`,
    'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'
  );
} else {
  renderPage(
    './star-wars-list.js',
    `https://swapi.dev/api/films/`,
    'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'
  );
}

function renderList(arr) {
  return Promise.all(arr.map((src) => loadResourses(src)));
}
