import { Strategy as GooggleStrategy } from "passport-google-oauth20";
import passport from "passport";

export const connectPassport = () => {
    passport.use(new GooggleStrategy({
        clientID: "asd",
        clientSecret: "asd",
        callbackURL: "asd",
    }, async function (accessToken, refreshToken, profile, done) {
        //Database comes here 
    })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        // const user = await User.findById(id);
        done(null, user);
    })
};