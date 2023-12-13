import React, { useState, useEffect, useRef } from 'react';
import flowers from '@/lib/flowers.json';
import Image from 'next/image';

const GridComponent: React.FC = () => {
    const gridSize: number = 5;
    const [activeCell, setActiveCell] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);
    const [randomWaterValues, setRandomWaterValues] = useState<number[]>([]);
    const gridRef = useRef<HTMLDivElement>(null);

    const gridContainerStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)',
        gap: '0px',
    };

    const handleCellClick = (e: React.MouseEvent<HTMLDivElement>, cellIndex: string) => {
        e.stopPropagation();
        setActiveCell(cellIndex);

        // Log the randomWater value of the clicked cell
        const cellNumber = parseInt(cellIndex.replace('-', ''), 10);
        console.log(`randomWater for cell ${cellIndex}:`, randomWaterValues[cellNumber]);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (gridRef.current && !gridRef.current.contains(e.target as Node)) {
            setActiveCell(null);
        }
    };

    useEffect(() => {
        setIsClient(true);

        // Initialize randomWater values for each cell
        const initialRandomWaterValues = Array.from({ length: gridSize * gridSize }, () => 
            Math.floor(Math.random() * 40)
        );
        setRandomWaterValues(initialRandomWaterValues);
        
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const getImageSrc = (randomWater: number) => {
        if (randomWater === 0) {
            return null;
        } else if (randomWater <= 9) {
            return flowers[0].src;
        } else if (randomWater <= 19) {
            return flowers[1].src;
        } else if (randomWater <= 29) {
            return flowers[2].src;
        } else {
            // Select randomly from flowers[3] to flowers[11]
            const randomIndex = 2 + Math.floor(Math.random() * 9);
            return flowers[randomIndex].src;
        }
    };

    const grid: JSX.Element[] = [];
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cellIndex: string = `${row}-${col}`;
            const isActive: boolean = activeCell === cellIndex;
            const isAnyActive: boolean = activeCell !== null;
            const randomWater: number = isClient ? Math.floor(Math.random() * 40) : -1;
            const imageSrc = getImageSrc(randomWater);

            const cellStyle: React.CSSProperties = {
                backgroundColor: isActive || !isAnyActive ? 'rgb(101, 67, 33)' : 'rgba(101, 67, 33, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
            };

            const imageStyle: React.CSSProperties = {
                opacity: isActive || !isAnyActive ? 1 : 0.5,
            };

            grid.push(
                <div key={cellIndex} style={cellStyle} onClick={(e) => handleCellClick(e, cellIndex)}>
                    {imageSrc && <Image 
                        src={imageSrc} 
                        alt="Flower" 
                        width={100} 
                        height={100} 
                        style={imageStyle}
                    />}
                </div>
            );
        }
    }

    return (
        <div>
            <div ref={gridRef} style={gridContainerStyle}>{grid}</div>
            <br></br>
            <h2>water: 12</h2>
        </div>
    );
};

export default GridComponent;