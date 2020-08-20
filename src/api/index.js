const products = [
  {
    id: 1,
    brand: "Off White",
    price: 15,
    sale: false,
    description: "Lorem ipsum dolor.",
    image: "off-white.jpg",
    sizes: ["XL", "L", "XS", "M"],
    color: ["#0C0809", "#CDCDCF"]
  },
  {
    id: 2,
    brand: "ASOS",
    price: 9,
    sale: true,
    description: "Lorem ipsum dolor.",
    image: "asos.jpg",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    color: ["#D3C7B9"]
  },
  {
    id: 3,
    brand: "Ben Sherman",
    price: 13,
    sale: false,
    description: "Lorem ipsum dolor.",
    image: "ben-sherman.jpg",
    sizes: ["L", "XL", "XXL"],
    color: ["#D0D4D5", "#353742", "#CDCDCF", "#0C0809"]
  },
  {
    id: 4,
    brand: "H&M",
    price: 8,
    sale: true,
    description: "Lorem ipsum dolor.",
    image: "h&m.jpeg",
    sizes: ["XS", "S", "M", "L"],
    color: ["#353742", "#CDCDCF", "#0C0809"]
  },
  {
    id: 5,
    brand: "Nike",
    price: 14,
    sale: false,
    description: "Lorem ipsum dolor.",
    image: "nike.jpg",
    sizes: ["S", "M", "L", "XL"],
    color: ["#D0D4D5", "#353742", "#CDCDCF"]
  },
  {
    id: 6,
    brand: "Ralph Lauren",
    price: 19,
    sale: true,
    description: "Lorem ipsum dolor.",
    image: "polo.jpeg",
    sizes: ["XS", "S", "XL", "XXL"],
    color: ["#D0D4D5", "#353742", "#D3C7B9", "#CDCDCF", "#0C0809"]
  },
  {
    id: 7,
    brand: "Addidas",
    price: 5,
    sale: false,
    description: "Lorem ipsum dolor.",
    image: "addidas.jpg",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    color: ["#D0D4D5", "#CDCDCF", "#0C0809"]
  },
  {
    id: 8,
    brand: "Prada",
    price: 20,
    sale: true,
    description: "Lorem ipsum dolor.",
    image: "prada.jpg",
    sizes: ["XS", "S"],
    color: ["#D0D4D5", "#353742", "#0C0809"]
  },  
  {
    id: 9,
    brand: "The North Face",
    price: 12,
    sale: false,
    description: "Lorem ipsum dolor.",
    image: "the-north-face.jpg",
    sizes: ["XS", "M", "XL", "XXL"],
    color: ["#D0D4D5", "#353742", "#CDCDCF"]
  },
  {
    id: 10,
    brand: "Tommy Hilfiger",
    price: 5,
    sale: false,
    description: "Lorem ipsum dolor.",
    image: "tommy-hilfiger.jpg",
    sizes: ["S","L", "XXL"],
    color: ["#353742", "#0C0809"]
  }       
]

export default {
  getAllProducts(cb) {
    setTimeout(() => cb(products), 0)
  }
}
