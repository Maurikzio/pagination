const btns = document.querySelectorAll('button');
const pagers = document.querySelectorAll('.page');
const previous = document.querySelector('.prev-page');
const next = document.querySelector('.next-page');

let total_pages = 0;

function getPages(){
    const lastPage = [...pagers][2].textContent;
    const firstPage = [...pagers][0].textContent;
    return {firstPage, lastPage};
}

next.addEventListener('click', function(){
    if(getPages().lastPage === `${total_pages}`) {
        this.disabled = true;
        return;
    }
    previous.disabled = false;
    pagers.forEach(pager => {
        pager.textContent = Number(pager.textContent) + 1;
    })
});

previous.addEventListener('click', function(){
    if(getPages().firstPage === '1') {
        this.disabled = true;
        return;
    }
    next.disabled = false;
    pagers.forEach(pager => {
        pager.textContent = Number(pager.textContent) - 1;
    })
})

pagers.forEach(page => {
    page.addEventListener('click', async function(){    
        render(getAllusers(this.textContent));
    })
})