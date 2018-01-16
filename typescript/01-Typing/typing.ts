
let myString: string;

myString = 'This is a string';

// throws an error if we try to assign other type
// myString = 4;

let anotherString = 'This is a string without :string';

// This will still resolve in a compilation error
// anotherString = 4;

let yetAnotherString;

yetAnotherString = 'This is a string';

// TypeScript does not know the type, therefore we don't get an error ... but no we're also ignoring TypeScripts strength: Typing
yetAnotherString = 5;

// Other basic types

let aString: string;
let aNumber: number;
let aBoolean: boolean;
let anArray: Array<string>; // This is a generic type => May only hold 'strings' in this case
let anything: any; // Any can be used if we don't know the actual type => Use it rarely!
// We also got void (=> nothing) and enums (a set of numeric values)

