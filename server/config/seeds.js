const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'FireType' },
    { name: 'WaterType' },
    { name: 'GrassType' },
    { name: 'ElectricType' },
    { name: 'FlyingType' },
    { name: 'GroundType' },
    { name: 'DragonType' },
    { name: 'NormalType' },
    { name: 'GhostType' },
    { name: 'Trainer Accessories' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Charizard',
      description:
        'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
      image: '11.gif',
      category: categories[0]._id,
      price: 5.99,
      quantity: 2
    },
    {
      name: 'Snorlax',
      description:
        'It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.',
      image: '22.gif',
      category: categories[7]._id,
      price: 6.99,
      quantity: 2
    }
    
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
