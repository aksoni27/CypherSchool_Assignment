//implement a stack dataStructure using class keyword

class Stack{
    constructor(){
        this.arr=[];
    }
    push(elem){
        this.arr.push(elem);
    }
    pop(){
        if(this.arr.length!=0)
            return this.arr.pop();
    }
    isEmpty(){
        return this.arr.length==0;
    }
    top(){
        return this.arr[this.arr.length-1];
    }

    print(){
        let str="";
        for(let i=0;i<this.arr.length;i++)
            str+=this.arr[i];
        return str;   
    }
}

let s= new Stack();
console.log(s.isEmpty());
s.push(10);
s.push(20);
s.push(30);
s.push(40);
console.log(s.print()); 
