// main.js

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Implementasi logika login disini
    // Misalnya, Anda bisa membandingkan username dan password dengan yang sudah ditentukan
    // Jika login berhasil, Anda bisa menampilkan pesan atau mengarahkan pengguna ke halaman lain

    console.log("Username:", username);
    console.log("Password:", password);
    
}

function updateTime() {
    const currentTime = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = currentTime.toLocaleTimeString('en-US', options);

    document.getElementById("realTime").textContent = formattedTime;
}

// Panggil updateTime() untuk pertama kali saat halaman dimuat
updateTime();

// Panggil updateTime() setiap detik untuk memperbarui waktu secara real-time
setInterval(updateTime, 1000);

// Mengambil lokasi pengguna
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Gunakan layanan pihak ketiga untuk mendapatkan nama wilayah berdasarkan koordinat
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
            const userLocation = data.localityInfo.administrative[2].name; // Wilayah
            document.getElementById("userLocation").textContent = "Your Location: " + userLocation;
        })
        .catch(error => {
            console.error('Error fetching location data:', error);
        });
    });
} else {
    console.log("Geolocation is not supported by this browser.");
}
