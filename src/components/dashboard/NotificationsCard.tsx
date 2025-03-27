
import React from "react";
import { Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Notification } from "@/types/dashboard";

interface NotificationsCardProps {
  notifications: Notification[];
}

const NotificationsCard = ({ notifications }: NotificationsCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Notifications</CardTitle>
        <CardDescription>Latest updates from your investments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="border-b pb-3 last:border-0">
              <div className="flex items-start">
                <div className="bg-zinc-100 dark:bg-zinc-800 rounded-full p-2 mr-3">
                  <Bell className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{notification.title}</h4>
                  <p className="text-xs text-zinc-500">{notification.description}</p>
                  <p className="text-xs text-zinc-400 mt-1">{notification.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <button className="text-sm text-primary hover:underline">View all notifications</button>
      </CardFooter>
    </Card>
  );
};

export default NotificationsCard;
