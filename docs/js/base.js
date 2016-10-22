function toggleCode(block) {
  $(block).toggle('hidden');
  const $toggleBtn = $(`${block}-toggle`);
  const isClosed = $toggleBtn.html().startsWith('Show');
  $toggleBtn.html(isClosed ? 'Show Code' : 'Hide Code');
}
