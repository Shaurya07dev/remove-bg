document.addEventListener("DOMContentLoaded", () => {
  const uploadBtn = document.getElementById("uploadButton")
  const fileInput = document.getElementById("fileInput")
  const uploadArea = document.getElementById("uploadArea")
  const resultArea = document.getElementById("resultArea")
  const resultImage = document.getElementById("resultImage")
  const previewImage = document.getElementById("previewImage")
  const loadingIndicator = document.getElementById("loadingIndicator")
  const downloadBtn = document.getElementById("downloadBtn")
  const initialMessage = document.getElementById("initialMessage")
  const uploadPlaceholder = document.querySelector(".upload-placeholder")

  // Handle upload button click
  uploadBtn.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    fileInput.click()
  })

  // Handle upload area click
  uploadArea.addEventListener("click", (e) => {
    // Only trigger if clicking directly on the upload area, not on its children
    if (e.target === uploadArea) {
      e.preventDefault()
      fileInput.click()
    }
  })

  // Handle drag and drop events
  uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault()
    uploadArea.classList.add("dragover")
  })

  uploadArea.addEventListener("dragleave", () => {
    uploadArea.classList.remove("dragover")
  })

  uploadArea.addEventListener("drop", (e) => {
    e.preventDefault()
    uploadArea.classList.remove("dragover")
    if (e.dataTransfer.files.length) {
      handleFile(e.dataTransfer.files[0])
    }
  })

  fileInput.addEventListener("change", (e) => {
    e.preventDefault()
    if (fileInput.files.length) {
      handleFile(fileInput.files[0])
    }
  })

  function showPreview(file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      previewImage.src = e.target.result
      previewImage.classList.remove("hidden")
      uploadPlaceholder.classList.add("hidden")
    }
    reader.readAsDataURL(file)
  }

  async function handleFile(file) {
    if (file.type.startsWith("image/")) {
      try {
        // Show preview
        showPreview(file)

        // Show loading state
        initialMessage.classList.add("hidden")
        loadingIndicator.classList.remove("hidden")
        resultImage.classList.add("hidden")
        downloadBtn.classList.add("hidden")

        const formData = new FormData()
        formData.append("image_file", file)
        formData.append("size", "auto")

        const response = await fetch("https://api.remove.bg/v1.0/removebg", {
          method: "POST",
          headers: { "X-Api-Key": "uGSGhkUwFX2yzjH2p8pMQVFN" },
          body: formData,
        })

        if (!response.ok) {
          throw new Error(`Failed to process image: ${response.statusText}`)
        }

        const blob = await response.blob()
        const imgUrl = URL.createObjectURL(blob)

        // Update UI with result
        resultImage.src = imgUrl
        resultImage.classList.remove("hidden")
        downloadBtn.classList.remove("hidden")
        downloadBtn.href = imgUrl
      } catch (error) {
        console.error("Error processing image:", error)
        alert("Error: Could not remove background. Please try again.")
        // Show initial message again on error
        initialMessage.classList.remove("hidden")
        // Reset preview
        previewImage.classList.add("hidden")
        uploadPlaceholder.classList.remove("hidden")
      } finally {
        // Always hide loading indicator when done
        loadingIndicator.classList.add("hidden")
      }
    } else {
      alert("Please select an image file.")
    }
  }
})

