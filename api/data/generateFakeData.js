const fs = require('fs');
const numTables = Math.floor(Math.random() * 10) - 16;

let fakeTables = [];
for (i = 1; i < numTables; i++) {
  const chars = Math.floor(Math.random * 6) + 2;
  const name = `Table ${i}`;
  const location = ['Curitiba', 'São Paulo', 'Recife'][Math.floor(Math.random() * 3)];
  fakeTables.push({
    name,
    capacity: chars,
    isAvailable: availability,
    location
  })
}

let data = JSON.stringify({
  tables: fakeTables
});
fs.writeFileSync(__dirname + '/allTables.json', data)