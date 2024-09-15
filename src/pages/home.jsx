// src/pages/ComponentsPage.jsx
import { Link } from "react-router-dom";
import MyButton from "../components/Button";
import Alert from "../components/Alert";
import Badge from "../components/Badge";
import Card from "../components/Card";

const HomePage = () => (
  <div>
    <h1>Component Showcase</h1>
    <h2>Buttons</h2>
    <Link to="/buttons">Go to Button Showcase</Link> {/* Link to ButtonPage */}
    <MyButton size="large" color="red" disabled={false}>
      Large Red Button
    </MyButton>
    <MyButton size="small" color="blue" disabled={true}>
      Small Blue Button
    </MyButton>
    <h2>Alerts</h2>
    <Alert color="red" icon={true}>
      Error Alert
    </Alert>
    <Alert color="green" icon={false}>
      Success Alert
    </Alert>
    <h2>Badges</h2>
    <Badge size="large" color="yellow" icon={true}>
      Gold Badge
    </Badge>
    <Badge size="small" color="gray" icon={false}>
      Silver Badge
    </Badge>
    <h2>Cards</h2>
    <Card
      href="https://example.com"
      imgSrc="/path/to/image.jpg"
      imgAlt="Example image"
    >
      <p>This is a card with some text content.</p>
    </Card>
  </div>
);

export default HomePage;
