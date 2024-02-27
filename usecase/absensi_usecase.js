const prisma = require("../config/db");

const {
  insertAbsensi,
  findAbsensi,
  findAbsensiById,
  updateAbsensi,
  deleteAbsensi,
} = require("../repository/absensi_repository");

const createAbsensi = async (newAbsensiData) => {
  const absensi = await insertAbsensi(newAbsensiData);

  return absensi;
};

const getAllAbsensi = async () => {
  const absensi = await findAbsensi();

  return absensi;
};

const getAbsensiById = async (id) => {
  const absensi = await findAbsensiById(id);

  return absensi;
};

const updateAbsensiById = async (id, absensiData) => {
  await getAbsensiById(id);

  const absensi = await updateAbsensi(id, absensiData);

  return absensi;
};

const deleteAbsensiById = async (id) => {
  await getAbsensiById(id);

  await deleteAbsensi(id);
};
module.exports = {
  createAbsensi,
  getAllAbsensi,
  getAbsensiById,
  updateAbsensiById,
  deleteAbsensiById
};
