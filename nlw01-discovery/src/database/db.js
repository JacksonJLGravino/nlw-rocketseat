const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/database.db");

db.serialize(() => {
  /*
  
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
  `);
  

  const query = `
  INSERT INTO places (
    image, name, address, address2, state, city, items
  ) VALUES (?,?,?,?,?,?,?);
  `;
  const values = [
    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Papersider",
    "Guilherme Gemballa, Jardim América",
    "Número 260",
    "Santa Catariana",
    "Rio do Sul",
    "Resíduos Eletrônicos, Lâmpadas",
  ];
  function afterInsertData(err) {
    if (err) {
      return console.log(err);
    }

    console.log("Cadastrado com sucesso");
    console.log(this);
  }
  db.run(query, values, afterInsertData);


  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err);
    }

    console.log("Aqui estão os seus registros");
    console.log(rows);
  });



  db.run(`DELETE FROM places WHERE id = ?`, [3], function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("registro deletado com sucesso");
  });
  */
});

module.exports = db;
