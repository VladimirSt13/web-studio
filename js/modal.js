const refs = {
  body: document.querySelector("body"),
  openModalBtn: document.querySelector("[data-action='open-modal']"),
  closeModalBtn: document.querySelector("[data-action='close-modal']"),
  modal: document.querySelector("[data-modal]"),
  backdrop: document.querySelector("[data-backdrop]"),
  lockPadding: document.querySelectorAll("[data-lock-padding]"),
};

const onOpenModal = () => {
  refs.backdrop.classList.remove("is-hidden");
  bodyLock();
  window.addEventListener("keydown", onEscKeydown);
};

const onCloseModal = () => {
  refs.backdrop.classList.add("is-hidden");
  refs.body.classList.remove("modal-open");
  bodyUnLock();
};

const onBackdropClick = (event) => {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
};

const onEscKeydown = (event) => {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
    window.removeEventListener("keydown", onEscKeydown);
  }
};

const bodyLock = () => {
  const lockPaddingValue = window.innerWidth - refs.body.offsetWidth + "px";
  console.log("refs.lockPadding", refs.lockPadding);
  if (refs.lockPadding.length > 0) {
    refs.lockPadding.forEach((el) => {
      el.style.paddingRight = lockPaddingValue;
    });
  }

  refs.body.style.paddingRight = lockPaddingValue;
  refs.body.classList.add("lock");
};

const bodyUnLock = () => {
  if (refs.lockPadding.length > 0) {
    refs.lockPadding.forEach((el) => {
      el.style.paddingRight = "0px";
    });
  }
  refs.body.style.paddingRight = "0px";
  refs.body.classList.remove("lock");
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackdropClick);
