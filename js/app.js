document.addEventListener('DOMContentLoaded', () => { /* YES WE WRAP EVERYTHING SO THE DOM EXISTS. */

  /* GRAB THE STUFF WE ACTUALLY USE. ZERO MYSTERY NODES. */
  const form = document.getElementById('signup');              /* THE FORM WE SUBMIT (CLICK OR ENTER). */
  const fortuneArea = document.getElementById('fortuneArea');  /* THE SECTION WE SHOW AFTER SIGNUP. */
  const fortuneBtn = document.getElementById('fortuneBtn');    /* THE BUTTON THAT CRACKS THE COOKIE. */
  const fortuneText = document.getElementById('fortuneText');  /* WHERE THE FORTUNE TEXT SHOWS UP. */
  const historyList = document.getElementById('history');      /* <OL> THAT KEEPS LAST 10 FORTUNES. */

  /* ALSO THE INPUTS. WE *READ* THEM BUT WE DON’T SEND PRIVATE INFORMATION ANYWHERE CUZ APPARENTLY ILLEGAL WHAT? MILF FINDER DREAMS GONE. */
  const nameInput = document.getElementById('name');
  const cityInput = document.getElementById('city');
  const ageInput  = document.getElementById('age');
