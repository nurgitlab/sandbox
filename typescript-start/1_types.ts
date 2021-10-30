const isFetching: boolean = true
const isLoading: boolean = false
console.log(isLoading && isFetching)

const counter: number = 228
// counter = "" - Error because types isn't simple
const float: number = 4.2
const num: number = 3e10

const message: string = "Hello, TS"

const numberArray: number[] = [1, 1, 2, 3, 5, 13]
const numberArray2: Array<number> = [1, 2, 3, 4, 5]

const words: string[] = ["Hello", "Ts"]

//Tuple
const concat: [string, number] = ["Nurba", 228]

//Any
let something: any = 228
something = "something"
something = []

function sayMyName(name: string): void {
    console.log(name)
}

sayMyName("Nurbek")

// //Never
// function showError(message: string): never {
//     throw new Error(message)
// }

//Type
type Login = string
const login: Login = "admin"
const login2: Login = "2"

type ID = string | number
const id1: ID = 1234
const id2: ID = "1234"

type someType = string | null | undefined