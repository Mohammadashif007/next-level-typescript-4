{
    //! type alias

    type Student = {
        name: string;
        age: number;
        contactNo?: string;
        address: string;
    };

    const student1: Student = {
        name: "Ashif",
        age: 59,
        contactNo: "019999999",
        address: "dhk",
    };

    const student2: Student = {
        name: "Mohammad",
        age: 40,
        address: "ctg",
    };

    type UserName = string;
    type IsAdmin = boolean;
    type IdNo = number;

    const userName: UserName = "Ashif";
    const isAdmin: IsAdmin = false;
    const idNo: IdNo = 66;

    type Add = (x: number, y: number) => number;

    const addNum: Add = (num1, num2) => num1 + num2;
}
