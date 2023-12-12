import React, { useState, useEffect } from 'react';
import Page from '@/components/page';
import Section from '@/components/section';
import P5Canvas from '@/components/p5garden';

const Garden = () => {
    const [loadCanvas, setLoadCanvas] = useState(false);

    useEffect(() => {
        // Delay the loading of P5Canvas
        const timer = setTimeout(() => {
            setLoadCanvas(true);
        }, 100); // Adjust delay as needed

        return () => clearTimeout(timer);
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
            </Section>

            {loadCanvas && (
                <div className='flex justify-center mt-10 mb-10'>
                    <P5Canvas />
                </div>
            )}
        </Page>
    );
}

export default Garden;
