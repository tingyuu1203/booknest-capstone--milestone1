window.onload = () => {
  const borrowForm = document.getElementById('borrow-form')
  const bookTitleInput = document.getElementById('book-title')
  const formFeedback = document.getElementById('form-feedback')

  // 从URL的查询字符串中获取参数值。
  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
  }

  // 根据ID查找图书。
  const findBookById = (id) => {
    return books.find(book => book.id.toString() === id)
  }

  // 在表单中预填充图书标题。
  const populateBookTitle = (book) => {
    if (book && bookTitleInput) {
      bookTitleInput.value = book.title
    }
  }

  // 处理借阅表单的提交。
  const handleBorrowSubmit = (event) => {
    event.preventDefault()
    if (formFeedback) {
      formFeedback.textContent = 'Your application has been submitted successfully!'
      formFeedback.classList.add('text-green-600')
      borrowForm.reset()

      // 重置后重新填充图书标题
      const bookId = getQueryParam('id')
      if (bookId) {
        const book = findBookById(bookId)
        populateBookTitle(book)
      }
    }
  }

  const bookId = getQueryParam('id')
  if (bookId) {
    const book = findBookById(bookId)
    populateBookTitle(book)
  }

  if (borrowForm) {
    borrowForm.addEventListener('submit', handleBorrowSubmit)
  }
} 