window.onload = () => {
  const adminBookList = document.getElementById('admin-book-list')
  const addBookBtn = document.getElementById('add-book-btn')
  const bookModal = document.getElementById('book-modal')
  const modalTitle = document.getElementById('modal-title')
  const bookForm = document.getElementById('book-form')
  const cancelBtn = document.getElementById('cancel-btn')
  const bookIdInput = document.getElementById('book-id')
  const titleInput = document.getElementById('modal-title-input')
  const authorInput = document.getElementById('modal-author-input')
  const descInput = document.getElementById('modal-desc-input')
  const stockInput = document.getElementById('modal-stock-input')

  // 将图书渲染到管理列表的表格中。
  const renderAdminBooks = () => {
    if (!adminBookList) return
    adminBookList.innerHTML = books.map(book => `
            <tr data-id="${book.id}">
                <td class="px-6 py-4 whitespace-nowrap">${book.title}</td>
                <td class="px-6 py-4 whitespace-nowrap">${book.author}</td>
                <td class="px-6 py-4 whitespace-nowrap">${book.stock}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button class="text-indigo-600 hover:text-indigo-900 edit-btn">Edit</button>
                    <button class="text-red-600 hover:text-red-900 ml-4 delete-btn">Delete</button>
                </td>
            </tr>
        `).join('')
  }

  // 打开模态框。
  const openModal = (isEdit = false, book = null) => {
    bookForm.reset()
    if (isEdit && book) {
      modalTitle.textContent = 'Edit Book'
      bookIdInput.value = book.id
      titleInput.value = book.title
      authorInput.value = book.author
      descInput.value = book.description
      stockInput.value = book.stock
    } else {
      modalTitle.textContent = 'Add New Book'
      bookIdInput.value = ''
    }
    bookModal.classList.remove('hidden')
  }

  // 关闭模态框。
  const closeModal = () => {
    bookModal.classList.add('hidden')
  }

  // 处理表单提交（添加或编辑）。
  const handleFormSubmit = (event) => {
    event.preventDefault()
    const id = bookIdInput.value
    const newBookData = {
      title: titleInput.value,
      author: authorInput.value,
      description: descInput.value,
      stock: parseInt(stockInput.value, 10),
      cover: 'assets/images/cover-placeholder.jpg' // Placeholder
    }

    if (id) { // Edit existing book
      const bookIndex = books.findIndex(b => b.id.toString() === id)
      if (bookIndex !== -1) {
        books[bookIndex] = { ...books[bookIndex], ...newBookData }
      }
    } else { // Add new book
      newBookData.id = Date.now() // Simple unique ID
      books.push(newBookData)
    }

    renderAdminBooks()
    closeModal()
  }

  // 处理图书列表中的点击事件  编辑或删除
  const handleBookListClick = (event) => {
    const target = event.target
    const row = target.closest('tr')
    if (!row) return

    // 编辑图书
    const bookId = row.dataset.id
    if (target.classList.contains('edit-btn')) {
      // 找到要编辑的图书
      const bookToEdit = books.find(b => b.id.toString() === bookId)
      openModal(true, bookToEdit)
    }

    // 删除图书
    if (target.classList.contains('delete-btn')) {
      if (confirm('Are you sure you want to delete this book?')) {
        // 找到要删除的图书
        const bookIndex = books.findIndex(b => b.id.toString() === bookId)
        if (bookIndex > -1) {
          books.splice(bookIndex, 1)
          renderAdminBooks()
        }
      }
    }
  }

  // 初始化渲染
  renderAdminBooks()

  // 事件监听
  if (addBookBtn) {
    addBookBtn.addEventListener('click', () => openModal())
  }
  if (cancelBtn) {
    cancelBtn.addEventListener('click', closeModal)
  }
  if (bookForm) {
    bookForm.addEventListener('submit', handleFormSubmit)
  }
  if (adminBookList) {
    adminBookList.addEventListener('click', handleBookListClick)
  }
} 