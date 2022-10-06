;(function () {
  const themeForm = document.getElementById('theme-form')
  const stylesheet = document.getElementById('js-theme-stylesheet')
  const base = 'https://cdn.jsdelivr.net/npm/water.css@2/out/'

  const updateTheme = () => {
    const theme = themeForm.querySelector('input[name="theme"]:checked').value

    const fileName = `${theme}.min.css`
    const localUrl = `${base}${fileName}`

    stylesheet.href = localUrl
  }

  themeForm.addEventListener('change', updateTheme)
})()
