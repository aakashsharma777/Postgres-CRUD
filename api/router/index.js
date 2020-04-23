var router=require("express").Router()
var user=require('../controller/user') //controller


router.post('/register',user.register)
router.post('/insertempd',user.insertempd)
router.post('/updateempd',user.updateempd)
router.post('/deleteempd',user.deleteempd)
router.post('/insertsalaryd',user.insertsalaryd)
router.post('/crossjoin1',user.crossjoin1)
router.post('/innerjoin1',user.innerjoin1)
router.post('/equijoin1',user.equijoin1)
router.post('/leftouter',user.leftouter)
router.post('/fullouter',user.fullouter)

module.exports=router;
