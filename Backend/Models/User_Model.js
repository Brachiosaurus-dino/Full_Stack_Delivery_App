// User Model on Mysql

//This is model Schema of User login and register Blueprint

import { Datatypes, STRING, UUID } from 'sequelize'
import { Seq } from '../Config/mysql'
import bcrypt from  'bcryptjs'

//This is the schema of our project 
// UUID is the store unique values , UUIDV4 is version 4 creates unique values 

export const User = Seq.define("User",{
    id:{
        type:UUID,
        defaultValue:Datatypes.UUIDV4,
        primaryKey:true
    },
    name:{
        type:Datatypes.STRING,
        allowNull:false,

    },
    email:{
        type:Datatypes.STRING,
        allowNull:false,
        unique:true,
        validate:{isEmail:true}
    },
    password:{
        type:Datatypes.STRING,
        allowNull:false
    },
    
},
{
    timestamps:true,
    tableName:"users"
})

//here before storing the object it runs beforecreate and hash th password

User.beforeCreate(async (user) => {
    user.password=await bcrypt.hash(user.password , 10)
});

//here when eevr user login this will runs to check password

User.prototype.matchPassword = async (enteredPassword) =>{
    return await bcrypt.compare(enteredPassword , this.password)
}