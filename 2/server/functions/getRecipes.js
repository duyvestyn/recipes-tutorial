const Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_KEY
});
const base = Airtable.base("appLJ9tv2zqd5tbFt");
exports.handler = function(event, context, callback) {
  const allRecords = [];
  base("Recipes")
    .select({
      maxRecords: 100,
      view: "All"
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          allRecords.push(record);
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          callback(err);
        } else {
          const body = JSON.stringify({ records: allRecords });
          const response = {
            statusCode: 200,
            body: body,
            headers: {
              "content-type": "application/json",
              "cache-control": "Cache-Control: max-age=300, public",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            }
          };
          callback(null, response);
        }
      }
    );
};
