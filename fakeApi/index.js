// index.js
module.exports = () => {
    const data = {
        runs: []
    }
    // Create 500 items
    for (let i = 0; i < 20; i++) {
        data.runs.push({
            runNumber: i,
            O2StartTime: "2018-11-30T20:25:42.000Z",
            TrgStartTime: "2018-10-21T07:47:59.000Z",
            TrgEndTime: "2018-10-21T07:47:59.000Z",
            O2EndTime: "2018-10-21T07:47:59.000Z",
            activityId: "XZTDsgV4SiVPHFfZ",
            runType: "PHYSICS",
            runQuality: Math.floor((Math.random() * 100) + 1),
            nDetectors: Math.floor((Math.random() * 10 ) + 1 ),
            nFlps: Math.floor((Math.random() * 100) + 1),
            nEpns: Math.floor((Math.random() * 100) + 1),
            nTimeframes: null,
            nSubtimeFrames: null,
            bytesReadOut: Math.floor((Math.random() * 100) + 1),
            bytesTimeframeBuilder: Math.floor((Math.random() * 100) + 1)
        })
    }
    return data
}