const button = document.querySelector('button');
const foodItems = [
  "Chettinad Chicken",
  "Hyderabadi Biryani",
  "Malabar Parotta",
  "Mysore Masala Dosa",
  "Paneer Tikka Masala",
  "Butter Chicken"
];

function showFoodItems() {
  let foodList = "";
  for (const item of foodItems) {
    foodList += `<li>${item}</li>`;
  }
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `<h2>Foodie Delights</h2><ul>${foodList}</ul><button class="close-btn">Close</button>`;
  document.body.appendChild(modal);

  const closeButton = modal.querySelector('.close-btn');
  closeButton.addEventListener('click', () => {
    modal.classList.remove('active'); 
  });
  modal.classList.add('active');
}

button.addEventListener('click', showFoodItems);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}