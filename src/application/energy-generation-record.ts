import { NextFunction, Request, Response } from "express";
import { EnergyGenarationRecord } from "../infrastructure/entities/EnergyGenarationRecord";

export const getAllEnergyGenerationRecordsBySerialNumber = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { serialNumber } = req.params;
    // Reads 'sinceTimestamp' from request URL query
    const { sinceTimestamp } = req.query;

    const filter: { serialNumber: string; timeStamp?: { $gt: Date } } = {
      serialNumber,
    };
    if (sinceTimestamp && typeof sinceTimestamp === "string") {
      filter.timeStamp = { $gt: new Date(sinceTimestamp) };
    }

    const energyGenerationRecords = await EnergyGenarationRecord.find(
      filter,
    ).sort({ timestamp: 1 });
    res.status(200).json(energyGenerationRecords);
    // const energyGenerationRecords = await EnergyGenarationRecord.find({
    //   serialNumber: serialNumber,
    // }).sort({ timeStamp: 1 });
    // res.status(200).json(energyGenerationRecords);
  } catch (error) {
    next(error);
  }
};
