import { FiCoffee, FiCamera, FiMonitor } from "react-icons/fi";
import { RiCarLine } from "react-icons/ri";
import {
  EquipmentContainer,
  Card,
} from "../Components/styles/HomeMyEquipment.styled";

export const HomeMyEquipment = () => {
  return (
    <EquipmentContainer>
      <h2>My Equipment</h2>
      <Card>
        <FiCamera size={42} />
        <h4>Camera</h4>
        <p>
          I take all my photos with <strong>Sony A7 IV</strong>. It's an
          incredibly powerful all-rounder that feels at home with most of my
          styles, from portraits to weddings and wildlife.
        </p>
      </Card>
      <Card>
        <FiMonitor size={42} />
        <h4>Photoshop</h4>
        <p>
          For editing my photos I use <strong>Adobe Photoshop</strong> - the
          best photo editing software which transform an average picture into
          something truly incredible.
        </p>
      </Card>
      <Card>
        <RiCarLine size={42} />
        <h4>Car</h4>
        <p>
          There's virtually no rival that can match the{" "}
          <strong>Range Rover’s</strong> multi-tasking ability. I could go
          everywhere in that masterpiece.
        </p>
      </Card>
      <Card>
        <FiCoffee size={42} />
        <h4>My drink of choice</h4>
        <p>
          Last, but not least, my fuel, my potion, my love:{" "}
          <strong>Coffee</strong>, a lot of coffee...
        </p>
      </Card>
    </EquipmentContainer>
  );
};
