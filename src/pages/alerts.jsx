import React, { useState, useEffect } from "react";
import Alert from "../components/Alert";

const AlertsPage = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShowAlert(true); // Show alert when component mounts
  }, []);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <h1>Alerts Page</h1>
      {showAlert && (
        <Alert onClose={handleCloseAlert}>This is an alert message!</Alert>
      )}
    </div>
  );
};

export default AlertsPage;
