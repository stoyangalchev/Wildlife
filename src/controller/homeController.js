const router = require("express").Router();
const { isAuth } = require("../middleware/authMiddleware");
const authServices = require("../services/authServices");
const creaturesServices = require("../services/creaturesServices");

router.get("/", async (req, res) => {
  try {
    if (req.user && req.user._id) {
      const userId = req.user._id;
      const user = await authServices.findUserByID(userId);
      return res.render("home", { user });
    }

    res.render("home");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/profile", isAuth, async (req, res) => {
  let userId = req.user._id;

  let creatures = await creaturesServices.getMyCreatedPost(userId);
  let owner = await creaturesServices.findOwner(userId);

  res.render("profile", {
    creatures,
    owner,
    creaturesCount: creatures.length,
  });
});

module.exports = router;
