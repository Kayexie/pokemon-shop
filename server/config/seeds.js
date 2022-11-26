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
      pokemonType:'Fire',
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
      pokemonType:'Normal',
      ability: 'Thick Fat',
      weakness:'Fighting',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Scorbunny',
      description:
        'A warm-up of running around gets fire energy coursing through this Pokémon’s body. Once that happens, it’s ready to fight at full power.',
      image: 'scorbunny.png',
      poketype: poketypes[0]._id,
      pokemonType:'Fire',
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
      pokemonType:'Water',
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
      pokemonType:'Grass',
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
      pokemonType:'Electric',
      ability: 'The Pokémon is charged with static electricity, so contact with it may cause paralysis.',
      Weakness:'Ground',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Arcanine',
      description:
        'The sight of it running over 6,200 miles in a single day and night has captivated many people.',
      image: 'arcanine.png',
      poketype: poketypes[0]._id,
      ability: 'Flash fire',
      weakness:'water',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Blastoise',
      description:
        'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
      image: 'Blastoise.png',
      poketype: poketypes[6]._id,
      ability: 'Torrent',
      weakness:'Electric',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Charmander',
      description:
        'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
      image: 'Charmander.png',
      poketype: poketypes[0]._id,
      ability: 'Blaze',
      weakness:'water',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Chikorita',
      description:
        'Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.',
      image: 'Chikorita.png',
      poketype: poketypes[1]._id,
      ability: 'Overgrow',
      weakness:'Fire',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Ditto',
      description:
        'It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.',
      image: 'Ditto.png',
      poketype: poketypes[4]._id,
      ability: 'Limber',
      weakness:'Fighting',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Dusclops',
      description:
        'Its body is entirely hollow. When it opens its mouth, it sucks everything in as if it were a black hole.',
      image: 'Dusclops.png',
      poketype: poketypes[3]._id,
      ability: 'Pressure',
      weakness:'Ghost, Dark',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Duskull',
      description:
        'Making itself invisible, it silently sneaks up to prey. It has the ability to slip through thick walls.',
      image: 'Duskull.png',
      poketype: poketypes[3]._id,
      ability: 'levitate',
      weakness:'Ghost, Dark',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Electrode',
      description:
        'Stores electrical energy inside its body. Even the slightest shock could trigger a huge explosion.',
      image: 'Electrode.png',
      poketype: poketypes[2]._id,
      ability: 'Static',
      weakness:'Ground',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Flaaffy',
      description:
        'In the places on its body where fleece doesn’t grow, its skin is rubbery and doesn’t conduct electricity. Those spots are safe to touch',
      image: 'Flaaffy.png',
      poketype: poketypes[2]._id,
      ability: 'Static',
      weakness:'Ground',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Furret',
      description:
        'Furret has a very slim build. When under attack, it can slickly squirm through narrow spaces and get away. In spite of its short limbs, this Pokémon is very nimble and fleet.',
      image: 'Furret.png',
      poketype: poketypes[4]._id,
      ability: 'Keen Eye',
      weakness:'Fighting',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Gastly',
      description:
        'Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.',
      image: 'Gastly.png',
      poketype: poketypes[3]._id,
      ability: 'Levitate',
      weakness:'Dark,Ground',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'jolteon',
      description:
        'If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes.',
      image: 'jolteon.png',
      poketype: poketypes[2]._id,
      ability: 'Volt Absorb',
      weakness:'Ground',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'jolteon',
      description:
        'If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes.',
      image: 'jolteon.png',
      poketype: poketypes[2]._id,
      ability: 'Volt Absorb',
      weakness:'Ground',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Meganium',
      description:
        'The fragrance of Meganium’s flower soothes and calms emotions. In battle, this Pokémon gives off more of its becalming scent to blunt the foe’s fighting spirit.',
      image: 'Meganium.png',
      poketype: poketypes[1]._id,
      ability: 'Overgrow',
      weakness:'Fire',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Misdreavus',
      description:
        'What gives meaning to its life is surprising others. If you set your ear against the red orbs around its neck, you can hear shrieking.',
      image: 'Misdreavus.png',
      poketype: poketypes[1]._id,
      ability: 'levtate',
      weakness:'Dark',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Politoed',
      description:
        'At nightfall, these Pokémon appear on the shores of lakes. They announce their territorial claims by letting out cries that sound like shouting.',
      image: 'Politoed.png',
      poketype: poketypes[6]._id,
      ability: 'Water Absorb',
      weakness:'Grass',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Poliwhirl',
      description:
        'Staring at the swirl on its belly causes drowsiness. This trait of Poliwhirl’s has been used in place of lullabies to get children to go to sleep',
      image: 'Poliwhirl.png',
      poketype: poketypes[6]._id,
      ability: 'Water Absorb',
      weakness:'Grass',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Ponyta',
      description:
        'It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.',
      image: 'Ponyta.png',
      poketype: poketypes[0]._id,
      ability: 'Flash fire',
      weakness:'Water',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Raichu',
      description:
        'Its long tail serves as a ground to protect itself from its own high-voltage power.',
      image: 'Raichu.png',
      poketype: poketypes[0]._id,
      ability: 'Static',
      weakness:'Ground',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Raichu',
      description:
        'Its long tail serves as a ground to protect itself from its own high-voltage power.',
      image: 'Raichu.png',
      poketype: poketypes[2]._id,
      ability: 'Static',
      weakness:'Ground',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Sceptile',
      description:
        'The leaves growing on Sceptile’s body are very sharp edged. This Pokémon is very agile—it leaps all over the branches of trees and jumps on its foe from above or behind.',
      image: 'Sceptile.png',
      poketype: poketypes[1]._id,
      ability: 'Overgrow',
      weakness:'Fire',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Seadra',
      description:
        'It’s the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison.',
      image: 'Seabra.png',
      poketype: poketypes[5]._id,
      ability: 'Poison point',
      weakness:'Grass',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Sentret',
      description:
        'When Sentret sleeps, it does so while another stands guard. The sentry wakes the others at the first sign of danger. ',
      image: 'sentral.png',
      poketype: poketypes[4]._id,
      ability: 'Keen Eye',
      weakness:'Fighting',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Shuppet',
      description:
        'It eats up emotions like malice, jealousy, and resentment, so some people are grateful for its presence.',
      image: 'Shupper.png',
      poketype: poketypes[3]._id,
      ability: 'Insomnia',
      weakness:'Dark',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Staryu',
      description:
        'If you visit a beach at the end of summer, you’ll be able to see groups of Staryu lighting up in a steady rhythm.',
      image: 'Staryu.png',
      poketype: poketypes[6]._id,
      ability: 'Illuminate',
      weakness:'grass',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Tauros',
      description:
        'When Tauros begins whipping itself with its tails, it’s a warning that the Pokémon is about to charge with astounding speed.',
      image: 'Tauros.png',
      poketype: poketypes[4]._id,
      ability: 'Anger Point',
      weakness:'Fighting',
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
