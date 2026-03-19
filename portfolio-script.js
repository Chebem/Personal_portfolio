
document.addEventListener("DOMContentLoaded", () => {
    // Typing Effect
    const typingElement = document.querySelector('.typing');
    const texts = ["Ehihie Oma!", "안녕하세요!", "Bonne Journée!"];
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
  
  //  Close modal if user clicks outside the content area
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

window.toggleMenu = function () {
  const links = document.querySelector('.links');
  links.classList.toggle('active');
}

  document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.links').classList.remove('active');
    });

  //GSAP Animation
  link.addEventListener('mouseenter', () => {
    // eslint-disable-next-line no-undef
    gsap.to(link, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.inOut'
    });
  });

  link.addEventListener('mouseleave', () => {
    // eslint-disable-next-line no-undef
    gsap.to(link, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.inOut'
    });
  });
});

  