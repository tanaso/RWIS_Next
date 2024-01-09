import Page from '@/components/page'
import Section from '@/components/section'

import React from 'react';



// Flower data with name, image URL, and locked status
const flowerData = [
  { id: 1, name: 'Black Iris', imageUrl: './images/iris/Black.png', locked: false, description: "This flower is a symbol of the elegance of your task management" },
  { id: 2, name: 'Blue Iris', imageUrl: './images/iris/Blue.png', locked: false, description: "Let's be honest, doing tasks is funnier with a garden" },
  { id: 3, name: 'Orange Iris', imageUrl: './images/iris/Orange.png', locked: false, description: "Your ambition for doing tasks is growing ! But before climbing a mountain, let's start with a task" },
  { id: 4, name: 'Pink Iris', imageUrl: './images/iris/Pink.png', locked: false, description: "Nothing is better than a coffee break after doing a task" },
  { id: 5, name: 'Purple Iris', imageUrl: './images/iris/Purple.png', locked: false, description: "Add a little bit of magic and mystery by randomly picking your next task ! Garden, Garden on my phone, what will be my next task ?" },
  { id: 6, name: 'Red Iris', imageUrl: './images/iris/Red.png', locked: false, description: "This flower represents your growing energy to complete tasks. Keep going !" },
  { id: 7, name: 'White Iris', imageUrl: './images/iris/White.png', locked: false, description: "If perfection was real, it would be the way you manage your tasks" },
  { id: 8, name: 'Yellow Iris', imageUrl: './images/iris/Yellow.png', locked: false, description: "The more tasks you complete, the less you have to do ! Keep that in mind" },
];

// Define FlowerProps interface for the props
interface FlowerProps {
  name: string;
  imageUrl: string;
  locked: boolean;
  description : string;
}


// Flower component with TypeScript
const Flower: React.FC<FlowerProps> = ({ name, imageUrl, locked, description }: FlowerProps) => {
	// Choisissez l'image en fonction du statut (bloqué ou débloqué)
	const imageSource = locked ? './images/Locked.png' : imageUrl;
  
	// Choisissez le texte du nom en fonction du statut (bloqué ou débloqué)
	const flowerName = locked ? 'Locked' : name;
  
	// Styles pour la bordure autour de l'ensemble de la fleur
	const flowerContainerStyles = {
	  border: '4px solid #2A6B41',  // Bordure plus épaisse, couleur de la bordure verte
	  backgroundColor: 'white',     // Couleur de fond blanc à l'intérieur de la bordure
	  color: '#2A6B41',               // Couleur du texte en noir
	  borderRadius: '40px',         // Augmenter la valeur pour arrondir davantage les coins
	};
  
	// Styles pour les fleurs débloquées
	const unlockedStyles = {
	  backgroundColor: 'white',     // Couleur de fond blanc
	  color: '#2A6B41',               // Couleur du texte en noir
	};
  
	return (
	  <div style={{
		display: 'flex',
		alignItems: 'center',
		padding: '10px',
		marginBottom: '10px',
		opacity: locked ? 0.5 : 1,
		pointerEvents: locked ? 'none' : 'auto',
		...flowerContainerStyles,    // Appliquer les styles pour la bordure autour de l'ensemble de la fleur
	  }}>
		<img
		  src={imageSource}
		  alt={name}
		  style={{ maxWidth: '100%', height: 'auto', marginRight: '10px', maxHeight: '100px', borderRadius: '5px' }}
		/>
		<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', flex: 1 }}>
		  <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', ...(locked ? {} : unlockedStyles) }}>{flowerName}</h3>
		  {description && <p style={{ margin: '0', ...(locked ? {} : unlockedStyles) }}>{description}</p>}
		</div>
	  </div>
	);
};


  

// Encyclopedia component to display a list of flowers
const Encyclopedia = () => (
	<div style={{ backgroundColor: '#D0EFDB' }}>
	  <Page>
		<Section>
		  <div style={{ textAlign: 'center' }}>
			<h1 style={{ fontSize: '3em', marginBottom: '50px', color: '#2A6B41', fontWeight: 'bold' }}>Encyclopedia</h1>
			{flowerData.map(flower => (
			  <Flower key={flower.id} name={flower.name} imageUrl={flower.imageUrl} locked={flower.locked} description={flower.description} />
			))}
		  </div>
		</Section>
	  </Page>
	</div>
  );
  
  export default Encyclopedia;
  
  