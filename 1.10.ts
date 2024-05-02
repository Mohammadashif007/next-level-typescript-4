{
//! union type


// type FrontendDeveloper = "FakibuzzDeveloper" | "JuniorDeveloper";
// type FullStackDeveloper = "Frontend" | "ExpertDeveloper";

// type Developer = FrontendDeveloper | FullStackDeveloper;


// const developer : FrontendDeveloper = "JuniorDeveloper";

// const newDeveloper : Developer = "ExpertDeveloper";


// type User = {
//     name: string,
//     gender: "male"|"female",
//     email?: string,
//     bloodGroup: "O+" | "A+" | "AB+" | "O-" | "A-" | "AB-",
// }

// const user1: User = {
//     name: "Ashif",
//     gender: "male",
//     bloodGroup: "O+"
// }


//! InterSection type

type FrontendDeveloper = {
    skills: string[],
    designation1: "Frontend Developer"
}

type BackendDeveloper = {
    skill: string[],
    designation2: "Backend Developer"
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

const developer : FullStackDeveloper = {
    skills: ["html", "css", "node"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer"
}


























}