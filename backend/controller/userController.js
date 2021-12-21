const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const userSchema = require("../modal/userSchema");
const bookSchema = require("../modal/bookSchema");
const customerSchema = require("../modal/customerSchema");
const categorySchema = require("../modal/categorySchema");
const publisherSchema = require("../modal/publisherSchema");
const orderSchema = require("../modal/orderSchema");

exports.signup = async (req, res, next) => {
    const { email, password, fname, lname } = req.body;
    const hashedPw = await bcrypt.hash(password, 12)
    try {
      console.log(email)
      // const user = ""
      const user = await userSchema.findOne({ email: email });
      if (user) {
        console.log('if')
        return res.status(400).json('errors');
      } else {
        console.log('else')
        const newUser = new userSchema({ firstname: fname, lastname: lname, email: email, password: hashedPw });
        const savedUser = await newUser.save();
        // const token = jwt.sign(
        //   {
        //     email: savedUser.email,
        //     userId: savedUser._id.toString()
        //   },
        //   'somesupersecretsecret',
        //   { expiresIn: '1d' }
        // );
        res.status(200).json({ token: token, userId: savedUser._id.toString(), user: savedUser });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  exports.login = async (req, res, next) => {
    const { email, password } = req.body;
  
    let loadedUser;
    try {
      const user = await userSchema.findOne({ email: email });
      if (!user) {
        errors.email = 'This email is not registered to the platform';
        return res.status(404).json(errors);
      }
      else if (!user.password) {
        errors.email = 'Invalid email or password';
        return res.status(404).json(errors);
      }
      else {
        loadedUser = user;
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
          errors.password = 'Incorrect Password';
          return res.status(400).json(errors);
        }
        const token = jwt.sign(
          {
            email: loadedUser.email,
            userId: loadedUser._id.toString()
          },
          'somesupersecretsecret',
          { expiresIn: '8h' }
        );
  
        req.loadedUser = loadedUser;
        res.status(200).json({ token: token, userId: loadedUser._id.toString(), user });
      }
  
    } catch (err) {
      res.status(500).json(err);
    }
  };

  exports.listUsers = async (req, res) => {
    try {
      await userSchema.find()
      .then(data => res.json(data))
      .catch(err => res.json(err))
    } catch (err) {
      res.status(500).json(err);
    }
  }

  exports.addBook = async (req, res) => {
      const { price, author, edition } = req.body;
      try {
          const newBook = new bookSchema({ price, author, edition });
          await newBook.save();
          res.status(200).json({ success: true, message: 'Addition Succesfull' });
      } catch (err) {
        res.status(500).json(err);
      }
    };

    exports.addCustomer = async (req, res) => {
      const { name, age, location } = req.body;
      try {
          const newCustomer = new customerSchema({ name, age, location });
          await newCustomer.save();
          res.status(200).json({ success: true, message: 'Addition Succesfull' });
      } catch (err) {
        res.status(500).json(err);
      }
    };

    exports.addCategory = async (req, res) => {
      const { name } = req.body;
      try {
          const newCategory = new categorySchema({ name });
          await newCategory.save();
          res.status(200).json({ success: true, message: 'Addition Succesfull' });
      } catch (err) {
        res.status(500).json(err);
      }
    };

    exports.addPublisher = async (req, res) => {
      const { name, address, publisher_id } = req.body;
      try {
          const newPublisher = new publisherSchema({ name, address, publisher_id });
          await newPublisher.save();
          res.status(200).json({ success: true, message: 'Addition Succesfull' });
      } catch (err) {
        res.status(500).json(err);
      }
    };

    exports.addOrder = async (req, res) => {
      const { customer_id, order_id, book_id } = req.body;
      try {
          const newOrder = new orderSchema({ customer_id, order_id, book_id });
          await newOrder.save();
          res.status(200).json({ success: true, message: 'Addition Succesfull' });
      } catch (err) {
        res.status(500).json(err);
      }
    };
  