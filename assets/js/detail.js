window.onload = () => {
  const bookDetailContent = document.getElementById('book-detail-content')

  // 从URL的查询字符串中获取参数值。
  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
  }

  // 根据ID查找图书。
  const findBookById = (id) => {
    return books.find(book => book.id.toString() === id)
  }

  // 将图书的详细信息渲染到页面上。
  const renderBookDetails = (book) => {
    if (!book) {
      bookDetailContent.innerHTML = '<p class="text-red-500">Book not found.</p>'
      return
    }

    bookDetailContent.innerHTML = `
            <div class="grid md:grid-cols-3 gap-8">
                <div class="md:col-span-1">
                    <img src="${book.cover}" alt="Cover of ${book.title}" class="w-full h-auto rounded-lg shadow-md">
                </div>
                <div class="md:col-span-2">
                    <h1 class="text-4xl font-bold text-gray-800">${book.title}</h1>
                    <p class="text-xl text-gray-600 mt-2">by ${book.author}</p>
                    <p class="mt-4 text-gray-700">${book.description}</p>
                    <div class="mt-6">
                        <span class="text-lg font-semibold ${book.stock > 0 ? 'text-green-600' : 'text-red-600'}">
                            ${book.stock > 0 ? `${book.stock} copies available` : 'Currently out of stock'}
                        </span>
                    </div>
                    <div class="mt-6">
                        <a href="borrow.html?id=${book.id}" class="w-full text-center bg-primary text-white py-3 px-6 rounded-md hover:bg-purple-700 ${book.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}">
                            ${book.stock > 0 ? 'Apply to Borrow' : 'Unavailable'}
                        </a>
                    </div>
                </div>
            </div>
        `
  }

  const bookId = getQueryParam('id')
  if (bookId) {
    const book = findBookById(bookId)
    renderBookDetails(book)
  } else {
    bookDetailContent.innerHTML = '<p class="text-red-500">No book ID provided.</p>'
  }
} 