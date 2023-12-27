//? Side Nav Appearance

const navLinks = document.getElementById('navLinks');

function showMenu() {
  navLinks.style.right = '0';
}

function hideMenu() {
  navLinks.style.right = '-200px';
}

//? Contact Form Funcionality

function sendEmail(event) {
  event.preventDefault();

  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  const serviceID = 'service_1i3t4dq';
  const templateID = 'template_ut6ed5i';

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
      console.log(res);
      alert('Your message sent successfully!');
    })
    .catch((err) => console.log(err));
}
