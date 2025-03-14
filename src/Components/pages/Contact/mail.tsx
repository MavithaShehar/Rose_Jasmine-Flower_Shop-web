import React, { useState } from "react";
import Swal from "sweetalert2"; 

function Mail() {
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setIsSubmitting(true); 

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "a9712764-54fd-4cec-a857-cca67cab632d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
     
        Swal.fire({
          title: "Success",
          text: "Message Sent Successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
      
        Swal.fire({
          title: "Error",
          text: "Failed to send message.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div >
      <form
        onSubmit={onSubmit}
        className="w-96 bg-white/10 backdrop-blur-sm shadow-xl border border-white/20 rounded-lg p-6 flex flex-col space-y-4"
      >
    

        <div className="flex flex-col">
          <label className="text-white font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/20 text-black placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white font-medium mb-1">Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/20 text-black placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white font-medium mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            className="w-full px-4 py-2 h-24 rounded-lg border border-white/30 bg-white/20 text-black placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full"
          disabled={isSubmitting} 
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Mail;
