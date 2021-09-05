function addPictures() {
  return fetch(
    'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=23243839-9e0dbc2f727b7d3ca19c2cc88',
  )
    .then(res => res.json())
    .then(console.log());
}

addPictures(flower);
