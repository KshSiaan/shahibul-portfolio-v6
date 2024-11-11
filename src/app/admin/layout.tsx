import {
  Home,
  Users,
  MessageSquare,
  HelpCircle,
  Bell,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { name: "Dashboard", icon: Home, link: "dashboard" },
    { name: "Users", icon: Users, link: "users" },
    { name: "Messages", icon: MessageSquare, link: "messages" },
    { name: "FAQ", icon: HelpCircle, link: "faq" },
  ];

  return (
    <>
      <nav className="w-full border-b shadow-sm font-afacad backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-primary">RAVEN</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={"/admin/" + item.link}
                    className="border-transparent text-foreground hover:border-primary hover:text-primary inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium"
                  >
                    <item.icon className="h-5 w-5 mr-2" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button variant="ghost" size="icon" className="ml-3 p-1">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="flex items-center sm:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
