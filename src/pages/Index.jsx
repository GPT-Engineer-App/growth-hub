import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <div className="text-2xl font-bold">SaaSLogo</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-primary">Home</a>
          <a href="#features" className="hover:text-primary">Features</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <Button>Sign Up</Button>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our SaaS Platform</h1>
          <p className="text-xl mb-8">Streamline your workflow with our powerful tools</p>
          <Button size="lg">Get Started</Button>
          <img src="/placeholder.svg" alt="Product illustration" className="mx-auto mt-10 w-full max-w-2xl h-64 object-cover" />
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Easy Integration", description: "Seamlessly integrate with your existing tools" },
                { title: "Real-time Analytics", description: "Get insights instantly with our powerful analytics" },
                { title: "Secure & Reliable", description: "Your data is safe with our enterprise-grade security" },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Basic", price: "$9.99", description: "Perfect for individuals" },
                { title: "Pro", price: "$29.99", description: "Ideal for small teams" },
                { title: "Enterprise", price: "Custom", description: "For large organizations" },
              ].map((plan, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <CardDescription>{plan.price}/month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{plan.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Sign Up</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
            <p className="text-center max-w-2xl mx-auto">
              We're a passionate team dedicated to creating innovative solutions that help businesses thrive in the digital age. Our mission is to empower organizations with cutting-edge tools that drive growth and efficiency.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto max-w-md">
            <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
            <form className="space-y-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" />
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">&copy; 2024 SaaS Company. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary"><Twitter size={20} /></a>
            <a href="#" className="hover:text-primary"><Instagram size={20} /></a>
            <a href="#" className="hover:text-primary"><Github size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;