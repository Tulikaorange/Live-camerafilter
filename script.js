const video = document.getElementById('camera');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Start the camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing camera:', error);
  });

// Apply a filter
function applyFilter(filter) {
  video.style.filter = filter;
}

// Capture and save image
function capture() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const link = document.createElement('a');
  link.download = 'filtered-image.png';
  link.href = canvas.toDataURL();
  link.click();
}
