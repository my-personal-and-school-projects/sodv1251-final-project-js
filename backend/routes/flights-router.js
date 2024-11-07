// flights-router.js
import express from "express";
import { getJson, config } from "serpapi";
import dotenv from "dotenv";

dotenv.config();
config.api_key = process.env.API_KEY;

const flightsRouter = express.Router();

flightsRouter.get("/", async (req, res) => {
  try {
    const flights = await getJson({
      engine: "google_flights",
      departure_id: "PEK",
      arrival_id: "IST",
      outbound_date: "2024-11-08",
      return_date: "2024-11-14",
      travel_class: "4",
      currency: "CAD",
      hl: "en",
    });
    res.json(flights);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ message: "Error fetching flight data" });
  }
});

export default flightsRouter;
