import React from "react";
import Card from "../components/Card";

const CardPage = () => {
  return (
    <div>
      <h1>Card Component Showcase</h1>

      <h2>Card with Image</h2>
      <Card
        href="https://www.mathem.se/se/"
        imgSrc="/src/assets/styles/mat.jpeg"
        imgAlt="Example image"
      >
        This is a card with an image and some text content.
      </Card>

      <h2>Card without Image</h2>
      <Card href="https://toyspace.se/">
        This is a card without an image, just text content.
      </Card>
    </div>
  );
};

export default CardPage;
