import db from '../config/db.js';

export const addFlight = (req, res) => {
  const { flight_name, origin, destination, departure_time, arrival_time, price } = req.body;

  const sql = `
    INSERT INTO flights (flight_name, origin, destination, departure_time, arrival_time, price)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [flight_name, origin, destination, departure_time, arrival_time, price], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Flight added successfully" });
  });
};

export const getAllFlights = (req, res) => {
  db.query("SELECT * FROM flights", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
