const openbtn = document.querySelector(".open");
const closebtn = document.querySelector(".close");
const modal = document.querySelector(".modal");
const form = document.querySelector('form')

openbtn.addEventListener('click', openModal);

function openModal() {
    modal.style.display = 'grid';
}
closebtn.addEventListener('click', closeModal);

function closeModal() {

    modal.classList.add('close-Modal-animation')
    setTimeout(() => {
        modal.style.display = 'none';
        window.location.reload();
    }, 1000)
}

modal.addEventListener('click', function (e) {
    if (e.target.classlist.contains('modal')) {
        closeModal();
    }
})

form.addEventListener('submit', submitForm)

function submitForm(){
    const card = document.querySelector('.card');
    card.innerHTML = "<h2> Thank You For Subscription!</h2>";
    setTimeout(() =>{
        closeModal()
    },3000)
}
