const express = require('express'); 
const port = 8080;
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

Sequelize = require('sequelize'),
db = require('./models'),
cors = require('cors');
app.use(cors())

// set cors to all 
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


// set up the connection to the db
const sequelize = new Sequelize('database_capstone', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889
  });

  // set body parser for urlencoded and json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// set up a GET route at /comments that sends back a list of comments
app.get('/comments', (req, res) => {
// make query to db to get comments
db.Comment.findAll({
    include: [db.Tag],
    order: [['updated_at', 'DESC']],

})
.then(comments => {
  // send the comments back using res.json
  return res.json(comments);
})
.catch(err => {
  return res.status(500).json(err);
    })

});

// set up a GET route at /Tags that sends back a list of tags
app.get('/tags', (req, res) => {
    // make query to db to get comments
    db.Tag.findAll(
        {
            distinct: 'name'
        }
    )
        // include: [db.Tag]
    
    .then(tags => {
      // send the comments back using res.json
      return res.json(tags);
    })
    .catch(err => {
      return res.status(500).json(err);
        })
    
    });

//set up a POST at /comments that sends a comment
app.post('/comments', (req, res) => {

// 1 take the tag string from req.body and send a query to the database
    // to find out if we already have that tag
    // if we do, let's use that tag's id for tag_id
    //if not , create a new row
    db.Tag.findOrCreate({
        where: {name : req.body.tag}
    })
    .then((tag) => {
      return  db.Comment.create({
            text: req.body.text,
            // tag: req.body.tag,
            emoji: req.body.emoji,
            tag_id: tag[0].id
        })
    })
    .then((newComment)=>{
        res.json(newComment);
    })
    .catch(err =>{
       res.status(500).json(err);
    }) 
})

app.get('/comments/:tag_name', (req, res) => {

    const tag_name = req.params.tag_name;
    // console.log("tag-name is:" ,tag_name);

    db.Tag.find(
        {
            where :{
                name:tag_name}
            }
    )
    .then((tag)=>{
        return db.Comment.findAll(
            {
                where: {tag_id: tag.id},
                order: [['updated_at', 'DESC']],
                include: [db.Tag]
             }
         )
    })
    .then((comment)=>{
        commentArr = comment.map(item => {
            item.dataValues.tag_name = tag_name;
            console.log(item);
            return item;
        });
        res.json(comment);
    })
});


// listen on port 8080
app.listen(port, () => {
    console.log('Listening on ', port);
});
