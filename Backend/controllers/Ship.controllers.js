var cookieParser = require('cookie-parser')

const Ship = require("../models/Ship.model");

// get all products
exports.get_all = function (req, res,next) {
  Ship.find()
    .then((Ships) => {
      // Check if Ships exists
      if (!Ships || Ships.length === 0) {
        return res.status(404).send({
          status: false,
          message: "no Ship found",
        });
      } else {
        return res.status(200).send({
          status: true,
          Ships: Ships,
        });
      }
    }) 
    .catch(() =>
    next(err)
    );
};

// // get one Ship
exports.get_one = function (req, res,next) {

  // Find account with matching id
  Ship.findById(req.params.id)
    .then((Ship) => {
      if (!Ship) {
        res.status(400).send({
          status: false,
          message: "Ship doesn't exist",
        });
      } else {
        return res.status(200).send({
          status: true,
          Ship: Ship,
        });
      }
    })
    .catch(() =>
    next(err)
    );
};

// add a Ship
exports.add = async function (req, res,next) {
  let newShip = new Ship(req.body);
  newShip
    .save()
    .then((Ship) => {
      return res.status(200).send({
        status: true,
        message: "Ship added successfully",
        Ship,
      });
    })
    .catch((err) => {
      next(err)
    });
};

// update a Ship
exports.update =async function (req, res,next) {

//   get the old proudct with id 
  const oldShip = await Ship.findById(req.params.id);
  if (!oldShip) {
    return res.status(404).send({
      status: false,
      message: "cannot find the Ship with id " + req.params.id,
    });
  }
    oldShip.update( req.body, async (err, docs) => {
    if (err) {
      next(err)
    }

    return res.status(200).send({
      status: true,
      message: "Ship updated succefully!",
    });
  });
};

// // delete a Ship: change status to deleted
exports.delete = function (req, res,next) {

  // Find Ship by id
  Ship.findById(req.params.id)
    .then((Ship) => {
      if (!Ship) {
        res.status(400).send({
          status: false,
          message: "Ship doesn't exist",
        });
      } else {
        Ship.status = "inactive";
        Ship
          .save()
          .then(() =>
            res.status(200).send({
              status: true,
              message: "Ship successfuly deleted",
            })
          )
          .catch(() =>
            res.status(500).send({
              status: false,
              message: "error while saving changes to db",
            })
          );
      }
    })
    .catch(() =>
    next(err)
    );
};


  