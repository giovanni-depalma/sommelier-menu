import wines from './data/wines.js';

console.log(`Total wines: ${wines.length}`);

if (wines.length >= 100) {
    console.log("PASS: Wine count is >= 100");
} else {
    console.error(`FAIL: Wine count is ${wines.length}, need 100+`);
}

const ids = new Set();
const duplicates = [];
wines.forEach(w => {
    if (ids.has(w.id)) {
        duplicates.push(w.id);
    }
    ids.add(w.id);
});

if (duplicates.length > 0) {
    console.error("FAIL: Duplicate IDs found:", duplicates);
} else {
    console.log("PASS: No duplicate IDs");
}

// Check categories
const categories = new Set(wines.map(w => w.type));
console.log("Categories found:", Array.from(categories));
