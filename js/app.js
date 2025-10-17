document.addEventListener('DOMContentLoaded', () => { /* YES WE WRAP EVERYTHING SO THE DOM EXISTS. */
  /* GRAB THE STUFF WE ACTUALLY USE. ZERO MYSTERY NODES. */
  const form = document.getElementById('fortuneForm') || document.getElementById('signup');
  const fortuneArea = document.getElementById('fortune-area') || document.getElementById('fortuneArea');
  const fortuneBtn = document.getElementById('fortuneBtn');
  const fortuneText = document.getElementById('fortuneText');

  if (form && fortuneArea) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); /* stops page reload */
      form.hidden = true; /* hides form */
      fortuneArea.hidden = false; /* shows fortune section */
    });
  }

  if (fortuneBtn && fortuneText) {
    fortuneBtn.addEventListener('click', () => {
      const pick = fortunes[randIndex(fortunes.length)]; /* random fortune */
      fortuneText.textContent = pick;
    });
  }

  const fortunes = [ '今日風平浪靜，正好把小事做完。', /* PRODULY PRESENTED BY CHATGPT, IDK WHAT THEY MEAN, COULD BE RACIALLY MOTIVATED */
    '今天風沒有浪，但心裡像鍋湯。', // “Today wind no wave, but heart like soup pot.”
    '不要太快否定，先喝水看看靈魂。', // “Do not quick deny, drink water and see soul.”
    '消息快要出現，你腦子別亂跳舞。', // “Message soon appear, your brain don’t dance messy.”
    '出去吸氣，雲會怕你讓開。', // “Go out breathe air, cloud afraid you make road.”
    '你不是落後，你只是在彎彎裡迷路。', // “You not behind, just lost in the bendy place.”
    '有人看你像小蔥，等時間煮成湯。', // “Someone see you like green onion, wait time cook into soup.”
    '記得存一下，不然未來你罵現在你。', // “Remember save one time, or future you scold now you.”
    '小習慣像豆芽，一天一天變壞也變強。', // “Small habit like bean sprout, grow worse and strong every day.”
    '沉默也是答案的樣子，別掉地上。', // “Silence also the look of answer, don’t drop on floor.”
    '修 bug 一個，學笨兩次。', // “Fix bug one, learn stupid twice.”
    '需要幫就說，不說天也不聽。', // “Need help then say, sky won’t listen if not.”
    '把小事做完，晚上夢不打擾你。', // “Finish small thing, night dream not disturb you.”
    '開始像豬一樣醜，但走著走著像神。', // “Start ugly like pig, but walking become god.”
    '少滑手指，多看書讓腦不乾。', // “Less slide finger, more see book make brain not dry.”
    '想太多沒用，出手才算呼吸。', // “Think too much useless, only action count as breathing.”
    '喝水。你的腦子像曬過的梅乾。' // “Drink water. Your brain like dried sour plum in sun.”

  ];

  function randIndex(len) { /* RANDOM INDEX THAT NEVER GOES OUT OF BOUNDS... RELEVANT FOR SOME REASON MY TINY BRAIN NO COMPRENDE */
    return Math.floor(Math.random() * len);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();   /* stops page reload */
    form.hidden = true;       /* hides form */
    fortuneArea.hidden = false; /* shows fortune section */
  });

  fortuneBtn.addEventListener('click', () => {
    const pick = fortunes[randIndex(fortunes.length)]; /* pick random fortune */
    fortuneText.textContent = pick; /* show it in html AND THEN BOOM. FUCKING FREE FORTUNE  */
  });

  // Example: inside form submit handler
  const fortuneForm = document.getElementById('fortuneForm');
  const fortuneAreaNew = document.getElementById('fortune-area');

  fortuneForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // ... existing code to compute/generate fortune ...
    // Set fortuneArea.innerHTML or textContent with the fortune
    fortuneAreaNew.textContent = generatedFortune;

    // Hide the form and reveal the fortune
    fortuneForm.style.display = 'none';
    fortuneAreaNew.style.display = 'block';
  });

});
