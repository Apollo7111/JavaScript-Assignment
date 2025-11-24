'use strict';

const form = document.getElementById('searchForm');
const input = document.getElementById('query');
const results = document.getElementById('results');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const q = input.value.trim();
  results.innerHTML = '';

  const res = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(q)}`);
  const data = await res.json();
  const jokes = data.result;

  jokes.forEach(j => {
    const article = document.createElement('article');
    const p = document.createElement('p');
    p.textContent = j.value;
    article.appendChild(p);
    results.appendChild(article);
  });
});