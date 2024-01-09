'use client';

import React, { useState, useEffect, useRef } from 'react';
import flowersInfo from '@/lib/flowersInfo.json';
import flowerRepository from '@/repository/flowerRepository';
import Image from 'next/image';
import { init } from 'next/dist/compiled/webpack/webpack';
import { db } from '@/lib/db';
import { useLiveQuery } from 'dexie-react-hooks';
import { Flower } from '@/model/Flower';

const GridComponent: React.FC<{ 
    onActiveCellChange: (activeCell: string | null) => void,
    activeCell: string | null 
    flowers: Flower[]
}> = ({ onActiveCellChange, activeCell, flowers }) => {

    const gridSize: number = 5;
    // const [activeCell, setActiveCell] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);
    // const [flowers, setFlowers] = useState<Flower[]>([]);
    // const [waterPoint, setWaterPoint] = useState<number>(0);
    const gridRef = useRef<HTMLDivElement>(null);

    let waterPoint: number = 0;
    let color: number = 4;

    const gridContainerStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)',
        gap: '0px',
        width: '300px',
        height: '300px',
    };

    useEffect(() => {
        setIsClient(true);
        const initializeDatabase = async () => {
            const isInitialized = await flowerRepository.isDatabaseInitialized();

            if (!isInitialized) {
                await flowerRepository.initFlowers();
            } else {
                console.log("Database is already initialized.");
            }
            // setFlowers(await flowerRepository.getFlowers());
        };

        // Only initialize the database if we're on the client side
        if (typeof window !== 'undefined') {
            initializeDatabase();
        }

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [activeCell]);

    const handleCellClick = (e: React.MouseEvent<HTMLDivElement>, cellIndex: string) => {
        e.stopPropagation();
        // setActiveCell(cellIndex);
        onActiveCellChange(cellIndex);

        const cellRow = parseInt(cellIndex.split('-')[0], 10);
        const cellCol = parseInt(cellIndex.split('-')[1], 10);
        const cellNumber = cellRow * gridSize + cellCol;
    };

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement; // Cast the target to HTMLElement

        // Check if the click is on an icon
        if (target.closest('.icon')) {
            // If clicked on an icon, log the icon name and do nothing else
            console.log(target.getAttribute('name') || 'Unknown Icon');
        } else if (gridRef.current && !gridRef.current.contains(target)) {
            // If clicked outside the grid and not on an icon, set activeCell to null
            onActiveCellChange(null);
        }
    };

    const getImageSrc = (waterPoint: number, color: number) => {
        console.log("waterPoint:", waterPoint);
        console.log("color:", color);
        if (waterPoint === 0) {
            return null;
        } else if (waterPoint <= 9) {
            return flowersInfo[0].src;
        } else if (waterPoint <= 19) {
            return flowersInfo[1].src;
        } else if (waterPoint <= 29) {
            return flowersInfo[2].src;
        } else {
            return flowersInfo[color].src;
        }
    };

    const grid: JSX.Element[] = [];
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cellIndex: string = `${row}-${col}`;
            const isActive: boolean = activeCell === cellIndex;
            const isAnyActive: boolean = activeCell !== null;
            const flower: Flower | undefined = flowers.find(f => f.position === cellIndex);
            color = flower ? flower.color : 4;
            waterPoint = flower ? flower.waterPoints : 0;
            
            const imageSrc = getImageSrc(waterPoint, color);

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
        </div>
    );
};

export default GridComponent;