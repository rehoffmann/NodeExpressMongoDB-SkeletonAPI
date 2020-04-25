

//mongoose.connect(mongoDB, { useNewUrlParser: true })



const MongoClient = require("mongodb").MongoClient;

const dbConnectionUrl = "mongodb+srv://rhoffmann:meme6149TOO@cluster0-ah1ec.mongodb.net/test?retryWrites=true&w=majority";

function initialize(
    testserver,
    test,
    successCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            const dbObject = dbInstance.db(testserver);
            const dbCollection = dbObject.collection(test);
            console.log("[MongoDB connection] SUCCESS");

            successCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};
