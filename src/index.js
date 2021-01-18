import './styles.css';
import './js/notifications.js';
import refs from './js/reference.js';
import galleryCard from './templates/gallery_card.hbs'
import fetchPicture from './js/apiService.js'
import { info, notice } from '@pnotify/core';
//import * as basicLightbox from 'basiclightbox'
//import 'basicLightbox/dist/basicLightbox.min.css'
notice({
                text: 'Введите запрос',
                delay:1500
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
        .then(({ hits}) => {
            markup(hits);
            page = 1; page += 1;
            info({
                text: `Загружено 12 изображений по запросу "${inputValue}"`,
                delay:500
});
            
         })    
    refs.gallery.innerHTML = ""
    //form.reset()
    console.log(refs.buttonLoad)
    setTimeout(()=>refs.buttonLoad.classList.remove('is-hidden'),1000)
   
}

const loadMorePicture = (event) => {
    fetchPicture(inputValue, page)
        .then(({ hits }) => {
            markup(hits);            
            page += 1;
            let amountPicture = page * 12-12
            info({
                text: `Загружено ${amountPicture} изображений по запросу "${inputValue}"`,
                delay:500
});
                setTimeout(window.scrollTo({
                top: document.documentElement.offsetHeight,
                behavior: 'smooth'
            }), 500);
               
        })
}
   
refs.searchForm.addEventListener('submit', searchPicture)
refs.buttonLoad.addEventListener('click',loadMorePicture)
    
