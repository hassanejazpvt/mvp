require("dotenv").config();
require("./config/database").connect();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const express = require("express");
const auth = require("./middleware/auth");

const app = express();

app.use(express.json());

// importing user context
const User = require("./model/user");
const Project = require("./model/project")

const sendFailedResponse = (res, status, message, errors) => {
    status = status || 500
    errors = errors || []
    return res.status(status).json({
        status: false,
        message,
        errors
    })
}

// Register
app.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
        // Get user input
        const { username, first_name, last_name, email, password, country, role } = req.body;

        // Validate user input
        let errors = []
        let fields = ['username', 'first_name', 'last_name', 'email', 'password', 'country', 'role']
        fields.forEach(field_name => {
            if (!req.body[field_name]?.trim()) {
                errors.push(`The ${field_name.replace(/\_/g, ' ')} field is required.`)
            }
        })

        if (errors.length) {
            return sendFailedResponse(res, 400, "Invalid data", errors)
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email, role, username });

        if (oldUser) {
            return sendFailedResponse(res, 409, "User Already Exist. Please Login")
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await User.create({
            username,
            first_name,
            last_name,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
            country,
            role
        });

        // Create token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        // save user token
        user.token = token;

        // return new user
        res.status(201).json(user);
    } catch (err) {
        return sendFailedResponse(res, error.status, error.message, []);
    }
    // Our register logic ends here
});

// Login
app.post("/login", async (req, res) => {

    // Our login logic starts here
    try {
        // Get user input
        const { email, password, role } = req.body;

        // Validate user input
        let errors = []
        if (!email?.trim())
            errors.push("The Email field is required.")
        if (!password?.trim())
            errors.push("The Password field is required.")
        if (!role?.trim())
            errors.push("The role field is required.")
        if (errors.length) {
            return sendFailedResponse(res, 400, "Invalid data", errors)
        }
        
        // Validate if user exist in our database
        const user = await User.findOne({ email, role });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            // save user token
            user.token = token;

            // user
            res.status(200).json(user);
        }
        return sendFailedResponse(res, 400, "Invalid Credentials")
    } catch (err) {
        return sendFailedResponse(res, error.status, error.message, []);
    }
    // Our register logic ends here
});

app.get("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});

app.get("/projects", auth, (req, res) => {
    try {
        let projectsList = []
        Project.find({}, (err, projects) => {
            projects.forEach(project => {
                projectsList.push(project)
            })
        })
        return res.status(200).json({
            status: true,
            data: projectsList
        })
    } catch (error) {
        return sendFailedResponse(res, error.status, error.message, []);
    }
})

app.post("/projects", auth, async (req, res) => {
    try {
        let fields = ["user_id", "name", "category", "details", "posting_date", "bid_end_date", "duration", "hourly_pay"]
        let errors = []
        fields.forEach(field => {
            if (!req.body[field]?.trim()) {
                errors.push(`The ${field.replace(/\_/g, " ")} field is required.`)
            }
        })

        if (errors.length) {
            return sendFailedResponse(res, 400, "Invalid data", errors)
        }

        let payload = {user_id, name, category, details, posting_date, bid_end_date, duration, hourly_pay} = req.body

        const project = await Project.create(payload)

        return res.status(200).json({
            status: true,
            data: project
        })
    } catch (error) {
        return sendFailedResponse(res, error.status, error.message, []);
    }
})

module.exports = app;