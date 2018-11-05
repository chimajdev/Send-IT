import express from 'express'
import bodyParser from 'body-parser'


let router = express.Router();

let users = [
  {
    id: 1, 
    email: 'Shoes', 
    phone: 4, 
    parcels: [
      {
        id: 2, 
        item_name: 'Shoes', 
        weigth: 3
      },
      {
        id: 6, 
        item_name: 'Shoes', 
        weigth: 1.5
      },
      {
        id: 10, 
        item_name: 'Shoes', 
        weigth: 10
      }
    ]
  },
  {
    id: 2, 
    email: 'Shoes', 
    phone: 4, 
    parcels: [
      {
        id: 2, 
        item_name: 'Shoes', 
        weigth: 3
      },
      {
        id: 6, 
        item_name: 'Shoes', 
        weigth: 1.5
      },
      {
        id: 10, 
        item_name: 'Shoes', 
        weigth: 10
      }
    ]
  },
]

/* GET home page. */
router.get('/', (req,res) => {
  res.send(users);
  //res.render('index', { title: 'Express' });
});

router.get('/:id', (req,res) => {
  let user = users.find(u => u.id === parseInt(req.params.id))
  if(!user){
    res.status(400).send('No such User please check the ID again')
  } else {
    res.send(user);
    //res.render('index', { title: 'Express' });
  }
});

export default router;