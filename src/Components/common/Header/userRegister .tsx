import { useState } from "react";
import { IoIosContacts } from "react-icons/io";
import Cookies from "js-cookie";

interface UserRegisterProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

function UserRegister({ isOpen, onRequestClose }: UserRegisterProps) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role] = useState("");
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username,email, password,role }),
            });

            const data = await response.json();

            if (response.ok) {
                Cookies.set("token", data.token, { expires: 1 / 24 });
                
                setUsername("");
                setEmail("");
                setPassword("");

                onRequestClose();
                alert("Register successful!");
            } else {
                alert(data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Error during Register:", error);
            alert("Something went wrong.");
        }
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
