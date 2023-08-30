import { countAgreedSchedules, employees } from "../main";

const employee = Object.keys(employees);
const schedulesEmployees = Object.values(employees);

for (let i: number = 0; i < employee.length; i++) {
  const currentEmploy: string = employee[i];
  for (let j: number = i + 1; j < employee.length; j++) {
    const nextEmploy: string = employee[j];
    console.log(
      `${currentEmploy}-${nextEmploy} : ${countAgreedSchedules(
        schedulesEmployees[i],
        schedulesEmployees[j]
      )}`
    );
  }
}
