import { Table } from '../models/TableSchema.js';
import { sheets } from '../config/googleSheets.js';

export const createTable = async (req, res) => {
  try {
    const table = new Table({ userId: req.user.id, columns: req.body.columns });
    await table.save();
    res.status(201).json(table);
  } catch (error) {
    res.status(500).json({ message: 'Error creating table' });
  }
};

export const fetchData = async (req, res) => {
  try {
    const { spreadsheetId, range } = req.query;
    const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
    res.json(response.data.values);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data' });
  }
};