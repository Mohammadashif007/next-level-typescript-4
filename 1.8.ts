//! destructuring

{
    const user = {
        id: 900,
        name: {
            firstName: "Mohammad",
            lastName: "Asif",
        },

        contact: "00000",
        country: "up",
    };

    const {
        country,
        name: { firstName },
    } = user;



    const myFriend = ['biden', 'tate', 'obama', ];

    const [, , bestFriend, ...rest] = myFriend;
}
