



var cart = [];


function addtocart(item) {
  let data = localStorage.getItem("dataToSend");
  
  let count = parseInt(data, 10) || 0;
  count++;

  

  if (count === null) {
    count = cart.length;
    localStorage.setItem("dataToSend", count);
  }

  
  console.log(count);

  let total = count + cart.length;
  localStorage.setItem("dataToSend", total);
  console.log(total);
  

  
  var itemDetails = {};

 
    const product = [
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
        {
          id: 62,
          category:'House Warming',
          image: 'images/house-warming1.png',
          name: 'Warm wishes',
          price: 195,
          description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
          id: 63,
          category:'House Warming',
          image: 'images/house-warming2.png',
          name: 'Hearth Hues',
          price: 195,
          description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
          id: 64,
          category:'House Warming',
          image: 'images/house-warming3.png',
          name: 'Garden Joy',
          price: 195,
          description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
          id: 65,
          category:'House Warming',
          image: 'images/house-warming4.png',
          name: 'Sweet Sanctuary',
          price: 195,
          description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
          id: 66,
          category:'House Warming',
          image: 'images/house-warming5.png',
          name: 'Floral Haven',
          price: 195,
          description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
          id: 67,
          category:'House Warming',
          image: 'images/house-warming6.png',
          name: 'Bloosom Blessing',
          price: 195,
          description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
          id: 68,
          category:'House Warming',
          image: 'images/house-warming7.png',
          name: 'Dwelling Delight',
          price: 195,
          description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
          id: 69,
          category:'House Warming',
          image: 'images/house-warming8.png',
          name: 'Fresh Beginning',
          price: 195,
          description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
          id: 70,
          category:'House Warming',
          image: 'images/house-warming9.png',
          name: 'Home Harmony',
          price: 195,
          description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
          id: 71,
          category:'House Warming',
          image: 'images/house-warming10.png',
          name: 'Garden Hug',
          price: 195,
          description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
          id: 72,
          category:'House Warming',
          image: 'images/lisianthus3.png',
          name: 'Romantic Ruffles',
          price: 195,
          description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
      },
      {
        id: 73,
        category:'House Warming',
        image: 'images/hydrangeas3.png',
        name: 'Ocean Dream',
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
          id: 74,
          category:'House Warming',
          image: 'images/gypsophilia3.png',
          name: 'Airy Amour',
          price: 195,
          description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
          id: 75,
          category:'House Warming',
          image: 'images/carnation3.png',
          name: 'Ivory Elegance',
          price: 195,
          description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
          id: 76,
          category:'House Warming',
          image: 'images/calla-lilly3.png',
          name: 'Blushy Beauty',
          price: 195,
          description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
            id: 77,
            category:'Love And Romance',
            image: 'images/love&romance1.png',
            name: 'Love Blooms',
            price: 195,
            description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
            id: 78,
            category:'Love And Romance',
            image: 'images/love2.png',
            name: 'Heart-Felt Hues',
            price: 195,
            description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
            id: 79,
            category:'Love And Romance',
            image: 'images/love3.png',
            name: 'Rose Romance',
            price: 195,
            description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
            id: 80,
            category:'Love And Romance',
            image: 'images/love4.png',
            name: 'Kissable Carnation',
            price: 195,
            description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
            id: 81,
            category:'Love And Romance',
            image: 'images/love5.png',
            name: 'Scarlet Roses',
            price: 195,
            description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
            id: 82,
            category:'Love And Romance',
            image: 'images/love6.png',
            name: 'Love Tokens',
            price: 195,
            description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
            id: 83,
            category:'Love And Romance',
            image: 'images/love7.png',
            name: 'Red Passion',
            price: 195,
            description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
            id: 84,
            category:'Love And Romance',
            image: 'images/love8.png',
            name: 'Sweet Kisses',
            price: 195,
            description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
            id: 85,
            category:'Love And Romance',
            image: 'images/love9.png',
            name: 'Red Velvet',
            price: 195,
            description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
            id: 86,
            category:'Love And Romance',
            image: 'images/roses4.png',
            name: 'Pink Passion',
            price: 195,
            description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
            id: 87,
            category:'Love And Romance',
            image: 'images/tulips4.png',
            name: 'Blushing Beauty',
            price: 195,
            description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
            id: 88,
            category:'Love And Romance',
            image: 'images/sunflower4.png',
            name: 'Golden Glow',
            price: 195,
            description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
            id: 89,
            category:'Love And Romance',
            image: 'images/spray4.png',
            name: 'Sweet Spray',
            price: 195,
            description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
        },
        {
            id: 90,
            category:'Love And Romance',
            image: 'images/gemini4.png',
            name: 'Meadow Marvel',
            price: 195,
            description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
      },
      {
        id: 91,
        category:"Mothers Day",
        image: 'images/mother1.png',
        name: "Mother's Joy",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 92,
        category:"Mothers Day",
        image: 'images/mother2.png',
        name: "Lavender Love",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 93,
        category:"Mothers Day",
        image: 'images/mother3.png',
        name: "Floral Grace",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 94,
        category:"Mothers Day",
        image: 'images/mother4.png',
        name: "Love Blossom",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 95,
        category:"Mothers Day",
        image: 'images/mother5.png',
        name: "Petal Affection",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 96,
        category:"Mothers Day",
        image: 'images/mother6.png',
        name: "Mum's Blooms",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 97,
        category:"Mothers Day",
        image: 'images/mother7.png',
        name: "Mum's Garden",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 98,
        category:"Mothers Day",
        image: 'images/mother8.png',
        name: "Rose Beauty",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 99,
        category:"Mothers Day",
        image: 'images/mother9.png',
        name: "Loving Carnations",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 100,
        category:"Mothers Day",
        image: 'images/mother10.png',
        name: "Pink Petals",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 101,
        category:"Mothers Day",
        image: 'images/roses5.png',
        name: "Crimson Charm",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 102,
        category:"Mothers Day",
        image: 'images/tulips5.png',
        name: "Spring Symphony",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 103,
        category:"Mothers Day",
        image: 'images/sunflower5.png',
        name: "Daisy Sun-burst",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 104,
        category:"Mothers Day",
        image: 'images/spray5.png',
        name: "Whispering Winds",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 105,
        category:"Mothers Day",
        image: 'images/gemini5.png',
        name: "Pastel Petals",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
      },
      {
        id: 106,
        category:"Sympathy",
        image: 'images/sympathy1.png',
        name: "Serene Blossom",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 107,
        category:"Sympathy",
        image: 'images/sympathy2.png',
        name: "Compassion Roses",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 108,
        category:"Sympathy",
        image: 'images/sympathy3.png',
        name: "Graceful Tokens",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 109,
        category:"Sympathy",
        image: 'images/sympathy4.png',
        name: "Gentle Wishes",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 110,
        category:"Sympathy",
        image: 'images/sympathy5.png',
        name: "Quite Comfort",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 111,
        category:"Sympathy",
        image: 'images/sympathy6.png',
        name: "Floral Grace",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 112,
        category:"Sympathy",
        image: 'images/sympathy7.png',
        name: "Calming Blooms",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 113,
        category:"Sympathy",
        image: 'images/sympathy8.png',
        name: "Mourning Petals",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 114,
        category:"Sympathy",
        image: 'images/sympathy9.png',
        name: "Peaceful Blooms",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 115,
        category:"Sympathy",
        image: 'images/lisianthus4.png',
        name: "Starry Sappphire",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 116,
        category:"Sympathy",
        image: 'images/hydrangeas4.png',
        name: "Majestic Mauve ",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 117,
        category:"Sympathy",
        image: 'images/gypsophilia4.png',
        name: "Fairy's Finery ",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 118,
        category:"Sympathy",
        image: 'images/carnation4.png',
        name: "Golden Glimmer ",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 119,
        category:"Sympathy",
        image: 'images/calla-lilly4.png',
        name: "Regal Radiance",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
      },
      {
        id: 120,
        category:"Valentine",
        image: 'images/valentine1.png',
        name: "Forever Love",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 121,
        category:"Valentine",
        image: 'images/valentine2.png',
        name: "Scarlet Roses",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 122,
        category:"Valentine",
        image: 'images/valentine3.png',
        name: "Sweet Roses",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 123,
        category:"Valentine",
        image: 'images/valentine4.png',
        name: "Rose Romance",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 124,
        category:"Valentine",
        image: 'images/valentine5.png',
        name: "Love Bouquet",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 125,
        category:"Valentine",
        image: 'images/valentine6.png',
        name: "Love Token",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 126,
        category:"Valentine",
        image: 'images/valentine7.png',
        name: "Passion Petals",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 127,
        category:"Valentine",
        image: 'images/valentine8.png',
        name: "Romantic Reds",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 128,
        category:"Valentine",
        image: 'images/valentine9.png',
        name: "Heart Garden",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 129,
        category:"Valentine",
        image: 'images/valentine10.png',
        name: "Love Blooms",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 130,
        category:"Valentine",
        image: 'images/lisianthus5.png',
        name: "Precious Petals",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 131,
        category:"Valentine",
        image: 'images/hydrangeas5.png',
        name: "Coral Charm",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 132,
        category:"Valentine",
        image: 'images/gypsophilia5.png',
        name: "Angel Aura",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 133,
        category:"Valentine",
        image: 'images/calla-lilly5.png',
        name: "Elegant Embrace",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 133,
        category:"Valentine",
        image: 'images/carnation5.png',
        name: "Coral Crush",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
      },
      {
        id: 134,
        category:"Wedding",
        image: 'images/wedding1.png',
        name: "Bridal Bliss",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 135,
        category:"Wedding",
        image: 'images/wedding2.png',
        name: "Garden Dreams",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 136,
        category:"Wedding",
        image: 'images/wedding3.png',
        name: "Blossom Breeze",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 137,
        category:"Wedding",
        image: 'images/wedding4.png',
        name: "Wedding Wonders",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 138,
        category:"Wedding",
        image: 'images/wedding5.png',
        name: "Pure Passion",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 139,
        category:"Wedding",
        image: 'images/wedding6.png',
        name: "Eternal Love",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 140,
        category:"Wedding",
        image: 'images/wedding7.png',
        name: "Rose Rapture",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 141,
        category:"Wedding",
        image: 'images/wedding8.png',
        name: "Bridal Beauty",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 142,
        category:"Wedding",
        image: 'images/wedding9.png',
        name: "Enchanted Roses",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 143,
        category:"Wedding",
        image: 'images/wedding10.png',
        name: "Romantic Roses",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 144,
        category:"Wedding",
        image: 'images/roses6.png',
        name: "Graceful Grace",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 145,
        category:"Wedding",
        image: 'images/tulips6.png',
        name: "Apricot Dreams",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 146,
        category:"Wedding",
        image: 'images/sunflower6.png',
        name: "Radiance Ray",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 147,
        category:"Wedding",
        image: 'images/spray6.png',
        name: "Blossom Cascade",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },
    {
        id: 148,
        category:"Wedding",
        image: 'images/gemini6.png',
        name: "Floral Fantasy",
        price: 195,
        description:"A versatile gluten-free option, oat flour adds a subtle nutty flavor and moist texture to pancakes, cookies, muffins, and breads."
    },

];


  var matchedItem = product.find(function(mappedItem) {
    
    return mappedItem.id === item.id;
  });


  if (matchedItem) {
    itemDetails.image = matchedItem.image;
    itemDetails.name = matchedItem.name;
    itemDetails.price = matchedItem.price;
    alert("added to Cart! check the cart page")
   
  }
  
 
  cart.push(itemDetails);
  localStorage.setItem("itemDetails", JSON.stringify(cart));

  

  
}



