import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const investmentCriteria = [
    "Potential to attract foreign investment",
    "Addresses key South African needs",
    "Benefits from African growth",
    "Non-highly regulated industries",
    "ESG friendly",
    "Globally competitive"
  ];

  const focusSectors = [
    "Agri-processing",
    "Utilities",
    "Telecoms Infrastructure", 
    "Industrial Real Estate"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-white uppercase tracking-wider">
            Portfolio
          </h1>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-8 sinobhukosi-text-gold uppercase tracking-wider">
              Our Investment Philosophy
            </h2>
            
            <p className="text-lg text-white leading-relaxed mb-12">
              We cultivate sustainable partnerships by seeking alignment of interests, values, and integrity 
              with our partners. Our approach focuses on empowering market leaders to achieve sustainable growth 
              through strategic capital allocation and long-term collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-8 text-center sinobhukosi-text-gold uppercase tracking-wider">
              We Look To Invest In
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {investmentCriteria.map((criteria, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <p className="text-white">{criteria}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Sectors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-8 text-center sinobhukosi-text-gold uppercase tracking-wider">
              The Key Sectors That We Focus On:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {focusSectors.map((sector, index) => (
                <div key={index} className="text-center p-6 bg-secondary/20 rounded-lg">
                  <h3 className="text-xl font-light text-white tracking-wider">{sector}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Portfolio Placeholder */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((client) => (
                <div key={client} className="aspect-square bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                      </svg>
                    </div>
                    <p className="text-sm">Client {client}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Looking for Investor CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-8 text-white">
              Looking for an investor?
            </h2>
            
            <div className="bg-secondary/20 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-light mb-4 sinobhukosi-text-gold">
                15 Minute Meeting
              </h3>
              <p className="text-white mb-6">
                Schedule a brief consultation to discuss your investment needs and explore potential partnerships.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link to="/meeting">Book Now</Link>
              </Button>
            </div>
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

export default Portfolio;