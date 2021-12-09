const express = require('express');
const home = require("./routes/router.js")
const app = express();


app.set("PORT", 3000);

app.use("/",home)

app.listen(app.get("PORT"), () => {
    console.log(app.get("PORT") + " 번 포트에서 대기 중")
})
