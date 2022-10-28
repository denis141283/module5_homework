let users = new Map();
users.set("apple 1", "big");
users.set("apple 2", "small");
users.set("apple 3", "big");
users.set("apple 4", "small");
users.set("apple 5", "small");

for (let user of users.keys()){
    console.log(user + " is " + users.get(user));
}