document.addEventListener("DOMContentLoaded", () => {
    const pageName = window.location.pathname.split("/").pop();
    switch (pageName) {
      case "home.html":
        document.title = "Home | Sean Carlo's Portfolio";
        break;
      case "educ.html":
        document.title = "Education | Sean Carlo's Portfolio";
        break;
      case "contact.html":
        document.title = "Contact | Sean Carlo's Portfolio";
        break;
      case "landing.html":
        document.title = "Welcome | Sean Carlo's Portfolio";
        break;
      default:
        document.title = "Sean Carlo's Portfolio";
    }

    console.log("Page loaded successfully.");

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    const arrows = document.querySelectorAll(".arrow-button");
    arrows.forEach(arrow => {
      arrow.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    if (pageName === "home.html") {
      const backButton = document.querySelector(".back-button");
      if (backButton) {
        backButton.addEventListener("click", (e) => {
          const confirmLeave = confirm("Return to landing page?");
          if (!confirmLeave) {
            e.preventDefault();
          }
        });
      }
    }
  });