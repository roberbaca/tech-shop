// TODO: TRAER LOS PRODUCTOS DE LA DB (MONGO DB)
export const PRODUCTS = [
  {
    id: 1,
    name: "Product 01",
    brand: "Brand 01",
    category: "Category 01",
    currentPrice: 100,
    oldPrice: 200,
    discount: 50,
    isNew: false,    
    onSale: true,
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stock : 0,
    productImages: [
      require('../assets/product01.png'),
      require('../assets/product06.png'),
      require('../assets/product08.png')
    ]
  },
  {
    id: 2,
    name: "Product 02",
    brand: "Brand 02",
    category: "Category 02",
    currentPrice: 50,
    oldPrice: 50,
    discount: 0,
    isNew: true, 
    onSale: false,   
    stock : 3,
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    productImages: [
      require('../assets/product02.png'),
      require('../assets/product05.png')
    ]
  },
  {
    id: 3,
    name: "Product 03",
    brand: "Brand 03",
    category: "Category 03",
    currentPrice: 99,
    oldPrice: 120,
    discount: 10,
    isNew: false,  
    onSale: true,   
    stock : 4, 
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    productImages: [
      require('../assets/product04.png')    
    ]
  },
  {
    id: 4,
    name: "Product 04",
    brand: "Brand 04",
    category: "Category 04",
    currentPrice: 25,
    oldPrice: 75,
    discount: 55,
    isNew: true,  
    onSale: true,    
    stock : 3,
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    productImages: [
      require('../assets/product09.png')   
    ]
  },
  {
    id: 5,
    name: "Product 05",
    brand: "Brand 05",
    category: "Category 05",
    currentPrice: 5,
    oldPrice: 7,
    discount: 5,
    onSale: true,  
    isNew: true,    
    stock : 7,
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    productImages: [
      require('../assets/product07.png')   
    ]
  },
];

