import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
// require('dotenv').config();
export const emailT = publicRuntimeConfig.emailT;