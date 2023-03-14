const cssPromises = {};
const app = document.querySelector('#app')

function loadResourses(src) {

  if (src.endsWith('.js')) {
    return import(src);
  }

  if (src.endsWith('.css')) {
    if (!cssPromises[src]) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = src;
      cssPromises[src] = new Promise(resolve => {
        link.addEventListener('load', () => resolve());
      });
      document.head.append(link);
    }
    return cssPromises[src];
  }

  return fetch(src).then(res => res.json());
}

function renderPage(module, src, style) {
  Promise.all([pathModule, src, style]
  .map(src => loadResourses(src)))
  .then(([pageModule, data]) => {
    app.innerHTML = '';
    app.append(pageModule.render(data));
  });
  
}

const number_episode = 

if(number_episode){
  renderPage('./star-wars-details.js',
  `https://swapi.dev/api/films/${number_episode}`,
  "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css")
}
else{
  renderPage('./star-wars-list.js',
  `https://swapi.dev/api/films/`,
  "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css")
}
