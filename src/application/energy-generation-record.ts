import { NextFunction, Request, Response } from "express";
import { EnergyGenarationRecord } from "../infrastructure/entities/EnergyGenarationRecord";

export const getAllEnergyGenerationRecordsBySerialNumber = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { serialNumber } = req.params;
    const energyGenerationRecords = await EnergyGenarationRecord.find({
      serialNumber: serialNumber,
    }).sort({ timeStamp: 1 });
    res.status(200).json(energyGenerationRecords);
  } catch (error) {
    next(error);
  }
};

