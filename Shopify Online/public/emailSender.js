document.querySelector('#email-form').addEventListener('submit', async(event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const data = {
    to: formData.get('to'),
  };

  try {
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if(response.ok) {
      alert('Email send successfully');
    } else {
      alert('Error sending email.');
    }
  } catch (error) {
    console.error('Error', error);
    alert('Error sending email.');
  }

  form.reset();
})