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
  addCard('certifications', 'certification-img2.png', 'Certification Name 2', 'Description of Certification 2', 'https://api2.sololearn.com/v2/certificates/CC-2PANKYHB/image/png');
  
  addCard('badges', 'HackerRank Bronze badge.png', 'Java Bronze', 'Just earned the Bronze Badge for Java on HackerRank! ', 'https://www.hackerrank.com/profile/asr341025');
  addCard('badges', 'HackerRank Silver Badge.png', 'Java Silver', 'Just earned the Silver Badge for Java on HackerRank!', '#');
  
  addCard('projects', 'Amazon Clone.png', 'Amazon Clone', 'Amazon clone using HTML and CSS', 'https://coderadityakumar.github.io/Amazon-Clone/');
  addCard('projects', 'Procuct Landing Page.png', 'Project Landing Page', 'Product Landing Page using html, css', '#');
  
