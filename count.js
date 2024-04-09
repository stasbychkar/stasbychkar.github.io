// dealing with a single input
function count(input) {
    if (!input) {
        return 0;
    }
    if (!isNaN(input)) {
        return parseFloat(input);
    } else {
        if (input.indexOf('+') !== -1) {
            var sum = 0;
            input.split('+').forEach(part => {
                var num = parseFloat(part.trim());
                sum += num;
            });
            return sum;
        } else {
            return 0;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').onsubmit = () => {
        let cash_sum = 0;
        document.querySelectorAll('.coins').forEach((input) => {
            cash_sum += count(input.value) * parseFloat(input.dataset.coin);
        });
        let result = document.querySelector('#result');
        result.innerHTML = cash_sum.toFixed(2);

        return false;
    
    }

    document.querySelectorAll('[data-count]').forEach((inputField) => {
        inputField.addEventListener('change', () => {
            let amount = count(inputField.value) * parseFloat(inputField.dataset.coin);
            let inputClass = inputField.className.split(' ')[1];
            document.querySelectorAll("." + inputClass)[1].value = amount.toFixed(2);
        });
    });
    
    
})

