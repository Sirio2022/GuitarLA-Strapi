// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-cge3rdfekgjpv7uqlfjg-a.oregon-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "guitarla_qaso"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "0pZFx2lupTpGO6L5kTlKzyqSQ9O3n5jI"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      // ssl: {
      //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      // },
    },
    debug: false,
  },
});
