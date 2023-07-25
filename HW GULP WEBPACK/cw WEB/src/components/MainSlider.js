class ImageSlider {
    render() {
      const slider = document.createElement('div');
      slider.classList.add('slider');
  
      const image1 = document.createElement('img');
      image1.src = 'image1.jpg';
  
      const image2 = document.createElement('img');
      image2.src = 'image2.jpg';
  
      const image3 = document.createElement('img');
      image3.src = 'image3.jpg';
  
      slider.appendChild(image1);
      slider.appendChild(image2);
      slider.appendChild(image3);
  
      return slider;
    }
  }
  
  export default ImageSlider;