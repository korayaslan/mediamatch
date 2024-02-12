import User from "../models/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res) =>{
    
    try {
        const hashhedPassword = await bcrypt.hash(req.body.password, 7);
        const newUser = new User({
            ...req.body,
            password: hashhedPassword,
        });

        await newUser.save();
        res.status(201).send("User has been created.");

    } catch(err) {
        res.status(500).send("Errror.");
    }
} 

export const login = async (req, res) =>{
    

       const user = await User.findOne({username:req.body.username});
       
       if (!user) return res.status(404).send("No such user.");

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return res.status(400).send("Wrong password");

        const {password, ...info} = user._doc;
        res.status(200).send(info);


        res.status(500).send("Errror.");

}

export const logout = async (req, res) =>{
    
    try {
        
    } catch(err) {
        res.status(500).send("Errror.");
    }
}