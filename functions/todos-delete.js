require("dotenv").config();
const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_SECRET,
});

exports.handler = (event, context, callback) => {
  console.log("todos-delete: ", event.body);
  const data = JSON.parse(event.body);

  return client
    .query(q.Delete(q.Ref(`classes/todos/${data.id}`)))
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
