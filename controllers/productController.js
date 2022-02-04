const db = require('../models');
require('dotenv/config');
const fs = require('fs');
const { Op } = require('sequelize');
// Main model

const Product = db.products;
const User = db.users;
const Category = db.categories;
const Subctegory = db.subcategories;
const Whishlist = db.wishlists;


// TODO: Add product

// *  ==================== START ====================

const addProduct = async (req, res, next) => {

  // return console.log(req.files)
  let data = {
    name: req.body.name,
    shortDescription: req.body.shortDescription,
    description: req.body.description,
    features: req.body.features,
    liveDemo: req.body.liveDemo,
    priceSingle: req.body.priceSingle,
    priceMultiple: req.body.priceMultiple,
    category: req.body.category,
    subcategory: req.body.subcategory,
    user: req?.user,
    operatingSystems: req.body.operatingSystems
      ? req.body.operatingSystems
      : null,
    filesIncluded: req.body.filesIncluded ? req.body.filesIncluded : null,
    supportedCms: req.body.supportedCms ? req.body.supportedCms : null,
    htmlFrameworks: req.body.htmlFrameworks ? req.body.htmlFrameworks : null,
    jsFrameworks: req.body.jsFrameworks ? req.body.jsFrameworks : null,
    softwareVersions: req.body.softwareVersions
      ? req.body.softwareVersions
      : null,
    softwareFrameworks: req.body.softwareFrameworks
      ? req.body.softwareFrameworks
      : null,
    database: req.body.database ? req.body.database : null,

    icon: req.files?.icon[0].filename,
    preview: req.files?.preview[0].filename,
    screenshot1: req.files?.screenshot1
      ? req.files?.screenshot1[0].filename
      : null,
    screenshot2: req.files?.screenshot2
      ? req.files?.screenshot2[0].filename
      : null,
    screenshot3: req.files?.screenshot3
      ? req.files?.screenshot3[0].filename
      : null,
    screenshot4: req.files?.screenshot4
      ? req.files?.screenshot4[0].filename
      : null,
    screenshot5: req.files?.screenshot5
      ? req.files?.screenshot5[0].filename
      : null,
    screenshot6: req.files?.screenshot6
      ? req.files?.screenshot6[0].filename
      : null,
    screenshot7: req.files?.screenshot7
      ? req.files?.screenshot7[0].filename
      : null,
    screenshot8: req.files?.screenshot8
      ? req.files?.screenshot8[0].filename
      : null,
    mainZip: req.files?.mainZip ? req.files?.mainZip[0].filename : null,
  };

  // Create the product

  try {
    console.log(data);
    const product = await Product.create(data);
    return res.status(201).json({
      success: true,
      status: 201,
      message: 'product created',
      product,
    });
  } catch (error) {
    // console.log(data)
    console.log(error);
    // TODO: Remove all added files in case of error
    data.icon &&
      fs.unlink(`uploads/product/${data.icon.filename}`, (err) => {
        if (err) return console.log(err);
        console.log('icon file deleted successfully');
      });
    data.preview &&
      fs.unlink(`uploads/product/${data.preview.filename}`, (err) => {
        if (err) return console.log(err);
        console.log('preview file deleted successfully');
      });
    data.screenshot1 &&
      fs.unlink(`uploads/product/${data.screenshot1.filename}`, (err) => {
        if (err) return console.log(err);
        console.log('screenshot1 file deleted successfully');
      });
    data.screenshot2 &&
      fs.unlink(`uploads/product/${data.screenshot2.filename}`, (err) => {
        if (err) return console.log(err);
        console.log('screenshot2 file deleted successfully');
      });
    data.screenshot3 &&
      fs.unlink(`uploads/product/${data.screenshot3.filename}`, (err) => {
        if (err) return console.log(err);
        console.log('screenshot3 file deleted successfully');
      });
    data.screenshot4 &&
      fs.unlink(`uploads/product/${data.screenshot4.filename}`, (err) => {
        if (err) return console.log(err);
        console.log('screenshot4 file deleted successfully');
      });
    data.screenshot5 &&
      fs.unlink(`uploads/product/${data.screenshot5.filename}`, (err) => {
        if (err) return console.log(err);
        console.log('screenshot5 file deleted successfully');
      });
    data.screenshot6 &&
      fs.unlink(`uploads/product/${data.screenshot6.filename}`, (err) => {
        if (err) return console.log(err);
        console.log('screenshot6 file deleted successfully');
      });
    data.screenshot7 &&
      fs.unlink(`uploads/product/${data.screenshot7.filename}`, (err) => {
        if (err) return console.log(err);
        console.log('screenshot7 file deleted successfully');
      });
    data.screenshot8 &&
      fs.unlink(`uploads/product/${data.screenshot8.filename}`, (err) => {
        if (err) return console.log(err);
        console.log('screenshot8 file deleted successfully');
      });
    data.mainZip &&
      fs.unlink(`uploads/product/${data.mainZip.filename}`, (err) => {
        if (err) return console.log(err);
        console.log('mainZip file deleted successfully');
      });

    return res.status(403).json({ success: false, error: error });
  }
};

// *  ==================== END ====================

// TODO: Update product info

// *  ==================== START ====================

const updateProduct = async (req, res, next) => {
  // Get the product selected

  const { id } = req.params;
  try {
    let selectedProduct = await Product.findOne({ where: { id: id } });
    selectedProduct = selectedProduct.dataValues;

    let data = {
      name: req.body.name ? req.body.name : selectedProduct.name,
      shortDescription: req.body.shortDescription
        ? req.body.shortDescription
        : selectedProduct.shortDescription,
      description: req.body.description
        ? req.body.description
        : selectedProduct.description,
      features: req.body.features
        ? req.body.features
        : selectedProduct.features,
      liveDemo: req.body.liveDemo
        ? req.body.liveDemo
        : selectedProduct.liveDemo,
      priceSingle: req.body.priceSingle
        ? req.body.priceSingle
        : selectedProduct.priceSingle,
      priceMultiple: req.body.priceMultiple
        ? req.body.priceMultiple
        : selectedProduct.priceMultiple,
      category: req.body.category
        ? req.body.category
        : selectedProduct.category,
      subcategory: req.body.subcategory
        ? req.body.subcategory
        : selectedProduct.subcategory,
      user: req?.user ? req?.user : selectedProduct.user,
      operatingSystems: req.body.operatingSystems
        ? req.body.operatingSystems
        : selectedProduct.operatingSystems,
      filesIncluded: req.body.filesIncluded
        ? req.body.filesIncluded
        : selectedProduct.filesIncluded,
      supportedCms: req.body.supportedCms
        ? req.body.supportedCms
        : selectedProduct.supportedCms,
      htmlFrameworks: req.body.htmlFrameworks
        ? req.body.htmlFrameworks
        : selectedProduct.htmlFrameworks,
      jsFrameworks: req.body.jsFrameworks
        ? req.body.jsFrameworks
        : selectedProduct.jsFrameworks,
      softwareVersions: req.body.softwareVersions
        ? req.body.softwareVersions
        : selectedProduct.softwareVersions,
      softwareFrameworks: req.body.softwareFrameworks
        ? req.body.softwareFrameworks
        : selectedProduct.softwareFrameworks,
      database: req.body.database
        ? req.body.database
        : selectedProduct.operatingSystems,

      icon:
        req.files && req.files?.icon
          ? req.files?.icon[0].filename
          : selectedProduct.icon,
      preview:
        req.files && req.files?.preview
          ? req.files?.preview[0].filename
          : selectedProduct.preview,
      screenshot1:
        req.files && req.files?.screenshot1
          ? req.files?.screenshot1[0].filename
          : selectedProduct.screenshot1,
      screenshot2:
        req.files && req.files?.screenshot2
          ? req.files?.screenshot2[0].filename
          : selectedProduct.screenshot2,
      screenshot3:
        req.files && req.files?.screenshot3
          ? req.files?.screenshot3[0].filename
          : selectedProduct.screenshot3,
      screenshot4:
        req.files && req.files?.screenshot4
          ? req.files?.screenshot4[0].filename
          : selectedProduct.screenshot4,
      screenshot5:
        req.files && req.files?.screenshot5
          ? req.files?.screenshot5[0].filename
          : selectedProduct.screenshot5,
      screenshot6:
        req.files && req.files?.screenshot6
          ? req.files?.screenshot6[0].filename
          : selectedProduct.screenshot6,
      screenshot7:
        req.files && req.files?.screenshot7
          ? req.files?.screenshot7[0].filename
          : selectedProduct.screenshot7,
      screenshot8:
        req.files && req.files?.screenshot8
          ? req.files?.screenshot8[0].filename
          : selectedProduct.screenshot8,
      mainZip:
        req.files && req.files?.mainZip
          ? req.files?.mainZip[0].filename
          : selectedProduct.mainZip,
    };

    try {
      // update product
      await Product.update(data, { where: { id: id } });

      // delete previous files after updating them

      if (req.files && req.files?.icon) {
        fs.unlink(`uploads/product/${selectedProduct.icon}`, (err) => {
          if (err) return console.log(err);
          console.log('icon file deleted successfully');
        });
      }
      if (req.files && req.files?.preview) {
        fs.unlink(`uploads/product/${selectedProduct.preview}`, (err) => {
          if (err) return console.log(err);
          console.log('preview file deleted successfully');
        });
      }
      if (req.files && req.files?.mainZip) {
        fs.unlink(`uploads/product/${selectedProduct.mainZip}`, (err) => {
          if (err) return console.log(err);
          console.log('mainZip file deleted successfully');
        });
      }
      if (req.files && req.files?.screenshot1) {
        fs.unlink(`uploads/product/${selectedProduct.screenshot1}`, (err) => {
          if (err) return console.log(err);
          console.log('screenshot1 file deleted successfully');
        });
      }
      if (req.files && req.files?.screenshot4) {
        fs.unlink(`uploads/product/${selectedProduct.screenshot4}`, (err) => {
          if (err) return console.log(err);
          console.log('screenshot4 file deleted successfully');
        });
      }
      if (req.files && req.files?.screenshot5) {
        fs.unlink(`uploads/product/${selectedProduct.screenshot5}`, (err) => {
          if (err) return console.log(err);
          console.log('screenshot5 file deleted successfully');
        });
      }
      if (req.files && req.files?.screenshot6) {
        fs.unlink(`uploads/product/${selectedProduct.screenshot6}`, (err) => {
          if (err) return console.log(err);
          console.log('screenshot6 file deleted successfully');
        });
      }
      if (req.files && req.files?.screenshot7) {
        fs.unlink(`uploads/product/${selectedProduct.screenshot7}`, (err) => {
          if (err) return console.log(err);
          console.log('screenshot7 file deleted successfully');
        });
      }
      if (req.files && req.files?.screenshot8) {
        fs.unlink(`uploads/product/${selectedProduct.screenshot8}`, (err) => {
          if (err) return console.log(err);
          console.log('screenshot8 file deleted successfully');
        });
      }

      return res
        .status(201)
        .json({ success: true, message: 'Product updated successfully' });
    } catch (err) {
      console.log(error);
      return res.status(403).json({ success: false, err });
    }
  } catch (error) {
    console.log(error);
    return res.status(403).json({ success: false, error });
  }
};

// *  ==================== END ====================

// TODO: Get product by Id

// *  ==================== START ====================

const getProductById = async (req, res, next) => {
  const { id } = req.params;

  try {
    let product = await Product.findOne({ where: { id: id } });

    product = product.dataValues;

    // update user id to user info
    let defaultUser = await User.findOne({ where: { id: product.user } });

    defaultUser = defaultUser.dataValues;

    let user = {
      fullName: defaultUser.fullName,
      username: defaultUser.username,
      email: defaultUser.email,
    };

    product.user = user;

    // update category id to category info
    let defaultCategory = await Category.findOne({
      whre: { id: product.category },
    });

    defaultCategory = defaultCategory.dataValues;
    product.category = defaultCategory;

    // update subcategory id to subcategory info
    let defaultSubcategory = await Subctegory.findOne({
      whre: { id: product.subcategory },
    });

    defaultSubcategory = defaultSubcategory.dataValues;
    product.subcategory = defaultSubcategory;

    let data = {
      views: product.views + 1,
    };

    try {
      // Views Incrementation
      await Product.update(data, { where: { id: id } });

      return res.status(200).json({success: true, product: product});
    } catch (error) {
      console.log(error);
      return res.status(403).json({ success: false, error });
    }
     
   
  } catch (error) {
    console.log(error);
    return res.status(403).json({ success: false, error });
  }
};

// *  ==================== END ====================

// TODO: Get All products

// *  ==================== START ====================

const getAllProducts = async (req, res, next) => {
  const { category } = req.params;

  try {
    let products = await Product.findAll();
    let list = [];
    await Promise.all(
      products.map(async (product) => {
        // update user id to user info
        let defaultUser = await User.findOne({ where: { id: product.user } });

        defaultUser = defaultUser.dataValues;

        let user = {
          fullName: defaultUser.fullName,
          username: defaultUser.username,
          email: defaultUser.email,
        };

        // update category id to category info
        let category = await Category.findOne({
          whre: { id: product.category },
        });

        category = category.dataValues;

        // update subcategory id to subcategory info
        let subcategory = await Subctegory.findOne({
          whre: { id: product.subcategory },
        });

        subcategory = subcategory.dataValues;

        const obj = await {
          ...product.dataValues,
          user: user,
          category: category,
          subcategory: subcategory,
        };
        await list.push(obj);
      })
    );

    return res.status(201).json({ success: true, products: list });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ success: false, error });
  }
};

// *  ==================== END ====================

//** Products Filters **/

// TODO: Get products by category

// *  ==================== START ====================

const getProductsByCategory = async (req, res, next) => {
  const { category } = req.params;

  try {
    let products = await Product.findAll({ where: { category: category } });
    let list = [];
    await Promise.all(
      products.map(async (product) => {
        // update user id to user info
        let defaultUser = await User.findOne({ where: { id: product.user } });

        defaultUser = defaultUser.dataValues;

        let user = {
          fullName: defaultUser.fullName,
          username: defaultUser.username,
          email: defaultUser.email,
        };

        // update category id to category info
        let category = await Category.findOne({
          whre: { id: product.category },
        });

        category = category.dataValues;

        // update subcategory id to subcategory info
        let subcategory = await Subctegory.findOne({
          whre: { id: product.subcategory },
        });

        subcategory = subcategory.dataValues;

        const obj = await {
          ...product.dataValues,
          user: user,
          category: category,
          subcategory: subcategory,
        };
        await list.push(obj);
      })
    );

    return res.status(201).json({ success: true, products: list });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ success: false, error });
  }
};

// *  ==================== END ====================

// TODO: Get products by subcategory

// *  ==================== START ====================

const getProductsBySubcategory = async (req, res, next) => {
  const { subcategory } = req.params;

  try {
    let products = await Product.findAll({
      where: { subcategory: subcategory },
    });
    let list = [];
    await Promise.all(
      products.map(async (product) => {
        // update user id to user info
        let defaultUser = await User.findOne({ where: { id: product.user } });

        defaultUser = defaultUser.dataValues;

        let user = {
          fullName: defaultUser.fullName,
          username: defaultUser.username,
          email: defaultUser.email,
        };

        // update category id to category info
        let category = await Category.findOne({
          whre: { id: product.category },
        });

        category = category.dataValues;

        // update subcategory id to subcategory info
        let subcategory = await Subctegory.findOne({
          whre: { id: product.subcategory },
        });

        subcategory = subcategory.dataValues;

        const obj = await {
          ...product.dataValues,
          user: user,
          category: category,
          subcategory: subcategory,
        };
        await list.push(obj);
      })
    );

    return res.status(201).json({ success: true, products: list });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ success: false, error });
  }
};

// *  ==================== END ====================

// TODO: Get products by name

// *  ==================== START ====================

const getProductsByName = async (req, res, next) => {
  const { name } = req.params;

  try {
    let products = await Product.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
    });
    let list = [];
    await Promise.all(
      products.map(async (product) => {
        // update user id to user info
        let defaultUser = await User.findOne({ where: { id: product.user } });

        defaultUser = defaultUser.dataValues;

        let user = {
          fullName: defaultUser.fullName,
          username: defaultUser.username,
          email: defaultUser.email,
        };

        // update category id to category info
        let category = await Category.findOne({
          whre: { id: product.category },
        });

        category = category.dataValues;

        // update subcategory id to subcategory info
        let subcategory = await Subctegory.findOne({
          whre: { id: product.subcategory },
        });

        subcategory = subcategory.dataValues;

        const obj = await {
          ...product.dataValues,
          user: user,
          category: category,
          subcategory: subcategory,
        };
        await list.push(obj);
      })
    );

    return res.status(201).json({ success: true, products: list });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ success: false, error });
  }
};

// *  ==================== END ====================

// TODO: Get products by user

// *  ==================== START ====================

const getProductsByUser = async (req, res, next) => {
  const { user } = req.params;

  try {
    let products = await Product.findAll({
      where: { user: user },
    });
    let list = [];
    await Promise.all(
      products.map(async (product) => {
        // update user id to user info
        let defaultUser = await User.findOne({ where: { id: product.user } });

        defaultUser = defaultUser.dataValues;

        let user = {
          fullName: defaultUser.fullName,
          username: defaultUser.username,
          email: defaultUser.email,
        };

        // update category id to category info
        let category = await Category.findOne({
          whre: { id: product.category },
        });

        category = category.dataValues;

        // update subcategory id to subcategory info
        let subcategory = await Subctegory.findOne({
          whre: { id: product.subcategory },
        });

        subcategory = subcategory.dataValues;

        const obj = await {
          ...product.dataValues,
          user: user,
          category: category,
          subcategory: subcategory,
        };
        await list.push(obj);
      })
    );

    return res.status(201).json({ success: true, products: list });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ success: false, error });
  }
};

// *  ==================== END ====================

// TODO: Delete product

// *  ==================== START ====================

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    let product = await Product.findOne({where: {id: id}})
    product = product.dataValues

    await Product.destroy({ where: { id: id } });


    // delete previous files after updating them

    if (product.icon) {
      fs.unlink(`uploads/product/${product.icon}`, (err) => {
        if (err) return console.log(err);
        console.log('icon file deleted successfully');
      });
    }
    if (product.preview) {
      fs.unlink(`uploads/product/${product.preview}`, (err) => {
        if (err) return console.log(err);
        console.log('preview file deleted successfully');
      });
    }
    if (product.mainZip) {
      fs.unlink(`uploads/product/${product.mainZip}`, (err) => {
        if (err) return console.log(err);
        console.log('mainZip file deleted successfully');
      });
    }
    if (product.screenshot1) {
      fs.unlink(`uploads/product/${product.screenshot1}`, (err) => {
        if (err) return console.log(err);
        console.log('screenshot1 file deleted successfully');
      });
    }
    if (product.screenshot4) {
      fs.unlink(`uploads/product/${product.screenshot4}`, (err) => {
        if (err) return console.log(err);
        console.log('screenshot4 file deleted successfully');
      });
    }
    if (product.screenshot5) {
      fs.unlink(`uploads/product/${product.screenshot5}`, (err) => {
        if (err) return console.log(err);
        console.log('screenshot5 file deleted successfully');
      });
    }
    if (product.screenshot6) {
      fs.unlink(`uploads/product/${product.screenshot6}`, (err) => {
        if (err) return console.log(err);
        console.log('screenshot6 file deleted successfully');
      });
    }
    if (product.screenshot7) {
      fs.unlink(`uploads/product/${product.screenshot7}`, (err) => {
        if (err) return console.log(err);
        console.log('screenshot7 file deleted successfully');
      });
    }
    if (product.screenshot8) {
      fs.unlink(`uploads/product/${product.screenshot8}`, (err) => {
        if (err) return console.log(err);
        console.log('screenshot8 file deleted successfully');
      });
    }
    return res
      .status(201)
      .json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.log(error);
    return res
      .status(403)
      .json({ success: false, error: 'An error occurred!' });
  }
};

// *  ==================== END ====================


//** Whislist Fcts**//
// TODO: Add Product To Whislist
// *  ==================== START ====================

const addProductToWhislist = async (req, res, next) => {
  const data = {
    user: req.body.userid,
    product: req.body.prodid,
  };
  try {
    const wishlistprod = await Whishlist.create(data);
    console.log(req.cookies.token)
    return res.status(201).json({
      success: true,
      message: 'Product added successfully to the whishlist',
      wishlistprod,
    });
  } catch (error) {
    return res.status(403).json({ success: false, error: error });
  }
};

// *  ==================== END ====================

// TODO: Delete the product from whishlist 

// *  ==================== START ====================

const deleteWhislistProd = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Whishlist.destroy({ where: { id: id } });
    return res
      .status(201)
      .json({ success: true, message: 'The product has removed successfully' });
  } catch (error) {
    console.log(error);
    return res
      .status(403)
      .json({ success: false, error: 'An error occurred!' });
  }
};

// *  ==================== END ====================


//** Likes Fcts**//
// TODO: Like a Product
// *  ==================== START ====================

const addLikesToProduct = async (req, res, next) => {
  const data = {
    user: req.body.userid,
    product: req.body.prodid,
  };
  try {
    let product = await Product.findOne({ where: { id: prodid } });

    product = product.dataValues;

    let data = {
      likes: product.likes + 1,
    };
    
    try {
      // Likes Incrementation
      await Product.update(data, { where: { id: prodid } });

      return res.status(200).json({success: true, product: product});
    } catch (error) {
      console.log(error);
      return res.status(403).json({ success: false, error });
    }
     
  } catch (error) {
    return res.status(403).json({ success: false, error: error });
  }
};

// *  ==================== END ====================


module.exports = {
  addProduct,
  updateProduct,
  getProductById,
  getProductsByCategory,
  getProductsBySubcategory,
  getProductsByName,
  getProductsByUser,
  deleteProduct,
  getAllProducts,
  addProductToWhislist,
  deleteWhislistProd,
  addLikesToProduct,

};
