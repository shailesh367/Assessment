const radioButtons = document.querySelectorAll('input[type="radio"]');
const sections = document.querySelectorAll('.section, .section1, .section2');

// logic for changing section color to green when radio button checked.
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('click', () => {
    sections.forEach((section) => {
      section.classList.remove('selected');
    });
    radioButton.closest('.section, .section1, .section2').classList.add('selected');
    
    // logic for Update the total text.
    const price = radioButton.closest('.section, .section1, .section2').querySelector('.price').textContent;
    document.querySelector('.total').textContent = `Total: ${price}`;

   
  });
});


// logic for add to card button when user click on add to cart button it show different alert messages when radio button checked or when not checked.
function addToCart() {
  const selectedRadio = document.querySelector('input[type="radio"]:checked');
  if (selectedRadio) {
    alert('Item is successfully added to the cart!');
  } else {
    alert('Please select an item before adding to cart.');
  }
}