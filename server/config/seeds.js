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
      image: '',
      category: categories[1]._id,
    },
  ])
})