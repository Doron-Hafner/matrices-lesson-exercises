class Matrix {
    constructor (rows, columns) {
        this.matrix = this.generateMatrix(rows, columns)
    }
    generateMatrix (rows, columns) {
        let counter = 1
        let matrix = []
        for (let r = 0; r < rows; r++) {
            matrix.push([])
            for (let c = 0; c < columns; c++) {
                matrix[r].push(counter ++)
            }
        }
        return matrix
    }
    alter (row, col, num) {
        this.matrix[row][col] = num
    }
    get (row, col){
        return this.matrix[row][col]
    }
    // print =  function(){
    //     for (let r = 0; r < this.matrix.length; r++) {
    //             const str = this.matrix[r].toString().replace(/,/g,'   ')
    //             console.log(str); 
    //     }
    // }
    print () {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }
    printRow (rowNum){
        for (let i = 0; i < this.matrix[rowNum].length; i++){
            console.log(this.matrix[rowNum][i])
        }
    }
    printColumn (columnNum){
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][columnNum]); 
        }
    }
    findCoordinate (value) {
        const cord = {}
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if(this.matrix[i][j] === value){
                    cord.x = j
                    cord.y = i
                }
            }
        }
        return cord
    }
}

let m = new Matrix(3, 4)
// // console.log(m.matrix);
// m.print()
// //prints
// /*
// 1       2       3       4
// 5       6       7       8
// 9       10      11      12
// */

// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// // m.printRow(0) //prints 6, 2, 3, 4 (separate lines)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}

module.exports = Matrix