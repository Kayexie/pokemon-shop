const db = require('./connection');
const { User, Pokemon, Poketype } = require('../models');

db.once('open', async () => {
  await Poketype.deleteMany();
  
  const poketypes = await Poketype.insertMany([
    { name: 'FireType' },
    { name: 'GrassType' },
    { name: 'ElectircType' },
    { name: 'GhostType' },
    { name: 'NormalType' },
    { name: 'GhostType' },
    { name: 'WaterType' },
  ]);

  console.log('poketypes seeded');

  await Pokemon.deleteMany();

  const pokemons = await Pokemon.insertMany([
    {
      name: 'Charizard',
      description:
        'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
      image: '11.gif',
      poketype: poketypes[0]._id,
      ability: 'Blaze',
      weakness:'Water',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Snorlax',
      description:
        'It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.',
      image: '22.gif',
      poketype: poketypes[5]._id,
      ability: 'Thick Fat',
      weakness:'Fighting',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Scorbunny',
      description:
        'A warm-up of running around gets fire energy coursing through this Pokémon’s body. Once that happens, it’s ready to fight at full power.',
      image: '33.gif',
      poketype: poketypes[0]._id,
      ability: 'Powers up Fire-type moves when the Pokémon’s HP is low.',
      weakness:'Water',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Sobble',
      description:
        'When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won’t be able to resist weeping.',
      image: '44.gif',
      poketype: poketypes[6]._id,
      ability: 'Powers up Water-type moves when the Pokémon’s HP is low.',
      weakness:'Grass',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Grookey',
      description:
        'When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area.',
      image: '55.gif',
      poketype: poketypes[1]._id,
      ability: 'Powers up Grass-type moves when the Pokémon’s HP is low.',
      Weakness:'Fire',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Pikachu',
      description:
        'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
      image: '66.gif',
      poketype: poketypes[2]._id,
      ability: 'The Pokémon is charged with static electricity, so contact with it may cause paralysis.',
      Weakness:'Ground',
      quantity:1,
      adoptfee: 9.99
    },
  ]);

  console.log('pokemons seeded');

  await User.deleteMany();

  await User.create({
    userName:'pamela',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        pokemons: [pokemons[0]._id, pokemons[0]._id, pokemons[1]._id]
      }
    ]
  });

  await User.create({
    userName:'eholt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
