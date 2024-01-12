import { userAge } from "./user.js";

export function greetUser(user) {
    console.log(`Welcome to our website ${user}, congratulation on turning ${userAge}`);
}
