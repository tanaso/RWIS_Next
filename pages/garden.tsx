import React, { useState, useEffect } from 'react';
import Page from '@/components/page';
import Section from '@/components/section';
import GridComponent from '@/components/gridComponent';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { PiPlantBold } from "react-icons/pi";

const Garden = () => {
    // const [loadCanvas, setLoadCanvas] = useState(false);

    useEffect(() => {

    }, []);

    return (
        <Page>
            <Section>
				<h2 className='text-xl font-semibold'>Garden</h2>

				<div className='mt-2'>
					<p className='text-zinc-600 dark:text-zinc-400'>
						Like a real garden, you can plant and grow iris flowers.
					</p>
				</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <WaterDropIcon/>
                    <h2 style={{ marginRight: '20px' }}> 20</h2>
                    <ContentCutIcon/>
                    <h2 style={{ marginRight: '20px' }}> 5</h2>
                    <PiPlantBold size={25}/>
                    <h2> 5</h2>
                </div>

            </Section>

            <div className='flex justify-center mt-10 mb-10'>
                {/* <P5Canvas /> */}
                <GridComponent />
            </div>
        </Page>
    );
}

export default Garden;
