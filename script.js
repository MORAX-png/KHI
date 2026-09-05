// ==========================================
// NAVAAN CLOTHING
// WHATSAPP ORDER SYSTEM
// ==========================================

// Your WhatsApp number
const whatsappNumber = "923212156035";


// ==========================================
// ORDER PRODUCT
// ==========================================

function orderProduct() {

    const productName = "K-POP STAR: DRESS UP";
    const price = "Rs. 2,000";

    const message =
        "Assalamualaikum! I want to order:\n\n" +
        "Product: " + productName + "\n" +
        "Price: " + price + "\n\n" +
        "Please tell me the available sizes.";

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}