import { InternetProxy } from "./InternetProxy";

const employeeProxy = new InternetProxy("employee");
const adminProxy = new InternetProxy("admin");

console.log("Employee trying to access:");
employeeProxy.connectTo("learn.com");
employeeProxy.connectTo("games.com");

console.log("\nAdmin trying to access:");
adminProxy.connectTo("social.com");
