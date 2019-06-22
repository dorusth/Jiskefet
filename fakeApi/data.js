// this file creates a data object with 500 run entries and writes it to a db.json
// data.js
let fs = require("fs");
let createData = () => {
    const data = {
        data: {
            runs: [],
            logs: []
        }
    }
    // Create 500 items
    for (let i = 0; i < 20; i++) {
        data.data.runs.push({
            runNumber: i,
            O2StartTime: "2018-11-30T20:25:42.000Z",
            TrgStartTime: "2018-10-21T07:47:59.000Z",
            TrgEndTime: "2018-10-21T07:47:59.000Z",
            O2EndTime: "2018-10-21T07:47:59.000Z",
            activityId: "XZTDsgV4SiVPHFfZ",
            runType: "PHYSICS",
            runQuality: Math.floor((Math.random() * 100) + 1),
            nDetectors: Math.floor((Math.random() * 10) + 1),
            nFlps: Math.floor((Math.random() * 100) + 1),
            nEpns: Math.floor((Math.random() * 100) + 1),
            nTimeframes: null,
            nSubtimeFrames: null,
            bytesReadOut: Math.floor((Math.random() * 100) + 1),
            bytesTimeframeBuilder: Math.floor((Math.random() * 100) + 1)
        })
        data.data.logs.push({
            logId: i,
            subtype: "comment",
            origin: "human",
            creationTime: "2019-03-09T03:48:58.000Z",
            title: "euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
            body: "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
            subsystemFkSubsystemId: null,
            announcementValidUntil: null,
            commentFkParentLogId: null,
            commentFkRootLogId: null,
            user: {
                userId: 1 + i,
                externalUserId: Math.floor((Math.random() * 1000) + 1),
                samsId: Math.floor((Math.random() * 1000) + 1)
            }
        })
    }
    // return data
    fs.writeFile("./db.json", JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been created");
    });
}
createData()
