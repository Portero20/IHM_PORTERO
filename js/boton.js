const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

const toastTriggerr = document.getElementById('liveToastBtn2')
const toastLiveExamplee = document.getElementById('liveToast2')
if (toastTriggerr) {
  toastTriggerr.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExamplee)

    toast.show()
  })
}

const toastTriggerrr = document.getElementById('liveToastBtn3')
const toastLiveExampleee = document.getElementById('liveToast3')
if (toastTriggerrr) {
  toastTriggerrr.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExampleee)

    toast.show()
  })
}