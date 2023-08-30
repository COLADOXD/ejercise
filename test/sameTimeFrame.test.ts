import { countAgreedSchedules } from "../main";

test("same time", () => {
  const result = countAgreedSchedules(
    ["MO10:00-12:00", "MO10:00-12:00", "TH12:00-14:00"],
    [
      "MO10:00-12:00",
      "TU10:00-12:00",
      "TH01:00-03:00",
      "SA14:00-18:00",
      "SU20:00-21:00",
    ]
  );
  expect(result).toBe(2);
});

test("same time", () => {
  const result = countAgreedSchedules(
    ["MO10:00-12:00", "MO10:00-12:00", "TH12:00-14:00"],
    ["MO10:00-12:00", "TH12:00-14:00", "SU20:00-21:00"]
  );
  expect(result).toBe(3);
});
