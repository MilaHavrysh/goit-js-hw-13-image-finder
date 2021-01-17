import { error } from '@pnotify/core';
const apiKey = '19836134-b34949b11efa02f4075f5e847';

const fetchPicture = (value, page=1) => {
        
        return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${page}&per_page=12&key=${apiKey}`)
                .then(image => image.json())
                .catch((error) => 
                        error({
                                text: 'Ошибка!'
                        })
                )}



export default fetchPicture