
import './styles.css';
import { multiply } from './math';

const num1 = document.getElementById('number1') as HTMLInputElement;
const num2 = document.getElementById('number2') as HTMLInputElement;
const multiplybutton = document.getElementById('multiply') as HTMLInputElement;
const answerEl = document.getElementById('answer') as HTMLSpanElement;

multiplybutton.addEventListener('click', function () {
    const n1 = num1.valueAsNumber;
    const n2 = num2.valueAsNumber;

    const answer = multiply(n1, n2);

    answerEl.innerHTML = answer.toString();
});
