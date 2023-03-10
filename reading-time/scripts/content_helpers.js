function insertReadingTime(article, insertAfter, insertDelay) {
  const text = article.textContent
  const wordMatchRegExp = /[^\s]+/g // Regular expression
  const words = text.matchAll(wordMatchRegExp)
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length
  const readingTime = Math.round(wordCount / 200)
  const badge = document.createElement('p')
  // Use the same styling as the publish information in an article's header
  badge.classList.add('color-secondary-text', 'type--caption')
  badge.textContent = `⏱️ ${readingTime} min read`

  setTimeout(() => {
    console.log(insertAfter, badge)
    insertAfter.insertAdjacentElement('afterend', badge)
  }, insertDelay)
}
