const products = [
  {
      id: 0,
      category:'cereals',
      image: 'images/Cornflakes.png',
      name: 'Cornflakes Cereals',
      price: 120,
      description:"Indulge in our organic cornflakes, crafted from sustainably sourced corn for a crisp and nutritious breakfast experience that satisfies."
  },
  {
      id: 1,
      category:'cereals',
      image: 'images/Bran-Flakes.png',
      name: 'Bran-Flakes Cereals',
      price: 140,
      description:"Savor the goodness of our organic bran flakes, made from wholesome ingredients and rich in fiber, vitamins, and minerals for a nourishing start to your day."
  },
  {
      id: 2,
      category:'cereals',
      image: 'images/oatmeal.png',
      name: 'Oatmeal Cereals',
      price: 130,
      description:"Our organic oatmeal cereal offers a wholesome and nourishing breakfast option, packed with fiber, vitamins, and minerals."
  },
  {
      id: 3,
      category:'cereals',
      image: 'images/Puffed-Rice.png',
      name: 'Puffed-Rice Cereals',
      price: 150,
      description:"Enjoy the light and crispy delight of our organic puffed rice cereal, made from whole grains and packed with a satisfying crunch and natural goodness."
  },
  {
      id: 4,
      category:'cereals',
      image: 'images/Salt-Muesli.png',
      name: 'Salt-Muesli Cereals',
      price: 200,
      description:"Discover the perfect balance of flavors in our organic salt muesli, combining wholesome grains, nuts, seeds, and a touch of salt for a savory and nutritious breakfast option."
  },
  {
      id: 5,
      category:'cereals',
      image: 'images/Whole-Wheat.png',
      name: 'Whole-Wheat Cereals',
      price: 200,
      description:"Experience the wholesome goodness of our organic whole wheat cereal, made from nutrient-rich whole grains, providing a hearty and nutritious start to your day."
  },
  {
      id: 6,
      category:'cereals',
      image: 'images/Barley.png',
      name: 'Barley Cereals',
      price: 220,
      description:"Nutritious ancient grain packed with fiber and essential minerals, known for its versatility in soups, salads, and pilafs."
  },
  {
      id: 7,
      category:'cereals',
      image: 'images/Buckwheat.png',
      name: 'Buck-Wheat Cereals',
      price: 250,
      description:"Nutrient-rich pseudo-cereal with a distinct nutty flavor, gluten-free, and a great source of protein and dietary fiber."
  },
  {
      id: 8,
      category:'cereals',
      image: 'images/Farro.png',
      name: 'Farro Cereals',
      price: 240,
      description:"Hearty ancient wheat grain with a chewy texture, rich in vitamins and minerals, commonly used in salads, soups, and risottos."
  },
  {
      id: 9,
      category:'cereals',
      image: 'images/Millet-Cereal.png',
      name: 'Millet Cereals',
      price: 240,
      description:"Small grain with a mild, nutty flavor, gluten-free, and rich in antioxidants, fiber, and minerals, often used in porridges and baked goods."
  },
  {
      id: 10,
      category:'cereals',
      image: 'images/Spelt.png',
      name: 'Spelt Cereals',
      price: 300,
      description:"Nutty-flavored ancient grain, a distant relative of wheat, rich in protein, fiber, and B-vitamins, commonly used in bread and pasta recipes."
  },
  {
      id: 11,
      category:'protein',
      image: 'images/Granola.png',
      name: 'Granola',
      price: 280,
      description:"Indulge in our protein-rich organic granola, crafted with wholesome ingredients like nuts, seeds, and grains, for a satisfying and nourishing snack or breakfast option."
  },
  {
      id: 12,
      category:'protein',
      image: 'images/Quinoa.png',
      name: 'Quinoa',
      price: 250,
      description:"Savor the nutritional powerhouse of our organic quinoa, a protein-rich grain that offers a complete amino acid profile, making it a versatile and wholesome addition to your meals."
  },
  {
      id: 13,
      category:'protein',
      image: 'images/pork.png',
      name: 'Pork',
      price: 110,
      description:"Versatile meat option, known for its rich flavor and tenderness, providing a good source of protein, vitamins, and minerals."
  },
  {
      id: 14,
      category:'protein',
      image: 'images/Almonds.png',
      name: 'Almonds',
      price: 150,
      description:"Nutritional powerhouse packed with healthy fats, fiber, antioxidants, and vitamin E, promoting heart health and providing a satisfying crunch."
  },
  {
      id: 15,
      category:'protein',
      image: 'images/Boiled-egg.png',
      name: 'Egg',
      price: 170,
      description:"Nutrient-dense food, packed with high-quality protein, vitamins, and minerals, versatile in cooking and essential for various culinary preparations."
  },
  {
      id: 16,
      category:'protein',
      image: 'images/Beefe.png',
      name: 'Beef',
      price: 300,
      description:" Protein-rich meat option, offering essential nutrients like iron, zinc, and B-vitamins, contributing to muscle growth and overall health."
  },
  {
      id: 17,
      category:'protein',
      image: 'images/Chicken.png',
      name: 'Chicken',
      price: 340,
      description:"Lean poultry choice, low in fat and high in protein, supplying essential amino acids, vitamins, and minerals for muscle growth and repair."
  },
  {
      id: 18,
      category:'protein',
      image: 'images/Lentils.png',
      name: 'Lentils',
      price: 330,
      description:"Protein-packed legumes, rich in fiber, folate, and iron, providing a versatile and nutritious ingredient for soups, stews, and salads."
  },
  {
      id: 19,
      category:'protein',
      image: 'images/Salmon.png',
      name: 'Salmon',
      price: 300,
      description:"Fatty fish renowned for its omega-3 fatty acids, promoting heart health, and providing a rich source of high-quality protein."
  },
  {
      id: 20,
      category:'protein',
      image: 'images/Tofu.png',
      name: 'Tofu',
      price: 160,
      description:"Soy-based protein alternative, low in fat and cholesterol-free, offering a versatile option for vegetarian and vegan dishes."
  },
  {
    id: 21,
    category:'spices',
    image: 'images/nutmeg.png',
    name: 'Nutmeg',
    price: 180,
    description:"Fragrant spice with a warm, sweet flavor, adding depth to both sweet and savory dishes, known for its potential health benefit"
},
{
    id: 22,
    category:'spices',
    image: 'images/Cinnamon.png',
    name: 'Cinnamon',
    price: 140,
    description:"Aromatic spice with a sweet and warm taste, boasting antioxidant properties and potential health benefits, commonly used in baking and cooking."
},
{
    id: 23,
    category:'spices',
    image: 'images/Cumin.png',
    name: 'Cumin',
    price: 190,
    description:"Earthy spice with a distinct aroma, adding depth and warmth to various cuisines, known for its digestive and anti-inflammatory properties."
},
{
    id: 24,
    category:'spices',
    image: 'images/Oregano.png',
    name: 'Oregano',
    price: 200,
    description:"Fragrant herb with a robust flavor, commonly used in Mediterranean cuisine, providing antioxidants and potential antimicrobial properties."
},
{
    id: 25,
    category:'spices',
    image: 'images/Paprika.png',
    name: 'Paprica',
    price: 220,
    description:"Vibrant spice derived from dried red peppers, adding a smoky and slightly sweet flavor to dishes, rich in antioxidants and vitamin C."
},
{
    id: 26,
    category:'spices',
    image: 'images/Rosemary.png',
    name: 'RoseMary',
    price: 250,
    description:"Aromatic herb with a pine-like fragrance, adding a unique flavor to savory dishes, known for its potential cognitive and digestive benefits."
},
{
    id: 27,
    category:'spices',
    image: 'images/Thyme.png',
    name: 'Thyme',
    price: 100,
    description:"Fragrant herb with a subtle lemony flavor, enhancing the taste of various dishes, and believed to have antibacterial properties."
},
{
    id: 28,
    category:'spices',
    image: 'images/Turmeric.png',
    name: 'Tumeric',
    price: 180,
    description:"Golden spice with a warm, earthy flavor, containing curcumin, a compound with potential anti-inflammatory and antioxidant properties."
  },
  {
    id: 29,
    category:'fruits',
    image: 'images/apple.png',
    name: 'Apple',
    price: 100,
    description:"Crisp and versatile, apples are sweet-tart fruits packed with fiber, perfect for snacking or adding to both sweet and savory dishes."
},
{
    id: 30,
    category:'fruits',
    image: 'images/banana.jpg',
    name: 'Banana',
    price: 140,
    description:"Nutritious and energizing, bananas are potassium-rich fruits with a convenient peel, ideal for on-the-go snacking and adding to smoothies or baked goods."
},
{
    id: 31,
    category:'fruits',
    image: 'images/cherries.jpg',
    name: 'Cherries',
    price: 170,
    description:"Bursting with flavor, cherries are antioxidant-packed stone fruits that bring a delightful balance of sweetness and tartness to your palate."
},
{
    id: 32,
    category:'fruits',
    image: 'images/grape.png',
    name: 'Grape',
    price: 200,
    description:" Juicy and bite-sized, grapes come in various colors and flavors, offering hydration, antioxidants, and vitamins for a refreshing snack or addition to salads and juices."
},
{
    id: 33,
    category:'fruits',
    image: 'images/mango.png',
    name: 'Mango',
    price: 220,
    description:"The tropical 'king of fruits,' mangoes have a luscious, aromatic flavor, providing a dose of vitamins, fiber, and antioxidants for a refreshing addition to smoothies, salsas, and desserts."
},
{
    id: 34,
    category:'fruits',
    image: 'images/orange.jpg',
    name: 'Orange',
    price: 190,
    description:"Tangy and vibrant, oranges are citrus fruits rich in vitamin C and nutrients, offering a refreshing juice and versatility in both sweet and savory recipes."
},
{
    id: 35,
    category:'fruits',
    image: 'images/pineapple.png',
    name: 'Pineapple',
    price: 250,
    description:"Tropical and juicy, pineapples bring a sweet and tangy flavor with a dose of vitamins and enzymes, perfect for snacking, salads, and tropical-inspired dishes."
},
{
    id: 36,
    category:'fruits',
    image: 'images/strawberries.jpg',
    name: 'Strawberries',
    price: 220,
    description:"Bright and sweet, strawberries are antioxidant-rich fruits that make a refreshing snack, addition to salads, or a delicious topping for desserts and breakfast dishes."
},
{
    id: 37,
    category:'fruits',
    image: 'images/water-melon.png',
    name: 'Water Melon',
    price: 250,
    description:"Refreshing and hydrating, watermelon is a juicy fruit that quenches your thirst and offers a burst of vitamins, making it a perfect summertime treat."
},
{
  id: 38,
  category:'oils',
  image: 'images/coconut-oil.jpg',
  name: 'Coconut Oil',
  price: 400,
  description:"Extracted from the meat of mature coconuts, coconut oil is a popular choice known for its distinct tropical aroma and flavor, as well as its various culinary and beauty applications."
},
{
  id: 39,
  category:'oils',
  image: 'images/olive-oil.png',
  name: 'Olive Oil',
  price: 420,
  description:"Renowned for its health benefits and culinary versatility, olive oil is derived from the fruit of olive trees and comes in different varieties such as extra virgin, virgin, and regular olive oil."
},
{
  id: 40,
  category:'oils',
  image: 'images/canola-oil.png',
  name: 'Canola Oil',
  price: 430,
  description:"Derived from the seeds of the canola plant, canola oil is known for its mild flavor, high smoking point, and heart-healthy monounsaturated fats."
},
{
  id: 41,
  category:'oils',
  image: 'images/sunflower-oil.png',
  name: 'Sunflower Oil',
  price: 450,
  description:"Extracted from sunflower seeds, sunflower oil is a light and neutral-tasting oil that is commonly used for cooking, frying, and baking."
},
{
  id: 42,
  category:'oils',
  image: 'images/soya-bean-oil.jpg',
  name: 'Soyabean Oil',
  price: 470,
  description:"Produced from soybeans, soybean oil is a widely used cooking oil due to its neutral flavor, affordability, and high smoke point."
},
{
  id: 43,
  category:'oils',
  image: 'images/avocado-oil.png',
  name: 'Avogado Oil',
  price: 500,
  description:"Cold-pressed from the flesh of avocados, avocado oil is prized for its high monounsaturated fat content, creamy texture, and mild flavor."
},
{
  id: 44,
  category:'oils',
  image: 'images/sesame-oil.png',
  name: 'Sesame Oil',
  price: 460,
  description:"Derived from sesame seeds, sesame oil is characterized by its distinct nutty flavor and is often used in Asian cuisines for stir-frying and as a flavor enhancer."
},
{
  id: 45,
  category:'oils',
  image: 'images/grape-oil.png',
  name: 'Grape-Seed Oil',
  price: 470,
  description:"Extracted from the seeds of grapes, grapeseed oil is a light, neutral-tasting oil that is commonly used in cooking, baking, and salad dressings."
},
{
  id: 46,
  category:'oils',
  image: 'images/corn-oil.png',
  name: 'Corn Oil',
  price: 490,
  description:"Made from the germ of corn kernels, corn oil is a popular cooking oil known for its mild flavor and versatility in various culinary applications."
  },
  {
    id: 47,
    category:'flours',
    image: 'images/wheat-flour.png',
    name: 'Wheat Flour',
    price: 90,
    description:"Made from the entire wheat kernel, whole wheat flour is higher in fiber, vitamins, and minerals compared to refined flours."
},
{
    id: 48,
    category:'flours',
    image: 'images/almond-flour.png',
    name: 'Almond Flour',
    price: 120,
    description:"Ground from blanched almonds, almond flour is a popular gluten-free alternative with a nutty flavor and moist texture."
},
{
    id: 49,
    category:'flours',
    image: 'images/coconut-flour.jpg',
    name: 'Coconut Flour',
    price: 110,
    description:"Made from dried and ground coconut meat, coconut flour is a gluten-free option rich in fiber and adds a subtle coconut flavor to baked goods."
},
{
    id: 50,
    category:'flours',
    image: 'images/rice-flour.png',
    name: 'Rice Flour',
    price: 110,
    description:"Milled from ground rice grains, rice flour is a staple in many Asian cuisines and is often used in gluten-free baking, as well as thickening sauces and coatings."
},
{
    id: 51,
    category:'flours',
    image: 'images/spelt-flour.png',
    name: 'Spelt Flour',
    price: 180,
    description:"An ancient grain flour that has a nutty flavor and is lower in gluten compared to modern wheat, making it a potential alternative for those with mild gluten sensitivities."
},
{
    id: 52,
    category:'flours',
    image: 'images/quinoa-flour.png',
    name: 'Quinoa Flour',
    price: 180,
    description:"An ancient grain flour that has a nutty flavor and is lower in gluten compared to modern wheat, making it a potential alternative for those with mild gluten sensitivities."
},
{
    id: 53,
    category:'flours',
    image: 'images/semolina-flour.png',
    name: 'Semolina Flour',
    price: 190,
    description:"Commonly used in pasta-making, semolina flour adds a firm and chewy texture. It can also be used in breads and desserts."
},
{
    id: 54,
    category:'flours',
    image: 'images/pastry-flour.png',
    name: 'Pastry Flour',
    price: 150,
    description:"Ideal for delicate baked goods like pastries, pie crusts, and cookies, pastry flour produces tender and flaky results."
},
{
    id: 55,
    category:'flours',
    image: 'images/oat-flour.png',
    name: 'Oat Flour',
    price: 195,
    description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
},


];

  
  // Template string for the search modal
const searchModalTemplate = `
<div id="searchModal" class="absolute  inset-0 flex items-start justify-center z-50 hidden">
<div id="searchModalOverlay" class="absolute justify-center items-center inset-0 bg-black opacity-50"></div>
<div class="bg-white p-4 rounded-lg  shadow-lg z-10 w-full max-w-md">
  <div class="flex items-center justify-between mb-4">
    <input id="searchInput" required type="text" placeholder="Search products..." 
    class="w-full p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:border-red-400">
  `
  +
  " <button id='searchButton' class='bg-red-400 text-white px-4 py-2 rounded-r-lg hover:bg-red-400' onclick = 'searchItems()' >Search</button>"
  +
  `</div>
  <!-- Results will be displayed here -->
  <div id="searchResults" class="text-sm">
  </div>
  <div class="text-right mt-4">
    <button id="closeSearchModal" class="text-gray-500 hover:text-gray-700">Close</button>
  </div>
</div>
</div>`
  ;
  
  // Function to display search results
  function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
  
    if (results.length === 0) {
      searchResults.innerHTML = '<p>No results found.</p>';
    } else {
      results.forEach(product => {
        const listItem = document.createElement('div');
        listItem.innerHTML =
        `
        <div  id="mappedItems" class=" mappedDiv group w-full h-[500px] max-sm:flex-col justify-center flex flex-col rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-transparent items-center group group-hover:text-white border-solid  border-white"
          style="background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))">
            <h4 class="font-bold text-center text-white mt-10">${product.name}</h4>
            <span class="bg-red-500 w-[5rem] h-2 justify-center items-center text-center"></span>
            <img id="small" src=${product.image} alt="oatmeal" class="small-img w-[15rem] ">
                   
            <p id='charge'  class=' mt-5 text-white p-2 font-bold w-full  text-[14px]'>${product.description}</p>
       
           
        </div>`
        // `
        //   <p><strong>${product.name}</strong></p>
        //   <p>${product.description}</p>
        // `;
        searchResults.appendChild(listItem);
      });
    }
  }
  
  
  // Function to open the search modal
  document.getElementById('openSearchModal').addEventListener('click', () => {
    document.body.insertAdjacentHTML('beforeend', searchModalTemplate);
    document.getElementById('searchModal').classList.remove('hidden');
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
  });



  // Function to perform the search
function searchItems(){
      
  const searchQuery = document.getElementById('searchInput').value.toLowerCase();
  if (searchQuery.trim() === '') {
    // Input is empty, do not perform a search
    return;
}
    const searchResults = products.filter(product => product.name.toLowerCase().includes(searchQuery));
    displaySearchResults(searchResults);
  };

  
// Function to close the search modal
document.addEventListener('click', (e) => {
  if (e.target.id === 'closeSearchModal' || e.target.id === 'searchModalOverlay') {
    const searchModal = document.getElementById('searchModal');
    if (searchModal) {
      searchModal.remove();
    }
  }
});


  // document.addEventListener('click', (e) => {
  //   if (e.target.id === 'closeSearchModal') {
  //     const searchModal = document.getElementById('searchModal');
  //     if (searchModal) {
  //       searchModal.remove();
  //     }
  //   }
  // });
  