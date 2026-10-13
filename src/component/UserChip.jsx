import { useId, useState } from "react";

const UserChip = (props) => {
  const { userId, name, photo, handleClick } = props;
  const [chatSelected, setChatSelected] = useState(false);

  const clickHandler = () => {
    setChatSelected(!chatSelected);
    handleClick(userId);
  };

  return (
    <div className=" w-9/10" onClick={clickHandler}>
      <div className={`card  ${chatSelected ? "bg-base-200" : "bg-base-100"}`}>
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
