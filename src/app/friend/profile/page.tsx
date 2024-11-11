import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import MessageCard from "./message-card";

export default function ProfilePage() {
  return (
    <div
      className={`min-h-screen font-afacad bg-zinc-100 dark:bg-background text-zinc-900 dark:text-zinc-100`}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <Card className="col-span-1 md:col-span-2 bg-white dark:bg-background p-8 rounded-lg shadow-lg transform -rotate-1 transition-transform duration-300 hover:rotate-0">
            <h1 className="text-4xl font-bold mb-4">UserName</h1>
            <h2 className="text-2xl text-primary mb-6">#Tagname</h2>
            <p className="mb-6">
              Passionate about creating elegant solutions to complex problems.
              With over 5 years of experience in web development, I specialize
              in React, Node.js, and cloud technologies.
            </p>
            <div className="flex gap-4 justify-start items-center">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
              <p className="px-4 py-2 border rounded-md">kshsiaan@gmail.com</p>
            </div>
          </Card>

          <MessageCard />

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Avatar className="w-32 h-32 border-4 border-zinc-100 dark:border-zinc-900 shadow-xl">
              <AvatarImage
                src="/placeholder.svg?height=128&width=128"
                alt="John Doe"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}
