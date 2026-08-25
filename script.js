const lessons = [
  {
    title:'Lesson 1 — Logical Expressions', subtitle:'Boolean values and comparison operators',
    questions:[
      {title:'Boolean Values',prompt:'Which two values can a Boolean hold?',highlight:['Boolean'],options:['True and False','1 and 0','Any two numbers','Yes and Maybe'],answer:0,feedback:'A Boolean has only two possible values: True or False.'},
      {title:'Comparison Operators',prompt:'Which operator means “not equal to”?',options:['==','!=','>=','<>'],answer:1,feedback:'!= means “not equal to.”'},
      {title:'Predict the Result',prompt:'What is the result of this expression?',code:'10 >= 10',options:['True','False','10','Error'],answer:0,feedback:'>= means greater than OR equal to. Since 10 equals 10, the expression is True.'}
    ],
    coding:{title:'Coding Scenario — Can the Student Drive?',scenario:'A program stores a student’s age. Write a short sequence of code that checks whether the age is at least 16 and prints the True/False result.',requirements:['Create a variable named age and give it a number.','Use >= to compare age to 16.','Print the result of the comparison.'],starter:'age = 15\n# Write your comparison and print statement below',checks:[{label:'uses the age variable',test:c=>/\bage\b/.test(c)},{label:'uses >= 16',test:c=>/>=\s*16/.test(c)},{label:'uses print()',test:c=>/print\s*\(/.test(c)}]}
  },
  {
    title:'Lesson 2 — The if Statement', subtitle:'if, elif, else, indentation, and comparison',
    questions:[
      {title:'Build an if Statement',prompt:'Which line correctly checks whether condition is greater than 5?',options:['if (condition > 5):','if condition = 5','condition (if > 5):','if (condition greater 5)'],answer:0,feedback:'An if statement uses a logical expression followed by a colon.'},
      {title:'Read if / elif / else',prompt:'What will this code print?',code:'secret = 50\nif (secret == 100):\n    print("Excellent")\nelif (secret < 75):\n    print("Awesome")\nelse:\n    print("Super")',options:['Excellent','Awesome','Super','Nothing'],answer:1,feedback:'secret is not 100, but 50 < 75 is True, so the elif branch prints Awesome.'},
      {title:'One Symbol Matters',prompt:'What is wrong with this line?',code:'if (age = 17):',options:['It uses assignment instead of comparison','The colon should be removed','Parentheses are not allowed','Nothing is wrong'],answer:0,feedback:'= assigns a value. == compares two values in a logical expression.'}
    ],
    coding:{title:'Coding Scenario — Temperature Message',scenario:'Write a program that looks at a temperature and prints a message. If the temperature is 80 or higher, print Hot. If it is 60 or higher, print Warm. Otherwise, print Cool.',requirements:['Create a variable named temperature.','Use if, elif, and else.','Use >= comparisons.','Print Hot, Warm, or Cool.'],starter:'temperature = 72\n\n# Write your if / elif / else below',checks:[{label:'uses if',test:c=>/\bif\b/.test(c)},{label:'uses elif',test:c=>/\belif\b/.test(c)},{label:'uses else',test:c=>/\belse\s*:/.test(c)},{label:'uses >=',test:c=>/>=/.test(c)},{label:'uses print()',test:c=>/print\s*\(/.test(c)}]}
  },
  {
    title:'Lesson 3 — Logical Operators', subtitle:'and, or, not, and nested decision-making',
    questions:[
      {title:'Logical AND',prompt:'When does the logical operator and give a result of True?',highlight:['and'],options:['When both conditions are True','When either condition is True','Only when both conditions are False','Whenever one condition is False'],answer:0,feedback:'and means BOTH. The result is True only when both conditions are True.'},
      {title:'Logical OR',prompt:'food = "milkshake" and flavor = "chocolate". What is the result of the Boolean expression below?',highlight:['Boolean'],code:'food == "pizza" or flavor == "chocolate"',options:['True','False','pizza','chocolate'],answer:0,feedback:'The second comparison is True. With or, at least one True expression makes the whole result True.'},
      {title:'Logical NOT',prompt:'food = "hamburger". What is the result of the Boolean expression below?',highlight:['Boolean'],code:'not (food == "hamburger")',options:['True','False','hamburger','Error'],answer:1,feedback:'food == "hamburger" is True. not reverses True to False.'}
    ],
    coding:{title:'Coding Scenario — Permission Check',scenario:'A student can join an event only if they are at least 16 AND have permission. Write a short program that prints Approved when both conditions are true and Not approved otherwise.',requirements:['Create age and hasPermission variables.','Use the and operator.','Use an if / else statement.','Print Approved or Not approved.'],starter:'age = 17\nhasPermission = True\n\n# Write your decision code below',checks:[{label:'uses age',test:c=>/\bage\b/.test(c)},{label:'uses hasPermission',test:c=>/\bhasPermission\b/.test(c)},{label:'uses and',test:c=>/\band\b/.test(c)},{label:'uses if and else',test:c=>/\bif\b/.test(c)&&/\belse\s*:/.test(c)},{label:'uses print()',test:c=>/print\s*\(/.test(c)}]}
  },
  {
    title:'Lesson 4 — More Complex Expressions', subtitle:'Parentheses, evaluation order, and long expressions',
    questions:[
      {title:'Complex Expressions',prompt:'What is the best way to control the evaluation order of a complex logical expression?',options:['Use parentheses','Put the longest expression first','Always read strictly left to right','Use extra print statements'],answer:0,feedback:'Parentheses clearly tell Python which parts of an expression should evaluate first.'},
      {title:'Boolean Result',prompt:'What type of value is stored in answer?',code:'answer = (1 + 5) >= (6 - 1)',options:['Boolean','Integer','Floating point','String'],answer:0,feedback:'The comparison >= produces either True or False, so answer is Boolean.'},
      {title:'Long Statements',prompt:'What does a backslash at the end of a Python line allow you to do?',options:['Continue the same statement on the next line','Turn the line into a comment','Repeat the line twice','End the program'],answer:0,feedback:'A backslash can continue one long statement onto another source-code line.'}
    ],
    coding:{title:'Coding Scenario — Special Group',scenario:'A player belongs to a special group if the score is greater than 100 AND the age is either under 13 OR over 18. Write the decision using parentheses so the age choices are grouped together.',requirements:['Create playerScore and age variables.','Use and plus or.','Use parentheses around the age choices.','Use an if statement and print a message.'],starter:'playerScore = 120\nage = 20\n\n# Write your if statement below',checks:[{label:'uses playerScore',test:c=>/\bplayerScore\b/.test(c)},{label:'uses and',test:c=>/\band\b/.test(c)},{label:'uses or',test:c=>/\bor\b/.test(c)},{label:'uses parentheses',test:c=>/\([^\n]*\bor\b[^\n]*\)/.test(c)},{label:'uses if and print()',test:c=>/\bif\b/.test(c)&&/print\s*\(/.test(c)}]}
  }
];

let currentLesson=0;
const answers=lessons.map(l=>Array(l.questions.length).fill(null));
const questionCorrect=lessons.map(l=>Array(l.questions.length).fill(false));
const codingChecked=Array(lessons.length).fill(false);
const codingPassed=Array(lessons.length).fill(false);
const codeEntries=Array(lessons.length).fill('');
const lessonView=document.getElementById('lessonView');
const lessonTabs=document.getElementById('lessonTabs');
const progressText=document.getElementById('progressText');
const progressBar=document.getElementById('progressBar');
const finishCard=document.getElementById('finishCard');

function escapeHtml(str){return str.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));}
function highlightPrompt(text,words=[]){let safe=escapeHtml(text);words.forEach(word=>{const escaped=word.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');safe=safe.replace(new RegExp(`\\b(${escaped})\\b`,'gi'),'<span class="keyword-highlight">$1</span>')});return safe;}
function shuffleArray(items){const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;}
function makeOptionOrders(){return lessons.map(l=>l.questions.map(q=>shuffleArray(q.options.map((text,originalIndex)=>({text,originalIndex})))));}
let optionOrders=makeOptionOrders();
function lessonReady(i){return questionCorrect[i].every(Boolean)&&codingPassed[i];}

function renderTabs(){
 lessonTabs.innerHTML=lessons.map((l,i)=>`<button class="lesson-tab ${i===currentLesson?'active':''} ${lessonReady(i)?'done':''}" data-lesson="${i}">Lesson ${i+1}</button>`).join('');
 document.querySelectorAll('.lesson-tab').forEach(b=>b.addEventListener('click',()=>{currentLesson=Number(b.dataset.lesson);render();window.scrollTo({top:0,behavior:'smooth'});}));
}

function render(){
 renderTabs(); const lesson=lessons[currentLesson];
 progressText.textContent=`Lesson ${currentLesson+1} of ${lessons.length}`; progressBar.style.width=`${((currentLesson+1)/lessons.length)*100}%`; finishCard.classList.add('hidden');
 let html=`<section class="card lesson-header"><h2>${lesson.title}</h2><p class="lesson-subtitle">${lesson.subtitle}</p><p><strong>Multiple choice:</strong> Choose an answer and you will know immediately if it is correct. If it is incorrect, try again.</p></section>`;
 lesson.questions.forEach((q,qi)=>{const shuffled=optionOrders[currentLesson][qi]; const done=questionCorrect[currentLesson][qi];
   html+=`<article class="card question"><div class="qtop"><h2>Question ${qi+1}: ${q.title}</h2><span class="badge">Lesson ${currentLesson+1}</span></div><p class="prompt">${highlightPrompt(q.prompt,q.highlight||[])}</p>${q.code?`<div class="code">${escapeHtml(q.code)}</div>`:''}<div class="options">${shuffled.map(item=>`<button class="option ${done&&item.originalIndex===q.answer?'correct':''}" data-q="${qi}" data-o="${item.originalIndex}" ${done?'disabled':''}>${escapeHtml(item.text)}</button>`).join('')}</div><div class="feedback ${done?'good':''}" id="feedback-${qi}">${done?'✓ Correct — '+q.feedback:''}</div></article>`;
 });
 const c=lesson.coding;
 html+=`<section class="card coding-card"><h2>${c.title}</h2><div class="scenario"><strong>Scenario:</strong> ${c.scenario}</div><b>Your program should:</b><ul class="requirements">${c.requirements.map(r=>`<li>${r}</li>`).join('')}</ul><div class="starter">${escapeHtml(c.starter)}</div><textarea class="code-entry" id="codeEntry" spellcheck="false" placeholder="Type your Python code here...">${escapeHtml(codeEntries[currentLesson])}</textarea><button class="primary" id="checkCodeBtn">Check My Code</button><div class="feedback" id="codeFeedback"></div><div id="codeResults"></div></section>`;
 html+=`<div class="lesson-actions">${currentLesson>0?'<button class="secondary" id="backBtn">Previous Lesson</button>':''}<button class="next-btn" id="nextBtn" ${lessonReady(currentLesson)?'':'disabled'}>${currentLesson===lessons.length-1?'Finish Practice':'Next Lesson'}</button></div>`;
 lessonView.innerHTML=html;
 document.querySelectorAll('.option').forEach(btn=>btn.addEventListener('click',checkQuestionImmediately));
 document.getElementById('codeEntry').addEventListener('input',e=>{codeEntries[currentLesson]=e.target.value;codingChecked[currentLesson]=false;codingPassed[currentLesson]=false;document.getElementById('nextBtn').disabled=true;});
 document.getElementById('checkCodeBtn').addEventListener('click',checkCode);
 const back=document.getElementById('backBtn');if(back)back.addEventListener('click',()=>{currentLesson--;render();window.scrollTo({top:0,behavior:'smooth'});});
 document.getElementById('nextBtn').addEventListener('click',nextLesson);
 if(codingChecked[currentLesson])displayCodeResults();
}

function checkQuestionImmediately(e){
 const qi=Number(e.currentTarget.dataset.q),oi=Number(e.currentTarget.dataset.o),q=lessons[currentLesson].questions[qi],fb=document.getElementById(`feedback-${qi}`),buttons=[...document.querySelectorAll(`[data-q="${qi}"]`)];
 answers[currentLesson][qi]=oi; buttons.forEach(b=>b.classList.remove('selected','correct','incorrect'));
 if(oi===q.answer){questionCorrect[currentLesson][qi]=true;e.currentTarget.classList.add('correct');fb.className='feedback good';fb.textContent='✓ Correct — '+q.feedback;buttons.forEach(b=>b.disabled=true);}
 else{e.currentTarget.classList.add('incorrect');fb.className='feedback bad';fb.textContent='Not quite. Try again.';}
 updateNext();
}

function checkCode(){
 codingChecked[currentLesson]=true; const checks=lessons[currentLesson].coding.checks.map(ch=>({label:ch.label,pass:ch.test(codeEntries[currentLesson])})); codingPassed[currentLesson]=checks.every(x=>x.pass); displayCodeResults(checks); updateNext();
}
function displayCodeResults(precomputed=null){
 const checks=precomputed||lessons[currentLesson].coding.checks.map(ch=>({label:ch.label,pass:ch.test(codeEntries[currentLesson])})); const pass=checks.every(x=>x.pass),fb=document.getElementById('codeFeedback'),results=document.getElementById('codeResults');
 fb.className=`feedback ${pass?'good':'bad'}`; fb.textContent=pass?'✓ Your code includes all of the key pieces.':'Your code needs a little more work. Use the checklist below, revise it, and check again.';
 results.innerHTML=checks.map(x=>`<div class="result-row">${x.pass?'✓':'○'} ${x.label}</div>`).join('');
}
function updateNext(){document.getElementById('nextBtn').disabled=!lessonReady(currentLesson);renderTabs();}
function nextLesson(){if(!lessonReady(currentLesson))return;if(currentLesson<lessons.length-1){currentLesson++;render();window.scrollTo({top:0,behavior:'smooth'});}else showFinish();}
function showFinish(){lessonView.innerHTML='';finishCard.classList.remove('hidden');const correct=questionCorrect.reduce((n,a)=>n+a.filter(Boolean).length,0),possible=lessons.reduce((n,l)=>n+l.questions.length,0);document.getElementById('finalScore').textContent=`Multiple-choice questions: ${correct} / ${possible} correct. Coding scenarios: ${codingPassed.filter(Boolean).length} / ${lessons.length} complete.`;progressText.textContent='Practice complete';progressBar.style.width='100%';renderTabs();finishCard.scrollIntoView({behavior:'smooth',block:'center'});}
document.getElementById('resetBtn').addEventListener('click',()=>{currentLesson=0;answers.forEach(a=>a.fill(null));questionCorrect.forEach(a=>a.fill(false));codingChecked.fill(false);codingPassed.fill(false);codeEntries.fill('');optionOrders=makeOptionOrders();render();window.scrollTo({top:0,behavior:'smooth'});});
render();