
    
  // Seller WhatsApp number (international format, no +, no spaces)
  const sellerNumber = "254718175699";

  // Select all buy buttons
  const buyButtons = document.querySelectorAll(".buy-btn");

  buyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const product = button.getAttribute("data-product");
      const price = button.getAttribute("data-price");

      // Build message
      const message = `Hello, I'm interested in ${product} (Ksh ${price}).`;

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);

      // WhatsApp link
      const whatsappLink = `https://wa.me/${sellerNumber}?text=${encodedMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappLink, "_blank");
    });
  });

  // Toggle like
document.querySelectorAll(".like-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});

// Share button (basic copy link example)
document.querySelectorAll(".share-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("🔗 Product link copied to clipboard!");
  });
});
