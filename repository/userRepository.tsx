import { db } from "../lib/db";
import { User } from '../model/User';

export async function initializeUser() {
    const count = await db.users.count();
    if (count === 0) {
        // No user exists, so create one
        await db.users.add({ waterPoints: 0, numberOfSeeds: 0, cuttingPoints: 0 });
    }
}

export async function getUser() : Promise<User | undefined> {
    return db.users.toCollection().first();
}

export async function getAndUpdateUser(updatedUserData: User) {
    const user = await getUser();
    if (user) {
        updateUser(updatedUserData);
    }
}

export async function updateUser(updatedUserData: User) {
    if (updatedUserData.id !== undefined) {
        await db.users.update(updatedUserData.id, updatedUserData);
        const user = await getUser();
    }
}

export async function addPoints(seedReward: boolean) {
    const user = await getUser();
    
    if(user !== undefined){
        user.waterPoints+=1;
        user.cuttingPoints+=1;
        if(seedReward){
            user.numberOfSeeds+=1;
        }
        await updateUser(user);
    }else{
        console.log("User not defined");
        throw new Error("User not defined");
    }
}

export async function addWaterPoint() {
    incrementWaterPoint(1);
}

export async function addCuttingPoint() {
    incrementCuttingPoint(1);
}

export async function removeWaterPoint() {
    incrementWaterPoint(-1);
}

export async function removeCuttingPoint() {
    incrementCuttingPoint(-1);
}

export async function addSeedConditionally(seedReward: boolean) {
    if(seedReward){
        incrementSeedNumber(1);
    }
}

export async function removeSeed() {
    incrementSeedNumber(-1);
}

async function incrementWaterPoint(waterPoints: number) {
    const user = await getUser();
    if (user && user.id !== undefined) {
        user.waterPoints += waterPoints;
        await db.users.update(user.id, user);
    }
}

async function incrementCuttingPoint(cuttingPoints: number) {
    const user = await getUser();
    if (user && user.id !== undefined) {
        user.cuttingPoints += cuttingPoints;
        await db.users.update(user.id, user);
    }
}

async function incrementSeedNumber(seedNumberIncrement: number) {
    const user = await getUser();
    if (user && user.id !== undefined) {
        user.numberOfSeeds += seedNumberIncrement;
        await db.users.update(user.id, user);
    }
}



