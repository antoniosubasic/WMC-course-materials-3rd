enum StressLevel {
    VeryStressed = 0,
    SuperStressed = 10, // leave room for more stress levels
    TADEOT = 200
}


type WeekLevel = [string, StressLevel];

const lastWeek: WeekLevel = ["erste Wochn", StressLevel.SuperStressed];
const thisWeek: WeekLevel = ["zweite Wochn", StressLevel.VeryStressed];

const [weekInfo, stressLevel] = lastWeek;
console.log(weekInfo, stressLevel);


type Fancy = "Hallo Lukas" | 23 | StressLevel;
let mark: Fancy = StressLevel.TADEOT;
mark = "Hallo Lukas";
console.log(mark);


type Grünzi = (x: number, y: number) => number;
const myAdd: Grünzi = (x, y): number => x + y;
console.log(myAdd(1, 2));