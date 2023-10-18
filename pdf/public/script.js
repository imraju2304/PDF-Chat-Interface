document.addEventListener("DOMContentLoaded", function () {
    const pdfInput = document.getElementById("pdfInput");
    const chatLog = document.getElementById("chatLog");
    const messageInput = document.getElementById("messageInput");
    const sendMessageButton = document.getElementById("sendMessageButton");
    const pdfViewer = document.getElementById("pdfViewer");
    const pdfViewerContainer = document.getElementById("pdfViewerContainer");
    const pageIndicator = document.getElementById("pageIndicator");

    let currentPDF = null;

    pdfInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            currentPDF = URL.createObjectURL(file);
            pdfViewer.data = currentPDF;
            pdfViewerContainer.style.display = "block";
        }
    });

    sendMessageButton.addEventListener("click", function () {
        const message = messageInput.value;
        if (message) {
            const newMessage = document.createElement("div");
            newMessage.textContent = `You: ${message}`;
            chatLog.appendChild(newMessage);
            messageInput.value = "";

            // Simulate a response from the PDF
            if (currentPDF) {
                const pageNumber = Math.floor(Math.random() * 10) + 1; // Random page number
                const responseMessage = `PDF: Here's the answer to your question. (Page ${pageNumber})`;
                const pdfMessage = document.createElement("div");
                pdfMessage.textContent = responseMessage;
                chatLog.appendChild(pdfMessage);
                pageIndicator.textContent = `Answer from Page ${pageNumber}`;
            }
        }
    });
});
