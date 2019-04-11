export class Question{
    id:number;
    text:string;
    options:Option[];
}
export class Option {
    id:number;
    text:string;
    isAnswer:boolean;
}