import { useState } from "react";

const UserChip = (props) => {
  const { name, photo } = props;
  const [showRing, setShowRing] = useState(false);

  return (
    <div className=" w-9/10" onClick={() => setShowRing(!showRing)}>
      <div className={`card bg-base-200 ${showRing ? "aura aura-dual" : ""}`}>
        <div className="card-body">
          <div className="flex items-center">
            <div className="avatar">
              <div className="ring-gray-300 ring-offset-base-100 w-11 rounded-full ring-2 ring-offset-2">
                <img alt="Tailwind-CSS-Avatar-component" src={photo} />
              </div>
            </div>
            <p className="ml-5">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChip;
