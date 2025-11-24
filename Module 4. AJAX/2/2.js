'use strict';

const form = document.getElementById('searchForm');
const input = document.getElementById('query');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const q = input.value.trim();
  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
});