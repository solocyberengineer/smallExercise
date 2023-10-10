let hours = parseInt( prompt('hours worked: ') )
let rate = parseInt( prompt('rate worked: ') ) // earnings per hour

console.log(`earnings(rate per hour): ${hours * rate}`)
console.log(`Your Salary is: R50,000`)


let earnings = document.createElement('h2')
let Salary = document.createElement('h2')

earnings.innerHTML = `earnings(rate per hour): ${hours * rate}`
Salary.innerHTML = 'Salary: R50,000'

document.body.appendChild(earnings)
// document.body.appendChild(document.createElement)
document.body.appendChild(Salary)
