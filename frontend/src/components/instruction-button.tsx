import { Button, Modal } from "antd";
import { useState } from "react";
const InstructionButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirstPart, setIsFirstPart] = useState();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const isFirstPartOpen = () => {
    setIsFirstPart((prev) => !prev);
  };

  return (
    <>
      <Button onClick={showModal}>Instruction</Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          style: { backgroundColor: "#1890ff", borderColor: "#1890ff" },
        }}
        centered
        width={1000}
      >
        <div className="text-3xl font-semibold text-center mb-2">
          <h1>Instruction</h1>
        </div>
        <div className="text-left text-sm">
          <div className="mt-1 mb-2">
            <h2 className="text-xl font-semibold">For Login & Registration</h2>
            <h3 className="text-base font-semibold">
              Use your Prolific ID to register and login as both username and
              password.
            </h3>
            <h3 className="text-base font-semibold">
              Username:<a className="font-normal text-sm">[your Prolific ID]</a>
            </h3>
            <h3 className="text-base font-semibold">
              Password:<a className="font-normal text-sm">[your Prolific ID]</a>
            </h3>
          </div>
          <h2 className="text-xl font-semibold mb-2">Task description</h2>
          <div className="mb-2">
            <h3 className="text-base font-semibold">What to Do:</h3>
            <p>Look at pictures of maps that show landmarks and people.</p>
          </div>
          <div className="mb-2">
            <h3 className="text-base font-semibold">Picture Details:</h3>
            <ul>
              <li>Map Size: 400x400 meters squared</li>
              <li>Interested Landmark: Light blue landmark</li>
              <li>People: Red dot (where people are)</li>
              <li>
                Landmark Entrances: Black rectangles (doors of the landmark)
              </li>
              <li>Other Places: Gray areas (surrounding spots)</li>
              <li>Roads: Light yellow paths (where cars go)</li>
            </ul>
          </div>
          <div className="mb-2">
            <h3 className="text-base font-semibold">Your Job:</h3>
            <p>
              Figure out where the person (red dot) is compared to the
              interested landmark (blue spot).
            </p>
          </div>
          <div className="mb-2">
            <h3 className="text-base font-semibold">
              Choices (Multiple answers are allowed):
            </h3>
            <ul className="ml-2">
              <li> - Front (in front of the interested landmark)</li>
              <li> - Near (close to the interested landmark)</li>
              <li> - Far (away from the interested landmark)</li>
              <li> - Inside (inside the interested landmark)</li>
            </ul>
          </div>
          <div className="mb-2">
            <h3 className="text-base font-semibold">How to Answer:</h3>
            <p>
              Find where the person is on the map compared to the interested
              landmark.
              <span className="font-bold">
                There can be more than one answer at the same time.
              </span>
              For example, the person might be {`"`}Near{`"`} an interested
              landmark and also {`"`}Front{`"`} of it if they{`'`}re close to
              the door. So, you can choose both {`"`}Near{`"`} and {`"`}Front
              {`"`} as your answer.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.discordapp.net/attachments/1133782115708833933/1143110318499840020/image.png?width=628&height=1062"
              alt="Map Example"
              width={300}
              height={600}
            ></img>
          </div>
          <div className="mb-4">
            <p>In this example, the person is inside the building.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.discordapp.net/attachments/1133782115708833933/1143110387764564038/image.png?width=610&height=1068"
              alt="Map Example"
              width={300}
              height={600}
            ></img>
          </div>
          <div className="mb-4">
            <h3 className="text-base font-semibold">After finish 30 images:</h3>
            <p>
              Go back to the first page and click the {`"`}Redeem Code{`"`}{" "}
              button (on the top left) to receive a redeem code.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.discordapp.net/attachments/1018798909734264866/1143229746839298219/image.png?width=2160&height=606"
              alt="Map Example"
              width={800}
              height={800}
            ></img>
          </div>

          <div className="mb-2">
            <h2 className="text-xl font-semibold">Website{`'`}s Manual</h2>
          </div>
          <div className="mb-2">
            <p>
              1. Go to{" "}
              <a className="text-blue-400" href="http://54.215.101.18:3000/">
                http://54.215.101.18:3000/
              </a>
              . Login with the given username and password.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.discordapp.net/attachments/1133782115708833933/1143110462146367578/image.png?width=1756&height=1062"
              alt="Web Example"
              width={800}
              height={800}
            ></img>
          </div>
          <div className="mb-2">
            <p>
              2. You will see the available images. Click on the label button to
              enter the image.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.discordapp.net/attachments/1133782115708833933/1143110522082951229/image.png?width=1772&height=1062"
              alt="Web Example"
              width={800}
              height={800}
            ></img>
          </div>
          <div className="mb-2">
            <p>
              3. Once you enter the task, you will see the image and choices.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.discordapp.net/attachments/1133782115708833933/1143110573513510932/image.png?width=1792&height=1062"
              alt="Web Example"
              width={800}
              height={800}
            ></img>
          </div>
          <div className="mb-2">
            <p>
              4. After making your selections, click the {`"`}Submit{`"`} button
              to proceed.
            </p>
          </div>
          <div className="mb-2">
            <p>
              5. When you finish 50 images, go back to the first page and click
              the {`"`}Redeem Code{`"`} button to receive a redeem code.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.discordapp.net/attachments/1133782115708833933/1143110629964664962/image.png?width=2160&height=752"
              alt="Web Example"
              width={800}
              height={800}
            ></img>
          </div>
          <div className="mb-4">
            <p>6. Use the given redeem code to redeem the reward.</p>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="text-xl font-semibold">For editing</h2>
        </div>
        <div className="mb-2">
          <p className="text-sm">
            You can scroll down to the “Labelled Data” part to see your previous
            submitted data, and you can click Edit Label to edit the data.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://media.discordapp.net/attachments/1133782115708833933/1143110685375606914/image.png?width=1738&height=1062"
            alt="Web Example"
            width={800}
            height={800}
          ></img>
        </div>
      </Modal>
    </>
  );
};
export default InstructionButton;
