const db = require('./connection');
const { User, Pet, Breed } = require('../models');

db.once('open', async () => {
  await Breed.deleteMany();

  const breeds = await Breed.insertMany([
    {name: 'Alaskan Malamute Mix'},
    {name: 'Australian Shepard & Border Collie Mix'},
    {name: 'Border Collie'},
    {name: 'Old English Sheepdog'},
    {name: 'German Shepherd'},
    {name: 'Terrier'},
    {name: 'Pit Bull Terrier Mix'}
    
  ]);
  
  console.log('breeds seeded')

  await Pet.deleteMany();

  const pets = await Pet.insertMany([
    {
      name: 'Sitka',
      description:
        'He is searching for his forever home. HE is such a good dog, loves to be around people and loves other dogs. His background is a mystery. He came in with another dog so he gets along well with others. He is a typical malamute. He loves to be out side. He wants all the love and attention.',
      charachteristics: 
        'Friendly, Affectionate, Loyal, Gentle, Playful, Independent, Curious, Smart, Brave, Protective, Funny, Loves kisses, Couch potato.',
      gender: 'Male',
      age: 3,
      size: "Large",
      color: 'Black',
      image: '',
      category: categories[0]._id,
    },
    {
      name: 'Timmy',
      description:
        'He is searching for his forever home!',
      charachteristics: 
        'Friendly, Affectionate,',
      gender: 'Male',
      age: 2,
      size: "Medium",
      color: 'Red/White',
      image: '',
      category: categories[1]._id,
    },
    {
      name: 'Badger',
      description:
        'He is searching for his forever home!',
      charachteristics: 
        'Friendly, Affectionate,',
      gender: 'Male',
      age: 2,
      size: "Medium",
      color: 'Black/White',
      image: '',
      category: categories[2]._id,
    },
    {
      name: 'Miss Muffin',
      description:
        'She is searching for his forever home!',
      charachteristics: 
        'Friendly, Affectionate,',
      gender: 'Female',
      age: 5,
      size: "Medium",
      color: 'White/black',
      image: '',
      category: categories[3]._id,
    },
    {
      name: 'Victoria',
      description:
        'She is searching for his forever home!',
      charachteristics: 
        'Friendly, Affectionate,',
      gender: 'Female',
      age: 2,
      size: "Small",
      color: 'Black, Yellow/Tan/Blonde/Fawn',
      image: '',
      category: categories[4]._id,
    },
    {
      name: 'Foggy',
      description:
        'Foggy was diagnosed with Hydrocephalus. He is very active, but yet has a very mellow side. Due to his condition, he has a few weird quirks, but we would not  change it for the world. He has so much love to give and is quite the character',
      charachteristics: 
        'Friendly, Affectionate,',
      gender: 'Male',
      age: 2,
      size: "Small",
      color: 'Yellow/Tan/Blonde/Fawn',
      image: '',
      category: categories[4]._id,
    },
    {
      name: 'Momma',
      description:
        'Momma is looking for a forever home!',
      charachteristics: 
        'Friendly, Affectionate,',
      gender: 'Female',
      age: 4,
      size: "Medium",
      color: 'Black, White/Cream',
      image: '',
      category: categories[5]._id,
    },
    
  ]);

  console.log('Pets Seeded')

  process.exit();
});