require("dotenv").config();
const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_SECRET,
});

exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body);

  const todoItem = {
    data,
  };

  return client
    .query(q.Create(q.Ref("classes/todos"), todoItem))
    .then((res) => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(res),
      });
    })
    .catch((error) => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      });
    });
};
