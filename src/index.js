const details = document.querySelectorAll('article div.container details');

const onDetailClick = (e) => {
  const alreadyOpenDetail = document.querySelector('details[open]');

  const isSame = alreadyOpenDetail === e.target || alreadyOpenDetail === e.target.parentElement;

  if (alreadyOpenDetail && !isSame) {
    alreadyOpenDetail.removeAttribute('open');
  }
}

const onChildrenDetailClick = (e) => {
  e.preventDefault();
  e.stopPropagation();
}

details.forEach((detail) => {
  detail.addEventListener('click', (e) => {
    onDetailClick(e);
  });

  detail
    .querySelector('div')
    .addEventListener(
      'click', 
      onChildrenDetailClick
    );
});
