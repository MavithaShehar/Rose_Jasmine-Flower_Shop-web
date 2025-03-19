import { useState } from "react";
import { IoIosContacts } from "react-icons/io";
import UserRegister from "./userRegister ";
import Cookies from "js-cookie";

interface UserRegisterProps {
  isOpen: boolean;
  onRequestClose: () => void;
  setUserEmail: (email: string | null) => void;
}

function UserLogin({ isOpen, onRequestClose, setUserEmail }: UserRegisterProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Cookies.set("token", data.token, { expires: 1 / 24 });
        Cookies.set("role", data.role, { expires: 1 / 24 });
        Cookies.set("email", email, { expires: 1 / 24 });

      
        setUserEmail(email); // Update Header with logged-in email
        setEmail("");
        setPassword("");

        onRequestClose();
        alert("Login successful!");
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong.");
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-white/50 shadow-lg">
        <div className="bg-gradient-to-r from-pink-400 to-[#d6f6ff] p-6 w-96 shadow-lg rounded-lg">
          <IoIosContacts className="text-center text-8xl mx-auto text-blue-500" />
          <h2 className="text-xl font-bold mb-4 text-center">Log In</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border rounded"
              required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300">
              Log In
            </button>
          </form>
          <button onClick={onRequestClose} className="mt-4 text-red-600 hover:underline block mx-auto">
            Close
          </button>
          <button onClick={() => setIsRegisterOpen(true)} className="w-full flex justify-end text-xl hover:text-blue-600 active:text-black">
            Sign Up
          </button>
          <UserRegister isOpen={isRegisterOpen} onRequestClose={() => setIsRegisterOpen(false)} />
        </div>
      </div>
    )
  );
}

export default UserLogin;
