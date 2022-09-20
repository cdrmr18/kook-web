const RECIPES = [
  {
    chef: "Bec",
    recipes: [
      {
        id: 1,
        name: "Prawns with Sweet Chilli Sauce",
        img: "https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJhd25zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 25,
        description:
          "The shrimp is spicy, sticky, sweet and savory, with the citrusy tang of lime juice. This recipe takes only 15 minutes to make for dinner and probably the best shrimp recipe you can make in a jiffy.",
        cuisine: "Thai",
        cookTime: 40,
      },
      {
        id: 2,
        name: "Blue Beanie",
        img: "https://images.unsplash.com/photo-1612443016520-314f09b3d449?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        description:
          "A classically thickened with a rich demi-glace, but this version uses cream which allows the flavors of the herbs, tomatoes, and acidic wine to come through.",
        cuisine: "Thai",
        cookTime: 65,
      },
      {
        id: 3,
        name: "Sashimi with Chilli-lime Dressing",
        img: "https://images.unsplash.com/photo-1595456982104-14cc660c4d22?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhc2hpbWl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 35,
        description:
          "A Thai twist to traditional sashimi, for a simple, elegant starter. Seek out the freshest piece of snapper you can find for this simple yet stunning recipe.",
        cuisine: "Thai",
        cookTime: 55,
      },
      {
        id: 4,
        name: "Stir-fried Asparagus",
        img: "https://images.unsplash.com/photo-1601091745482-b2b5942e567e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZyaWVkJTIwYXNwYXJhZ3VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 25,
        description:
          "This asparagus stir fry recipe is one of those 15-minute, over-rice, easy-to-make, one-pan dishes with lots of nice sauce to soak into the rice. The fresh asparagus gives a fresh and unique favor with a texture similar to bamboo shoots.",
        cuisine: "Thai",
        cookTime: 70,
      },
      {
        id: 5,
        name: "Pork & Eggs",
        img: "https://images.unsplash.com/photo-1603356887214-0441954124ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        price: 18,
        description:
          "A a classic Thailand dish of Chinese origin. It's prepared by braising pork belly slices in an herb paste made from coriander root, garlic, and black pepper, then simmering them with hard-boiled eggs in a sweet sauce that includes the flavors of cinnamon, star anise, cumin, coriander seed, and Sichuan pepper.",
        cuisine: "Thai",
        cookTime: 40,
      },
      {
        id: 6,
        name: "Ginger Garlic Noodle Soup",
        img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c291cCUyMG5vb2RsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 14,
        description:
          "A nutritious, comforting, and flu-fighting twenty-minute recipe made with homemade vegetarian broth, noodles, mushrooms, and baby bok choy.",
        cuisine: "Thai",
        cookTime: 30,
      },
    ],
  },
  {
    chef: "Chaz",
    recipes: [
      {
        id: 10,
        name: "Zucchini Fritters",
        img: "https://images.unsplash.com/photo-1471253387723-35c53c9f97ca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGZyaXR0ZXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 20,
        description:
          "These fritters are unbelievably easy to make, low calorie, and the perfect way to sneak in some veggies!",
        cuisine: "Modern Australian",
        cookTime: 45,
      },
      {
        id: 11,
        name: "Seared Hiramasa Salmon",
        img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fGZpc2glMjBmb29kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 22,
        description:
          "Quick, crispy and flavourful, this meal will become a fast family favourite.",
        cuisine: "Modern Australian",
        cookTime: 25,
      },
      {
        id: 12,
        name: "Baked Passionfruit Tarts",
        img: "https://images.unsplash.com/photo-1591107576521-87091dc07797?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHRhcnQlMjBmb29kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 10,
        description:
          "These tartlets are delicious and simple to make, and even easier to eat. With a luscious passionfruit filling that's lightly caramelised just before serving, they are irresistible.",
        cuisine: "Modern Australian",
        cookTime: 80,
      },
      {
        id: 13,
        name: "Mushroom & Chestnut Risotto",
        img: "https://images.unsplash.com/photo-1609770424775-39ec362f2d94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cmlzb3R0b3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 16,
        description:
          "This gorgeous risotto, make with  mushrooms and chestnuts, is the perfect vegetarian meal for two on a cosy night in.",
        cuisine: "Modern Australian",
        cookTime: 20,
      },
      {
        id: 14,
        name: "Glazed Duck Drumsticks",
        img: "https://images.unsplash.com/photo-1513623954575-263b061498a3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVjayUyMGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 16,
        description:
          "Impress your guests with roasted duck legs in a sweet and sticky glaze of maple syrup, soy sauce and orange juice.",
        cuisine: "Modern Australian",
        cookTime: 60,
      },
      {
        id: 15,
        name: "Lamb Karaage Sliders",
        img: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1cmdlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 18,
        description:
          "Big juicy lamb nuggets marinated with soy sauce, ginger, garlic and curry powder before being coated in potato starch and fried till crisp.",
        cuisine: "Modern Australian",
        cookTime: 50,
      },
    ],
  },
  {
    chef: "Jamal",
    recipes: [
      {
        id: 18,
        name: "Hummuss",
        img: "https://images.unsplash.com/photo-1598683386906-71ef9caef177?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60",
        price: 25,
        description:
          "A Middle Eastern dip, spread, or savory dish made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic.",
        cuisine: "Middle Eastern",
        cookTime: 70,
      },
      {
        id: 19,
        name: "Tabbouleh",
        img: "https://images.unsplash.com/photo-1594040815645-5442fb6d48f6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dGFib3VsaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 90,
        description:
          "A Levantine vegetarian salad made mostly of finely chopped parsley, with tomatoes, mint, onion, bulgur (soaked, not cooked), and seasoned with olive oil, lemon juice, salt and sweet pepper.",
        cuisine: "Middle Eastern",
        cookTime: 85,
      },
      {
        id: 20,
        name: "Manakeesh",
        img: "https://images.unsplash.com/photo-1573821662905-00f8c205c148?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        price: 90,
        description:
          "Delicious and crispy homemade dough is topped with a za'atar topping or a blend of cheeses for two different variety of flatbread topped with a variety of possible toppings.",
        cuisine: "Middle Eastern",
        cookTime: 80,
      },
      {
        id: 21,
        name: "Kabsa",
        img: "https://images.unsplash.com/photo-1603496987674-79600a000f55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNoaWNrZW4lMjBmb29kJTIwcmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 16,
        description:
          "It is a dish made of rice and meat, cooked either separately or together. It can be made with spices and camel meat, lamb, chicken or fish.",
        cuisine: "Middle Eastern",
        cookTime: 40,
      },
      {
        id: 22,
        name: "Falafel",
        img: "https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFsYWZlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 25,
        description:
          "A staple Middle Eastern dish—and a popular street food around the world—that consists of fried spiced balls or patties of ground chickpeas or fava beans stuffed into a pita or wrapped in laffa bread with hot sauce, tahini sauce, and tomatoes.",
        cuisine: "Middle Eastern",
        cookTime: 50,
      },
    ],
  },
  {
    chef: "Roger",
    recipes: [
      {
        id: 23,
        name: "Duck Liver Parfait",
        img: "https://images.unsplash.com/photo-1605992728160-8d119bf2b5db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGF0ZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 25,
        description:
          "A brilliantly simple duck liver parfait recipe that is coupled with subtly smoked duck breast and a sweet chutney. Add some warm toast and a glass of sauternes to make this meal a little slice of heaven.",
        cuisine: "French",
        cookTime: 30,
      },
      {
        id: 24,
        name: "Cassoulet",
        img: "https://images.unsplash.com/photo-1591386767153-987783380885?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhbiUyMHN0ZXd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 20,
        description:
          "This is a yummy and savory dish for your next brunch. Buttery crescent dough is baked with chorizo sausage, eggs, and cheese, then sprinkled with all of your favorite taco-style toppings!",
        cuisine: "French",
        cookTime: 90,
      },
      {
        id: 25,
        name: "Chorizo & Egg Breakfast Pizza",
        img: "https://images.unsplash.com/photo-1605591099585-087b3d54cd45?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1342&q=80",
        price: 20,
        description:
          "A yummy and savory dish for your next brunch. Buttery crescent dough is baked with chorizo sausage, eggs, and cheese, then sprinkled with all of your favorite taco-style toppings!",
        cuisine: "French",
        cookTime: 50,
      },
      {
        id: 26,
        name: "Pecan Pie",
        img: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        price: 30,
        description:
          "A pie of pecan nuts mixed with a filling of eggs, butter, and sugar (typically corn syrup).",
        cuisine: "French",
        cookTime: 60,
      },
      {
        id: 27,
        name: "Le Burger du Poulet",
        img: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjJ8fHxlbnwwfHx8&auto=format&fit=crop&w=800&q=60",
        price: 45,
        description: "A delicious, gourmet French chicken burger.",
        cuisine: "French",
        cookTime: 40,
      },
      {
        id: 28,
        name: "Duck Confit",
        img: "https://images.unsplash.com/photo-1513623954575-263b061498a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 35,
        description:
          "This one of the most luxurious of foods in French cuisine. Gently cured duck legs bathed in their own fat and slowly cooked to falling-off-the-bone perfection. Then the skin is crisped in a pan or oven, giving you the sinful combination of silky meat and crackling skin.",
        cuisine: "French",
        cookTime: 30,
      },
    ],
  },
  {
    chef: "Samuel",
    recipes: [
      {
        id: 30,
        name: "Moroccan Chicken Rfissa",
        img: "https://images.unsplash.com/photo-1611712142269-12b7433e28e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fGFmcmljYW4lMjBmb29kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 35,
        description:
          "A fabulous Moroccan dish of stewed chicken, lentils and onions served on a bed of shredded msemen, trid pastry or bread.",
        cuisine: "North African",
        cookTime: 40,
      },
      {
        id: 31,
        name: "Moroccan Meatball Soup",
        img: "https://images.unsplash.com/photo-1576577445504-6af96477db52?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTgyfHxtZWF0YmFsbCUyMHNvdXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 20,
        description:
          "A flavorful broth spiced with Moroccan flavors with meatballs and Israeli couscous. This soup is so warm and comforting. It can be made with ground lamb or beef that is seasoned and baked.",
        cuisine: "North African",
        cookTime: 60,
      },
      {
        id: 32,
        name: "Aromatic Lamb with Dates",
        img: "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 25,
        description:
          "Moroccan seasonings mingle for a bright balance of flavors: sweetness comes from dates and onions, and heat and spice from ginger and cumin. This tagine is traditionally accompanied only by warm whole wheat pita or Arab flatbread. But, if you wish, serve with buttered couscous or even mashed potatoes",
        cuisine: "North African",
        cookTime: 70,
      },
      {
        id: 33,
        name: "Morrocan Roast Lamb",
        img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fHJvYXN0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 25,
        description:
          "A warm and mellow spice rub gives this super-simple Moroccan roast lamb its flavour and slow roasting ensures you'll have perfect melt-in-the-mouth tender meat.",
        cuisine: "North African",
        cookTime: 70,
      },
      {
        id: 34,
        name: "Chicken Tagine",
        img: "https://images.unsplash.com/photo-1519624014191-508652cbd7b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
        price: 40,
        description:
          "A traditional Moroccan dish of chicken pieces braised with spices, garlic, onion, olives, and preserved lemons. It’s scrumptious and easy to throw together.",
        cuisine: "North African",
        cookTime: 60,
      },
      {
        id: 35,
        name: "Mixed-grain Paella with Lamb",
        img: "https://images.unsplash.com/photo-1512058556646-c4da40fba323?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGFuJTIwZnJ5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 25,
        description:
          "For hassle-free entertaining at its best, you cant look past this hearty paella with lamb – its all cooked in the one pan!",
        cuisine: "North African",
        cookTime: 50,
      },
    ],
  },
];

export default RECIPES;
