
export class Picture {
    constructor(
        public description:string,
        public link:string,
        public like:number[]=[],
        public   owner:number,
        public id?:number){}
}
