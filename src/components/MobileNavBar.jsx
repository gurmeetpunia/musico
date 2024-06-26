import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import NowPlayingContext from "../context/NowPlayingProvider";

const MobileNavBar = () => {
  const [showNote, setShowNote] = useState(false);
  const { setPlayingView } = useContext(NowPlayingContext);
  return (
    <nav className="grid grid-cols-3 items-center p-5 bg-slate-900">
      <NavLink
        to="/browse"
        title="Browse"
        className={({ isActive }) =>
          isActive
            ? "text-white flex flex-col justify-center items-center"
            : "text-gray-500 flex flex-col justify-center items-center"
        }
        onClick={() => setPlayingView(false)}
      >
        <FontAwesomeIcon className="h-6" icon={faMagnifyingGlass} />
        <p className="text-xs font-semibold">Search</p>
      </NavLink>
      <NavLink
        title="Home"
        to="/home"
        className={({ isActive }) =>
          isActive
            ? "text-white flex flex-col justify-center items-center"
            : "text-gray-500 flex flex-col justify-center items-center"
        }
        onClick={() => setPlayingView(false)}
      >
        <FontAwesomeIcon className="h-6" icon={faHouse} />
        <p className="text-xs font-semibold">Home</p>
      </NavLink>
    </nav>
  );
};

export default MobileNavBar;
