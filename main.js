const fs = require('fs');

function collectImageNames() {
  // Select all image elements on the webpage
  const images = document.getElementsByTagName('img');

  // Create an array to store the image names
  const imageNames = [];

  // Iterate over the image elements and collect the image names
  for (let i = 0; i < images.length; i++) {
    const imageName = images[i].getAttribute('src');
    imageNames.push(imageName);
  }

  // Write the image names to a text file
  fs.writeFile('image_names.txt', imageNames.join('\n'), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Image names have been written to image_names.txt');
    }
  });
}

// Usage: Call the function to collect image names and write them to a text file
collectImageNames();
