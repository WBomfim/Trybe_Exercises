const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const { JWT_KEY } = process.env;

const checkUserId = (id, res, req, next) => {
  if (Number(id) !== Number(req.params.id)) {
    return res
      .status(401)
      .json({ message: 'Acesso negado' });
  }
  
  next();
};

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(400).json({ message: 'Token não encontrado ou informado' });
    }

    const { id } = jwt.verify(authorization, JWT_KEY);

    const user = await User.findOne({ where: { id } });

    if (!user) throw Error;

    checkUserId(id, res, req, next);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao acessar o endpoint',
      error: 'É necessário um token válido para acessar esse endpoint',
    });
  }
};
