const scriptURL = 'https://script.google.com/macros/s/AKfycbxRgWrbSika9_RwP-ks3WwUS2PI0NWt9EIiGBawSYKAxk9y2BXFRFoUY-UN68L1iZC4/exec'
const form = document.forms['Contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)}).then(response => alert("Thankyou For Contacting Us. We Will Reach you out Soon!!! Be Patient...")).then(() => {window.location.reload();}).catch(error => console.error('Error! ', error.message))
})