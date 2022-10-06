/* global QRCode */

;(function () {
  let saveBtn = null
  const form = document.getElementById('generate-form')
  const qr = document.getElementById('qrcode')
  const sizeInput = document.getElementById('size')
  const urlInput = document.getElementById('url')

  // Button submit
  function onGenerateSubmit(evt) {
    evt.preventDefault()

    clearUI()

    const url = urlInput.value
    const size = sizeInput.value

    // Validate url
    if (url === '') {
      window.alert('Please enter a URL')
      return
    }

    generateQRCode({ size, url })

    // Generate the save button after the qr code image src is ready
    setTimeout(() => {
      // Get save url
      const saveUrl = qr.querySelector('img').src

      // Create save button
      createSaveBtn(saveUrl)
    }, 50)
  }

  // Generate QR code
  function generateQRCode({ size, url }) {
    new QRCode('qrcode', {
      text: url,
      width: size,
      height: size,
    })
  }

  // Clear QR code and save button
  function clearUI() {
    qr.innerHTML = ''

    // saveBtn is generated dynamically via createSaveBtn
    if (saveBtn) {
      saveBtn.remove()
    }
  }

  // Create save button to download QR code as image
  function createSaveBtn(saveUrl) {
    // Reset global reference
    saveBtn = null

    // Create the download link
    const link = document.createElement('a')
    link.id = 'save-link'
    link.href = saveUrl
    link.download = 'qrcode'
    link.innerHTML = '<button>Save</button>'

    // Add new link to the DOM
    document.getElementById('generated').appendChild(link)

    // Set the global reference to our new link
    saveBtn = link
  }

  form.addEventListener('submit', onGenerateSubmit)
  form.addEventListener('reset', clearUI)
})()
