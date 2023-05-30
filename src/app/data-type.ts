export interface Register{
    name:string,
    password:string,
    email:string
}
export interface login{
    email:string,
    password:string
}
export interface quiz{
    questions:string,
    category:string,
    optionc:string,
    option1:string,
    option2:string,
    id:number,
}