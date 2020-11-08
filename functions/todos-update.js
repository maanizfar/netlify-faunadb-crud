require("dotenv").config();
const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_SECRET,
});

exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body);

  console.log("UPDATE TODOS: ", event.body);

  const id = data.id;
  const todoInfo = { data: data.todoInfo };

  return client
    .query(q.Update(q.Ref(`classes/todos/${id}`), todoInfo))
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
