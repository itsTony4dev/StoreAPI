const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products route" });
};

const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "testing  products" });
};

module.exports= { getAllProducts, getAllProductsStatic };
