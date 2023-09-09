const products = [

    { id: 1,
      image: "https://loria.com.ar/7676-thickbox_default/adidas-buzo-h-shmoo-hoodie-.jpg",
      name: "buzo adidas",
      price: 1000,
      category: 'buzos',
      stock: 55,
      descripcion: 'ropa la mas fachera'
    },
  { id: 2,
      image: "https://www.digitalsport.com.ar/files/products/5d6929ec6d7f8-467419-1200x1200.jpg",
      name: "buzo nike",
      price: 1000,
      category: 'buzos',
      stock: 25,
      descripcion: 'ropa la mas fachera'
  },
  { id: 3,
      image: "https://cdn-tienda-media.chaco.gob.ar/pub/media/catalog/product/cache/4859d7d32d93de4ba28e5496fd4ff8fb/w/h/whatsapp_image_2021-05-15_at_2.43.24_pm_3__1.jpeg",
      name: "buzo lacoste",
      price: 1000,
      category: 'remera',
      stock: 25,
      descripcion: 'ropa la mas fachera'
  }
];
  

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => { 
  return new Promise((resolve) => {
    setTimeout(() => {
       const prd = products.find(prod => prod.id === parseInt(productId))
       
       resolve(prd)
    }, 500)
  })
}



export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
       resolve(products.filter(prod => prod.category === productCategory))
    }, 500)
  })
  }