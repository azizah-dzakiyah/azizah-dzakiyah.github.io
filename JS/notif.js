const form = document.getElementById('resetForm');
const notif = document.getElementById('notif');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Hindari reload halaman
  notif.classList.add('show');

  // Sembunyikan notif setelah 4 detik
  setTimeout(() => {
    notif.classList.remove('show');
  }, 4000);
});
