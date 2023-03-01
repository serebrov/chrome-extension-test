const article = document.querySelector('#content')
const insertAfter = document.querySelector('.f-meta-2')

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  insertReadingTime(article, insertAfter, 1000)
}
