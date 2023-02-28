'use strict';

function BinarioADecimal(num) {
let decimal = 0;
let base = 1;
for (let i = num.length - 1; i >= 0; i--) {
if (num[i] === '1') {
decimal += base;
}
base *= 2;
}
return decimal;
}

function DecimalABinario(num) {
let binario = '';
while (num > 0) {
const residuo = num % 2;
binario = residuo.toString() + binario;
num = Math.floor(num / 2);
}
return binario || '0';
}

module.exports = {
BinarioADecimal,
DecimalABinario,
};