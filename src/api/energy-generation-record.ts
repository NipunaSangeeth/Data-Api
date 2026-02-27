import express from "express";
import { getAllEnergyGenerationRecordsBySerialNumber } from "../application/energy-generation-record";


const energyGenerationRecordRouter = express.Router();

energyGenerationRecordRouter
  .route("/solar-unit/:serialNumber")
  .get(getAllEnergyGenerationRecordsBySerialNumber);

export default energyGenerationRecordRouter;

// NOTE: Now We no have any real time IOT part to POST the DATA. 
// therefor we use Seed Script Create some Units and relevent data to the UNITS if we have IOT we can Use POSTendpoint(Using SerialNumber) though it.
