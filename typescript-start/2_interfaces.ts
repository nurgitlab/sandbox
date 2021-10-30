interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: "1234",
    size: {
        width: 20,
        height: 10,
    },
    color: "#ccc"
}

const rect2: Rect = {
    id: "2256",
    size: {
        width: 40,
        height: 43,
    },
}

rect2.color = "black"
console.log(rect2)

const rect3 = {} as Rect
const rect4 = <Rect>{}

//================
interface ReactWithArea extends Rect {
    getArea: () => number
}

const rect5: ReactWithArea = {
    id: "123",
    size: {
        width: 20,
        height: 20,
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}
console.log(rect5, rect5.getArea())

//================
interface IClock {
    time: Date

    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

//================
interface IStyles {
    [key: string]: string

    border: string
}

const css: IStyles = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "5px",
}
