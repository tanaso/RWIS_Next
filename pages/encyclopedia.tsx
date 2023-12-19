import Page from '@/components/page'
import Section from '@/components/section'

import React from 'react';



// Flower data with name, image URL, and locked status
const flowerData = [
  { id: 1, name: 'Black Iris', imageUrl: './images/Black.png', locked: false, description: "This flower is a symbole of the elegance of your task management" },
  { id: 2, name: 'Blue Iris', imageUrl: './images/Blue.png', locked: false, description: "Let's be honnest, doing tasks is funnier with a garden" },
  { id: 3, name: 'Orange Iris', imageUrl: './images/Orange.png', locked: false, description: "Your ambition for doing task is growing ! But before climbing a mountain, let's start with a task" },
  { id: 4, name: 'Pink Iris', imageUrl: './images/Pink.png', locked: false, description: "Nothing is better than a coffe break after doing a task" },
  { id: 5, name: 'Purple Iris', imageUrl: './images/Purple.png', locked: false, description: "Add a little bit of magic and mystery by randomly picking your next task ! Garden, Garden on my phone, what will be my next task ?" },
  { id: 6, name: 'Red Iris', imageUrl: './images/Red.png', locked: false, description: "This flower represents your growing energy to complete tasks. Keep going !" },
  { id: 7, name: 'White Iris', imageUrl: './images/White.png', locked: false, description: "If perfection was real, it would be the way you manage your tasks" },
  { id: 8, name: 'Yellow Iris', imageUrl: './images/Yellow.png', locked: false, description: "The more tasks you complete, the less you have to do ! Keep that in mind" },
];

// Define FlowerProps interface for the props
interface FlowerProps {
  name: string;
  imageUrl: string;
  locked: boolean;
  description : string;
}


/*
// Flower component with TypeScript
const Flower: React.FC<FlowerProps> = ({ name, imageUrl, locked }: FlowerProps) => {
	// Choisissez l'image en fonction du statut (bloqué ou débloqué)
	const imageSource = locked ? './images/Locked.png' : imageUrl;
	
	// Choisissez le texte du nom en fonction du statut (bloqué ou débloqué)
	const flowerName = locked ? 'Locked' : name;
  
	return (
	  <div style={{ 
		display: 'flex',
		alignItems: 'center',
		border: '1px solid #ccc',
		padding: '10px',
		borderRadius: '5px',
		marginBottom: '10px',
		opacity: locked ? 0.5 : 1,
		pointerEvents: locked ? 'none' : 'auto',
	  }}>
		<img
		  src={imageSource}
		  alt={name}
		  style={{ maxWidth: '100%', height: 'auto', marginRight: '10px', maxHeight: '100px' }}
		/>
		<h3 style={{ fontSize: '1.5em' }}>{flowerName}</h3>
	  </div>
	);
  };
  
  

  // Flower component with TypeScript
const Flower: React.FC<FlowerProps> = ({ name, imageUrl, locked }: FlowerProps) => {
	// Choisissez l'image en fonction du statut (bloqué ou débloqué)
	const imageSource = locked ? './images/Locked.png' : imageUrl;
  
	// Choisissez le texte du nom en fonction du statut (bloqué ou débloqué)
	const flowerName = locked ? 'Locked' : name;
  
	// Styles pour les fleurs débloquées
	const unlockedStyles = {
	  border: '1px solid #f0e6d2', // Couleur du cadre beige très clair
	  backgroundColor: '#f9f5e7', // Couleur de fond beige très clair
	  color: 'black', // Couleur du texte en noir
	};
  
	return (
	  <div style={{
		display: 'flex',
		alignItems: 'center',
		padding: '10px',
		borderRadius: '5px',
		marginBottom: '10px',
		opacity: locked ? 0.5 : 1,
		pointerEvents: locked ? 'none' : 'auto',
		...(!locked && unlockedStyles), // Appliquer les styles pour les fleurs débloquées
	  }}>
		<img
		  src={imageSource}
		  alt={name}
		  style={{ maxWidth: '100%', height: 'auto', marginRight: '10px', maxHeight: '100px' }}
		/>
		<h3 style={{ fontSize: '1.5em', ...(locked ? {} : unlockedStyles) }}>{flowerName}</h3>
	  </div>
	);
  };

  */

// Flower component with TypeScript
const Flower: React.FC<FlowerProps> = ({ name, imageUrl, locked, description }: FlowerProps) => {
	// Choisissez l'image en fonction du statut (bloqué ou débloqué)
	const imageSource = locked ? './images/Locked.png' : imageUrl;
  
	// Choisissez le texte du nom en fonction du statut (bloqué ou débloqué)
	const flowerName = locked ? 'Locked' : name;
  
	// Styles pour les fleurs débloquées
	const unlockedStyles = {
	  border: '1px solid #f0e6d2', // Couleur du cadre beige très clair
	  backgroundColor: '#f9f5e7', // Couleur de fond beige très clair
	  color: 'black', // Couleur du texte en noir
	};
  
	return (
	  <div style={{
		display: 'flex',
		alignItems: 'center',
		padding: '10px',
		borderRadius: '5px',
		marginBottom: '10px',
		opacity: locked ? 0.5 : 1,
		pointerEvents: locked ? 'none' : 'auto',
		...(!locked && unlockedStyles), // Appliquer les styles pour les fleurs débloquées
	  }}>
		<img
		  src={imageSource}
		  alt={name}
		  style={{ maxWidth: '100%', height: 'auto', marginRight: '10px', maxHeight: '100px' }}
		/>
		<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
		  <h3 style={{ fontSize: '1.5em', ...(locked ? {} : unlockedStyles) }}>{flowerName}</h3>
		  {description && <p style={{ margin: '0' }}>{description}</p>}
		</div>
	  </div>
	);
  };
  
  
  
  

// Encyclopedia component to display a list of flowers
const Encyclopedia = () => (
  <Page>
    <Section>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2em', marginBottom: '50px' }}>Encyclopedia</h1>
        {flowerData.map(flower => (
          <Flower key={flower.id} name={flower.name} imageUrl={flower.imageUrl} locked={flower.locked} description={flower.description}  />
        ))}
      </div>
    </Section>
  </Page>
);

export default Encyclopedia;
