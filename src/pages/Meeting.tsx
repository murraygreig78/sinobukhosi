import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Meeting = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const { toast } = useToast();

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select date and time",
        description: "Both date and time are required to book your meeting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Meeting Booked Successfully",
      description: `Your 15-minute meeting has been scheduled for ${selectedDate.toDateString()} at ${selectedTime}.`,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4 sinobhukosi-text-gold tracking-wider">
            15 Minute Meeting
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Schedule your service to discuss investment opportunities and explore potential partnerships.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Calendar */}
              <div>
                <h2 className="text-2xl font-light mb-6 text-white">
                  Select a Date and Time
                </h2>
                
                <div className="bg-secondary/20 p-6 rounded-lg">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    className="rounded-md border border-border"
                  />
                </div>
              </div>

              {/* Time Slots & Service Details */}
              <div>
                <h3 className="text-xl font-light mb-4 text-white">
                  Available Time Slots
                </h3>
                
                <div className="grid grid-cols-3 gap-2 mb-8">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className={selectedTime === time 
                        ? "bg-primary text-primary-foreground" 
                        : "border-border text-white hover:bg-primary/20"
                      }
                    >
                      {time}
                    </Button>
                  ))}
                </div>

                {/* Service Details */}
                <div className="bg-secondary/20 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-light mb-4 sinobhukosi-text-gold">
                    Service Details
                  </h3>
                  
                  <div className="space-y-3 text-white">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>15 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span>Virtual Meeting</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time Zone:</span>
                      <span>South Africa Standard Time (SAST)</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleBooking}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Book Meeting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-light mb-6 text-white">
              Contact Details
            </h2>
            
            <div className="space-y-4">
              <p className="text-white">
                <span className="text-primary">Tel:</span> 083 711 8686
              </p>
              <p className="text-white">
                <span className="text-primary">Email:</span> info@sinobhukosi.co.za
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Meeting;