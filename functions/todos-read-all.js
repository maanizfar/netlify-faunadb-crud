require("dotenv").config();
const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_SECRET,
});

exports.handler = (event, context, callback) => {
  return client
    .query(q.Paginate(q.Match(q.Ref("indexes/all_todos"))))
    .then((res) => {
      const todoRefs = res.data;
      const getAllTodoDataQuery = todoRefs.map((ref) => {
        return q.Get(ref);
      });

      return client.query(getAllTodoDataQuery).then((res) => {
        return {
          statusCode: 200,
          body: JSON.stringify(res),
        };
      });
    })
    .catch((error) => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      });
    });
};
