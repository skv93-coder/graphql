const UserTypes = `
type User {
    name: String
    email: String
    mobile:Int
    address: String
    password: String
}

input userInput {
    name: String
    email: String
    password: String
    phone:Int
}

extend type Query {
    me:User
}
type signupUserRes {
    token:String
    name: String
    email: String
    mobile:Int
    address: String
}
 extend type Mutation {
     userCreate (user:userInput):signupUserRes
 } 
`;
module.exports = { UserTypes };
