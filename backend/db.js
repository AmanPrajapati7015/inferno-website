const { Pool } = require('pg');

// Setup PostgreSQL client with connection details
const pool = new Pool({
    connectionString: "postgresql://aman:aman@localhost:5432/inferno_db"
  });



async function getPosts(){
  const {rows} = await pool.query('SELECT * FROM community_form');
  return rows;
}

async function addPost(username, title, msg, num_of_likes) {
  const res = await pool.query('Insert into community_form (username, post_title, post_message, num_of_likes) values ($1, $2, $3, $4)',
    [username, title, msg, num_of_likes]
  )
  console.log(res);
}





addPost("aman", "this is new post", "msg is ", 7);

module.exports = {getPosts, addPost};
