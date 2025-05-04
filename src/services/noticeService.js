const Notice = require('../models/noticeModel');

const createNotice = async (req) => {
  const user = req.user
  const {title, content} = req.body
  const notice = await Notice.create({
    title,content,
    postedBy:user._id
  })
  return notice;
};

const getAllNotices = async () => {
  return await Notice.find().sort({ createdAt: -1 });
};

const getNoticeById = async (id) => {
  return await Notice.findById(id);
};

const updateNotice = async (id, data) => {
  return await Notice.findByIdAndUpdate(id, data, { new: true });
};

const deleteNotice = async (id) => {
  return await Notice.findByIdAndDelete(id);
};

module.exports = {
  createNotice,
  getAllNotices,
  getNoticeById,
  updateNotice,
  deleteNotice
};