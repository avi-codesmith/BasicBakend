import { Laptop } from '../model/laptopModel.js';

const getAllLaptops = async (req, res) => {
  try {
    const laptop = await Laptop.find();

    res.status(200).json({
      status: 'success',
      message: 'Laptops are fetched!',
      data: laptop,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: [err, 'Something went wrong, Cannot fecth laptops'],
    });
  }
};

// const getLaptopByID = async (req, res, next) => {
//   const id = Number(req.params.id) - 1;
//   const laptop = await laptops[id];

//   try {
//     res.status(200).json({
//       status: 'success',
//       message: 'Laptop fetched.',
//       body: laptop,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: 'fail',
//       message: [err, 'Something went wrong, Cannot fecth laptops'],
//     });
//   }
// };

// const addLaptop = async (req, res, next) => {
//   console.log('adding...');
//   try {
//     let data = await { ...req.body };

//     data.id = laptops.length + 1;

//     laptops.push(data);

//     res.status(200).json({
//       status: 'success',
//       message: 'Product Added',
//       body: data,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: 'fail',
//       message: [err, 'Something went wrong, Cannot add laptop'],
//     });
//   }
// };

// export { getAllLaptops, getLaptopByID, addLaptop };

export { getAllLaptops };
