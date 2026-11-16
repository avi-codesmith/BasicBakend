import { Laptop } from '../model/laptopModel.js';

const getAllLaptops = async (req, res) => {
  try {
    const laptop = await Laptop.find();
    console.log(laptop);

    res.status(200).json({
      status: 'success',
      message: 'Laptops are fetched!',
      length: laptop.length,
      data: laptop,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: [err, 'Something went wrong, Cannot fecth laptops'],
    });
  }
};

const getLaptopByID = async (req, res) => {
  const laptop = await Laptop.findById(req.params.id);

  try {
    res.status(200).json({
      status: 'success',
      message: 'Laptop fetched.',
      body: laptop,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: [err, 'Something went wrong, Cannot fecth laptop'],
    });
  }
};

const addLaptop = async (req, res) => {
  try {
    const data = await Laptop.create(req.body);

    res.status(200).json({
      status: 'success',
      message: 'Product Added',
      body: data,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: [err, 'Something went wrong, Cannot add laptop'],
    });
  }
};

const updateProductByID = async (req, res) => {
  const laptop = await Laptop.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: 'after', // return the updated document (after)
    runValidators: true,
  });

  try {
    res.status(200).json({
      status: 'success',
      message: 'Laptop updated!',
      body: laptop,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: [err, 'Something went wrong, Cannot update laptop'],
    });
  }
};

const deleteProductByID = async (req, res) => {
  await Laptop.findByIdAndDelete(req.params.id);

  try {
    res.status(200).json({
      status: 'success',
      message: 'Laptop deleted!',
      body: {},
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: [err, 'Something went wrong, Cannot delete laptop'],
    });
  }
};

export {
  getAllLaptops,
  getLaptopByID,
  addLaptop,
  updateProductByID,
  deleteProductByID,
};
