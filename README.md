# Remove-BG: AI-Powered Background Removal Tool 🎨

A sleek and efficient web application that removes backgrounds from images using the remove.bg API. Built as part of the Liftoff club at SRMIST.

![Remove-BG Demo](demo.gif)

## ✨ Features

- **Instant Background Removal**: Remove backgrounds from images in seconds
- **Drag & Drop Interface**: Easy-to-use drag and drop functionality
- **Live Preview**: See your image before processing
- **High-Quality Results**: Professional-grade background removal
- **Responsive Design**: Works seamlessly on all devices
- **Download Option**: Save processed images with a single click

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- An internet connection
- Images in common formats (JPG, PNG, etc.)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/remove-bg.git
   ```

2. Navigate to the project directory:
   ```bash
   cd remove-bg
   ```

3. Open `index.html` in your web browser or set up a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

## 💻 Usage

1. **Upload an Image**:
   - Click the "Choose Image" button
   - Or drag and drop an image into the upload area

2. **Process the Image**:
   - Wait for the background removal process to complete
   - The loading indicator will show the progress

3. **Download the Result**:
   - Click the download button to save your processed image
   - The image will be saved with a transparent background

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [remove.bg API](https://www.remove.bg/api)
- Modern CSS Features (Flexbox, CSS Variables, etc.)

## 📝 API Key Setup

To use your own API key:

1. Sign up at [remove.bg](https://www.remove.bg/api)
2. Get your API key
3. Replace the API key in `script.js`:
   ```javascript
   headers: { "X-Api-Key": "YOUR_API_KEY" }
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shaurya Kesarwani**
- Roll Number: RA2411026010989
- SRMIST Student
- Member of Liftoff Club

## 🙏 Acknowledgments

- [remove.bg](https://www.remove.bg) for providing the API
- SRMIST Liftoff Club for the opportunity
- All contributors and supporters of the project


---

Created with energy and enthusiasm by Shaurya Kesarwani for the SRMIST Liftoff Club.