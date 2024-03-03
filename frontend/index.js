function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    let newNav = document.createElement('nav');
    links.forEach(obj => {
      let {href, textContent, title} = obj;
      let newLink = document.createElement("a");
      newLink.href = href;
      newLink.textContent = textContent;
      newLink.title = title;
      newNav.appendChild(newLink)
    })
    return newNav;
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    let newCard = document.createElement("div");
    let newName = document.createElement("p");
    let newId = document.createElement("p");
    let newBirth = document.createElement("p");
    let newLanguage = document.createElement("p");
    newCard.appendChild(newName);
    newCard.appendChild(newId);
    newCard.appendChild(newBirth);
    newCard.appendChild(newLanguage);
    newCard.classList.add("learner-card");
    newName.textContent = learner.fullName;
    newId.textContent = `Learner ID: ${learner.id}`;
    newBirth.textContent = `Date of Birth: ${learner.dateOfBirth}`;
    function findLang(num) {
      let result;
      languages.forEach(obj => {
        if (obj.id === num) {
          result = obj.name;
        };
      });
      return result;
    };
    newLanguage.textContent = `Favorite Language: ${findLang(learner.favLanguage)}`;
    newCard.addEventListener("click", ()=> {
      newCard.classList.add("active");
    })
    return newCard;
  }



  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]

    let learnerCards = learners.map(learner => buildLearnerCard(learner, languages))
    learnerCards.forEach(card => document.querySelector("section").appendChild(card))
    document.querySelector("section").addEventListener("click", () => {
      let activeCard = document.querySelector(".active")
      if (activeCard) {activeCard.classList.remove("active")}
    }, capture = true)
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    let {companyName, address, contactEmail, socialMedia} = footerData
    let {twitter, facebook, instagram} = socialMedia
    let newFooter = document.createElement('footer')
    let companyDiv = document.createElement("div")
    let socialDiv = document.createElement("div")
    let newName = document.createElement("p")
    let newAddress = document.createElement("p")
    let newEmail = document.createElement("p") 
    let emailAnchor = document.createElement("a")
    let newTwitter = document.createElement("a")
    let newFacebook = document.createElement("a")
    let newInstagram = document.createElement("a")
    newFooter.appendChild(companyDiv)
    newFooter.appendChild(socialDiv)
    companyDiv.appendChild(newName)
    companyDiv.appendChild(newAddress)
    companyDiv.appendChild(newEmail)
    newEmail.insertAdjacentElement("afterend", emailAnchor)
    socialDiv.appendChild(newTwitter)
    socialDiv.appendChild(newFacebook)
    socialDiv.appendChild(newInstagram)
    companyDiv.classList.add("company-info")
    socialDiv.classList.add("social-media")
    newName.classList.add("company-name")
    newAddress.classList.add("address")
    newEmail.classList.add("contact-email")
    newName.textContent = companyName
    newAddress.textContent = address
    newEmail.textContent = `Email: `
    newEmail.style.display = "inline"
    emailAnchor.textContent = contactEmail
    emailAnchor.href = `mailto: ${contactEmail}`
    emailAnchor.style.display = "inline"
    newTwitter.textContent = "Twitter"
    newFacebook.textContent = "Facebook"
    newInstagram.textContent = "Instagram"
    newTwitter.href = twitter
    newFacebook.href = facebook
    newInstagram.href = instagram
    let copyRight = document.createElement("div")
    copyRight.textContent = `© ${companyName.toUpperCase()} 2024`
    newFooter.appendChild(copyRight)
    return newFooter
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
