const express = require("express");
const {
  createAbsensi,
  getAllAbsensi,
  getAbsensiById,
  updateAbsensiById,
  deleteAbsensiById
} = require("../usecase/absensi_usecase");

const router = express.Router();

router.post("/addAbsensi", async (req, res) => {
  try {
    const newAbsensiData = req.body;

    const absensi = await createAbsensi(newAbsensiData);

    res.json({
      data: absensi,
      message: "Absensi created succesfully",
    });
  } catch (error) {
    res.status(400).json({
      error: "failed created absensi",
      message: error.message,
    });
  }
});

router.get("/absensi", async (req, res) => {
  const absensis = await getAllAbsensi();

  res.send(absensis);
});

router.get("/absensi/:id", async (req, res) => {
  try {
    const absensiId = req.params.id;
    const absensi = await getAbsensiById(absensiId);

    res.send({
      data: absensi,
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.put("/absensi/:id", async (req, res) => {
  const absensiId = req.params.id;
  const absensiData = req.body;

  if (!(absensiData.status && absensiData.face)) {
    return res.status(400).send("some field are missing");
  }

  const absensi = await updateAbsensiById(absensiId, absensiData);

  res.send({
    data: absensi,
    message: "update absensi succesfully",
  });
});

router.delete("/absensi/:id", async (req, res) => {
  try {
    const absensiId = req.params.id
    await deleteAbsensiById(absensiId)

    res.send("delete Absensi succesfully")
  } catch (error) {
    res.status(400).send("failed deleted")
  }
})

module.exports = router;
