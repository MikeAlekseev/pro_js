// Задание 1
// Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator.

// Каждый альбом имеет следующую структуру:

// {
    // title: "Название альбома",
    // artist: "Исполнитель",
    // year: "Год выпуска"
// }
// Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.

// Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате:

// Название альбома - Исполнитель (Год выпуска)

const musicCollect = {

    musicAlb: [
        { title: 'Perfetto', artist: 'Eros Ramazzotti',  year: '2015'},
        { title: 'Tina!', artist: 'Tina Terner',  year: '2008'},
        { title: 'Per Sempre', artist: 'Adriano Celentano',  year: '2002'}
    ],
    [Symbol.iterator]() {
        this.index = 0;
        return this;
    },
    next() {
        return this.index < this.musicAlb.length
            ? {done: false, value: this.musicAlb[this.index++]}
            : {done: true};
    }
}
for (const album of musicCollect) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

let cooks = new Map();
cooks.set("Виктор", "Пицца")
    .set("Ольга", "Суши")
    .set("Дмитрий", "Десерты");

console.log(`Виктор - специализация: ${cooks.get("Виктор")}`);
console.log(`Ольга - специализация: ${cooks.get("Ольга")}`);
console.log(`Дмитрий - специализация: ${cooks.get("Дмитрий")}`);
console.log();

// Блюда и их повара:

let dishes = new Map();
dishes.set("Пицца 'Маргарита'", "Виктор")
    .set("Пицца 'Пепперони'", "Виктор")
    .set("Суши 'Филадельфия'", "Ольга")
    .set("Суши 'Калифорния'", "Ольга")
    .set("Тирамису", "Дмитрий")
    .set("Чизкейк", "Дмитрий");

console.log(`Пиццу 'Маргарита' приготовил повар: ${dishes.get("Пицца 'Маргарита'")}`);
console.log(`Суши 'Калифорния' приготовил повар: ${dishes.get("Суши 'Калифорния'")}`);
console.log(`Чизкейк приготовил повар: ${dishes.get("Чизкейк")}`);
console.log();

// Заказы:

let orders = new Map(); //заказы всех клиентов

//заказ первого клиента
let client1 = { name: 'Алексей'};
let clientOrder1 = new Set();
clientOrder1.add("Пицца 'Пепперони'")
            .add("Тирамису");

//заказ второго клиента
let client2 = { name: 'Мария'};
let clientOrder2 = new Set();
clientOrder2.add("Суши 'Калифорния'")
            .add("Пицца 'Маргарита'");

//заказ третьего клиента
let client3 = { name: 'Ирина'};
let clientOrder3 = new Set();
clientOrder3.add("Чизкейк");

orders.set(client1, clientOrder1) // добавляем заказы клиентов в список
    .set(client2, clientOrder2)
    .set(client3, clientOrder3)

console.log(`Клиент ${client1.name} заказал(а): ${[...orders.get(client1)]}`);
console.log(`Клиент ${client2.name} заказал(а): ${[...orders.get(client2)]}`);
console.log(`Клиент ${client3.name} заказал(а): ${[...orders.get(client3)]}`);