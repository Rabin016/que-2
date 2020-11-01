let notifications = [
    { message: "Lorem", read: true },
    { message: "Ipsum", read: true },
    { message: "Dolor", read: true },
    { message: "Sit", read: false },
    { message: "Amet", read: true },
];

let allRead = true;

notifications.some((item) => !item.read) ? (allRead = false) : (allRead = true);

console.log(allRead);
