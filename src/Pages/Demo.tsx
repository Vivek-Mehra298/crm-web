import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Demo() {
  const navigate = useNavigate();

  useEffect(() => {
    signInWithEmailAndPassword(auth, "demo@gmail.com", "123456")
      .then(() => navigate("/app"))
      .catch(() => navigate("/login"));
  }, []);

  return <p>Loading demo...</p>;
}
