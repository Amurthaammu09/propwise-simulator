
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center gap-2 mb-8">
          <Mail className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                We'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-2">Office Location</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                123 Investment Avenue<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Contact Information</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-1">
                <strong>Email:</strong> info@propwise.com
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-1">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                <strong>Support Hours:</strong> Monday to Friday, 9am - 5pm EST
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Connect With Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
