// List<T> constract
export interface IList<T> {
    add(value: T): void;
    getAtIndex(index: number): T | false;
    get length(): number;
}

export class List<T> implements IList<T> {
    private readonly data: T[] = [];

    public get length(): number {
        return this.data.length;
    }

    public add(value: T): void {
        this.data.push(value);
    }

    public getAtIndex(index: number): T | false {
        if (index < 0 || this.length <= index) {
            return false;
        }

        return this.data[index];
    }
}