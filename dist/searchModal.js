const products = [
  {
      id: 0,
      category:'Anniversary',
      image: 'images/anniversary1.png',
      name: 'Eternal Bloom',
      price: 120,
      description:"Indulge in our organic cornflakes, crafted from sustainably sourced corn for a crisp and nutritious breakfast experience that satisfies."
  },
  {
      id: 1,
      category:'Anniversary',
      image: 'images/anniversary2.png',
      name: 'Timeless Roses',
      price: 140,
      description:"Savor the goodness of our organic bran flakes, made from wholesome ingredients and rich in fiber, vitamins, and minerals for a nourishing start to your day."
  },
  {
      id: 2,
      category:'Anniversary',
      image: 'images/anniversary3.png',
      name: 'Mile stone Memories',
      price: 130,
      description:"Our organic oatmeal cereal offers a wholesome and nourishing breakfast option, packed with fiber, vitamins, and minerals."
  },
  {
      id: 3,
      category:'Anniversary',
      image: 'images/anniversary4.png',
      name: 'Romantic Bloom',
      price: 150,
      description:"Enjoy the light and crispy delight of our organic puffed rice cereal, made from whole grains and packed with a satisfying crunch and natural goodness."
  },
  {
      id: 4,
      category:'Anniversary',
      image: 'images/anniversary5.png',
      name: 'Precious Petals',
      price: 200,
      description:"Discover the perfect balance of flavors in our organic salt muesli, combining wholesome grains, nuts, seeds, and a touch of salt for a savory and nutritious breakfast option."
  },
  {
      id: 5,
      category:'Anniversary',
      image: 'images/anniversary6.png',
      name: 'Passionate Pansies',
      price: 200,
      description:"Experience the wholesome goodness of our organic whole wheat cereal, made from nutrient-rich whole grains, providing a hearty and nutritious start to your day."
  },
  {
      id: 6,
      category:'Anniversary',
      image: 'images/anniversary7.png',
      name: 'Forever Your',
      price: 220,
      description:"Nutritious ancient grain packed with fiber and essential minerals, known for its versatility in soups, salads, and pilafs."
  },
  {
      id: 7,
      category:'Anniversary',
      image: 'images/anniversary8.png',
      name: 'Cherished Blessing',
      price: 250,
      description:"Nutrient-rich pseudo-cereal with a distinct nutty flavor, gluten-free, and a great source of protein and dietary fiber."
  },
  {
      id: 8,
      category:'Anniversary',
      image: 'images/roses1.png',
      name: 'Crimson Charm',
      price: 240,
      description:"Hearty ancient wheat grain with a chewy texture, rich in vitamins and minerals, commonly used in salads, soups, and risottos."
  },
  {
      id: 9,
      category:'Anniversary',
      image: 'images/tulips1.png',
      name: 'Coral Charm',
      price: 240,
      description:"Small grain with a mild, nutty flavor, gluten-free, and rich in antioxidants, fiber, and minerals, often used in porridges and baked goods."
  },
  {
      id: 10,
      category:'Anniversary',
      image: 'images/sunflower1.png',
      name: 'Sunny Smiles',
      price: 300,
      description:"Nutty-flavored ancient grain, a distant relative of wheat, rich in protein, fiber, and B-vitamins, commonly used in bread and pasta recipes."
  },
  {
      id: 11,
      category:'Anniversary',
      image: 'images/spray1.png',
      name: 'Fragrant Breeze',
      price: 280,
      description:"Indulge in our protein-rich organic granola, crafted with wholesome ingredients like nuts, seeds, and grains, for a satisfying and nourishing snack or breakfast option."
  },
  {
      id: 12,
      category:'Anniversary',
      image: 'images/carnation1.png',
      name: 'Rosy Radiance',
      price: 250,
      description:"Savor the nutritional powerhouse of our organic quinoa, a protein-rich grain that offers a complete amino acid profile, making it a versatile and wholesome addition to your meals."
  },
  {
      id: 13,
      category:'Anniversary',
      image: 'images/hydrangeas1.png',
      name: 'Lavenger Love',
      price: 110,
      description:"Versatile meat option, known for its rich flavor and tenderness, providing a good source of protein, vitamins, and minerals."
  },
  {
      id: 14,
      category:'Anniversary',
      image: 'images/lisianthus1.png',
      name: 'Gentle Grace',
      price: 150,
      description:"Nutritional powerhouse packed with healthy fats, fiber, antioxidants, and vitamin E, promoting heart health and providing a satisfying crunch."
  },
  {
      id: 15,
      category:'Anniversary',
      image: 'images/gypsophilia1.png',
      name: 'Cloudy Whisper',
      price: 170,
      description:"Nutrient-dense food, packed with high-quality protein, vitamins, and minerals, versatile in cooking and essential for various culinary preparations."
  },
  {
      id: 16,
      category:'Anniversary',
      image: 'images/gemini1.png',
      name: 'Sparkling Gemini',
      price: 300,
      description:" Protein-rich meat option, offering essential nutrients like iron, zinc, and B-vitamins, contributing to muscle growth and overall health."
  },
  {
      id: 17,
      category:'Anniversary',
      image: 'images/calla-lilly1.png',
      name: 'Ivory Grace',
      price: 340,
      description:"Lean poultry choice, low in fat and high in protein, supplying essential amino acids, vitamins, and minerals for muscle growth and repair."
  },
  {
      id: 18,
      category:'Birthday',
      image: 'images/birthday1.png',
      name: 'Petal Party',
      price: 330,
      description:"Protein-packed legumes, rich in fiber, folate, and iron, providing a versatile and nutritious ingredient for soups, stews, and salads."
  },
  {
      id: 19,
      category:'Birthday',
      image: 'images/birthday2.png',
      name: 'Rainbow Rose',
      price: 300,
      description:"Fatty fish renowned for its omega-3 fatty acids, promoting heart health, and providing a rich source of high-quality protein."
  },
  {
      id: 20,
      category:'Birthday',
      image: 'images/birthday3.png',
      name: 'Vibrant Violet',
      price: 160,
      description:"Soy-based protein alternative, low in fat and cholesterol-free, offering a versatile option for vegetarian and vegan dishes."
  },
  {
    id: 21,
    category:'Birthday',
    image: 'images/birthday4.png',
    name: 'Lily Luxe',
    price: 180,
    description:"Fragrant spice with a warm, sweet flavor, adding depth to both sweet and savory dishes, known for its potential health benefit"
},
{
    id: 22,
    category:'Birthday',
    image: 'images/birthday5.png',
    name: 'Velvet Rose',
    price: 140,
    description:"Aromatic spice with a sweet and warm taste, boasting antioxidant properties and potential health benefits, commonly used in baking and cooking."
},
{
    id: 23,
    category:'Birthday',
    image: 'images/birthday6.png',
    name: 'Daisy Duet',
    price: 190,
    description:"Earthy spice with a distinct aroma, adding depth and warmth to various cuisines, known for its digestive and anti-inflammatory properties."
},
{
    id: 24,
    category:'Birthday',
    image: 'images/birthday7.png',
    name: 'Rose Radiance',
    price: 200,
    description:"Fragrant herb with a robust flavor, commonly used in Mediterranean cuisine, providing antioxidants and potential antimicrobial properties."
},
{
    id: 25,
    category:'Birthday',
    image: 'images/birthday7.png',
    name: 'Elegant Roses',
    price: 220,
    description:"Vibrant spice derived from dried red peppers, adding a smoky and slightly sweet flavor to dishes, rich in antioxidants and vitamin C."
},
{
    id: 26,
    category:'Birthday',
    image: 'images/birthday8.png',
    name: 'Daisy Delight',
    price: 250,
    description:"Aromatic herb with a pine-like fragrance, adding a unique flavor to savory dishes, known for its potential cognitive and digestive benefits."
},
{
    id: 27,
    category:'Birthday',
    image: 'images/birthday9.png',
    name: 'Ballon Bouquet',
    price: 100,
    description:"Fragrant herb with a subtle lemony flavor, enhancing the taste of various dishes, and believed to have antibacterial properties."
},
{
    id: 28,
    category:'Birthday',
    image: 'images/birthday10.png',
    name: 'Daisy Dreams',
    price: 180,
    description:"Golden spice with a warm, earthy flavor, containing curcumin, a compound with potential anti-inflammatory and antioxidant properties."
  },
  {
    id: 29,
    category:'Birthday',
    image: 'images/roses2.png',
    name: 'Heavenly Rose',
    price: 100,
    description:"Crisp and versatile, apples are sweet-tart fruits packed with fiber, perfect for snacking or adding to both sweet and savory dishes."
},
{
    id: 30,
    category:'Birthday',
    image: 'images/tulips2.png',
    name: 'Tulip Timeless',
    price: 140,
    description:"Nutritious and energizing, bananas are potassium-rich fruits with a convenient peel, ideal for on-the-go snacking and adding to smoothies or baked goods."
},
{
    id: 31,
    category:'Birthday',
    image: 'images/sunflower2.png',
    name: 'Sunny Serenity',
    price: 170,
    description:"Bursting with flavor, cherries are antioxidant-packed stone fruits that bring a delightful balance of sweetness and tartness to your palate."
},
{
    id: 32,
    category:'Birthday',
    image: 'images/spray2.png',
    name: 'Royal Ruffles',
    price: 200,
    description:" Juicy and bite-sized, grapes come in various colors and flavors, offering hydration, antioxidants, and vitamins for a refreshing snack or addition to salads and juices."
},
{
    id: 33,
    category:'Birthday',
    image: 'images/gemini2.png',
    name: 'Rainbow Gem',
    price: 220,
    description:"The tropical 'king of fruits,' mangoes have a luscious, aromatic flavor, providing a dose of vitamins, fiber, and antioxidants for a refreshing addition to smoothies, salsas, and desserts."
},
{
    id: 34,
    category:'Birthday',
    image: 'images/lisianthus2.png',
    name: 'Secrete Garden',
    price: 190,
    description:"Tangy and vibrant, oranges are citrus fruits rich in vitamin C and nutrients, offering a refreshing juice and versatility in both sweet and savory recipes."
},
{
    id: 35,
    category:'Get Well Soon',
    image: 'images/get-well-soon1.png',
    name: 'Blossom Bost',
    price: 250,
    description:"Tropical and juicy, pineapples bring a sweet and tangy flavor with a dose of vitamins and enzymes, perfect for snacking, salads, and tropical-inspired dishes."
},
{
    id: 36,
    category:'Get Well Soon',
    image: 'images/get-well-soon2.png',
    name: 'Uplifting Lilies',
    price: 220,
    description:"Bright and sweet, strawberries are antioxidant-rich fruits that make a refreshing snack, addition to salads, or a delicious topping for desserts and breakfast dishes."
},
{
    id: 37,
    category:'Get Well Soon',
    image: 'images/get-well-soon3.png',
    name: 'Floral Comfort',
    price: 250,
    description:"Refreshing and hydrating, watermelon is a juicy fruit that quenches your thirst and offers a burst of vitamins, making it a perfect summertime treat."
},
{
  id: 38,
  category:'Get Well Soon',
  image: 'images/get-well-soon4.png',
  name: 'Recovery Roses',
  price: 400,
  description:"Extracted from the meat of mature coconuts, coconut oil is a popular choice known for its distinct tropical aroma and flavor, as well as its various culinary and beauty applications."
},
{
  id: 39,
  category:'Get Well Soon',
  image: 'images/get-well-soon5.png',
  name: 'Floral Rose',
  price: 420,
  description:"Renowned for its health benefits and culinary versatility, olive oil is derived from the fruit of olive trees and comes in different varieties such as extra virgin, virgin, and regular olive oil."
},
{
  id: 40,
  category:'Get Well Soon',
  image: 'images/get-well-soon6.png',
  name: 'Cheerful Posies',
  price: 430,
  description:"Derived from the seeds of the canola plant, canola oil is known for its mild flavor, high smoking point, and heart-healthy monounsaturated fats."
},
{
  id: 41,
  category:'Get Well Soon',
  image: 'images/get-well-soon7.png',
  name: 'Healthy Comfort',
  price: 450,
  description:"Extracted from sunflower seeds, sunflower oil is a light and neutral-tasting oil that is commonly used for cooking, frying, and baking."
},
{
  id: 42,
  category:'Get Well Soon',
  image: 'images/get-well-soon8.png',
  name: 'Brighter Days',
  price: 470,
  description:"Produced from soybeans, soybean oil is a widely used cooking oil due to its neutral flavor, affordability, and high smoke point."
},
{
  id: 43,
  category:'Get Well Soon',
  image: 'images/get-well-soon9.png',
  name: 'Petal Therapy',
  price: 500,
  description:"Cold-pressed from the flesh of avocados, avocado oil is prized for its high monounsaturated fat content, creamy texture, and mild flavor."
},
{
  id: 44,
  category:'Get Well Soon',
  image: 'images/gypsophilia2.png',
  name: 'Misty Morning',
  price: 460,
  description:"Derived from sesame seeds, sesame oil is characterized by its distinct nutty flavor and is often used in Asian cuisines for stir-frying and as a flavor enhancer."
},
{
  id: 45,
  category:'Get Well Soon',
  image: 'images/hydrangeas2.png',
  name: 'Gentle Giant',
  price: 470,
  description:"Extracted from the seeds of grapes, grapeseed oil is a light, neutral-tasting oil that is commonly used in cooking, baking, and salad dressings."
},
{
  id: 46,
  category:'Get Well Soon',
  image: 'images/carnation2.png',
  name: 'Coral Crush',
  price: 490,
  description:"Made from the germ of corn kernels, corn oil is a popular cooking oil known for its mild flavor and versatility in various culinary applications."
  },
  {
    id: 47,
    category:'Get Well Soon',
    image: 'images/calla-lilly2.png',
    name: 'Angelic Aura',
    price: 90,
    description:"Made from the entire wheat kernel, whole wheat flour is higher in fiber, vitamins, and minerals compared to refined flours."
},
{
    id: 48,
    category:'Graduation',
    image: 'images/graduation1.png',
    name: 'Academic Glory',
    price: 120,
    description:"Ground from blanched almonds, almond flour is a popular gluten-free alternative with a nutty flavor and moist texture."
},
{
    id: 49,
    category:'Graduation',
    image: 'images/graduation2.png',
    name: 'Cap Toppers',
    price: 110,
    description:"Made from dried and ground coconut meat, coconut flour is a gluten-free option rich in fiber and adds a subtle coconut flavor to baked goods."
},
{
    id: 50,
    category:'Graduation',
    image: 'images/graduation3.png',
    name: 'Success Roses',
    price: 110,
    description:"Milled from ground rice grains, rice flour is a staple in many Asian cuisines and is often used in gluten-free baking, as well as thickening sauces and coatings."
},
{
    id: 51,
    category:'Graduation',
    image: 'images/graduation4.png',
    name: 'Diploma Blooms',
    price: 180,
    description:"An ancient grain flour that has a nutty flavor and is lower in gluten compared to modern wheat, making it a potential alternative for those with mild gluten sensitivities."
},
{
    id: 52,
    category:'Graduation',
    image: 'images/graduation5.png',
    name: 'Degree Roses',
    price: 180,
    description:"An ancient grain flour that has a nutty flavor and is lower in gluten compared to modern wheat, making it a potential alternative for those with mild gluten sensitivities."
},
{
    id: 53,
    category:'Graduation',
    image: 'images/graduation6.png',
    name: 'Graduate Roses',
    price: 190,
    description:"Commonly used in pasta-making, semolina flour adds a firm and chewy texture. It can also be used in breads and desserts."
},
{
    id: 54,
    category:'Graduation',
    image: 'images/graduation7.png',
    name: 'Bright Future',
    price: 150,
    description:"Ideal for delicate baked goods like pastries, pie crusts, and cookies, pastry flour produces tender and flaky results."
},
{
    id: 55,
    category:'Graduation',
    image: 'images/graduation8.png',
    name: 'Class Act',
    price: 195,
    description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
  },
  {
    id: 56,
    category:'Graduation',
    image: 'images/graduation9.png',
    name: 'Graduation Glory',
    price: 195,
    description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
  },
  {
    id: 57,
    category:'Graduation',
    image: 'images/roses3.png',
    name: 'Ruby Success',
    price: 195,
    description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
  },
  {
    id: 58,
    category:'Graduation',
    image: 'images/tulips3.png',
    name: 'Perfection',
    price: 195,
    description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
  },
  {
    id: 59,
    category:'Graduation',
    image: 'images/sunflower3.png',
    name: 'Harvest Hope',
    price: 195,
    description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
  },
  {
    id: 60,
    category:'Graduation',
    image: 'images/spray3.png',
    name: 'Golden Success',
    price: 195,
    description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
  },
  {
    id: 61,
    category:'Graduation',
    image: 'images/gemini3.png',
    name: 'Blooming Bliss',
    price: 195,
    description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
},


];

  
  // Template string for the search modal
const searchModalTemplate = `
<div id="searchModal" class="absolute  inset-0 flex items-start h-full justify-center z-50 hidden">
<div id="searchModalOverlay" class="absolute justify-center items-center inset-0 bg-black opacity-50 "></div>
<div class="bg-white p-4 rounded-lg justify-center items-center shadow-lg z-10 w-full max-w-md">
  <div class="flex items-center justify-between mb-4">
    <input id="searchInput" required type="text" placeholder="Search products..." 
    class="w-full p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:border-red-800">
  `
  +
  " <button id='searchButton' class='bg-red-800 text-white px-4 py-2 rounded-r-lg hover:bg-red-800' onclick = 'searchItems()' >Search</button>"
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
          style="background-color:#FF7F50">
          <h4 class=" text-center text-white mt-10">Category: ${product.category}</h4>
          <span class="bg-red-800 w-[5rem] h-1 justify-center items-center text-center"></span>
            <h4 class=" text-center text-white mt-10">Name: ${product.name}</h4>
            <span class="bg-red-800 w-[5rem] h-1 justify-center items-center text-center"></span>
            <img id="small" src=${product.image} alt="oatmeal" class="small-img w-[15rem] ">
                   
            <p id='charge'  class=' mt-5 text-white p-2 w-full  text-[14px]'>${product.description}</p>
       
           
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


function searchItems() {
  const searchInput = document.getElementById('searchInput');
 
  const searchQuery = searchInput.value.toLowerCase();
 

  if (searchQuery.trim() === '' && categoryQuery.trim() === '') {
   
    return;
  }

  const searchResults = products.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(searchQuery);
    const categoryMatch = product.category.toLowerCase().includes(searchQuery);
    return nameMatch || categoryMatch;
  });

  displaySearchResults(searchResults);
}

  
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
  