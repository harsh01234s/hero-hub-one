import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Mandala Decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 mandala-pattern opacity-30" />
      <div className="absolute bottom-10 left-10 w-64 h-64 mandala-pattern opacity-30" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold text-navy">Join the Story</h2>
            <p className="text-lg text-foreground">
              Ready to bring your vision to life? Let's talk.
            </p>
            
            <div className="space-y-4 text-foreground">
              <p>
                Whether you have an idea, a question, or simply want to see how we 
                can work together, V'is just a message away.
              </p>
              <p>
                Let's catch up over coffee.
              </p>
              <p className="font-medium">
                Great stories always begin with a good conversation
              </p>
            </div>

            <div className="pt-6 space-y-2">
              <a 
                href="mailto:varnan@varnanfilms.co.in" 
                className="block text-primary hover:underline"
              >
                varnan@varnanfilms.co.in
              </a>
              <a 
                href="tel:+919876543210" 
                className="block text-primary hover:underline"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/80"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/80"
                />
              </div>
              
              <div>
                <Input
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background/80"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background/80"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Lace Border */}
      <div className="absolute bottom-0 left-0 right-0 h-12 lace-border" />
    </section>
  );
};

export default Contact;
