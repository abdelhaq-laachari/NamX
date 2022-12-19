const asyncHandler = require("express-async-handler");
const Car = require("../models/carModel");

// @desc    Get all cars
// @route   GET /api/cars
// @access  Private
const getCars = asyncHandler(async (req, res) => {
  const cars = await Car.find();
  res.status(200).json(cars);
});

// @desc    Add a new car
// @route   POST /api/cars
// @access  Private
const addCars = asyncHandler(async (req, res) => {
  const { name, edition, horsepower, maxSpeed, acceleration, autonomy } = req.body;
  if (
    !name ||
    !edition ||
    !horsepower ||
    !maxSpeed ||
    !acceleration ||
    !autonomy
  ) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const car = await Car.create({
    name,
    edition,
    horsepower,
    maxSpeed,
    acceleration,
    autonomy,
  });

  if (car) {
    res.status(201).json(car);
  } else {
    res.status(400);
    throw new Error("Invalid car data");
  }
});

// @desc    Update a car
// @route   PUT /api/cars/:id
// @access  Private
const updateCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (!car) {
    res.status(400);
    throw new Error("Car not found");
  }

  const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedCar);
});

// @desc    Delete a car
// @route   DELETE /api/cars/:id
// @access  Private
const deleteCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (!car) {
    res.status(400);
    throw new Error("Car not found");
  }

  await car.remove();

  res.status(200).json({ id: req.params.id });
});

const totalCars = asyncHandler(async (req, res) => {
  const total = await Car.countDocuments();
  res.status(200).json(total);
});


module.exports = {
  getCars,
  addCars,
  updateCar,
  deleteCar,
  totalCars,
};
