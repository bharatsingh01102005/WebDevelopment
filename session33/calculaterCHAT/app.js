// let buttons = document.querySelectorAll('button');
// let input = document.querySelector('input');

// for (let button of buttons) {
//     button.addEventListener('click', function (event) {
//         let btnText = event.target.innerText;

//         if (btnText === 'C') {
//             input.value = '';
//         } else if (btnText === '=') {
//             try {
//                 input.value = eval(input.value);
//             } catch (error) {
//                 input.value = 'Error';
//             }
//         } else {
//             input.value += btnText;
//         }
//     });
// }



let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

for (let button of buttons) {
    button.addEventListener('click', function (event) {
        let btnText = event.target.innerText;

        if (btnText === 'C') {
            input.value = '';
        } else if (btnText === '=') {
            try {
                // ✅ Remove leading zeros only from whole numbers (not decimals)
                let safeExpression = input.value.replace(/\b0+(\d+)(?!\.)/g, '$1');

                input.value = eval(safeExpression);
            } catch (error) {
                input.value = 'Galat Calculate Kiya Hai';
            }
        } else {
            input.value += btnText;
        }
    });
}
