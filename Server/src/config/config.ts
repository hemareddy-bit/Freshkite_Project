require("dotenv").config();

export const config = {
    dbUrl : process.env.DB as string,
    Port : process.env.PORT

}