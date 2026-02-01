import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    // Send email using EmailJS
    emailjs
      .send(
        "service_ro9ze8d",          // Your EmailJS Service ID
        "template_ppoocac",         // Your EmailJS Template ID
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        "PYgtix-jFrTnLlrNF"        // Your EmailJS Public Key
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thank you for your message. We'll get back to you soon.",
          });
          reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast({
            title: "Failed to Send",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <section id="contact" className="section-spacing bg-accent/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-gradient">
            Contact Us
          </h2>
          <p className="text-large max-w-2xl mx-auto">
            Get in touch with us for reservations, orders, or any inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-elevated">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="heading-tertiary">Visit Us</h3>
                  <p className="text-muted-foreground">
                    23 Meriton Pl,  <br />
                    Clayton South VIC 3169, Australia<br />
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="heading-tertiary">Call Us</h3>
                  <p className="text-muted-foreground">
                    +61 492 004 534<br />
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="heading-tertiary">Email Us</h3>
                  <p className="text-muted-foreground">
                    trupti2610@gmail.com<br />
                    
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-full p-3">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="heading-tertiary">Opening Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Thrusday: 5:00 PM - 10:59 PM</p>
                    <p>Friday - Sunday: 5:00 PM - 11:59 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elevated">
            <h3 className="heading-tertiary mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    {...register("firstName", { required: "First name is required" })}
                    className={errors.firstName ? "border-destructive" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-destructive">{String(errors.firstName.message)}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    {...register("lastName", { required: "Last name is required" })}
                    className={errors.lastName ? "border-destructive" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-destructive">{String(errors.lastName.message)}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{String(errors.email.message)}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone", { required: "Phone number is required" })}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{String(errors.phone.message)}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{String(errors.message.message)}</p>
                )}
              </div>

              {/* <div className="flex items-center space-x-2">
                <Checkbox 
                  id="privacy" 
                  {...register("privacy", { required: "You must accept the privacy policy" })}
                />
                <Label htmlFor="privacy" className="text-sm">
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and consent to my data being processed.
                </Label>
              </div> */}
              {errors.privacy && (
                <p className="text-sm text-destructive">{String(errors.privacy.message)}</p>
              )}

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Google Map & Quick Actions remain unchanged */}
      </div>
    </section>
  );
};

export default ContactSection;
