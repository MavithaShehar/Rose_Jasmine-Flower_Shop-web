import { useState } from "react";
import { IoIosContacts } from "react-icons/io";

interface UserRegisterProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function UserRegister({ isOpen, onRequestClose }: UserRegisterProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ username, email, password });
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-white/50 shadow-lg">
        <div className="bg-gradient-to-r from-pink-400 to-[#d6f6ff] p-6 w-96 shadow-lg rounded-lg">
          <IoIosContacts className="text-center text-8xl mx-auto text-blue-500" />
          <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border rounded"
              required
            />
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
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </form>
          <button
            onClick={onRequestClose}
            className="mt-4 text-red-600 hover:underline block mx-auto"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}

export default UserRegister;
