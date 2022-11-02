import { DataSource } from "typeorm";

const settings = require('./ormconfig.js');
const variable = new DataSource({...settings});

export {variable}