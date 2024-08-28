document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if(name && email) {
        alert(`Terima Kasih Sudah Mensubscribe Khadafi Berita, Kak ${name}!`);
    } else {
        alert('Tolong isi formulir yang kosong');
    }
});
