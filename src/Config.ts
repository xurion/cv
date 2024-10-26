import config from "./config.json";
import { Config } from "./types";

export const getConfig = (): Config => config;
