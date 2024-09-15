// src/pages/badges.jsx
import React from "react";
import Badge from "../components/Badge"; // Importera Badge-komponenten

const BadgesPage = () => {
  return (
    <div>
      <h1>Badge Component Showcase</h1>
      <Badge size="large" color="yellow" icon={true}>
        Large Yellow Badge
      </Badge>
      <Badge size="small" color="gray" icon={false}>
        Small Gray Badge
      </Badge>
    </div>
  );
};

export default BadgesPage;
