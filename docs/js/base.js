function toggleCode($block, $toggleBtn) {
  $block.toggle('hidden');
  const isClosed = $toggleBtn.html().startsWith('Show');
  $toggleBtn.html(isClosed ? 'Hide Code' : 'Show Code');
}

$(function initCodeButtons() {
  $('.toggle-code').each((i, btn) => {
    const $btn = $(btn);
    const $codeBlock = $btn.parent().prev().find('.panel-footer');
    $btn.click(() => toggleCode($codeBlock, $btn));
  });
});