window.onload = () => {

  const bookGrid = document.getElementById('book-grid')
  const searchInput = document.getElementById('search-input')
  const authorInput = document.getElementById('author-input')
  const searchBtn = document.getElementById('search-btn')

  /**
   * 根据提供的图书数据创建图书卡片的HTML结构。
   */
  const createBookCard = (book) => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img src="${book.cover}" alt="Cover of ${book.title}" class="w-full h-64 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-bold text-gray-800">${book.title}</h3>
                <p class="text-gray-600">by ${book.author}</p>
                <div class="mt-4 flex justify-between items-center">
                    <span class="text-sm font-semibold ${book.stock > 0 ? 'text-green-600' : 'text-red-600'}">
                        ${book.stock > 0 ? `${book.stock} in stock` : 'Out of stock'}
                    </span>
                    <a href="book-detail.html?id=${book.id}" class="text-primary hover:underline">View Details</a>
                </div>
            </div>
        </div>
    `

  /**
   * 将图书渲染到页面指定的html中。
   */
  const renderBooks = (booksToRender) => {
    if (!bookGrid) return
    // 将图书数据转换为html字符串 并插入到book-grid中
    bookGrid.innerHTML = booksToRender.map(createBookCard).join('')
  }

  /**
   * 根据搜索词和作者名筛选图书。
   */
  const filterBooks = () => {
    const searchTerm = searchInput.value.toLowerCase()
    const authorTerm = authorInput.value.toLowerCase()

    const filteredBooks = books.filter(book => {
      const titleMatch = book.title.toLowerCase().includes(searchTerm)
      const authorMatch = book.author.toLowerCase().includes(authorTerm)
      return titleMatch && authorMatch
    })

    renderBooks(filteredBooks)
  }

  // Initial render of all books
  if (bookGrid) {
    renderBooks(books)
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', filterBooks)
  }

  // 搜索框输入事件 触发搜索
  if (searchInput) {
    searchInput.addEventListener('input', filterBooks)
  }

  if (authorInput) {
    authorInput.addEventListener('input', filterBooks)
  }
} 