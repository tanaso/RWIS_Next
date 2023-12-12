import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

interface P5CanvasProps {
    // Additional props if needed
}

const P5Canvas: React.FC<P5CanvasProps> = () => {
    const sketchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let myP5: p5;
        let canvasWidth: number;
        let canvasHeight: number;
        let blackFlower: p5.Image;
        let blueFlower: p5.Image;
        let orangeFlower: p5.Image;
        let pinkFlower: p5.Image;
        let purpleFlower: p5.Image;
        let redFlower: p5.Image;
        let whiteFlower: p5.Image;
        let yellowFlower: p5.Image;
        let phase0: p5.Image;
        let phase1: p5.Image;
        let phase2: p5.Image;
        const flowers: p5.Image[] = [];

        if (sketchRef.current) {
            const sketch = (p: p5) => {
                p.preload = () => {
                    // Preload images here
                    blackFlower = p.loadImage('/images/iris/black.png');
                    flowers.push(blackFlower);
                    blueFlower = p.loadImage('/images/iris/blue.png');
                    flowers.push(blueFlower);
                    orangeFlower = p.loadImage('/images/iris/orange.png');
                    flowers.push(orangeFlower);
                    pinkFlower = p.loadImage('/images/iris/pink.png');
                    flowers.push(pinkFlower);
                    purpleFlower = p.loadImage('/images/iris/purple.png');
                    flowers.push(purpleFlower);
                    redFlower = p.loadImage('/images/iris/red.png');
                    flowers.push(redFlower);
                    whiteFlower = p.loadImage('/images/iris/white.png');
                    flowers.push(whiteFlower);
                    yellowFlower = p.loadImage('/images/iris/yellow.png');
                    flowers.push(yellowFlower);
                    phase0 = p.loadImage('/images/iris/phase0.png');
                    flowers.push(phase0);
                    phase1 = p.loadImage('/images/iris/phase1.png');
                    flowers.push(phase1);
                    phase2 = p.loadImage('/images/iris/phase2.png');
                    flowers.push(phase2);
                }
                p.setup = () => {
                    // Set canvas to 90% of window width and height
                    canvasWidth = window.innerWidth * 0.9;
                    canvasHeight = window.innerWidth * 1.2;
                    p.createCanvas(canvasWidth, canvasHeight);

                    p.background(101, 67, 33);

                    for(let i = 0; i < 5; i++) {
                        for(let j = 0; j < 5; j++) {
                            // random number between 0 and the length of the flowers array
                            let randomIndex = Math.floor(Math.random() * flowers.length);
                            p.image(flowers[randomIndex], - canvasWidth * 0.05 + j * canvasWidth * 0.2, - canvasHeight * 0.01 + i * canvasHeight * 0.2, canvasWidth * 0.3, canvasWidth * 0.3);
                        }
                    }
                };

                p.draw = () => {

                };
            };

            myP5 = new p5(sketch, sketchRef.current);
        }

        return () => {
            // Clean up the sketch on component unmount
            myP5?.remove();
        };
    }, []);

    return <div ref={sketchRef}></div>;
};

export default P5Canvas;
