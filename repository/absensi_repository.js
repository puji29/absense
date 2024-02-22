const prisma = require("../config/db");

const insertAbsensi = async (absensiData) => {
  const absensi = await prisma.absensi.create({
    data: {
      user_id: absensiData.user_id,
      absensi_date: new Date(),
      status: absensiData.status,
      face: absensiData.face,
      created_at: absensiData.created_at,
      updated_at: absensiData.updated_at,
    },
  });

  return absensi;
};

const findAbsensi = async () => {
  const absensi = await prisma.absensi.findMany();

  return absensi;
};

const findAbsensiById = async (id) => {
  const absensi = await prisma.absensi.findUnique({
    where: {
      id,
    },
  });

  return absensi;
};

const updateAbsensi = async (id, absensiData) => {
  const absensi = await prisma.absensi.update({
    where: {
      id: id,
    },
    data: {
      status: absensiData.status,
      face: absensiData.face,
      updated_at: new Date(),
    },
  });
  return absensi;
};

const deleteAbsensi = async (id) => {
  const absensi = await prisma.absensi.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  insertAbsensi,
  findAbsensi,
  findAbsensiById,
  updateAbsensi,
  deleteAbsensi
};
