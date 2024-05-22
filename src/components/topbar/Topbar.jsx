// src/components/topbar/Topbar.js
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";  // Adjust the path as needed
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export default function Topbar() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => console.error("Error during login:", error));
  };

  const logout = () => {
    signOut(auth).catch((error) => console.error("Error during logout:", error));
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">BUZZ</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search for friend, post or video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <a className="topbarLink" href="http://localhost:3000">Homepage</a>
          <a className="topbarLink" href="http://localhost:3000/register">Register</a>
          <a className="topbarLink" href="http://localhost:3000/profile">Profile</a>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div classNamead="loingText">Loading...</div>
      ) : user ? (
        <img src={user.photoURL} alt={user.displayName} className="profileLogo" onClick={logout} />
      ) : (
        <button className="topbarImg" onClick={login}>Login</button>
      )}
    </div>
  );
}
