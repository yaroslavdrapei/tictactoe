const modals = (modalSel, callBack) => {
  const modal = document.querySelector(modalSel)
  
  modal.addEventListener('click', e => {
    const target = e.target
    if (target === modal) {
      modal.classList.add('hide')
      callBack()
    }
  })
  
  // closeBtns.forEach(btn => {
  //   btn.addEventListener('click', () => {
  //     modal.classList.add('hide')
  //     callBack()
  //   })
  // })
}

export default modals