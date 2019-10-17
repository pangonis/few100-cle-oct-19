export const add = (a: number, b: number) => a + b;

export function isEven(a: number) {
    return a % 2 === 0;
}

export const doubleIt = (n: number) => n * 2; // shorthand way of writing functions - parends are parameters

export const accumulate = (state: number, next: number) => state + next;