import React, { useState, useEffect } from 'react';
import Page from '@/components/page';
import Section from '@/components/section';
import GridComponent from '@/components/gridComponent';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { PiPlantBold } from "react-icons/pi";
<<<<<<< HEAD
import { Flower } from '../model/Flower';
import FlowerRepository from '@/repository/flowerRepository';
import { getUser, removeWaterPointFromUser } from '@/repository/userRepository';
=======
import { db } from '@/lib/db';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Flower } from '../model/Flower';
import FlowerRepository from '@/repository/flowerRepository';
>>>>>>> ac7cbffce2f85085aed9dd72fb63ded263710982

const Garden = () => {
    const [activeCell, setActiveCell] = useState<string | null>(null);
    const [flowers, setFlowers] = useState<Flower[]>([]);
<<<<<<< HEAD
    const [waterPoints, setWaterPoints] = useState<number>(0);
    const [cuttingPoints, setCuttingPoints] = useState<number>(0);
    const [numberOfSeeds, setNumberOfSeeds] = useState<number>(0);
=======
    let waterPoint: number = 0;
>>>>>>> ac7cbffce2f85085aed9dd72fb63ded263710982

    const handleActiveCellChange = (newActiveCell: string | null) => {
        setActiveCell(newActiveCell);
    };

    const handleWaterDropClick = async () => {
        if (activeCell) {
<<<<<<< HEAD
          if(waterPoints > 0){
            console.log("WP: " + waterPoints);
            const newWaterPoints = await FlowerRepository.addWaterPoint(activeCell);
            await removeWaterPointFromUser();
            setWaterPoints(waterPoints - 1);
=======
            const newWaterPoints = await FlowerRepository.addWaterPoint(activeCell);
>>>>>>> ac7cbffce2f85085aed9dd72fb63ded263710982
            console.log(`Water points for cell ${activeCell}: ${newWaterPoints}`);
            // Optionally refresh the flowers data
            const updatedFlowers = await FlowerRepository.getFlowers();
            setFlowers(updatedFlowers);
<<<<<<< HEAD
          }else{
            alert("No waterpoints, do some tasks!");
          }      
=======
>>>>>>> ac7cbffce2f85085aed9dd72fb63ded263710982
        } else {
            console.log("No cell is active.");
        }
    };

    useEffect(() => {
<<<<<<< HEAD
        const fetchFlowersAndUser = async () => {
            const fetchedFlowers = await FlowerRepository.getFlowers();
            setFlowers(fetchedFlowers);

            const user = await getUser();
            if(user !== undefined){
              setWaterPoints(user?.waterPoints);
              setCuttingPoints(user.cuttingPoints);
              setNumberOfSeeds(user.numberOfSeeds);
            }
        };

        fetchFlowersAndUser();

    }, []);



return (
    <div style={{ backgroundColor: '#D0EFDB', height:"100vh" }}>
      <Page>
        <Section>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3em', marginBottom: '5px', color: '#2A6B41', fontWeight: 'bold' }}>Garden</h1>
            <p style={{ color: '#2A6B41', fontWeight: 'bold', fontSize: '1.25em', marginBottom: '10px' }}>
              Like a real garden, you can plant and grow iris flowers.
            </p>
          </div>
  
          <div style={{ position: 'absolute', top: '100px', right: '15px', zIndex: 1, display: 'flex', flexDirection: 'row' }}>
            <div onClick={handleWaterDropClick} className="icon" style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '20px' }}>
              <WaterDropIcon style={{ color: '#2A6B41', fontSize: '30px' }} />
              <h2 style={{ color: '#2A6B41', marginLeft: '5px', fontSize: '20px' }}>{waterPoints}</h2>
=======
        const fetchFlowers = async () => {
            const fetchedFlowers = await FlowerRepository.getFlowers();
            setFlowers(fetchedFlowers);
        };

        fetchFlowers();

    }, []);

    console.log("activeCell:", activeCell);
    // set waterPoints of activeCell flower
    if (activeCell) {
        const flower = flowers.find(f => f.position === activeCell);
        if (flower) {
            FlowerRepository.addWaterPoint(activeCell);
            waterPoint = flower.waterPoints;
            console.log("waterPoint:", waterPoint);
        }
    }

    return (
        <Page>
            <Section>
				<h2 className='text-xl font-semibold'>Garden</h2>

				<div className='mt-2'>
					<p className='text-zinc-600 dark:text-zinc-400'>
						Like a real garden, you can plant and grow iris flowers.
					</p>
				</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <div onClick={handleWaterDropClick} className="icon" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                        <WaterDropIcon />
                        <h2> 20</h2>
                    </div>
                    <div className="icon" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                        <ContentCutIcon/>
                        <h2> 5</h2>
                    </div>
                    <div className="icon" style={{ display: 'flex', alignItems: 'center' }}>
                        <PiPlantBold size={25}/>
                        <h2> 5</h2>
                    </div>
                </div>
            </Section>

            <div className='flex flex-col items-center mt-10 mb-10'>
                <GridComponent 
                    onActiveCellChange={handleActiveCellChange} 
                    activeCell={activeCell} 
                    flowers={flowers}
                />
                <br/>
                <h2>{activeCell ? 'Water: ' + waterPoint : ''}</h2>
>>>>>>> ac7cbffce2f85085aed9dd72fb63ded263710982
            </div>
            <div className="icon" style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '20px' }}>
              <ContentCutIcon style={{ color: '#2A6B41', fontSize: '30px' }} />
              <h2 style={{ color: '#2A6B41', marginLeft: '5px', fontSize: '20px' }}>{cuttingPoints}</h2>
            </div>
            <div className="icon" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <PiPlantBold size={30} style={{ color: '#2A6B41' }} />
              <h2 style={{ color: '#2A6B41', marginLeft: '5px', fontSize: '20px' }}>{numberOfSeeds}</h2>
            </div>
          </div>
  
         
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', position: 'absolute', bottom: 50, left: '50%', transform: 'translateX(-50%)' }}>
        <img src="./images/grass.png" style={{ width: '240px', height: '119px', marginRight: '0px' }} />
        <img src="./images/grass.png" style={{ width: '240px', height: '119px', marginLeft: '0px' }} />
        </div>

<<<<<<< HEAD
  
        </Section>
  
        <div className='flex flex-col items-center mt-10 mb-10'>
          <GridComponent
            onActiveCellChange={handleActiveCellChange}
            activeCell={activeCell}
            flowers={flowers}
          />
          <br />
          <h2>{activeCell ? 'Water: ' + waterPoints : ''}</h2>
        </div>
      </Page>
    </div>
  );
  }
  
  export default Garden;
  
=======
export default Garden;
>>>>>>> ac7cbffce2f85085aed9dd72fb63ded263710982
