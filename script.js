// Function to add a new card with provided details
function addCard(rowId, imgUrl, name, description, link) {
    var row = document.getElementById(rowId);
    var scrollingWrapper = row.querySelector('.scrolling-wrapper');
  
    var card = document.createElement('div');
    card.classList.add('card');
  
    var image = document.createElement('img');
    image.src = imgUrl;
    card.appendChild(image);
  
    var cardContent = document.createElement('div');
  
    var cardName = document.createElement('h3');
    cardName.textContent = name;
    cardContent.appendChild(cardName);
  
    var cardDescription = document.createElement('p');
    cardDescription.textContent = description;
    cardContent.appendChild(cardDescription);
  
    var cardLink = document.createElement('a');
    cardLink.href = link;
    cardLink.textContent = "Show credential";
    cardContent.appendChild(cardLink);
  
    card.appendChild(cardContent);
    scrollingWrapper.appendChild(card);
  }
  
  // Add examples of certifications, badges, and achievements
  addCard('certifications', 'SoloLearn.png', 'SoloLearn', 'Introduction To Java', 'https://api2.sololearn.com/v2/certificates/CC-2PANKYHB/image/png');
  addCard('certifications', 'certification-img2.png', 'Certification Name 2', 'Description of Certification 2', '#');
  
  addCard('badges', 'badge-img1.png', 'Badge Name 1', 'Description of Badge 1', '#');
  addCard('badges', 'badge-img2.png', 'Badge Name 2', 'Description of Badge 2', '#');
  
  addCard('achievements', 'achievement-img1.png', 'Achievement Name 1', 'Description of Achievement 1', '#');
  addCard('achievements', 'achievement-img2.png', 'Achievement Name 2', 'Description of Achievement 2', '#');
  
