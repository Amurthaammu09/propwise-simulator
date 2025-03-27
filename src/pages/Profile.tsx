
import React from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  User,
  Lock,
  Bell,
  Shield,
  CreditCard,
  LogOut,
  Save,
  AlertCircle
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";

const profileFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
});

const securityFormSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;
type SecurityFormValues = z.infer<typeof securityFormSchema>;

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // Profile form
  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      company: "Real Estate Investments LLC",
      bio: "Professional real estate investor with 10+ years of experience in residential and commercial properties.",
    },
  });

  // Security form
  const securityForm = useForm<SecurityFormValues>({
    resolver: zodResolver(securityFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onProfileSubmit = async (data: ProfileFormValues) => {
    setIsLoading(true);
    
    try {
      // In a real app, this would be an API call to update the user profile
      console.log("Profile update data:", data);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success toast
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
    } catch (err) {
      console.error("Profile update error:", err);
      toast({
        variant: "destructive",
        title: "Update failed",
        description: "There was a problem updating your profile.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onSecuritySubmit = async (data: SecurityFormValues) => {
    setIsLoading(true);
    
    try {
      // In a real app, this would be an API call to update the password
      console.log("Security update data:", data);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success toast
      toast({
        title: "Password updated",
        description: "Your password has been changed successfully.",
      });
      
      // Reset form
      securityForm.reset({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error("Security update error:", err);
      toast({
        variant: "destructive",
        title: "Update failed",
        description: "There was a problem updating your password.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    // In a real app, this would call your auth logout function
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-1">Account Settings</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8">
            Manage your account settings and preferences
          </p>

          <Tabs defaultValue="profile" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="profile" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center">
                <Lock className="mr-2 h-4 w-4" />
                Security
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center">
                <Shield className="mr-2 h-4 w-4" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center">
                <CreditCard className="mr-2 h-4 w-4" />
                Billing
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your account profile information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...profileForm}>
                    <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                      <div className="space-y-4">
                        <FormField
                          control={profileForm.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={profileForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={profileForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={profileForm.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={profileForm.control}
                          name="bio"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Bio</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about yourself"
                                  className="resize-none h-32"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Brief description for your profile.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          type="submit" 
                          disabled={isLoading}
                          className="flex items-center"
                        >
                          <Save className="mr-2 h-4 w-4" />
                          {isLoading ? "Saving..." : "Save Changes"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>
                    Manage your password and security settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...securityForm}>
                    <form onSubmit={securityForm.handleSubmit(onSecuritySubmit)} className="space-y-6">
                      <div className="space-y-4">
                        <FormField
                          control={securityForm.control}
                          name="currentPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Password</FormLabel>
                              <FormControl>
                                <Input type="password" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={securityForm.control}
                          name="newPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>New Password</FormLabel>
                              <FormControl>
                                <Input type="password" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={securityForm.control}
                          name="confirmPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Confirm New Password</FormLabel>
                              <FormControl>
                                <Input type="password" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-medium text-lg">Two-Factor Authentication</h3>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Enable 2FA</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          type="submit" 
                          disabled={isLoading}
                          className="flex items-center"
                        >
                          <Save className="mr-2 h-4 w-4" />
                          {isLoading ? "Saving..." : "Update Password"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-red-500">Danger Zone</CardTitle>
                  <CardDescription>
                    Actions that can't be undone
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Log out from all devices</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        This will log you out from all devices except this one
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="text-red-500 border-red-200 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-950"
                    >
                      Log Out Everywhere
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Manage how and when you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg">Email Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Investment Alerts</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              Receive alerts for new investment opportunities
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Market Updates</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              Weekly updates on market trends and changes
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Security Alerts</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              Notifications about account security
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg">System Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">App Notifications</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              Receive in-app notifications
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Browser Notifications</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              Receive browser push notifications
                            </p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="flex items-center">
                    <Save className="mr-2 h-4 w-4" />
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>
                    Manage your privacy preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg">Data Sharing</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Share Analytics Data</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              Help us improve by sharing anonymous usage data
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Investment Profile Visibility</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              Allow other investors to see your investment profile
                            </p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg">Cookie Preferences</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Essential Cookies</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              Required for the website to function properly
                            </p>
                          </div>
                          <Switch defaultChecked disabled />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Analytics Cookies</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              Help us understand how you use our platform
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Marketing Cookies</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              Used to deliver personalized advertisements
                            </p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="flex items-center">
                    <Save className="mr-2 h-4 w-4" />
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing">
              <Card>
                <CardHeader>
                  <CardTitle>Billing Information</CardTitle>
                  <CardDescription>
                    Manage your subscription and payment methods
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">Current Plan: Professional</h3>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            $49.99/month, billed monthly
                          </p>
                        </div>
                        <Button variant="outline">Upgrade Plan</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg">Payment Methods</h3>
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded mr-3">
                            <CreditCard className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="font-medium">Visa ending in 4242</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              Expires 04/2025
                            </p>
                          </div>
                        </div>
                        <div>
                          <Button variant="outline" size="sm">
                            Remove
                          </Button>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Add Payment Method
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg">Billing History</h3>
                      <div className="border rounded-lg divide-y">
                        <div className="p-4 flex justify-between items-center">
                          <div>
                            <p className="font-medium">Professional Plan - Monthly</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              May 1, 2023
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">$49.99</p>
                            <Button variant="link" size="sm" className="h-auto p-0">
                              View Receipt
                            </Button>
                          </div>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <div>
                            <p className="font-medium">Professional Plan - Monthly</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                              April 1, 2023
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">$49.99</p>
                            <Button variant="link" size="sm" className="h-auto p-0">
                              View Receipt
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-end">
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="flex items-center text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
