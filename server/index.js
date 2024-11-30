const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Your plant data (just an example)
let plants = [
    {
        "id": 1,
        "name": "Fern",
        "latinName": "Pteridophyta",
        "category": "shrub",
        "status": "common",
        "description": "Ferns are non-flowering plants that thrive in moist environments."
    },
    {
        "id": 2,
        "name": "Cactus",
        "latinName": "Cactaceae",
        "category": "shrub",
        "status": "rare",
        "description": "A plant known for its spines instead of leaves, often found in desert regions."
    },
    {
        "id": 3,
        "name": "Rose",
        "latinName": "Rosa",
        "category": "flower",
        "status": "common",
        "description": "Roses are red, roses are beautiful."
    },
    {
        "id": 4,
        "name": "Oak Tree",
        "latinName": "Quercus robur",
        "category": "tree",
        "status": "common",
        "description": "A large deciduous tree with lobed leaves."
    },
    {
        "id": 5,
        "name": "Tulip",
        "latinName": "Tulipa",
        "category": "flower",
        "status": "common",
        "description": "A bright spring flower with many colors."
    }
];

// Route to get all plants
app.get("/plants", (req, res) => {
    res.json(plants);
});

// Route to get a single plant by id

app.get("/plants/:id", (req, res) => {
    const plantId = parseInt(req.params.id);
    const plant = plants.find(plant => plant.id === plantId);

    if (plant) {
        res.json(plant);
    } else {
        res.status(404).json({ message: "Plant not found" });
    }
});

// Route to add a new plant
app.post("/plants", (req, res) => {
    const newPlant = req.body;
    newPlant.id = plants.length + 1; // Auto-generate id
    plants.push(newPlant);
    res.status(201).json(newPlant);
});

// Route to update a plant by id
app.put("/plants/:id", (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const index = plants.findIndex((plant) => plant.id === parseInt(id));

    if (index !== -1) {
        // Update the plant information
        plants[index] = { ...plants[index], ...updatedData };
        res.status(200).json(plants[index]); // Respond with the updated plant
    } else {
        res.status(404).json({ message: "Plant not found" }); // Respond if the plant isn't found
    }
});

// Route to delete a plant by id
app.delete("/plants/:id", (req, res) => {
    const { id } = req.params;
    const index = plants.findIndex((plant) => plant.id === parseInt(id));

    if (index !== -1) {
        const deletedPlant = plants.splice(index, 1); // Remove the plant from the array
        res.status(200).json(deletedPlant); // Respond with the deleted plant
    } else {
        res.status(404).json({ message: "Plant not found" }); // Respond if the plant isn't found
    }
});

// Start the server
app.listen(5012, () => {
    console.log("Server running on port 5012");
});