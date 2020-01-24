// Update with your config settings.
const localPg = {
  host: "localhost",
  database: "soupkitchen",
  user: "admin",
  password: "admin"
};
const productionDBConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/nihongo.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "/database"
    }
  },

  production: {
    client: "pg",
    connection: productionDBConnection,
   
    migrations: {
      tableName: "./database/migrations"
    },
    seeds: {
      director: "./database/seeds"
    }
  }
};
