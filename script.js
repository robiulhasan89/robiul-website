// Simple alert when button is clicked
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Redirecting to Telegram Group...');
  });
});
