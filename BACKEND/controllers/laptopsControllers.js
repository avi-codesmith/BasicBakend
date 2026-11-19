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
  try {
    const laptop = await Laptop.findById(req.params.id);
    if (!laptop) {
      throw new Error('This laptop does not exists');
    } else {
      res.status(200).json({
        status: 'success',
        message: 'Laptop fetched.',
        body: laptop,
      });
    }
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
      message: err.message || 'Something went wrong, Cannot add laptop',
    });
  }
};

const updateProductByID = async (req, res) => {
  try {
    const laptopIds = await Laptop.find().distinct('_id');

    const ids = laptopIds.map((id) => id.toString());

    let laptop;

    if (ids.includes(req.params.id)) {
      laptop = await Laptop.findByIdAndUpdate(req.params.id, req.body, {
        returnDocument: 'after', // return the updated document (after)
        runValidators: true,
      });
    } else {
      throw new Error('The given laptop does not exists');
    }
    res.status(200).json({
      status: 'success',
      message: 'Laptop updated!',
      body: laptop,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message || 'Something went wrong, Cannot update laptop',
    });
  }
};

const deleteProductByID = async (req, res) => {
  try {
    const laptopId = await Laptop.find().distinct('_id');

    const ids = laptopId.map((id) => id.toString());

    if (ids.includes(req.params.id)) {
      await Laptop.findByIdAndDelete(req.params.id);
    } else {
      throw new Error('The given laptop does not exists');
    }
    res.status(200).json({
      status: 'success',
      message: 'Laptop deleted!',
      body: {},
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message || 'Something went wrong, Cannot delete laptop',
    });
  }
};

const getLaptopsByBrand = async (req, res) => {
  const brandName = req.params.brand;
  try {
    const brandLaptops = await Laptop.aggregate([
      {
        $facet: {
          Stats: [
            {
              $group: {
                _id: brandName,
                avgPrice: { $avg: '$price' },
              },
            },
            {
              $project: {
                _id: 0,
                name: '$_id',
                avgPrice: { $floor: '$avgPrice' },
              },
            },
          ],
          Laptops: [
            {
              $match: {
                brand: brandName,
              },
            },
          ],
        },
      },
    ]);
    res.status(200).json({
      status: 'success',
      message: `${brandName} Laptops are fetched!`,
      body: await brandLaptops,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message:
        err.message ||
        `Something went wrong, Cannot fetch ${brandName} laptops`,
    });
  }
};

// const getLaptopByPrice = async (req, res) => {
//   try {
//   } catch (err) {
//     res.status(500).json({
//       status: 'fail',
//       message:
//         err.message ||
//         `Something went wrong, Cannot fetch ${req.param} laptops`,
//     });
//   }
// };

export {
  getAllLaptops,
  getLaptopByID,
  addLaptop,
  updateProductByID,
  deleteProductByID,
  getLaptopsByBrand,
};
