import styles from "./Quotation.module.css";

import car from "../assets/car.png";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";

function Quotation() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  // error
  const [error, setError] = useState("");
  // show modal
  const [showModal, setShowModal] = useState(false);
  // formData
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    vin: "",
    fuel_type: "",
    engine_type: "",
    engine_capacity: "",
    mileage: "",
    conditon: "",
  });

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        name === "brand" ||
        name === "year" ||
        name === "engine_capacity" ||
        name === "mileage"
          ? parseInt(value)
          : value,
    });
  };

  // handle error
  const validateForm = () => {
    if (
      !formData.brand ||
      !formData.model ||
      !formData.year ||
      !formData.conditon ||
      !formData.engine_capacity ||
      !formData.mileage ||
      !formData.engine_type ||
      !formData.vin ||
      !formData.color
    ) {
      setError("Invalid quotation order");
      return false;
    }
    return true;
  };

  // cancel
  const handleCancel = () => {
    setFormData({
      brand: "",
      model: "",
      year: "",
      color: "",
      vin: "",
      fuel_type: "",
      engine_type: "",
      engine_capacity: "",
      mileage: "",
      conditon: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setError("");

    if (!validateForm()) {
      return;
    }

    try {
      const res = await fetch("127.0.0.1:8000/shipping/shipping-request/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setShowModal(true);
      handleCancel();

      if (res.ok) {
        // eslint-disable-next-line no-unused-vars
        const data = await res.json();
      }
    } catch (e) {
      console.error("Error submitting form data: ", e);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) navigate("/login", { replace: true });
  }, [isAuthenticated]);

  return (
    <div className={styles.div}>
      <header>
        <h2> Get Quotation</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <h3>
          <img src={car} alt="" />
          Car Data
        </h3>
        <div className={styles.formContainer}>
          <div>
            <div>
              <label>Brand</label>
              <input
                type="number"
                placeholder="ID Brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Vehicle Identification Number (VIN)</label>
              <input
                type="text"
                placeholder="Vehicle Identification Number (VIN)"
                name="vin"
                value={formData.vin}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Fuel Type</label>
              <input
                type="text"
                placeholder="Fuel Type"
                name="fuel_type"
                value={formData.fuel_type}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Conditon (New/Used)</label>
              <input
                type="text"
                placeholder="Conditon (New/Used)"
                name="conditon"
                value={formData.conditon}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label>Modal</label>
              <input
                type="text"
                placeholder="Modal"
                name="model"
                value={formData.model}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Color</label>
              <input
                type="text"
                placeholder="Color"
                name="color"
                value={formData.color}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Engin Capacity</label>
              <input
                type="nubmer"
                placeholder="Engin Capacity"
                name="engine_capacity"
                value={formData.engine_capacity}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label>Year</label>
              <input
                type="number"
                placeholder="Year"
                name="year"
                value={parseInt(formData.year)}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Engine Type</label>
              <input
                type="text"
                placeholder="Engine Type"
                name="engine_type"
                value={formData.engine_type}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Mileage</label>
              <input
                type="numbrt"
                placeholder="Mileage"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.cancel} onClick={handleCancel}>
            Cancel
          </button>
          <button className={styles.send}>Send</button>
        </div>
      </form>
      {error && (
        <p
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "600",
          }}
        >
          {error}
        </p>
      )}
      {showModal && <Modal onClose={setShowModal} />}
    </div>
  );
}

export default Quotation;
