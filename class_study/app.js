let player1 = new Object();
player1.name = '장병준'
player1.job = '학생'
player1.race = '사람으로 추정'
player1.stats = {
    STR: 8,
    DEX: 5,
    CON: 10,
    INT: 10,
    WIS: 6,
    CHA: 2
}

let player2 = {
    name: "하상현",
    job: "무직",
    race: "공기반",
    stats: {
        STR: 8,
        DEX: 8,
        CON: 5,
        INT: 2,
        WIS: 10,
        CHA: 2
    }   
}

let player3 = new playerFunc(
    "하상현",
    "무직",
    "공기반",
    {
        STR: 8,
        DEX: 8,
        CON: 5,
        INT: 2,
        WIS: 10,
        CHA: 2
    }  
)
    
     

function playerFunc(name,job,race,stats){
    this.name = name;
    this.job = job;
    this.race = race;
    this.stats = stats;
    this.getName = function(){return this.name;}
    this.getJob = function(){return this.job;}
    this.getRace = function(){return this.race;}
    this.setName = function(name){this.name = name;}
    this.setJob = function(job){this.job = job;}
    this.setRace = function(race){this.race = race;}
}
console.log(player3.getName())

let now = new Date();
console.log(now)

let  stu1 = new Map();

stu1.set('id',0)
stu1.set('이름','제임스')
stu1.set('전공','컴공')

let stu2 = new Map([
    ['id',0],
    ['이름','제임스'],
    ['전공','컴공']
])


console.log(stu1)
console.log(stu1.get('id'))
console.log(stu1.get('이름'))
console.log(stu1.get('전공'))

stu1.delete('전공')
console.log(stu1)
stu1.clear()
console.log(stu1)

player1.age = 100
player2.age = 100
player3.age = 100

console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

delete player1.age;
delete player2.age;
delete player3.age;

console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

player1.sayHello = function(){
    console.log("hello");
}
player2.sayHello = function(){
    console.log("hello");
}
player3.sayHello = function(){
    console.log("hello");
}
player1.sayHello();
player2.sayHello();
player3.sayHello();

let person = {
    name: 'John Doe',
    age: 18,
    city: 'chungju_tlqkf'
}

for (let key in person){
    console.log(key+":"+person[key])
}

function show(obj,key){
    console.log(obj[key])
}
show(player2,"job")

let cars = [
    {brand:"패라리",model:"911"},
    {brand:"포드",model:"머스탱"},
    {brand:"닷지",model:"차저"}
]

for(let i=0; i>cars.length; i++){
    console.log(cars[i].model);
}