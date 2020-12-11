// 10-12-2020
function levusPagination(number){

    // обгортка
    const wrap = document.querySelector('.levus-pagination');

    // елементи
    const el = wrap.querySelectorAll('.levus-item');
    
    // навігація
    const nav = wrap.querySelector('.levus-pagination-nav');

    // кількість сторінок
    const pages = Math.ceil(el.length / number);

    // виводимо сторінки
    for(let i = 1; i <= pages; i++){
        nav.innerHTML += `<span>${i}</span>`;
    }

    // 
    let counter = 0;

    el.forEach((item,i) => {
        // усі ховаємо
        item.classList.add('hide');

        // показуємо тільки перші "н" 
        if(i<number){
            item.classList.remove('hide');
        }
    });

    nav.addEventListener('click', e => {
        if(e.target.tagName == 'SPAN'){

            // поточний 
            const current = e.target;

            const n = current.textContent;

            // для порівняння нижче міняємо значення каунтера по кліку
            counter = n-1;

            el.forEach((item,i) => {
                // усі ховаємо
                item.classList.add('hide');
        
                // показуємо тільки обрані
                if(i<number*n && i>=number*counter){
                    item.classList.remove('hide');
                }
            });

            const child = current.parentNode.children;

            [...child].forEach(span => span.className = '');

            // підсвітка кнопки навігації
            current.className = 'active';

        }
    });

}

levusPagination(12);