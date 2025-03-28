import mongoose from 'mongoose';
const TableSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  columns: [{ name: String, type: String }],
});
export const Table = mongoose.model('Table', TableSchema);