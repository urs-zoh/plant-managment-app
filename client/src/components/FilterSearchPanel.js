import React, { useState } from "react";

const FilterSearchPanel = ({ onFilter }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onFilter(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearch}
            // test"
            />
        </div>
    );
};

export default FilterSearchPanel;