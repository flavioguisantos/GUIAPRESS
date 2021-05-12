const express = require("express");
const router = express.Router();
const User = require("./User");


router.get("/admin/users", (req, res) =>{
    res.send("Listagem de Usúarios");
});


router.get("/admin/users/create", (req, res) => {
    console.log("Aqui!!")
    res.render("admin/users/create");
})


router.post("/authenticate", (req, res) => {

    var email = req.body.email
    var password = req.body.password

    

})

module.exports = router;