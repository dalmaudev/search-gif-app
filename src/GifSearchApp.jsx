import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifSearchApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);

    return (
        <>
            <h2>GifSearch App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
};
