const { Router } = require("express")
const router = Router()

router.get("/camping", (req, res)=> {
    res.send("Hello World")
})

module.exports = router