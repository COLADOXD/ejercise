const employees = {
  RENE: [
    "MO10:00-12:00",
    "TU10:00-12:00",
    "TH01:00-03:00",
    "SA14:00-18:00",
    "SU20:00-21:00",
  ],
  ASTRID: ["MO10:00-12:00", "MO10:00-12:00", "TH12:00-14:00"],
  ANDRES: ["MO10:00-12:00", "TH12:00-14:00", "SU20:00-21:00"],
};

const checkTime = (employee: string, partner: string): boolean => {
  const timeParts: string[] = employee.split("-");
  const partnerTimeParts: string[] = partner.split("-");
  const startHour: number = parseInt(timeParts[0].split(":")[0], 10);
  const endHour: number = parseInt(timeParts[1].split(":")[0], 10);
  const startPartnerHour: number = parseInt(
    partnerTimeParts[0].split(":")[0],
    10
  );
  const endPartnerHour: number = parseInt(
    partnerTimeParts[1].split(":")[0],
    10
  );
  if (startHour <= startPartnerHour && startPartnerHour <= endHour) {
    return true;
  } else if (startPartnerHour <= endHour && endPartnerHour >= endHour) {
    return true;
  } else {
    return false;
  }
};

const countAgreedSchedules = (
  employee: string[],
  partner: string[]
): number => {
  let count: number = 0;
  for (let i: number = 0; i < employee.length; i++) {
    for (let j: number = 0; j < partner.length; j++) {
      if (employee[i].substring(0, 2) === partner[j].substring(0, 2)) {
        if (checkTime(employee[i].substring(2), partner[j].substring(2))) {
          count++;
        }
      }
    }
  }
  return count;
};

console.log(
  `
  ASTRID-RENE: ${countAgreedSchedules(employees.ASTRID, employees.RENE)}
  ASTRID-ANDRES: ${countAgreedSchedules(employees.ASTRID, employees.ANDRES)}
  RENE-ANDRES:${countAgreedSchedules(employees.RENE, employees.ANDRES)}
  `
);
