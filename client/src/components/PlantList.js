import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlants } from "../store/plantSlice";
import PlantCard from "./PlantCard";

const PlantList = () => {
    const dispatch = useDispatch();
    const plants = useSelector((state) => state.plants.plants);
    const status = useSelector((state) => state.plants.status);

    const [categoryFilter, setCategoryFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPlants());
        }
    }, [dispatch, status]);

    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredPlants = plants.filter((plant) => {
        const matchesCategory =
            categoryFilter === "all" || plant.category === categoryFilter;
        const matchesSearchQuery =
            plant.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearchQuery;
    });

    return (
        <div className="container mt-4">
            <h2 className="text-center">Plant List</h2>

            <div className="input-group mb-3">
                <input
                    type="text"
                    id="search"
                    className="form-control"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for a plant"
                    aria-label="Text input with dropdown button"
                />
                <select
                    id="categoryFilter"
                    className="form-select"
                    value={categoryFilter}
                    onChange={handleCategoryChange}
                >
                    <option value="all">All</option>
                    <option value="tree">Tree</option>
                    <option value="shrub">Shrub</option>
                    <option value="flower">Flower</option>
                </select>
            </div>

            <div className="d-flex flex-wrap justify-content-between">
                {filteredPlants.length === 0 ? (
                    <p>No plants found.</p>
                ) : (
                    filteredPlants.map((plant) => (
                        <div key={plant.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <PlantCard plant={plant} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default PlantList;