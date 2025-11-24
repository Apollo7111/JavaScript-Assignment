'use strict';

const form = document.getElementById('searchForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const q = document.getElementById('query').value.trim();
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`);
  const data = await res.json();
  console.log(data);
});