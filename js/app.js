document.addEventListener('DOMContentLoaded', () => {/*WE LISTEN TO THE FORM INSTEAD OF THE BUTTON BECASUE APPARENTLY YOU CAN STILL PRESS THE FUCKING BUTTON WITH NO FORMA ND I DONT KNOW HOW TO MAKE THINGS INVISIBLE FUCK*/
  const form = document.getElementById('signup');
  const fortuneArea = document.getElementById('fortuneArea');

  form.addEventListener('submit', (event) => {
    event.preventDefault();              /*we prevent page reload because we dont really log the form data anyways. */
    form.hidden = true;
    fortuneArea.hidden = false;
  });
});
