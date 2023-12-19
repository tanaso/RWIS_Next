// repository/flowerRepository.ts
import { db } from "../lib/db";
import { Flower } from '../model/Flower';

export default class FlowerRepository {    
    static async isDatabaseInitialized(): Promise<boolean> {
        const count: number = await db.flowers.count();
        return count > 0;
    }

    static async initFlowers(): Promise<void> {
        const gridSize: number = 5; // 5x5 grid

        const flowers: Flower[] = [];
        for (let row: number = 0; row < gridSize; row++) {
            for (let col: number = 0; col < gridSize; col++) {
                const randomColor: number = Math.floor(Math.random() * 8) + 3;

                // Creating a Flower object with default or empty values
                const flower: Flower = {
                    position: `${row}-${col}`,
                    color: randomColor, // Default or empty value
                    waterPoints: 0  // Default or empty value
                };
                flowers.push(flower);
            }
        }

        // Bulk add the new flowers to the table
        await db.flowers.bulkAdd(flowers);
    }

    static async getFlowers(): Promise<Flower[]> {
        return db.flowers.toArray();
    }

    static async addWaterPoint(position: string): Promise<number> {
        const flower = await db.flowers.get({ position });
        if (flower) {
            flower.waterPoints += 1;
            await db.flowers.put(flower);
            return flower.waterPoints;
        } else {
            console.error(`Flower at position ${position} not found.`);
            return 0;
        }
    }
}
