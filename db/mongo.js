const { MongoClient } = require("mongodb");
var ObjectId = require('mongodb').ObjectId

const dbName = "sessionStorageDemo";
const collName = "users";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const connectToMongo = async () => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collName);

  console.log("Connected To Mongo");

  return {
    collection,
    db
  };
};

// GUARDAR COSAS SELECCIONADAS CON USUARIO
const save = async function (user, cosas) {
  const { collection } = await connectToMongo();

  const res = await collection.findOne({
    name: user
  });

  // SI EL USUARIO EXISTE, HACER UPDATE A SUS COSAS GUARDADAS
  if (res) {
    await collection.updateOne({ name: user }, {
      $set: {
        cosas: cosas.split(',')
      }
    })
  } else {
    // SI EL USUARIO NO EXISTE, CREAR USUARIO Y GUARDAR SUS COSAS
    await collection.insertOne({
      name: user,
      cosas: cosas.split(',')
    })
  }

  const res2 = await collection.findOne({
    name: user
  });

  return res2
}

// CARGAR CONFIGURACIÓN DEL USUARIO
const load = async function (user) {
  const { collection } = await connectToMongo();

  const res = await collection.findOne({
    name: user
  });

  // SI EL USUARIO NO EXISTE, PONER EN CONSOLA QUE NO EXISTE
  if (!res) {
    throw 'Usuario Inexistente'
  }

  // SI EL USUARIO EXISTE, CARGAR SUS COSAS
  return res
}

module.exports = {
  client,
  url,
  dbName,
  collName,
  connectToMongo,
  save,
  load
};
