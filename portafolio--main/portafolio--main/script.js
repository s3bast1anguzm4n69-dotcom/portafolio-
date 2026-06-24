document.addEventListener('DOMContentLoaded', () => {
  const viewBtn = document.getElementById('viewBtn');
  const denyBtn = document.getElementById('denyBtn');
  const infoCard = document.getElementById('infoCard');
  const denyCard = document.getElementById('denyCard');

  if (!viewBtn || !denyBtn || !infoCard || !denyCard) return;

  viewBtn.addEventListener('click', () => {
    infoCard.classList.remove('hidden');
    denyCard.classList.add('hidden');
  });

  denyBtn.addEventListener('click', () => {
    denyCard.classList.remove('hidden');
    infoCard.classList.add('hidden');
  });
});
