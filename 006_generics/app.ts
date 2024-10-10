import { IList, List } from "./list";

const list: IList<string> = new List();
list.add("fifa");
list.add("Hobby Horsing");

const otherList: IList<number> = new List();
otherList.add(12);
otherList.add(200);

const objList: IList<{ a: boolean, b: string[] }> = new List();
objList.add({ a: true, b: ["hello", "world"] });
objList.add({ a: false, b: ["jklö", "asdf"] });
