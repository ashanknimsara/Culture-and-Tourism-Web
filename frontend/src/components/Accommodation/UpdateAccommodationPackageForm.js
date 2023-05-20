import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateAccommodationPackageForm({ accommodationPackageId }) {
 // accommodationPackageId == "64682af8fcd36af9c3145bae";

  const [id] = useState("64682af8fcd36af9c3145bae");
  const [package_title, setPackage_title] = useState("");
  const [Price_Range, setPrice_Range] = useState("");
  const [package_description, setPackage_description] = useState("");
  const [Package_Offers_Description, setPackage_Offers_Description] = useState("");
  const [Accommodation_id, setAccommodation_id] = useState("6457bdfabe1d19c399c1b778");

  useEffect(() => {
    fetchAccommodationPackage();
  }, []);

  const fetchAccommodationPackage = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/AccommodationPackage/get-AccommodationPackage/${id}`);
      const accommodationPackage = response.data;

      setPackage_title(accommodationPackage.package_title);
      setPrice_Range(accommodationPackage.Price_Range);
      setPackage_description(accommodationPackage.package_description);
      setPackage_Offers_Description(accommodationPackage.Package_Offers_Description);
      setAccommodation_id(accommodationPackage.Accommodation_id);
    } catch (error) {
      console.error("Error fetching accommodation package:", error);
    }
  };

  const updateAccommodationPackage = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/AccommodationPackage/update-AccommodationPackage/${id}`, {
        package_title,
        Price_Range,
        package_description,
        Package_Offers_Description,
        Accommodation_id
      });

      // Redirect or perform other actions after successful update
    } catch (error) {
      console.error("Error updating accommodation package:", error);
    }
  };

  return (
    <div>
      <h1>Update Accommodation Package</h1>
      <form onSubmit={updateAccommodationPackage}>
        <label>
          Package Title:
          <input type="text" value={package_title} onChange={(e) => setPackage_title(e.target.value)}
          />
        </label>
        <label>
          Price Range:
          <input
            type="text"
            value={Price_Range}
            onChange={(e) => setPrice_Range(e.target.value)}
          />
        </label>
        <label>
          Package Description:
          <input
            type="text"
            value={package_description}
            onChange={(e) => setPackage_description(e.target.value)}
          />
        </label>
        <label>
          Package Offers Description:
          <input
            type="text"
            value={Package_Offers_Description}
            onChange={(e) => setPackage_Offers_Description(e.target.value)}
          />
        </label>
        <label>
          Accommodation ID:
          <input
            type="text"
            value={Accommodation_id}
            onChange={(e) => setAccommodation_id(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
