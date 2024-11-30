import React from "react";
import PlantList from "../components/PlantList";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="container mt-4">
        <h1 className="text-center mb-4">Plant Management</h1>
        <div className="text-center mb-4">
            <Link to="/add" className="btn btn-primary">
                Add New Plant
            </Link>
        </div>
        <PlantList />
    </div>
);

export default HomePage;