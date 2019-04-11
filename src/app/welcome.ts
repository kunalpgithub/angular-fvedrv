export class Welcome{
    id:number;
    message:string;
}

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