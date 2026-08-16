const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

let events = [
  { id: 1, title: "Team Meeting" },
  { id: 2, title: "Gym" },
  { id: 3, title: "Focus Work" },
  { id: 4, title: "Dinner" }
]

// GET EVENTS
app.get("/events", (req, res) => {
  res.json(events)
})

// SWIPE ACTION (remove event)
app.post("/swipe", (req, res) => {
  const { id } = req.body
  events = events.filter(e => e.id !== id)
  res.json({ success: true })
})

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001")
})
