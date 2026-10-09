import MediaCard from "./MediaCard";

export default function MediaGrid2025() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 40px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
        <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "32px", fontWeight: 700, color: "#1a1a2e" }}>2025</div>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(107,74,152,0.2), transparent)" }}></div>
      </div>
      
      {/* May 2025 */}
      <div style={{ marginBottom: "48px" }}>
        <div style={{ display: "inline-block", background: "#f3eff8", borderRadius: "8px", padding: "6px 16px", fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 600, color: "#6B4A98", marginBottom: "20px" }}>May</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
          <MediaCard 
            imageSrc="/images/in-the-media/rjJ-munna-talks-with-dr-muralidharan.jpg"
            imageAlt="RJ Munna with Dr Muralidharan"
            source="Radio City"
            sourceColor="blue"
            title="RJ Munna talks with Dr. T.R. Muralidharan"
            description="Conversation on heart health awareness with RJ Munna on Radio City."
            linkText="Watch on Facebook →"
          />
          <MediaCard 
            imageSrc="/images/in-the-media/radio-city-rj-bharath-in-conversation-with-dr-sindhu.jpg"
            imageAlt="RJ Bharath with Dr Sindhu"
            source="Radio City"
            sourceColor="blue"
            title="RJ Bharath with Dr. V. Sindhu"
            description="Radio City RJ Bharath in conversation with Dr. V. Sindhu on common health concerns."
            linkText="Watch on Facebook →"
          />
          <MediaCard 
            imageSrc="/images/in-the-media/radio-city-rj-bharath-in-conversation-with-dr-priyadharshini.jpg"
            imageAlt="RJ Bharath with Dr Priyatharshini"
            source="Radio City"
            sourceColor="blue"
            title="RJ Bharath with Dr. P. Priyatharshini"
            description="Conversation on women's wellness and preventive health."
            linkText="Watch on Facebook →"
          />
          <MediaCard 
            imageSrc="/images/in-the-media/rj-bharath-in-conversation-with-dr-surya-prakash.jpg"
            imageAlt="Dr Surya Prakash on Cardiology"
            source="Radio City"
            sourceColor="blue"
            title="Dr. Surya Prakash on Cardiology"
            description="RJ Bharath with Dr. Surya Prakash S, Consultant – Cardiology."
            linkText="Watch on Facebook →"
          />
          <MediaCard 
            imageSrc="/images/in-the-media/rj-bharath-in-conversation-with-dr-hariprasad.jpg"
            imageAlt="Dr Hariprasad on ENT"
            source="Radio City"
            sourceColor="blue"
            title="Dr. Hariprasad S on ENT"
            description="RJ Bharath with Dr. Hariprasad S, DNB Consultant on ENT health topics."
            linkText="Watch on Facebook →"
          />
        </div>
      </div>
      
      {/* March 2025 */}
      <div style={{ marginBottom: "48px" }}>
        <div style={{ display: "inline-block", background: "#e8f4fc", borderRadius: "8px", padding: "6px 16px", fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 600, color: "#2294D3", marginBottom: "20px" }}>March</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
          <MediaCard 
            imageSrc="/images/in-the-media/celebrating-womens-health-with-dr-subhashree.jpg"
            imageAlt="Dr Subhashree Womens Health"
            source="Radio City"
            sourceColor="purple"
            title="Women's Health with Dr. Subhashree T."
            description="International Women's Day conversation with Dr. Subhashree, Senior Consultant – Obstetrics & Gynaecology, with RJ Shakthi."
            linkText="Watch on Facebook →"
          />
          <MediaCard 
            imageSrc="/images/in-the-media/celebrating-womens-health-with-dr-saswati-tripati.jpg"
            imageAlt="Dr Saswati Tripathy Womens Health"
            source="Radio City"
            sourceColor="purple"
            title="Women's Health with Dr. Saswati Tripathy"
            description="Dr. Saswati Tripathy, Lead Consultant – Obstetrics & Gynaecology, on pregnancy care and maternal health."
            linkText="Watch on Instagram →"
          />
          <MediaCard 
            imageSrc="/images/in-the-media/coe.jpg"
            imageAlt="COE Article"
            source="Outlook"
            sourceColor="purple"
            title="World-Class Healthcare Through Centres of Excellence"
            description="Feature on SRM Global Hospital's COEs in Cardiology, Orthopedics & Neurosciences with Dr. Chandrasekaran, COO."
            linkText="Read Article →"
          />
        </div>
      </div>
    </div>
  );
}
