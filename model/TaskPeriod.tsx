export class TaskPeriod {
    periodInDays: number;

    constructor(period: number, unit: TaskPeriodStrategy) {
        switch (unit) {
            case TaskPeriodStrategy.DAYS:
                this.periodInDays = period;
                break;
            case TaskPeriodStrategy.WEEKS:
                this.periodInDays = period * 7;
                break;
            case TaskPeriodStrategy.MONTHS:
                this.periodInDays = period * 30; // Assuming an average of 30 days per month
                break;
            case TaskPeriodStrategy.YEARS:
                this.periodInDays = period * 365; // Assuming a non-leap year
                break;
            default:
                throw new Error("Invalid period unit");
        }
    }

    
    days(): number {
        return this.periodInDays;
    }

    weeks(): number {
        return this.periodInDays / 7;
    }

    months(): number {
        return this.periodInDays / 30; // This is an approximation
    }

    years(): number {
        return this.periodInDays / 365; // This is an approximation
    }

    toString() {
        return `TaskPeriod {
            periodInDays: ${this.periodInDays},
        }`;
    }
}

export enum TaskPeriodStrategy {
    DAYS,
    WEEKS,
    MONTHS,
    YEARS
}
