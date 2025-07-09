window.onload = () => {
  const showLoginBtn = document.getElementById('show-login-btn')
  const showRegisterBtn = document.getElementById('show-register-btn')
  const loginForm = document.getElementById('login-form')
  const registerForm = document.getElementById('register-form')

  // 切换到登录视图。
  const showLogin = () => {
    registerForm.classList.add('hidden')
    showLoginBtn.classList.add('text-primary', 'border-b-2', 'border-primary')

    showRegisterBtn.classList.remove('text-primary', 'border-b-2', 'border-primary')
    loginForm.classList.remove('hidden')

  }

  // 切换到注册视图。
  const showRegister = () => {
    loginForm.classList.add('hidden')
    showRegisterBtn.classList.add('text-primary', 'border-b-2', 'border-primary')

    showLoginBtn.classList.remove('text-primary', 'border-b-2', 'border-primary')
    registerForm.classList.remove('hidden')
  }


  // 登录
  const handleLogin = (event) => {
    event.preventDefault()
    const username = document.getElementById('login-email').value
    const password = document.getElementById('login-password').value

    if (username === 'admin@qq.com' && password === 'admin') {
      window.location.href = 'admin/manage-books.html'
    }

  }

  // 注册
  const handleRegister = (event) => {
    event.preventDefault()
    const username = document.getElementById('register-username').value
    const email = document.getElementById('register-email').value
    const password = document.getElementById('register-password').value

  }



  if (showLoginBtn && showRegisterBtn) {
    showLoginBtn.addEventListener('click', showLogin)
    showRegisterBtn.addEventListener('click', showRegister)
  }


  if (loginForm && registerForm) {
    loginForm.addEventListener('submit', handleLogin)
    registerForm.addEventListener('submit', handleRegister)
  }
} 