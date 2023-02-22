// selecteren van elementen/classes
const allTriggers = document.querySelectorAll('.id-card-trigger')

allTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const dataId = trigger.dataset.id
        const card = document.getElementById(dataId)
        // card.classList.add('active')
        card.showModal();

        const close_buttons = document.querySelectorAll(".close");
        close_buttons.forEach((close) => {
            close.addEventListener("click", () => {
                card.close()
            });
        })

    })
})

const searchbar = document.querySelector('.searchbar')
const error = document.querySelector('.error-searchbar')

searchbar.addEventListener('input', searching)

function searching() {
    let input = this.value
    input = input.toLowerCase();

    let x = document.querySelectorAll('.id-card-trigger');


    for (i = 0; i < x.length; i++) {
        if (!x[i].childNodes[1].childNodes[3].childNodes[1].innerText.toLowerCase().includes(input)) {
            x[i].style.display = 'none';
            // error.classList.remove('error-searchbar')
        }
        else {
            x[i].style.display = 'block';
            // error.classList.add('error-searchbar')
        }
    }
}
