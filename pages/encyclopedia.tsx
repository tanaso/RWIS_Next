import Page from '@/components/page'
import Section from '@/components/section'

import React from 'react';
// import EncyclopediaEntry from './EncyclopediaEntry';
// import encyclopediaData from './data';

// Encyclopedia.js






// data.js

/*
export const encyclopediaData = [
	{
	  id: 1,
	  title: 'Black Iris',
	  description: 'Description du sujet 1...',
	  imageUrl: 'lien_vers_image1.jpg',
	},
	{
	  id: 2,
	  title: 'Blue Iris',
	  description: 'Description du sujet 2...',
	  imageUrl: 'lien_vers_image2.jpg',
	},
	{
	  id: 3,
	  title: 'Orange Iris',
	  description: 'Description du sujet 3...',
	  imageUrl: 'lien_vers_image3.jpg',
	},
	{
	  id: 4,
	  title: 'Pink Iris',
	  description: 'Description du sujet 4...',
	  imageUrl: 'lien_vers_image4.jpg',
	},
	{
	  id: 5,
	  title: 'Purple Iris',
	  description: 'Description du sujet 5...',
	  imageUrl: 'lien_vers_image5.jpg',
	},
	{
	  id: 6,
	  title: 'Red Iris',
	  description: 'Description du sujet 6...',
	  imageUrl: 'lien_vers_image6.jpg',
	},
	{
	  id: 7,
	  title: 'White Iris',
	  description: 'Description du sujet 7...',
	  imageUrl: 'lien_vers_image7.jpg',
	},
	{
	  id: 8,
	  title: 'Yellow Iris',
	  description: 'Description du sujet 8...',
	  imageUrl: 'lien_vers_image8.jpg',
	},
  ];


  const Encyclopedia = () => (
	<Page>
	  <Section>
		<h2 className='text-xl font-semibold'>Encyclopedia</h2>
		<div className='mt-2'>
		  //{/ ... Votre contenu ici ... /}
		</div>
	  </Section>
  
	  <div>
		<h1>Encyclopedia</h1>
		{encyclopediaData.map(entry => (
		  <EncyclopediaEntry
			key={entry.id}
			title={entry.title}
			description={entry.description}
			imageUrl={entry.imageUrl}
		  />
		))}
	  </div>
	</Page>
	
  );
  
  export { Encyclopedia }; // Exportations nommées

export const EncyclopediaEntry: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => {
	return (
	  <div>
		<h2>{title}</h2>
		<img src={imageUrl} alt={title} style={{ maxWidth: '100%' }} />
		<p>{description}</p>
	  </div>
	);
  };
  


// App.js

const App = () => {
  return (
    <div>
      <h1>Mon Application React</h1>
      <Encyclopedia />
    </div>
  );
};

export default App;

*/




// Flower data with name and image URL
const flowerData = [
  { id: 1, name: 'Black Iris', imageUrl: 'Black.png' },
  { id: 2, name: 'Blue Iris', imageUrl: 'Blue.png' },
  { id: 3, name: 'Orange Iris', imageUrl: 'Orange.png' },
  { id: 4, name: 'Pink Iris', imageUrl: 'Pink.png' },
  { id: 5, name: 'Purple Iris', imageUrl: 'Purple.png' },
  { id: 6, name: 'Red Iris', imageUrl: 'Red.png' },
  { id: 7, name: 'White Iris', imageUrl: 'White.png' },
  { id: 8, name: 'Yellow Iris', imageUrl: 'Yellow.png' },
  
  // Add more flowers as needed
];



// Define FlowerProps interface for the props
interface FlowerProps {
  name: string;
  imageUrl: string;
}

// Flower component with TypeScript
const Flower: React.FC<FlowerProps> = ({ name, imageUrl }: FlowerProps) => (
  <div>
    <h3>{name}</h3>
    <img src={imageUrl} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />
  </div>
);

export default Flower;

// Encyclopedia component to display a list of flowers
const Encyclopedia = () => (
  <div>
    <h1>Flower Encyclopedia</h1>
    {flowerData.map(flower => (
      <Flower key={flower.id} name={flower.name} imageUrl={flower.imageUrl} />
    ))}
  </div>
);

export { Encyclopedia };


const Encyclopedia2 = () => (
	<Page>
	  <Section>
		<h2 className='text-xl font-semibold'>Encyclopedia</h2>
		<div className='mt-2'>

		</div>
	  </Section>
  
	  <div>
		<h1>Encyclopedia</h1>
		
		 
	  </div>
	</Page>
	
  );
