import MediaCard from "./MediaCard";

export default function MediaGrid2024() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 40px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
        <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "32px", fontWeight: 700, color: "#1a1a2e" }}>2024</div>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(34,148,211,0.2), transparent)" }}></div>
      </div>

      {/* November 2024 */}
      <div style={{ marginBottom: "48px" }}>
        <div style={{ display: "inline-block", background: "#f3eff8", borderRadius: "8px", padding: "6px 16px", fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 600, color: "#6B4A98", marginBottom: "20px" }}>November</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
          <MediaCard 
            imageSrc="/images/in-the-media/cropped-srm-logo.jpg"
            imageAlt="Dr UP Srinivasan"
            source="ETV Bharat"
            sourceColor="blue"
            title="Dr. U.P. Srinivasan on infertility risks from plastic food covers"
            description="Expert insight on how silver-colored plastic food covers can pose infertility risks."
            linkText="Watch on YouTube →"
          />
          <MediaCard 
            imageSrc="/images/in-the-media/Segment-on-causes-of-body-shivering.jpg"
            imageAlt="Body shivering segment"
            source="Thanthi TV"
            sourceColor="blue"
            title="Segment on causes of body shivering"
            description="SRM Global Hospitals doctor explains the medical causes behind body shivering."
            linkText="Watch on YouTube →"
          />
          <MediaCard 
            imageSrc="/images/in-the-media/report-on-gym-owners-death-investigation-with-medical-opinion.jpg"
            imageAlt="Gym owner investigation"
            source="ETV Bharat"
            sourceColor="blue"
            title="Gym owner's death investigation: medical opinion"
            description="SRM Global Hospitals doctor provides medical opinion in Salem gym owner's death investigation."
            linkText="Read on ETV Bharat →"
          />
          <MediaCard 
            imageSrc="/images/in-the-media/expert-tips-on-managing-depression-naturally.jpg"
            imageAlt="Depression tips"
            source="Money Control"
            sourceColor="purple"
            title="Expert tips on managing depression naturally"
            description="SRM doctor featured in MoneyControl on natural approaches to managing depression."
            linkText="Read on MoneyControl →"
          />
          <MediaCard 
            imageSrc="/images/in-the-media/dr.-muralidharan-on-pacemaker-awareness.jpg"
            imageAlt="Pacemaker awareness"
            source="Multiple"
            sourceColor="blue"
            title="Dr. Muralidharan on pacemaker awareness"
            description="Featured across Polimer News, B4U Media, 24 News Tamil on pacemaker function and benefits."
            linkText="Watch coverage →"
          />
          <MediaCard 
            imageSrc="/images/in-the-media/expert-comments-on-rat-poison-inhalation-deaths.jpg"
            imageAlt="Rat poison inhalation"
            source="ETV Bharat"
            sourceColor="blue"
            title="Expert comments on rat poison inhalation deaths"
            description="Medical expert comments on the Chennai Kundrathur rat poison inhalation case."
            linkText="Read on ETV Bharat →"
          />
        </div>
      </div>
      
      {/* October 2024 */}
      <div style={{ marginBottom: "48px" }}>
        <div style={{ display: "inline-block", background: "#e8f4fc", borderRadius: "8px", padding: "6px 16px", fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 600, color: "#2294D3", marginBottom: "20px" }}>October</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
          <MediaCard 
            imageSrc="/images/in-the-media/monsoon-health-precautions.jpg"
            imageAlt="Monsoon health"
            source="Multiple"
            sourceColor="purple"
            title="Dr. Nandha Kumar on monsoon health"
            description="Extensive coverage across News Tamil 24x7, Zee Tamil, Polimer News, Tamil News TN, and ETV Bharat on monsoon health."
            linkText="Watch coverage →"
          />
          <MediaCard 
            imageSrc="/images/in-the-media/heart-health-awareness-for-youth.jpg"
            imageAlt="Heart health youth"
            source="Happiest Health"
            sourceColor="purple"
            title="Heart health awareness for youth"
            description="Dr. Muralidharan featured in Happiest Health Digital on why young people need to pay attention to heart health."
            linkText="Read on Happiest Health →"
          />
        </div>
      </div>
    </div>
  );
}
