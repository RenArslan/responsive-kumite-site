import { useEffect } from "react";
import { EventPoster } from "@/components/EventPoster";
import { RegistrationSection } from "@/components/RegistrationSection";
import { NoticeCard } from "@/components/NoticeCard";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  const registrationUrl =
    "https://billetto.fi/e/kumite-seminar-rafael-aghayev-helsinki-the-black-diamond-of-karate-live-in-finland-liput-1669311";

  // 🔒 Disable background scrolling completely
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      
      {/* ===== CANCELLATION OVERLAY ===== */}
      <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
        <img
          src={`${import.meta.env.BASE_URL}cancel.png`}
          alt="Event Cancelled"
          className="
            max-h-[92vh] 
            max-w-[92vw] 
            w-auto 
            h-auto 
            object-contain 
            rounded-lg 
            shadow-2xl
          "
        />
      </div>

      {/* ===== ORIGINAL CONTENT (BLOCKED UNDER OVERLAY) ===== */}
      <main
        className="max-w-7xl mx-auto px-4 py-8 space-y-12 pointer-events-none select-none"
        aria-hidden="true"
      >
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
                <strong className="text-primary">Note:</strong> Accommodation and
                meals are not included in the ticket price.
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
