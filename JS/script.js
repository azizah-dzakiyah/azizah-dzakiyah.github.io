// Fungsi validasi login
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Mencegah reload halaman

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Cek apakah username dan password sesuai
  if (username === "Azizah_Dzakiyah" && password === "hello world") {
    // Jika berhasil login, langsung masuk ke halaman portofolio
    window.location.href ="success.html";
  } else {
    // Jika gagal login, arahkan ke halaman gagal
    window.location.href = "failed.html";
  }
});

// Fungsi redirect ke media sosial resmi
function redirectSocial(platform) {
  if (platform === "facebook") {
    window.location.href = "https://www.facebook.com";
  } else if (platform === "gmail") {
    window.location.href = "https://mail.google.com";
  } else if (platform === "twitter") {
    window.location.href = "https://twitter.com";
  }
}
