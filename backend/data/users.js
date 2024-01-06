import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmnin: true,
    },

    {
        name: 'Debayan Pal',
        email: 'debayan@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmnin: false,
    },

    {
        name: 'Arnab Ghosh',
        email: 'arnab@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmnin: false,
    }
];


export default users;