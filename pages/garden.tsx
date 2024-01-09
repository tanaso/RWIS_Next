import React, { useState, useEffect } from 'react';
import Page from '@/components/page';
import Section from '@/components/section';
import GridComponent from '@/components/gridComponent';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { PiPlantBold } from "react-icons/pi";
import { db } from '@/lib/db';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Flower } from '../model/Flower';
import FlowerRepository from '@/repository/flowerRepository';

const Garden = () => {
    const [activeCell, setActiveCell] = useState<string | null>(null);
    const [flowers, setFlowers] = useState<Flower[]>([]);
    let waterPoint: number = 0;

    const handleActiveCellChange = (newActiveCell: string | null) => {
        setActiveCell(newActiveCell);
    };

    const handleWaterDropClick = async () => {
        if (activeCell) {
            const newWaterPoints = await FlowerRepository.addWaterPoint(activeCell);
            console.log(`Water points for cell ${activeCell}: ${newWaterPoints}`);
            // Optionally refresh the flowers data
            const updatedFlowers = await FlowerRepository.getFlowers();
            setFlowers(updatedFlowers);
        } else {
            console.log("No cell is active.");
        }
    };

    useEffect(() => {
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
            </div>
        </Page>
    );
}

export default Garden;