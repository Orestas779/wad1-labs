import { readFileSync } from "fs";

export function getAppInfo() {
  const raw = readFileSync("./models/employee.json", "utf-8");
  const data = JSON.parse(raw);
  return data.employee;
}
