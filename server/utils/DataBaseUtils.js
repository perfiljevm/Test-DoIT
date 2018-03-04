import mongoose from 'mongoose';
import '../models/users';

const users = mongoose.model('users');


export function setUpConnection()
{
    mongoose.connect('mongodb://localhost/users');
}

export function listLocations ()
{
    return users.find(locations);
}

export function listUsers()
{
    return users.find();
}
export function addLocations()
{
    users.push(locations);
}
export function createUser(data)
{
    const user = new users({
        username: data.username,
        password: data.password,
        locations: [data.locations]
    });
    return user.save();
}

//export function deleteUser(id)
//{
//    return Users.findById(id).remove()
//}