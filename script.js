
        const tombol = document.getElementById("btn-alert");
        const pesan = document.getElementById("pesan");
        const btntoggle = document.getElementById("btn-toggle");

        // Load tema dari localStorage
        if (localStorage.getItem("tema") === "dark") {
            document.body.classList.add("dark");
        }

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

        // tombol project detail
        const btnProject = document.getElementById("btn-project");
        const projectDetail = document.getElementById("project-detail");

        btnProject.addEventListener("click", function () {
          if (projectDetail.style.display === "none") {
            projectDetail.style.display = "block";
            btnProject.textContent = "Sembunyikan Detail";
          } else {
            projectDetail.style.display = "none";
            btnProject.textContent = "Lihat Detail";
          }
        });