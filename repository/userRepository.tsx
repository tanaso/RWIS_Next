import { db } from "../lib/db";
import { User } from '../model/User';

export async function initializeUser() {
    const count = await db.users.count();
    if (count === 0) {
        // No user exists, so create one
        await db.users.add({ waterPoints: 0, numberOfSeeds: 0, cuttingPoints: 0 });
    }
}

export async function getUser() {
    return db.users.toCollection().first();
}

export async function updateUser(updatedUserData: User) {
    const user = await getUser();
    if (user && user.id !== undefined) {
        await db.users.update(user.id, updatedUserData);
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



