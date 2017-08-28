// List of JavaScript tips
var tipsList = [
	"Não esqueça da palavra-chave <span class='code'>var</span> ao atribuir o valor de uma variável pela primeira vez.",

	"<span class='code'>undefined</span>, <span class='code'>null</span>, <span class='code'>0</span>, <span class='code'>false</span>, <span class='code'>NaN</span>, e <span class='code'>''</span> (empty string) são todas falsas.",

	"Declare uma função como<br/> <span class='code-block'>function <em>myFunctionName</em>() { <br>&nbsp;&nbsp;...<br> }</span>",

	"<span class='code'>if</span>/<span class='code'>else</span> são declaradas como <br/> <span class='code-block'>if (<em>condition</em>) { <br/>&nbsp;&nbsp;...<br/>} else { <br/>&nbsp;&nbsp;...<br/>}",

	"O <span class='code'>for</span> possui três condições: Uma condição de início, uma condição de pausa, e um iterador: <br> <span class='code-block'>for (var i = 0; i < myArray.length; i++) { <br>&nbsp;&nbsp;...<br>}</span>",

	"Para gerar um número aleatório, use a função JavaScript's <span class='code'>Math.random()</span>.",

];

// Tip Limit counter
var tipLimit = 3;

var tipsFinishedButton = document.querySelector('.tips-finished');

// Generate a number
function generateNumber() {
	return Math.floor(Math.random() * tipsList.length);
}

// Generate a tip:
// 1. Get random number from generateNumber()
// 2. Use the random number to get the tip from the array
// 3. Show the tip
function generateTip() {
	var tip = tipsList[generateNumber()];
	var tipElement = document.querySelector('.js-tip');
	var tipLimitCount = document.querySelector('.tip-limit-count');

	tipElement.innerHTML = tip;
	tipLimitCount.innerHTML = tipLimit;
}

// Tip button click
// 1. Select the tip button
// 2. Add a click event listener
// 3. When the button is clicked:
// 3a. Subtract 1 from the tipLimit
// 3b. If the tipLimit is still above or equal to 0, generate a new tip
// 3c. If not, change the button text and look
function onTipButtonClick() {
	var tipButton = document.querySelector('.tip-button');
  	tipsFinishedButton.style.display = 'none';
	tipButton.addEventListener('click', function() {
		tipLimit = tipLimit - 1;
		if (tipLimit >= 0) {
			generateTip();

			if (tipLimit === 0) {
				tipButton.style.display = 'none';
        		tipsFinishedButton.style.display = 'block';
			}
		}
	});
}

onTipButtonClick();

// Get the first tip
generateTip();