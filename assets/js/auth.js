// Lab 2: This script handles login/logout functionality
// Lab 2: Demonstrates DOM manipulation and event handling for user auth

window.onload = () => {
  const showLoginBtn = document.getElementById('show-login-btn')
  const showRegisterBtn = document.getElementById('show-register-btn')
  const loginForm = document.getElementById('login-form')
  const registerForm = document.getElementById('register-form')

  // Lab 2: Toggle between Login and Register views
  const showLogin = () => {
    registerForm.classList.add('hidden')
    showLoginBtn.classList.add('text-primary', 'border-b-2', 'border-primary')
    showRegisterBtn.classList.remove('text-primary', 'border-b-2', 'border-primary')
    loginForm.classList.remove('hidden')
  }

  const showRegister = () => {
    loginForm.classList.add('hidden')
    showRegisterBtn.classList.add('text-primary', 'border-b-2', 'border-primary')
    showLoginBtn.classList.remove('text-primary', 'border-b-2', 'border-primary')
    registerForm.classList.remove('hidden')
  }

  // Lab 2: Simulate login behavior based on user type
  const handleLogin = (event) => {
    event.preventDefault()
    const username = document.getElementById('login-email').value
    const password = document.getElementById('login-password').value

    if (username === 'admin@qq.com' && password === 'admin') {
      // Simulated admin login
      window.location.href = 'admin/manage-books.html'
    } else {
      // Simulated normal user login
      window.location.href = 'index.html'
    }
  }

  // Lab 2 (preparation for Lab 3): Simulate registration logic
  const handleRegister = (event) => {
    event.preventDefault()
    const username = document.getElementById('register-username').value
    const email = document.getElementById('register-email').value
    const password = document.getElementById('register-password').value

    // Simulate user registration (no database yet)
    alert("Registration successful! Please log in.")
    showLogin() // Switch back to login form
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
