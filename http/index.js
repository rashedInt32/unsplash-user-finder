import axios from "axios";

import { config } from "../config";

const http = axios.create({
  baseURL: config.BASE_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" }
});

export { http };
