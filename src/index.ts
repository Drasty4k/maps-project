import { User } from "./User";
// import { Company } from "./company";
import { Map } from "./Map";

const user = new User();

const map = new Map("map");

map.addUserMarker(user);
