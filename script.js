'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const results = ['大吉', '小吉', '凶', '中吉', '末吉', '吉'];
   //const n =Math.floor(Math.random() *3);

       // btn.textContent = n;
        btn.textContent = results[Math.floor(Math.random() * results.length)];

       // switch (n) {
       //    case 0:
       //        btn.textContent = '大吉';
       //        break;
       //    case 1:
       //        btn.textContent = '小吉';
       //        break;
       //    case 2:
       //        btn.textContent = '凶';
       //        break;

    //    }
    });
}