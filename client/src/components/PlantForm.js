import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPlants } from "../store/plantSlice";

const PlantForm = ({ isEdit }) => {
    const [plant, setPlant] = useState({
        name: "",
        latinName: "",
        category: "tree",
        status: "common",
        description: "",
    });

    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isEdit && id) {
            axios.get(`http://localhost:5012/plants/${id}`)
                .then((response) => {
                    setPlant(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching plant:", error);
                    navigate("/");
                });
        }
    }, [isEdit, id, navigate]);

    const handleChange = (e) => {
        setPlant({ ...plant, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!plant.name || !plant.latinName || !plant.description) {
            alert("Please fill all the required fields.");
            return;
        }

        try {
            if (isEdit) {
                await axios.put(`http://localhost:5012/plants/${id}`, plant);
            } else {
                await axios.post("http://localhost:5012/plants", plant);
            }

            dispatch(fetchPlants());
            navigate("/");
        } catch (error) {
            console.error("Error saving plant:", error);
            alert("Error occurred while saving the plant. Please try again.");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">{isEdit ? "Edit Plant" : "Add New Plant"}</h2>
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={plant.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="latinName" className="form-label">Latin Name</label>
                    <input
                        type="text"
                        id="latinName"
                        name="latinName"
                        value={plant.latinName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={plant.category}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="tree">Tree</option>
                        <option value="shrub">Shrub</option>
                        <option value="flower">Flower</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={plant.status}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option value="common">Common</option>
                        <option value="rare">Rare</option>
                        <option value="endangered">Endangered</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={plant.description}
                        onChange={handleChange}
                        className="form-control"
                        rows="4"
                    />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                        {isEdit ? "Update Plant" : "Add Plant"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PlantForm;