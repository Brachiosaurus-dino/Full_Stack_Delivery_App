
import { DataTypes } from "sequelize";
import { Seq } from "../Config/mysql.js";

export const User = Seq.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue("name", value.trim())
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('email', value.trim())
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user',
        allowNull: "false"
    },
},
    {
        timestamps:false
    })



// // User Model on Mysql

// //This is model Schema of User login and register Blueprint

// import { Datatypes, STRING, UUID } from 'sequelize'
// import { Seq } from '../Config/mysql'
// import bcrypt from 'bcryptjs'

// //This is the schema of our project 
// // UUID is the store unique values , UUIDV4 is version 4 creates unique values 

// export const User = Seq.define("User", {
//     id: {
//         type: UUID,
//         defaultValue: Datatypes.UUIDV4,
//         primaryKey: true
//     },
//     name: {
//         type: Datatypes.STRING,
//         allowNull: false,

//     },
//     email: {
//         type: Datatypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: { isEmail: true }
//     },
//     password: {
//         type: Datatypes.STRING,
//         allowNull: false
//     },

// },
//     {
//         timestamps: true,
//         tableName: "users"
//     })

// //here before storing the object it runs beforecreate and hash th password

// User.beforeCreate(async (user) => {
//     user.password = await bcrypt.hash(user.password, 10)
// });

// //here when eevr user login this will runs to check password

// User.prototype.matchPassword = async (enteredPassword) => {
//     return await bcrypt.compare(enteredPassword, this.password)
// }



