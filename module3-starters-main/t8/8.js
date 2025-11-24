const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const opEl = document.getElementById('operation');
const startBtn = document.getElementById('start');
const resultEl = document.getElementById('result');

if (startBtn && num1El && num2El && opEl && resultEl) {
    startBtn.addEventListener('click', () => {
        const a = Number(num1El.value.trim());
        const b = Number(num2El.value.trim());

        if (Number.isNaN(a) || Number.isNaN(b)) {
            resultEl.textContent = 'Please enter valid numbers.';
            return;
        }

        let res;
        switch (opEl.value) {
            case 'add':
                res = a + b;
                break;
            case 'sub':
                res = a - b;
                break;
            case 'multi':
                res = a * b;
                break;
            case 'div':
                if (b === 0) {
                    resultEl.textContent = 'Cannot divide by zero.';
                    return;
                }
                res = a / b;
                break;
            default:
                resultEl.textContent = 'Unknown operation.';
                return;
        }

        resultEl.textContent = `Result: ${res}`;
    });
}