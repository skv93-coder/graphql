const UserTypes = `
type User {
    name: String
    email: String
    mobile:Int
    address: String
    password: String
}

input signupDetails {
    name: String
    email: String
    password: String
    phone:Int
}
type MeResponse {
name:String
email:String
mobile:String
address:String

}

extend type Query {
    me:MeResponse
    token:String
}
type authUserRes {
    token:String
    name: String
    email: String
    mobile:Int
    address: String
}
input loginDetails {
    email:String
    password:String
}
 extend type Mutation {
     userCreate (user:signupDetails):authUserRes
     login(user:loginDetails):authUserRes
 } 
`;
module.exports = {
  UserTypes,
};
