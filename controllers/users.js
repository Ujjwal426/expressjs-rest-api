import { v4 as uuidv4 } from 'uuid';
import statusCodes from '../constants/HttpStatusCode'
let users = [];

// get all users
export const getUsers = (req, res) => {
    res.send({
        data: users,
        message: 'Users List'
    });
};

// create user
export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, ID: uuidv4() });

    res.send({
        data: user,
        message: `User Created`
    });
};

// get user by ID
export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.ID == id);
    if (!foundUser) {
        res.status(statusCodes.NOT_FOUND);
        res.send({
            data: null,
            message: 'User Not Found'
        })
    }
    res.send({
        data: foundUser,
        message: 'User Info'
    });
};

// delete user by ID
export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.ID != id)
    res.send({
        data: null,
        meassge: 'User Deleted'
    })
};

// update user by ID
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { FirstName, LastName, Age } = req.body;

    const userToBeUpdated = users.find((user) => user.ID == id);
    if(!userToBeUpdated){
        res.status(statusCodes.NOT_FOUND);
        res.send({
            data: null,
            message: 'User Not Found'
        })
    }
    if (FirstName) userToBeUpdated.FirstName = FirstName;
    if (LastName) userToBeUpdated.LastName = LastName;
    if (Age) userToBeUpdated.Age = Age;

    res.send({
        data: userToBeUpdated,
        message: 'User Updated'
    });
};