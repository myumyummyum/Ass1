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

  const fortunes = [ '今日風平浪靜，正好把小事做完。', /* PRODULY PRESENTED BY CHATGPT, IDK WHAT THEY MEAN, COULD BE RACIALLY MOTIVATED */
    '別急著否定，先喝水再決定。',
    '訊息即將到來，先別胡思亂想。',
    '走出去呼吸一下，雲也會讓路。',
    '你不算落後，只是在轉彎。',
    '有人看輕你，讓事實慢慢說話。',
    '記得存檔，未來的你會感謝現在。',
    '微小的習慣正慢慢長大。',
    '沉默也是答案，收好它。',
    '修一個 bug，學兩個教訓。',
    '需要幫忙就開口，這不丟臉。',
    '完成無聊的小事，你會睡得更好。',
    '開始通常很醜，但開始了就對了。',
    '少滑一分鐘，多讀一頁。',
    '點子夠用了，出手才算數。',
    '補水。你的腦袋像乾梅子。']:
