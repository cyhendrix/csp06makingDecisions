const questions = [
  {
    lesson:'Lesson 1',
    title:'Boolean Values',
    prompt:'Which two values can a Boolean hold?',
    options:['True and False','1 and 0','Any two numbers','Yes and Maybe'],
    answer:0,
    feedback:'A Boolean has only two possible values: True or False.'
  },
  {
    lesson:'Lesson 1',
    title:'Comparison Operators',
    prompt:'Which operator means “not equal to”?',
    options:['==','!=','>=','<>'],
    answer:1,
    feedback:'!= means “not equal to.”'
  },
  {
    lesson:'Lesson 1',
    title:'Predict the Result',
    prompt:'What is the result of this expression?',
    code:'10 >= 10',
    options:['True','False','10','Error'],
    answer:0,
    feedback:'>= means greater than OR equal to. Since 10 equals 10, the expression is True.'
  },
  {
    lesson:'Lesson 2',
    title:'Build an if Statement',
    prompt:'Which line correctly checks whether condition is greater than 5?',
    options:['if (condition > 5):','if condition = 5','condition (if > 5):','if (condition greater 5)'],
    answer:0,
    feedback:'An if statement uses a logical expression followed by a colon.'
  },
  {
    lesson:'Lesson 2',
    title:'Read if / elif / else',
    prompt:'What will this code print?',
    code:'secret = 50\nif (secret == 100):\n    print("Excellent")\nelif (secret < 75):\n    print("Awesome")\nelse:\n    print("Super")',
    options:['Excellent','Awesome','Super','Nothing'],
    answer:1,
    feedback:'secret is not 100, but 50 < 75 is True, so the elif branch prints Awesome.'
  },
  {
    lesson:'Lesson 2',
    title:'One Symbol Matters',
    prompt:'What is wrong with this line?',
    code:'if (age = 17):',
    options:['It uses assignment instead of comparison','The colon should be removed','Parentheses are not allowed','Nothing is wrong'],
    answer:0,
    feedback:'= assigns a value. == compares two values in a logical expression.'
  },
  {
    lesson:'Lesson 3',
    title:'Logical AND',
    prompt:'When is an expression joined with and True?',
    options:['When both expressions are True','When either expression is True','Only when both are False','Whenever one expression is False'],
    answer:0,
    feedback:'and requires BOTH joined expressions to be True.'
  },
  {
    lesson:'Lesson 3',
    title:'Logical OR',
    prompt:'food = "milkshake" and flavor = "chocolate". What is the result?',
    code:'food == "pizza" or flavor == "chocolate"',
    options:['True','False','pizza','chocolate'],
    answer:0,
    feedback:'The second comparison is True. With or, at least one True expression makes the whole result True.'
  },
  {
    lesson:'Lesson 3',
    title:'Logical NOT',
    prompt:'food = "hamburger". What is the result?',
    code:'not (food == "hamburger")',
    options:['True','False','hamburger','Error'],
    answer:1,
    feedback:'food == "hamburger" is True. not reverses True to False.'
  },
  {
    lesson:'Lesson 4',
    title:'Complex Expressions',
    prompt:'What is the best way to control the evaluation order of a complex logical expression?',
    options:['Use parentheses','Put the longest expression first','Always read strictly left to right','Use extra print statements'],
    answer:0,
    feedback:'Parentheses clearly tell Python which parts of an expression should evaluate first.'
  }
];

const completed = new Set();
const questionsEl = document.getElementById('questions');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const finishCard = document.getElementById('finishCard');

function render(){
  questionsEl.innerHTML='';
  questions.forEach((q,i)=>{
    const card=document.createElement('article');
    card.className='card question';
    card.id=`q${i}`;
    const done=completed.has(i);
    card.innerHTML=`
      <div class="qtop"><h2>Question ${i+1}: ${q.title}</h2><span class="badge">${q.lesson}</span></div>
      <p class="prompt">${q.prompt}</p>
      ${q.code?`<div class="code">${escapeHtml(q.code)}</div>`:''}
      <div class="options">
        ${q.options.map((o,j)=>`<button class="option" data-q="${i}" data-o="${j}" ${done?'disabled':''}>${escapeHtml(o)}</button>`).join('')}
      </div>
      <div class="feedback ${done?'good':''}" id="f${i}">${done?'✓ Complete — '+q.feedback:''}</div>`;
    questionsEl.appendChild(card);
  });
  document.querySelectorAll('.option').forEach(btn=>btn.addEventListener('click',checkAnswer));
  updateProgress();
}

function checkAnswer(e){
  const qi=Number(e.currentTarget.dataset.q);
  const oi=Number(e.currentTarget.dataset.o);
  const q=questions[qi];
  const feedback=document.getElementById(`f${qi}`);
  const buttons=[...document.querySelectorAll(`[data-q="${qi}"]`)];
  buttons.forEach(b=>b.classList.remove('incorrect','correct'));
  if(oi===q.answer){
    e.currentTarget.classList.add('correct');
    completed.add(qi);
    feedback.className='feedback good';
    feedback.textContent='✓ Correct — '+q.feedback;
    buttons.forEach(b=>b.disabled=true);
    updateProgress();
    setTimeout(()=>{
      const next=document.getElementById(`q${qi+1}`);
      if(next) next.scrollIntoView({behavior:'smooth',block:'center'});
    },500);
  } else {
    e.currentTarget.classList.add('incorrect');
    feedback.className='feedback bad';
    feedback.textContent='Not quite. Try again — this question is not marked complete yet.';
  }
}

function updateProgress(){
  const count=completed.size;
  progressText.textContent=`${count} of ${questions.length} complete`;
  progressBar.style.width=`${count/questions.length*100}%`;
  if(count===questions.length){
    finishCard.classList.remove('hidden');
    document.getElementById('scoreText').textContent=`${count} / ${questions.length} (100%)`;
  } else finishCard.classList.add('hidden');
}

function escapeHtml(str){
  return str.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));
}

document.getElementById('resetBtn').addEventListener('click',()=>{
  completed.clear();
  render();
  window.scrollTo({top:0,behavior:'smooth'});
});

render();