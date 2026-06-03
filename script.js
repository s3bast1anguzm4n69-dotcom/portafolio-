document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !message) {
      alert('Por favor completa todos los campos antes de enviar.');
      return;
    }

    alert('Gracias, ' + name + '! Tu mensaje ha sido enviado correctamente.');
    form.reset();
  });
});
