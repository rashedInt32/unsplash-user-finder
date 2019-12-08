import to from "await-to-js";

import { http } from "../http";
import { config } from '../config';

const params = `?client_id=${config.ACCESS_KEY}`;

/**
 *
 */

const searchUser = async name =>
  await to(http.get(`/search/users?query=${name}/${params}`));

export { searchUser };
