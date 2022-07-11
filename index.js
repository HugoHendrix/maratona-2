document.body.setAttribute('data-theme', 'light')

const button = document.querySelector('.js-theme')

const themes = {
  'dark': 'light',
  'light': 'dark',
  'dark': 'pink',
  'pink': 'light',

}

if (button) {
  button.addEventListener('click', event => {
    event.preventDefault()
    const currentTheme = document.body.dataset.theme
    document.body.setAttribute('data-theme', themes[currentTheme] || 'light')
  })
}