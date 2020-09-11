let allRead = true;

let notifications = [
    { message: "Lorem", read: true },
    { message: "Ipsum", read: true },
    { message: "Dolor", read: true },
    { message: "Sit", read: false },
    { message: "Amet", read: true },
];

notifications.some((item) => !item.read) ? (allRead = false) : (allRead = true);

console.log(allRead);
