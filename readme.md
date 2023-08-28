# Project setup

```
npm install
```

# Project development

```
npm run test
```

# Explanation

First declare the variable which is going to have the employees and these are going to have the array of strings which are their schedules.

Create a function which will receive the schedules of the 2 employees to see how many times they will coincide, to see how many times they coincide we will declare a variable which will contain the times that coincide the schedule.

Then we are going to iterate with the 2 employees, first we are going to iterate with the first schedule of the first employee with all the schedules of the second employee to see if there is any coincidence with the second employee and in that way to compare all each one of the schedules.

I create a condition to compare the 2 first acronyms of the string of each one of the schedules and if these coincide, I send the schedules to the function of `checkTime` to compare the hours and if these coincide it will increase the variable `count` which will increase each time that the schedules coincide, for at the end to return the times that the schedules coincided.
