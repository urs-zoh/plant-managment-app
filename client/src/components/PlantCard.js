import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchPlants } from "../store/plantSlice";

const PlantCard = ({ plant }) => {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5012/plants/${plant.id}`);
            dispatch(fetchPlants());
        } catch (error) {
            console.error("Error deleting plant:", error);
        }
    };

    return (
        <div className="card shadow-sm mb-4 me-4" style={{ maxWidth: '18rem' }}>
            <div className="card-body">
                <h3 className="card-title text-uppercase">{plant.name}</h3>

                <h5 className="card-subtitle mb-2 text-muted" style={{ fontStyle: 'italic' }}>
                    {plant.latinName}
                </h5>

                <div className="mb-2">
                    <span className="badge bg-primary me-2">{plant.category}</span>
                    <span className="badge bg-secondary">{plant.status}</span>
                </div>

                <p className="card-text"><strong>Description:</strong> {plant.description}</p>

                <div className="d-flex justify-content-between mt-3">
                    <Link to={`/edit/${plant.id}`} className="btn btn-warning btn-sm">
                        Edit
                    </Link>

                    <button onClick={handleDelete} className="btn btn-danger btn-sm">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;