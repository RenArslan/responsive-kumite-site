import { EventPoster } from "@/components/EventPoster";
import { RegistrationSection } from "@/components/RegistrationSection";
import { NoticeCard } from "@/components/NoticeCard";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  const registrationUrl =
    "https://billetto.fi/e/kumite-seminar-rafael-aghayev-helsinki-the-black-diamond-of-karate-live-in-finland-liput-1669311";

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        
        {/* First Section */}
        <section className="space-y-8">
          
          <EventPoster
            src={`${import.meta.env.BASE_URL}RA_web_1.png`}
            alt="Kumite Seminar with Rafael Aghayev - The Black Diamond of Karate"
          />

          <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
            
            <RegistrationSection
              registrationUrl={registrationUrl}
              qrCodeSrc={`${import.meta.env.BASE_URL}qr_code.png`}
            />

            <NoticeCard>
              <p>
                <strong className="text-primary">Note:</strong> Accommodation and meals are not included in the ticket price. 
                You can book them separately via{" "}
                <a
                  href="https://store.pajulahti.willba.app/event/155010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  Pajulahti Olympic Center booking page
                </a>.
              </p>
              <p>All participants must have valid personal sports insurance.</p>
              <p>
                The organizer reserves the right to cancel the event if minimum
                participation is not met. Ticket fees will be refunded (excluding
                Billetto service fees).
              </p>
            </NoticeCard>
          </div>
        </section>

        {/* Second Section */}
        <section className="space-y-8">

          <EventPoster
            src={`${import.meta.env.BASE_URL}RA_web_2.png`}
            alt="Kumite Seminar Details - Schedule and Information"
          />

          <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
            
            <RegistrationSection
              registrationUrl={registrationUrl}
              qrCodeSrc={`${import.meta.env.BASE_URL}qr_code.png`}
            />

            <NoticeCard>
              <p>
                <strong className="text-primary">Note:</strong> Accommodation and meals are not included in the ticket price. 
                You can book them separately via{" "}
                <a
                  href="https://store.pajulahti.willba.app/event/155010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  Pajulahti booking page
                </a>.
              </p>
              <p>All participants must have valid personal sports insurance.</p>
              <p>
                The organizer reserves the right to cancel the event if minimum
                participation is not met. Ticket fees will be refunded (excluding
                Billetto service fees).
              </p>
            </NoticeCard>
          </div>
        </section>

        {/* Social Section */}
        <section>
          <SocialLinks />
        </section>

      </main>
    </div>
  );
};

export default Index;
