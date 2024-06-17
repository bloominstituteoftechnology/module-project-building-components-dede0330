function moduleProject3() {
  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    const nav = document.createElement("nav");
    links.forEach((link) => {
      const anchorTag = document.createElement("a");
      anchorTag.href = link.href;
      anchorTag.title = link.title;
      anchorTag.textContent = link.textContent;
      nav.appendChild(anchorTag);
    });
    return nav;
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector("header").appendChild(
    buildNav([
      {
        href: "https://www.example.com",
        textContent: "Home",
        title: "Go to the home page",
      },
      {
        href: "https://www.example.com/about",
        textContent: "About",
        title: "Learn more about our company",
      },
      {
        href: "https://www.example.com/services",
        textContent: "Services",
        title: "View our available services",
      },
      {
        href: "https://www.example.com/blog",
        textContent: "Blog",
        title: "Read our latest blog posts",
      },
      {
        href: "https://www.example.com/contact",
        textContent: "Contact",
        title: "Get in touch with us",
      },
    ])
  );

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    const div = document.createElement("div");
    div.classList.add("learner-card");
    const learnerName = document.createElement("p");
    const learnerId = document.createElement("p");
    const learnerDOB = document.createElement("p");
    const learnerFavLang = document.createElement("p");

    const favLang = languages.filter((lang) => lang.id === learner.favLanguage);

    learnerName.textContent = learner.fullName;
    learnerId.textContent = `Learner ID: ${learner.id}`;
    learnerDOB.textContent = `Date of Birth: ${learner.dateOfBirth}`;
    learnerFavLang.textContent = `Favorite Language: ${favLang[0].name}`;

    div.appendChild(learnerName);
    div.appendChild(learnerId);
    div.appendChild(learnerDOB);
    div.appendChild(learnerFavLang);

    div.addEventListener("click", (event) => {
      const childrenArray = Array.from(div.parentElement.children);
      childrenArray.forEach((child) => child.classList.remove("active"));
      div.classList.add("active");
      event.stopPropagation();
    });
    return div;
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: "JavaScript", creator: "Brendan Eich", year: 1995 },
      { id: 82, name: "Python", creator: "Guido van Rossum", year: 1991 },
      { id: 12, name: "Java", creator: "James Gosling", year: 1995 },
      { id: 53, name: "C#", creator: "Microsoft Corporation", year: 2000 },
      { id: 91, name: "Ruby", creator: "Yukihiro Matsumoto", year: 1995 },
    ];
    let learners = [
      {
        id: 24,
        fullName: "Kenneth Fisher",
        dateOfBirth: "1990-01-01",
        favLanguage: 82,
      },
      {
        id: 53,
        fullName: "Jess Williams",
        dateOfBirth: "1985-05-10",
        favLanguage: 37,
      },
      {
        id: 72,
        fullName: "Brandon Nguyen",
        dateOfBirth: "1992-09-15",
        favLanguage: 53,
      },
      {
        id: 41,
        fullName: "Sabah Beydoun",
        dateOfBirth: "1988-03-25",
        favLanguage: 91,
      },
      {
        id: 17,
        fullName: "Daniel Castillo",
        dateOfBirth: "1995-11-05",
        favLanguage: 12,
      },
    ];
    learners.forEach((learner) => {
      const learnerCard = buildLearnerCard(learner, languages);
      document.querySelector("section").appendChild(learnerCard);
    });
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    const footer = document.createElement("footer");

    const company = document.createElement("div");
    const name = document.createElement("p");
    const address = document.createElement("p");
    const email = document.createElement("p");
    const mailtoLink = document.createElement("a");

    const social = document.createElement("div");
    const twitter = document.createElement("a");
    const facebook = document.createElement("a");
    const instagram = document.createElement("a");

    const copyright = document.createElement("div");

    socialData = footerData.socialMedia;

    company.classList.add("company-info");
    name.classList.add("company-name");
    address.classList.add("address");
    email.classList.add("contact-email");
    social.classList.add("social-media");
    twitter.href = socialData.twitter;
    facebook.href = socialData.facebook;
    instagram.href = socialData.instagram;
    mailtoLink.href = "mailto:info@example.com";

    mailtoLink.textContent = footerData.contactEmail;
    console.log(mailtoLink);
    name.textContent = footerData.companyName;
    address.textContent = footerData.address;
    email.innerHTML = `Email: <a href="${mailtoLink}">info@example.com</a>`;
    twitter.textContent = "Twitter";
    facebook.textContent = "Facebook";
    instagram.textContent = "Instagram";
    copyright.textContent = `© ${footerData.companyName.toUpperCase()} 2024`;

    footer.appendChild(company);
    company.appendChild(name);
    company.appendChild(address);
    company.appendChild(email);

    footer.appendChild(social);
    social.appendChild(twitter);
    social.appendChild(facebook);
    social.appendChild(instagram);

    footer.appendChild(copyright);

    return footer;
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(
    buildFooter({
      companyName: "Bloom Institute of Technology",
      address: "123 Main Street, City, Country",
      contactEmail: "info@example.com",
      socialMedia: {
        twitter: "https://twitter.com/example",
        facebook: "https://www.facebook.com/example",
        instagram: "https://www.instagram.com/example",
      },
    })
  );

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  const mainSection = document.querySelector("section");
  mainSection.addEventListener("click", () => {
    const childArray = Array.from(mainSection.children);
    childArray.forEach((child) => {
      child.classList.remove("active");
    });
  });
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== "undefined" && module.exports)
  module.exports = { moduleProject3 };
else moduleProject3();