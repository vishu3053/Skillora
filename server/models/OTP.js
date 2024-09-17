const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const OTPSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    otp: {
        type:String,
        required:true,
    },
    createdAt: {
        type:Date,
        default:Date.now(),
        expires: 5*60,
    }
});

// user ki entry db mae store krne se pehle OTP ka mail bhejo user ko 
// pre middleware use hoga in short 


async function sendVerificationEmail(email, otp) {
    try {
        const mailResponse = await mailSender(email, "Verification Email from StudyNotion", otp);
        console.log("Email sent Successfully: ", mailResponse);
    } 
    catch (error) {
        console.log("error occured while sending mails: ", error);
        throw error;
    }
}

OTPSchema.pre("save", async function (next) {
    console.log("Mail in pre hook", this.email)
    await sendVerificationEmail(this.email, this.otp);
    next();
}) 

module.exports = mongoose.model("OTP", OTPSchema);