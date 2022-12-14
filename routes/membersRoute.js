const { getMembers, addAMember, deleteMember } = require("../controllers/membersControllers");
const requireLogin = require("../middlewares/requireLogin");

const router = require("express").Router();

router.get("/all-members", getMembers)
router.post("/add", requireLogin, addAMember)
router.delete("/:id", requireLogin, deleteMember)

module.exports = router