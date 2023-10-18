# PDF-Chat-Interface

This repository contains a web application that allows users to upload PDF documents and interact with embedded PDFs through a chat interface. 

## Features

- **PDF Upload**: Easily upload your PDF documents.
- **Chat Interface**: Interact with the embedded PDFs through a simple chat interface.
- **Page Indicator**: The chat interface shows the page number of the PDF from which the answer has been provided.

## Getting Started

To run the application locally, follow these steps:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/pdf-chat-interface.git
    cd pdf-chat-interface
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Start the Server**:

    ```bash
    node server.js
    ```

4. **Open the Application**:

    Open your web browser and go to `http://localhost:3000`.

## Design Decisions

The application is built using the following technologies and design decisions:

- **Frontend**:
  - HTML, CSS, and JavaScript for the user interface.
  
- **Backend**:
  - Node.js with Express for the server.
  - Multer for file uploads.
