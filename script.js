function shareToggle() {
  const shareMenu = document.querySelector(".share-toolbar")
  shareMenu.classList.toggle("toolbar-hidden")

  const shareButton = document.querySelector(".button-background")
  shareButton.classList.toggle("button-active")

  const shareIcon = document.querySelector(".share-icon")
  shareIcon.classList.toggle("share-icon-white")
}