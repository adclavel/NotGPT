function autoResize(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px";

  const container = textarea.parentElement;
  container.style.height = textarea.scrollHeight + "px";
}
