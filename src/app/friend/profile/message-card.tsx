"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MessageCard() {
  const [message, setMessage] = useState("");

  const handleSave = () => {
    // Here you would typically save the message to a backend
    console.log("Saving message:", message);
    setMessage("");
  };

  return (
    <Card className="col-span-1 bg-background text-foreground p-8 rounded-lg shadow-lg transform rotate-1 transition-transform duration-300 hover:rotate-0">
      <h3 className="text-2xl font-semibold mb-4">Message to John</h3>
      <p className="mb-6 text-muted-foreground">
        John is always eager to hear from colleagues, potential employers, or
        anyone interested in his work. Feel free to leave a message about a
        potential opportunity, a collaboration idea, or just to say hello. Your
        thoughts and feedback are greatly appreciated and help John continue to
        grow and improve.
      </p>
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here... (300 limit)"
            className="w-full px-4 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ease-in-out"
          />
        </div>
        <Button
          onClick={handleSave}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
        >
          Save Message
        </Button>
      </div>
    </Card>
  );
}
