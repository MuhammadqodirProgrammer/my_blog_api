"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const run = async (app) => {
    await (0, mongoose_1.connect)("mongodb+srv://ziyodilladev:ziyodilla123@cluster0.t9s2ir2.mongodb.net/my_blog");
    console.log("Connect to database...");
    app.listen(2002, () => {
        console.log(`Server running on port : ${2002}`);
    });
};
exports.default = run;
