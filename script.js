
        const tombol = document.getElementById("btn-alert");
        const pesan = document.getElementById("pesan");
        const btntoggle = document.getElementById("btn-toggle");

        // tombol alert
        tombol.addEventListener("click",function() {
           pesan.textContent = "terima kasih sudah mengklik tombol ini!";
        });
        //tombol tema
        btntoggle.addEventListener("click", function () {
            document.body.classList.toggle("dark");
             if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
  } else {
    localStorage.setItem("tema", "light");
  }
        });