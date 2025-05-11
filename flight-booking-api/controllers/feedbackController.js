import db from '../config/db.js';

export const submitFeedback = (req, res) => {
  const { rating, comments } = req.body;
  const user_id = req.userId;


  const sql = `INSERT INTO feedbacks (user_id, rating, comments) VALUES (?, ?, ?)`;
  db.query(sql, [user_id, rating, comments], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Feedback submitted successfully' });
  });
};

export const getUserFeedbacks = (req, res) => {
  const user_id = req.userId;

  const sql = `SELECT id, rating, comments, submitted_at FROM feedbacks WHERE user_id = ?`;
  db.query(sql, [user_id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
