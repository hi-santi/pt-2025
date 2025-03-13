require('dotenv').config();

const auth = (req, res, next) => {
  const apikey = req.headers['x-api-key'];

  if (!apikey || apikey !== process.env.APIKEY) {
    return res.status(401).json({
      menssage: "Acceso no autorizado"
    })
  }

  next();
}

module.exports = auth;