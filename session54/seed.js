const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    name: "I phone 14 maxpro",
    img: "https://unsplash.com/photos/black-iphone-7-plus-on-white-surface-ZwKCWVFdrcs",
    price: 173000,
    desc: "cost a is too much high",
  },
  {
    name: "I phone 14 maxpro",
    img: "https://unsplash.com/photos/black-iphone-7-plus-on-white-surface-ZwKCWVFdrcs",
    price: 173000,
    desc: "cost a is too much high",
  },
  
  {
    name: "I phone 16 maxpro",
    img: "https://images.unsplash.com/photo-1688649593308-40dfbb552d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGklMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 373000,
    desc: "cost c is aulut se too much high",
  },
  {
    name: "I phone 17 maxpro",
    img: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGklMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 273000,
    desc: "cost d loot lois too much high",
  },
  {
    name: "I phone mac maxpro",
    img: "https://images.unsplash.com/photo-1630233313373-a03df7d139c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    price: 193000,
    desc: "cost e efficent is too much high",
  },
  {
    name: "I phone mac2 maxpro",
    img: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjfGVufDB8fDB8fHww",
    price: 183000,
    desc: "cost  f is too much high",
  },
];

async function seedDB() {
  await Product.insertMany(products);
  console.log('data seeded sucessfully');
}

// Allow this module to be used as a standalone seeder script.
if (require.main === module) {
  mongoose
    .connect('mongodb://127.0.0.1:27017/shopping-sam-app')
    .then(async () => {
      await seedDB();
      await mongoose.connection.close();
      console.log('DB connection closed');
    })
    .catch((err) => {
      console.error('Failed to seed DB:', err);
    });
}

module.exports = seedDB;