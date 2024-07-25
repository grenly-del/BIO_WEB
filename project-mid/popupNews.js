const parentNews = document.querySelector('.news .content-news');
const child = parentNews.children;

console.log(child)

let popEl;

Array.from(child).forEach(el => {
    el.addEventListener('click', (ev) => {
        const id = ev.target.id;
        console.log(id);
        const containerNews = document.querySelector('.container-news');
        popEl = containerNews.querySelector(`#${id}`);
        console.log(popEl);
        if (popEl) {
            popEl.classList.add('active');

            let exit = popEl.querySelector('.logo-x');
            if (exit) {
                exit.addEventListener('click', (ev) => {
                    const parent = ev.target.closest('.active');
                    console.log(parent);
                    if (parent) {
                        parent.classList.remove('active');
                    }
                });
            } else {
                console.error('Exit button not found.');
            }
        } else {
            console.error(`Element with id ${id} not found.`);
        }
    });
});



const parentNews2 = document.querySelector('.news .content-news-2');
const child2 = parentNews2.children;

console.log(child2)

let popEl2;

Array.from(child2).forEach(el => {
    el.addEventListener('click', (ev) => {
        const id = ev.target.id;
        console.log(id);
        const containerNews = document.querySelector('.container-news');
        popEl2 = containerNews.querySelector(`#${id}`);
        console.log(popEl2);
        if (popEl2) {
            popEl2.classList.add('active');

            let exit = popEl2.querySelector('.logo-x');
            if (exit) {
                exit.addEventListener('click', (ev) => {
                    const parent = ev.target.closest('.active');
                    console.log(parent);
                    if (parent) {
                        parent.classList.remove('active');
                    }
                });
            } else {
                console.error('Exit button not found.');
            }
        } else {
            console.error(`Element with id ${id} not found.`);
        }
    });
});
