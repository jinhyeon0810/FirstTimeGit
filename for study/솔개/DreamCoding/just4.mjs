const colors= ['red','blue','green','pink','mint'];

console.log(colors[0]);

const lastColor = colors.pop();
console.log(`${lastColor} popped `);

const firstColor = colors.shift();
console.log(firstColor);

console.log(colors);

colors.length = 4;
console.log(colors);

for(let color of colors){
    console.log(color);
}

colors.forEach((color)=>{
    console.log(color);
});

const newColors = colors.map((color)=>{
    return `new ${color}`;
})

console.log(newColors);


export const bark = () => {
    console.log('bow-wow');
};