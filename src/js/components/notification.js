export function showNotification(message, type = "success") {
  // Ensure container exists
  let container = document.querySelector(".notification-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "notification-container";
    document.body.appendChild(container);
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification--${type}`;
  notification.textContent = message;

  // Append to container
  container.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "fadeOut 0.3s ease-out forwards";
    notification.addEventListener("animationend", () => {
      if (container.contains(notification)) {
        container.removeChild(notification);
      }
      // Cleanup container if empty
      if (container.children.length === 0) {
        if (document.body.contains(container)) {
          document.body.removeChild(container);
        }
      }
    });
  }, 3000);
}
