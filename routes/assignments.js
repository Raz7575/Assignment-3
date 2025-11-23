const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/assignmentsController");
const methodOverride = require("method-override");

router.use(methodOverride("_method"));

router.get("/", ctrl.index);
router.get("/new", ctrl.newForm);
router.post("/", ctrl.create);
router.get("/:id", ctrl.show);
router.get("/:id/edit", ctrl.editForm);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.delete);

module.exports = router;