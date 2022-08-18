const BroadwayShows = require("../models/BroadwayShows")
module.exports = {
    getLog: async(req, res) => {
        try {
            const showNames = await BroadwayShows.find()
            const totalSeen = await BroadwayShows.countDocuments()
            res.render("log.ejs", {shows: showNames, totalSeen: totalSeen})
        }
        catch(err) {
            console.error(err)
        }
    },

    addShow: async(req, res) => {
        try {
            //defaults
            if(req.body.date === "") req.body.date = Date.now()
            if(req.body.location === "") req.body.location = "New York"

            await BroadwayShows.create({
                showName: req.body.show_name,
                dateSeen: req.body.date,
                location: req.body.location
            })
            console.log(req.body)
            console.log("Show has been added")
            res.redirect("/log")
        }
        catch(err) {
            console.error(err)
        }
    }
}