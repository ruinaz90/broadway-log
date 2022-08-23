const BroadwayShows = require("../models/BroadwayShows")
module.exports = {
    //get list of shows
    getLog: async(req, res) => {
        try {
            const showNames = await BroadwayShows.find().sort({dateSeen: -1, showName: 1})  //find shows in db and sort desc by date seen and asc by name
            const totalSeen = await BroadwayShows.countDocuments()                          //count number of shows
            res.render("log.ejs", {shows: showNames, totalSeen: totalSeen})                 //render main page with showNames and totalSeen
        }
        catch(err) {
            console.error(err)
        }
    },

    //edit show
    getEdit: async(req, res) => {
        try {
            const id = req.params.id
            const showNames = await BroadwayShows.find()
            res.render("edit.ejs", {shows: showNames, showId: id})                          //render edit page with showNames and id
        }
        catch(err) {
            console.error(err)
        }
    },

    //add a show
    addShow: async(req, res) => {
        try {
            //defaults if blank
            if(req.body.date === "")
                req.body.date = Date.now()
            if(req.body.location === "")
                req.body.location = "New York"

            //create entry based on form data
            await BroadwayShows.create({
                showName: req.body.show_name,
                dateSeen: req.body.date,
                location: req.body.location
            })
            console.log(req.body)
            console.log("Show has been added")
            res.redirect("/log") //reload main page
        }
        catch(err) {
            console.error(err)
        }
    },

    //update show
    updateShow: async(req, res) => {
        try{
            const id = req.params.id

            //defaults if blank
            if(req.body.date === "")
                req.body.date = Date.now()
            if(req.body.location === "")
                req.body.location = "New York"

            await BroadwayShows.findByIdAndUpdate(id, {
                showName: req.body.show_name,
                dateSeen: req.body.date,
                location: req.body.location
            })
            console.log(req.body)
            console.log("Show has been updated")
            res.redirect("/log") //reload main page
        }
        catch(err) {
            console.error(err)
        }
    },

    //delete show
    deleteShow: async(req, res) => {
        console.log(req.body.showIdFromJSFile)
        try{
            await BroadwayShows.findOneAndDelete({_id:req.body.showIdFromJSFile})
            console.log("Show has been deleted")
            res.json("Deleted It")
        }
        catch(err) {
            console.error(err)
        }
    },
}
