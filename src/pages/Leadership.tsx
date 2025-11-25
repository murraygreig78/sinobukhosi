import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

const Leadership = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-white uppercase tracking-wider">
            Our Leadership Team
          </h1>
        </div>
      </section>

      {/* Leadership Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div className="order-2 md:order-1">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <p className="text-sm">Professional Photo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-light mb-2 sinobhukosi-text-gold tracking-wider">
                  LULEKA MASINDA
                </h2>
                <h3 className="text-xl text-white mb-6 tracking-wider">
                  Managing Director
                </h3>
                
                <div className="space-y-4 text-white leading-relaxed">
                  <p>
                    Luleka Masinda is a qualified chartered accountant and entrepreneur with extensive 
                    experience spanning over 15 years in retail, financial services, and banking.
                  </p>
                  
                  <p>
                    Her professional journey includes significant roles at prestigious organizations 
                    such as Grant Thornton, BHP Billiton, and Standard Bank, where she developed 
                    deep expertise in financial management and strategic business operations.
                  </p>
                  
                  <p>
                    For the past 7 years, Luleka has successfully operated her own business, 
                    demonstrating her entrepreneurial acumen and commitment to sustainable 
                    business growth and value creation.
                  </p>
                </div>
              </div>
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

export default Leadership;