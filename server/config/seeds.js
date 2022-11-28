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
    { name: 'PoisonType' },
    { name: 'WaterType' },
  ]);

  console.log('poketypes seeded');

  await Pokemon.deleteMany();

  const pokemons = await Pokemon.insertMany([
    {
      name: 'Charizard',
      description:
        'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
      image: 'Charizard.png',
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
      image: 'Snorlax.png',
      poketype: poketypes[4]._id,
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
      image: 'Scorbunny.png',
      poketype: poketypes[0]._id,
      pokemonType:'Fire',
      ability: 'Blaze',
      weakness:'Water',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Sobble',
      description:
        'When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won’t be able to resist weeping.',
      image: 'Sobble.png',
      poketype: poketypes[6]._id,
      pokemonType:'Water',
      ability: 'Torrent',
      weakness:'Grass',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Grookey',
      description:
        'When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area.',
      image: 'Grookey.png',
      poketype: poketypes[1]._id,
      pokemonType:'Grass',
      ability: 'Overgrow',
      Weakness:'Fire',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Pikachu',
      description:
        'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
      image: 'Pichachu.png',
      poketype: poketypes[2]._id,
      pokemonType:'Electric',
      ability: 'Static',
      Weakness:'Ground',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Arcanine',
      description:
        'The sight of it running over 6,200 miles in a single day and night has captivated many people.',
      image: 'Arcanine.png',
      poketype: poketypes[0]._id,
      pokemonType:'Fire',
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
      pokemonType:'Water',
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
      pokemonType:'Fire',
      ability: 'Blaze',
      weakness:'water',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Chikorita',
      description:
        'Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.',
      image: 'chikorita.png',
      poketype: poketypes[1]._id,
      pokemonType:'Grass',
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
      pokemonType:'Normal',
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
      pokemonType:'Ghost',
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
      pokemonType:'Ghost',
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
      pokemonType:'Electric',
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
      pokemonType:'Electric',
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
      pokemonType:'Normal',
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
      pokemonType:'Ghost',
      ability: 'Levitate',
      weakness:'Dark,Ground',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'jolteon',
      description:
        'If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes.',
      image: 'Jolteon.png',
      poketype: poketypes[2]._id,
      pokemonType:'Electric',
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
      pokemonType:'Grass',
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
      poketype: poketypes[3]._id,
      pokemonType:'Ghost',
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
      pokemonType:'Water',
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
      pokemonType:'Water',
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
      pokemonType:'Fire',
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
      poketype: poketypes[2]._id,
      pokemonType:'Electric',
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
      pokemonType:'Grass',
      ability: 'Overgrow',
      weakness:'Fire',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Seadra',
      description:
        'It’s the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison.',
      image: 'Seadra.png',
      poketype: poketypes[6]._id,
      pokemonType:'Water',
      ability: 'Poison point',
      weakness:'Grass',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Sentret',
      description:
        'When Sentret sleeps, it does so while another stands guard. The sentry wakes the others at the first sign of danger. ',
      image: 'Sentret.png',
      poketype: poketypes[4]._id,
      pokemonType:'Normal',
      ability: 'Keen Eye',
      weakness:'Fighting',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Shuppet',
      description:
        'It eats up emotions like malice, jealousy, and resentment, so some people are grateful for its presence.',
      image: 'Shuppet.png',
      poketype: poketypes[3]._id,
      pokemonType:'Ghost',
      ability: 'Insomnia',
      weakness:'Dark',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Bulbasaur',
      description:
        'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
      image: 'Bulbasaur.png',
      poketype: poketypes[5]._id,
      pokemonType:'Poison',
      ability: 'Overgrow',
      weakness:'Ice',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Ekans',
      description:
        'The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.',
      image: 'Ekans.png',
      poketype: poketypes[5]._id,
      pokemonType:'Poison',
      ability: 'Shed Skin',
      weakness:'Psychic',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Treecko',
      description:
        'When Tauros begins whipping itself with its tails, it’s a warning that the Pokémon is about to charge with astounding speed.',
      image: 'Treecko.png',
      poketype: poketypes[1]._id,
      pokemonType:'Grass',
      ability: 'Overgrow',
      weakness:'Fire',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Psyduck',
      description:
        'Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.',
      image: 'Psyduck.png',
      poketype: poketypes[6]._id,
      pokemonType:'Water',
      ability: 'Damp',
      weakness:'Grass',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Jigglypuff ',
      description:
        'Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep.',
      image: 'Jigglypuff.png',
      poketype: poketypes[4]._id,
      pokemonType:'Normal',
      ability: 'Cute Charm',
      weakness:'Poison',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Beedrill',
      description:
        'It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.',
      image: 'Beedrill.png',
      poketype: poketypes[5]._id,
      pokemonType:'Poison',
      ability: 'Swarm',
      weakness:'Fire',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Nidoran',
      description:
        'The horn on a male Nidoran’s forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.',
      image: 'Nidoran.png',
      poketype: poketypes[5]._id,
      pokemonType:'Poison',
      ability: 'Poison Point',
      weakness:'Ground',
      quantity:1,
      adoptfee: 9.99
    },
    {
      name: 'Vileplume',
      description:
        'It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen.',
      image: 'Vileplume.png',
      poketype: poketypes[5]._id,
      pokemonType:'Poison',
      ability: 'Chlorophyll',
      weakness:'Fire',
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
