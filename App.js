import React from "react";

export default function App() {
  const services = [
    {
      title: "Social Media Management",
      description:
        "Strategic content planning, feed styling, content scheduling, campaign visuals, organic growth support, and consistent on-brand posting.",
    },
    {
      title: "Graphic Design & Logo Design",
      description:
        "Professional graphic design for businesses wanting a polished visual presence, including logo design, branded assets, launch graphics, and day-to-day design support.",
    },
    {
      title: "Printed Marketing",
      description:
        "Printed marketing designed around what your business needs, including leaflets, business cards, vouchers, brochures, flyers, banners, certificates, and other print materials on request.",
    },
    {
      title: "Content Creation",
      description:
        "Premium content creation for brands, including photography and videography tailored for websites, campaigns, launches, and social media.",
    },
    {
      title: "Creative Direction",
      description:
        "Campaign concepts, premium visual storytelling, art direction, and cohesive creative direction for brands that want to feel elevated and distinctive.",
    },
    {
      title: "Brand Visual Support",
      description:
        "Ongoing creative support for businesses that want cohesive, high-end visuals across digital, print, and social media touchpoints.",
    },
  ];

  const stats = [
    { label: "Years in design", value: "6+" },
    {
      label: "Who we work with",
      value: "Growing & established businesses",
    },
    {
      label: "Approach",
      value: "Strategic, creative, commercially focused",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f8f3ea", color: "#4f4338" }}>
      
      {/* HERO */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "48px", fontWeight: 300 }}>
          Design that makes your brand look expensive, intentional, and unforgettable.
        </h1>
        <p style={{ marginTop: "20px", fontSize: "18px", color: "#6d5f50" }}>
          EH Design Studio creates premium branding, graphic design, social content,
          and creative visuals for businesses that want a more elevated presence.
        </p>

        <div style={{ marginTop: "30px" }}>
          <a
            href="#services"
            style={{
              marginRight: "10px",
              padding: "12px 20px",
              background: "#4f4338",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "30px",
            }}
          >
            View Services
          </a>
          <a
            href="https://www.instagram.com/eh_designstudio/"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "12px 20px",
              border: "1px solid #4f4338",
              borderRadius: "30px",
              textDecoration: "none",
              color: "#4f4338",
            }}
          >
            Instagram
          </a>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "40px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ background: "#fff", padding: "20px", borderRadius: "20px" }}>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 300 }}>Services</h2>

        <div style={{ marginTop: "30px", display: "grid", gap: "20px" }}>
          {services.map((service) => (
            <div key={service.title} style={{ background: "#fff", padding: "25px", borderRadius: "20px" }}>
              <h3>{service.title}</h3>
              <p style={{ marginTop: "10px", color: "#6d5f50" }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 300 }}>About the Studio</h2>

        <p style={{ marginTop: "20px", color: "#6d5f50", lineHeight: 1.6 }}>
          EH Design Studio works with businesses that want more than just content —
          they want a brand presence that feels considered, cohesive, and high-end.
          From graphic design and printed marketing to content creation and social media
          management, every detail is created to strengthen how your business is seen.
        </p>

        <p style={{ marginTop: "20px", color: "#6d5f50", lineHeight: 1.6 }}>
          We work with a range of brands across different industries, including fashion
          (CAPO), the padel industry (Clubhouse), aesthetics, dental clinics, and
          interior design businesses. From small independent brands to more established
          companies, we create work that feels elevated, cohesive, and commercially effective.
        </p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "80px 20px", background: "#4f4338", color: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 300 }}>
            Ready to elevate your brand?
          </h2>

          <div style={{ marginTop: "30px" }}>
            <a
              href="mailto:hello@ehdesignstudio.co.uk"
              style={{
                background: "#fff",
                color: "#4f4338",
                padding: "12px 20px",
                borderRadius: "30px",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              Enquire Now
            </a>

            <a
              href="https://www.instagram.com/eh_designstudio/"
              target="_blank"
              rel="noreferrer"
              style={{
                border: "1px solid #fff",
                padding: "12px 20px",
                borderRadius: "30px",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
