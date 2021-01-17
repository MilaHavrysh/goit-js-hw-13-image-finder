import './styles.css';
import './js/notifications.js';
import refs from './js/reference.js';
import galleryCard from './templates/gallery_card.hbs'
import fetchPicture from './js/apiService.js'
import { info } from '@pnotify/core';
info({
  text: 'Введите запрос'
});

let inputValue = ''
let page = 1

const markup = (data) => {
    const pictureCard = galleryCard(data)
    refs.gallery.insertAdjacentHTML('beforeend', pictureCard)
}
const searchPicture = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    inputValue = form.elements.query.value;
    fetchPicture(inputValue, page)
        .then(({ hits }) => { markup(hits); console.log(hits); page += 1 })
    refs.gallery.innerHTML = ""
    form.reset()    
  
    
}

const loadMorePicture = (event) => {
    fetchPicture(inputValue, page)
        .then(({ hits }) => {
            markup(hits);
            page += 1;
                setTimeout(window.scrollTo({
                top: document.documentElement.offsetHeight,
                behavior: 'smooth'
            }), 500);
               
        })
}
   
refs.searchForm.addEventListener('submit', searchPicture)
refs.buttonLoad.addEventListener('click',loadMorePicture)
    
        
  
    
