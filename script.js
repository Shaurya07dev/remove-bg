document.addEventListener("DOMContentLoaded", () => {
  const uploadBtn = document.getElementById("uploadBtn")
  const fileInput = document.getElementById("fileInput")
  const uploadArea = document.getElementById("uploadArea")
  const resultArea = document.getElementById("resultArea")
  const resultImage = document.getElementById("resultImage")
  const loadingIndicator = document.getElementById("loadingIndicator")
  const downloadBtn = document.getElementById("downloadBtn")

  uploadBtn.addEventListener("click", () => fileInput.click())

  uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault()
    uploadArea.style.borderColor = "#e94560"
  })

  uploadArea.addEventListener("dragleave", () => {
    uploadArea.style.borderColor = ""
  })

  uploadArea.addEventListener("drop", (e) => {
    e.preventDefault()
    uploadArea.style.borderColor = ""
    if (e.dataTransfer.files.length) {
      handleFile(e.dataTransfer.files[0])
    }
  })

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length) {
      handleFile(fileInput.files[0])
    }
  })

  async function handleFile(file) {
    if (file.type.startsWith("image/")) {
      loadingIndicator.classList.remove("hidden")
      resultImage.classList.add("hidden")
      downloadBtn.classList.add("hidden")

      const formData = new FormData()
      formData.append("image_file", file)
      formData.append("size", "auto")

      try {
        const response = await fetch("https://api.remove.bg/v1.0/removebg", {
          method: "POST",
          headers: { "X-Api-Key": "uGSGhkUwFX2yzjH2p8pMQVFN" },
          body: formData,
        })

        if (!response.ok) throw new Error("Failed to process image")

        const blob = await response.blob()
        const imgUrl = URL.createObjectURL(blob)

        resultImage.src = imgUrl
        resultImage.classList.remove("hidden")
        downloadBtn.classList.remove("hidden")
        downloadBtn.href = imgUrl
      } catch (error) {
        alert("Error: Could not remove background. Please try again.")
      } finally {
        loadingIndicator.classList.add("hidden")
      }
    }
  }
})

