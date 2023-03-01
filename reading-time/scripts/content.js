const article = document.querySelector('article')

// Support for API reference docs
const heading = article.querySelector('h1')
// Support for article docs with date
const date = article.querySelector('time')?.parentNode
const insertAfter = (date ?? heading)

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  insertReadingTime(article, insertAfter, 0)
}
