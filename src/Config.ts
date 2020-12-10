import config from "./config.json";
import { Config } from "./types";

const getConfig = (): Config => config;

export default getConfig;
