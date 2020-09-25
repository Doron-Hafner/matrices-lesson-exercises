const matrix = require('./Matrix')
class EmployeeMatrix extends matrix {
    // constructor(rows, columns){
    //     super(rows, columns)
    // }
    loadData (salaryData) {
        this.matrix = []
        salaryData.forEach(object => this.matrix.push((Object.values(object))))
      }
    getEmployees (department){
        const names = []
        this.matrix.forEach(row => {
            row[2] === department ?
            names.push(row[1]) : ''
        });
        return names
      }
    getTotalSalary (department) {
    let sum = 0
    this.matrix.forEach(row => {
        row[2] === department ?
        sum += row[3] : ''
    });
    return sum
    }
    findRichest() {
        let maxSalary = {sal: 0}
        this.matrix.forEach(row => {
            if (row[3] > maxSalary.sal){
                maxSalary.sal = row[3]
                maxSalary.name = row[1]
            }
        })
        return maxSalary.name
    }
}
    




//You can paste the code from the lesson below to test your solution
let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]
// console.log(EmployeeMatrix);
let m = new EmployeeMatrix()
m.loadData(data)
// console.log(m);
m.print()
//prints

// e10021  Gillian Finance 2000
// e10725  Tibor   Design  1200
// e10041  Anisha  Finance 2300
// e10411  Jakub   Design  1600
// e11995  Mar     Design  1300
// e10732  Nisha   Design  1200

// console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
// console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

// console.log(m.getTotalSalary("Finance")) //prints 4300
// console.log(m.getTotalSalary("Design")) //prints 5300

// console.log(m.findRichest()) //prints Anisha



/* Do not remove the exports below */
// export default EmployeeMatrix