document.addEventListener("DOMContentLoaded", () => {
    // Typing Effect
    const typingElement = document.querySelector('.typing');
    const texts = ["Front-end Developer", "UI/UX Enthusiast", "Creative Coder"];
    let index = 0, charIndex = 0;
  
    function type() {
      if (charIndex < texts[index].length) {
        typingElement.textContent += texts[index].charAt(charIndex++);
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 2000);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        typingElement.textContent = texts[index].substring(0, --charIndex);
        setTimeout(erase, 50);
      } else {
        index = (index + 1) % texts.length;
        setTimeout(type, 1000);
      }
    }
  
    type();
  
// Contact form handling
window.handleSubmit = function(e) {
    e.preventDefault();
    const form = e.target;
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString()
    })
    .then(() => {
      form.reset();
  
      const modal = document.getElementById("contactModal");
      if (modal) {
        modal.style.display = "flex";
        document.body.classList.add('modal-open');
      } else {
        alert("😊 Thank you!\n✅ Your message was sent successfully.\n📩 I'll get back to you shortly.");
      }
    })
    .catch(error => {
      alert("Oops! There was a problem sending your message.\n" + error);
    });
  };
  
  // 🔓 Make closeModal global so inline onclick works
  window.closeModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = "none";
      document.body.classList.remove('modal-open');
    }
  };
  
  // ⛔ Close modal if user clicks outside the content area
  document.querySelectorAll('.project-modal, #contactModal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal(modal.id);
    });
  });
  
  
  // ESC key closes any open modal
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.project-modal, #contactModal').forEach(modal => {
        modal.style.display = 'none';
      });
      document.body.classList.remove('modal-open');
    }
  });
  
  
    // Project Modals
    window.openModal = function(id) {
      const modal = document.getElementById(id);
      if (modal) modal.style.display = 'flex';
    };
  
    window.closeModal = function(id) {
      const modal = document.getElementById(id);
      if (modal) modal.style.display = 'none';
    };
  
    document.querySelectorAll('.project-modal').forEach(modal => {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal(modal.id);
      });
    });
  });
  

  function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }
  