function sw(id, el) {
  document.querySelectorAll('.sp').forEach(p => p.classList.remove('a'));
  document.querySelectorAll('.tb').forEach(t => t.classList.remove('a'));
  document.getElementById('tab-' + id).classList.add('a');
  el.classList.add('a');
}
