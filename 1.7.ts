{
    //! spread operator
    //! rest operator
    //! destructuring

    const fruits1:string[] = ['apple', 'cucumber', 'watermelon'];
    const fruits2: string[] = ['pineapple', 'jackfruits', 'strawberry'];

    fruits1.push(...fruits2);

    const mentors1 = {
        typescript: "Mizan",
        redux: "Mix",
        dbms: "Amini"
    }

    const mentors2 = {
        prisma : "Feroze",
        next : 'john',
        cloud: 'Biden'

        
    }

    const mentorsList = {
        ...mentors1,
        ...mentors2
    }


    // ! learn rest operator

    const greetingFriends = (...friends:string[]) => {
        friends.forEach((x:String):string  => `Hello : ${x}`)
    }

    greetingFriends('Biden', "obama", 'canad')


















}