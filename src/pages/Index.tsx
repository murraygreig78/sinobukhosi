import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-wider">
            <span className="sinobhukosi-text-gold">WELCOME</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
            Sinobukhosi Investments is a wholly black-owned investment company focused on sustainable 
            long-term growth and value creation through the provision of patient capital as well as 
            through skills gained in the banking sector and in running our own business.
          </p>
          
          <div className="mt-12">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4 sinobhukosi-text-gold uppercase tracking-wider">
              Contact
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

export default Index;
