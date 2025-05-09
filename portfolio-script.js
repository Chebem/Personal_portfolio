// typing effect
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

document.addEventListener("DOMContentLoaded", type);



function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString()
    })
    .then(() => {
      form.reset();
      openModal();
    })
    .catch(error => alert("Oops! There was a problem." + error));
  }
  
  function openModal() {
    document.getElementById("contactModal").style.display = "flex";
  }
  function closeModal() {
    document.getElementById("contactModal").style.display = "none";
  }

  function openModal(id) {
    document.getElementById(id).style.display = 'flex';
  }
  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }


  document.querySelectorAll('.project-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal(modal.id);
    });
  });
  

