import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-8 sinobhukosi-text-gold tracking-wider">
            CONTACT
          </h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-light mb-8 text-white">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-2">Phone</h3>
                    <p className="text-white">083 711 8686</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-primary mb-2">Email</h3>
                    <p className="text-white">info@sinobhukosi.co.za</p>
                  </div>
                </div>
              </div>

              {/* 15 Minute Meeting */}
              <div className="bg-secondary/20 p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4 sinobhukosi-text-gold">
                  15 Minute Meeting
                </h3>
                <p className="text-white mb-4">15 min</p>
                <p className="text-white/80 mb-6">
                  Schedule a brief consultation to discuss your investment needs and explore potential partnerships.
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link to="/meeting">Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4 sinobhukosi-text-gold uppercase tracking-wider">
              Send Us A Message
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Thanks for getting in touch!
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;