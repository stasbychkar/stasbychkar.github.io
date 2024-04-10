document.addEventListener('DOMContentLoaded', () => {

    // count total cash
    document.querySelector('form').onsubmit = () => {
        let cash_sum = 0;
        document.querySelectorAll('.coins').forEach((input) => {
            cash_sum += count(input.value) * parseFloat(input.dataset.coin);
        });
        let result = document.querySelector('#result');
        result.innerHTML = cash_sum.toFixed(2);

        return false;
    
    }

    // sync count -> amount
    document.querySelectorAll('[data-count]').forEach((inputField) => {
        inputField.addEventListener('change', () => {
            let amount = count(inputField.value) * parseFloat(inputField.dataset.coin);
            let inputClass = inputField.className.split(' ')[1];
            document.querySelectorAll("." + inputClass)[1].value = amount.toFixed(2);
        });
    });
    
    // sync amount -> count
    document.querySelectorAll('[data-amount]').forEach((inputField) => {
        inputField.addEventListener('change', () => {
            let inputClass = inputField.className.split(' ')[1];
            let countField = document.querySelectorAll("." + inputClass)[0];
            let amount = count(inputField.value) / parseFloat(countField.dataset.coin);
            document.querySelectorAll("." + inputClass)[0].value = amount;
        });
    });

    // bills selection
    // choose drawer
})

// helper fubnctions

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