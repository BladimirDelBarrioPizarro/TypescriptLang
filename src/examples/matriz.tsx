import React from 'react'

const failingResponse = ["Not Found", 404];
const passingResponse: [string, number] = ["{}", 200];

if (passingResponse[1] === 200) {
    const localInfo = JSON.parse(passingResponse[0]);
    console.log(localInfo);
  }

type StaffAccount = [number, string, string, string?]; 

const staff: StaffAccount[] = [
    [0, "Adankwo", "adankwo.e@"],
    [1, "Kanokwan", "kanokwan.s@"],
    [2, "Aneurin", "aneurin.s@", "Supervisor"]
  ];

type PayStubs = [StaffAccount, ...number[]];

const payStubs: PayStubs[] = [[staff[0], 250], [staff[1], 250, 260], [staff[0], 300, 300, 300]];

console.log(payStubs[2][0][1])
const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
console.log(monthOnePayments)

//declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;
//calculatePayForEmployee(staff[0][0], payStubs[0][1]);
console.log(staff[0][0])

const calculatePayForEmployee = (id: number, ...args: [...number[]]) => {
    return id+args[0]
}
console.log(calculatePayForEmployee(staff[0][0], payStubs[0][1]));
const Matriz = () => {
    return(
        <p>Matriz</p>
    )
}

export default Matriz;