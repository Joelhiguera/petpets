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
    {name: 'Pit Bull Terrier Mix'},



  ]); 
})