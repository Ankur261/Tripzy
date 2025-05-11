import db from '../config/db.js';

export const bookFlight = (req, res) => {
  const { flight_id } = req.body;
  const user_id = req.userId;

  console.log('🧪 user_id:', user_id); // Debug

  const sql = `
    INSERT INTO bookings (user_id, flight_id, booking_time)
    VALUES (?, ?, NOW())
  `;

  db.query(sql, [user_id, flight_id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Flight booked successfully" });
  });
};

export const getUserBookings = (req, res) => {
 const user_id = req.userId;
 

  const sql = `
    SELECT b.id, f.flight_name, f.origin, f.destination, f.departure_time, f.arrival_time, f.price
    FROM bookings b
    JOIN flights f ON b.flight_id = f.id
    WHERE b.user_id = ?
  `;

  db.query(sql, [user_id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
