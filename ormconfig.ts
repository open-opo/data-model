/*
  These are the settings for development.
  Create a ormconfig.env to override this

  https://typeorm.io/#/using-ormconfig/which-configuration-file-is-used-by-typeorm
*/

export default {
  type: "postgres",
  url: "postgres://postgres:<password>@localhost/<DB>",

  // All entities should be added here
  entities: ["src/entity/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
  },
  //synchronize: true,
};
