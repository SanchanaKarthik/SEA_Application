// array of food objects
const foods = [
  // main course
  { name: "Paniyaram", type: "Main Course" },
  { name: "Idiyappam", type: "Main Course" },
  { name: "Puli Sadam", type: "Main Course" },
  { name: "Thayir Sadam", type: "Main Course" },
  { name: "Lemon Rice", type: "Main Course" },
  { name: "Tomato Rice", type: "Main Course" },
  { name: "Ven Pongal", type: "Main Course" },
  { name: "Dosa", type: "Main Course" },
  { name: "Idli", type: "Main Course" },
  { name: "Appam", type: "Main Course" },
  { name: "Uttapam", type: "Main Course" },
  { name: "Upma", type: "Main Course" },
  { name: "Khichdi", type: "Main Course" },
  { name: "Pulao", type: "Main Course" },
  { name: "Vegetable Biryani", type: "Main Course" },
  { name: "Naan", type: "Main Course" },
  { name: "Chapati", type: "Main Course" },
  { name: "Parotta", type: "Main Course" },

  // condiments
  { name: "Paruppu", type: "Condiments" },
  { name: "Sambar", type: "Condiments" },
  { name: "Rasam", type: "Condiments" },
  { name: "Kuzhambu", type: "Condiments" },
  { name: "Coconut Chutney", type: "Condiments" },
  { name: "Tomato Chutney", type: "Condiments" },
  { name: "Peanut Chutney", type: "Condiments" },
  { name: "Mango Urugai", type: "Condiments" },
  { name: "Paneer Butter Masala", type: "Condiments" },
  { name: "Paneer Tikka Masala", type: "Condiments" },
  { name: "Butter Chicken", type: "Condiments" },
  { name: "Chicken Tikka Masala", type: "Condiments" },
  { name: "Vegetable Kurma", type: "Condiments" },
  { name: "Chana Masala", type: "Condiments" },
  { name: "Dal Makhani", type: "Condiments" },

  // sweets
  { name: "Gulab Jamun", type: "Sweets" },
  { name: "Rasgulla", type: "Sweets" },
  { name: "Rasmalai", type: "Sweets" },
  { name: "Mothi Laddu", type: "Sweets" },
  { name: "Mysore Pak", type: "Sweets" },
  { name: "Barfi", type: "Sweets" },
  { name: "Kaju Katli", type: "Sweets" },
  { name: "Halwa", type: "Sweets" },
  { name: "Jelabi", type: "Sweets" },
  { name: "Kulfi", type: "Sweets" },
  { name: "Paal Payasam", type: "Sweets" }
];

// current filter condition
let currType = "All";
// current search input
let search = "";

// displays cards from array
function showCards() {
  // container implementation
  const container = document.getElementById("card-container");
  const template = document.querySelector(".card");
  // avoids duplicate cards
  container.innerHTML = "";
  
  // copy of foods
  let filtered = [...foods];

  // category sort depending on type
  if (currType !== "All" && currType !== "AZ") {
    filtered = filtered.filter(f => f.type === currType);
  }

  // sorts alphabetically through compare()
  if (currType === "AZ") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  // search filter with user input f
  if (search !== "") {
    filtered = filtered.filter(f =>
      f.name.toLowerCase().includes(search)
    );
  }

  // creates cards
  filtered.forEach(food => {
    const card = template.cloneNode(true);
    card.style.display = "block";
    // adds food name
    card.querySelector("h2").textContent = food.name;

    // placeholder images
    card.querySelector("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/330px-Placeholder_view_vector.svg.png";
    
    // sets food type directly
    card.querySelector("ul").innerHTML =
      `<li>${food.type}</li>`;

    // appends card to container
    container.appendChild(card);
  });
}

// removes random card
function removeRandCard() {
  // checks if array is empty
  if (foods.length === 0) {
    return;
  }
  
  // removes element from random index
  const randomIndex = Math.floor(Math.random() * foods.length);
  foods.splice(randomIndex, 1);

  showCards();
}

// events
document.addEventListener("DOMContentLoaded", () => {
  // event listeners for filter
  document.getElementById("filterSelect")
    // updates currType and shows cards
    .addEventListener("change", e => {
      currType = e.target.value;
      showCards();
    });
  // event listener for search
  document.getElementById("searchInput")
    // updates search and shows cards
    .addEventListener("input", e => {
        search = e.target.value.toLowerCase();
      showCards();
    });
  // default - shows cards
  showCards();
});
