
const Assignment = require("../models/Assignment");

module.exports = {
  
  index: async (req, res) => {
    const assignments = await Assignment.find().sort({ dueDate: 1 });
    res.render("assignments/list", { assignments });
  },

 
  newForm: (req, res) => {
    res.render("assignments/new");
  },

  
  create: async (req, res) => {
    await Assignment.create(req.body);
    res.redirect("/assignments");
  },

  
  show: async (req, res) => {
    const assignment = await Assignment.findById(req.params.id);
    res.render("assignments/show", { assignment });
  },

  
  editForm: async (req, res) => {
    const assignment = await Assignment.findById(req.params.id);
    res.render("assignments/edit", { assignment });
  },

  
  update: async (req, res) => {
    await Assignment.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/assignments/" + req.params.id);
  },

 
  delete: async (req, res) => {
    await Assignment.findByIdAndDelete(req.params.id);
    res.redirect("/assignments");
  },
};
