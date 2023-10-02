export const waitCursor = () => {
  const body = document.querySelector("body");
  body.classList.add("waiting");
}

export const regularCursor = () => {
  const body = document.querySelector("body");
  body.classList.remove("waiting");
}