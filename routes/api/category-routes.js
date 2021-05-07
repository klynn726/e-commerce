const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//   http://localhost:3001/api/categories    


router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll({
    attributes: [
      'id',
      'category_name'
    ],
    include: [{
      model: Product,
      attributes: ['product_name']
    }]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

//     http://localhost:3001/api/categories/4  

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'category_name'
    ],
    include: [
      {
        model: Product,
        attributes: ['product_name']
      }
    ]
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//    http://localhost:3001/api/categories    {"category_name":"Socks"}

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

//    http://localhost:3001/api/categories/6      {"category_name":"Movies"}

router.put('/:id', (req, res) => {
  // update a category by its `id` value

  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//     http://localhost:3001/api/categories/6  

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
