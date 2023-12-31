import { Sequelize } from "sequelize";
import { BookmarkFactory } from "./bookmark";
import { UserFactory } from "./user";

const dbName = "myBookmark";
const username = "root";
const password = "Password1!";

const sequelize = new Sequelize(dbName, username, password, {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql"
});

BookmarkFactory(sequelize);
UserFactory(sequelize);

export const db = sequelize;
