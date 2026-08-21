import Image from "next/image";

const IMG_BASE =
  "/images/blog/what-you-must-know-about-gastritis-causes-symptoms-complications-treatment-and-management";

function ArticleImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <figure style={{ margin: "36px 0" }}>
      <Image
        src={`${IMG_BASE}/${src}`}
        alt={alt}
        width={1200}
        height={675}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
    </figure>
  );
}

export default function ArtBody() {
  return (
    <article className="art-body">
      <p>
        The stomach stores acids inside the protective mucus of the stomach lining to break down food. Gastritis occurs when the stomach lining becomes inflamed. Research in 2024 shows that almost 50% of people carry the bacteria called Helicobacter pylori, which can cause Gastritis.
      </p>
      <p>
        Understanding Gastritis helps protect the digestive system, often called your &quot;second brain,&quot; a focus area in patient care at SRM Global Hospitals.
      </p>

      <h2 id="causes" data-toc-title="Causes of Gastritis">Causes of Gastritis</h2>

      <h3>01. Helicobacter pylori Infection</h3>
      <p>
        H. pylori is a tiny bacterium that lives in the human stomach. The germ has a spiral shape that helps it move through the thick stomach lining. At SRM Global Hospitals, doctors detect this infection in several patients with stomach pain and digestion issues.
      </p>
      <p>
        The bacteria hide beneath the mucus layer that protects the stomach wall. The germs weaken this protective layer to survive strong stomach acid. Harmful substances released by the bacteria damage the inner stomach lining. The body responds with redness and swelling as it tries to fight the infection. Long-lasting swelling leads to breakdown of stomach tissue. Pain develops in the upper abdomen when the lining becomes thin. Gas build-up causes bloating and a feeling of fullness.
      </p>
      <p>
        Nausea and uneasy digestion occur as the stomach struggles to process food.
      </p>

      <h3>02. Acute Gastritis</h3>
      <p>
        Infections are among the most common causes of Gastritis, especially acute Gastritis. Acute Gastritis occurs when the stomach lining faces extreme injury or irritation. Critical illness, major surgery, trauma, or infections can damage the protective layer of the stomach wall, which is frequently managed at SRM Global Hospitals. Digestive juices and stomach acid irritate the stomach lining. Inflammatory cells respond, causing gastritis pain, vomiting, and feeling sick.
      </p>
      <p>Removing the underlying cause often resolves acute Gastritis.</p>

      <h3>03. Nonsteroidal Anti-Inflammatory Drugs (NSAIDs)</h3>
      <p>
        Pain relievers called NSAIDs, such as aspirin and ibuprofen, reduce pain by blocking enzymes. These enzymes also maintain the protective layer of the stomach lining. Taking NSAIDs frequently or in high doses can damage the lining of your stomach, a pattern seen in patients visiting SRM Global Hospitals. Damage may cause erosive Gastritis (stomach lining sores), stomach ulcers, internal bleeding, and further complications.
      </p>
      <p>
        The gastritis symptoms should be monitored while taking this medicine, and seek medical advice to prevent Gastritis and chronic inflammation at SRM Global Hospitals.
      </p>

      <h3>04. Autoimmune Gastritis</h3>
      <p>
        Autoimmune Gastritis occurs when the immune system attacks stomach cells that produce stomach acid and intrinsic factors (proteins) to absorb vitamin B12, a condition evaluated at SRM Global Hospitals. Low vitamin B12 levels can cause fatigue, nerve problems, and anaemia. Nearly 2% of people are affected by autoimmune Gastritis.
      </p>
      <p>
        Autoimmune disorders, along with chronic conditions of the digestive system, can worsen Gastritis if left untreated, as noted in long-term follow-up at SRM Global Hospitals.
      </p>

      <h3>05. Other Causes</h3>
      <ul>
        <li>Celiac disease irritates the small intestine instead of the stomach and could worsen Gastritis.</li>
        <li>Bile reflux occurs when bile juice flows back into the stomach from the small intestine. It irritates the stomach lining and can cause chronic inflammation.</li>
      </ul>

      <h2 id="symptoms" data-toc-title="Symptoms of Gastritis">Symptoms of Gastritis</h2>
      <table>
        <thead>
          <tr>
            <th>Symptom</th>
            <th>What You May Feel</th>
            <th>What Happens Inside the Stomach</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stomach Pain</td>
            <td>Burning pain in the upper middle stomach, worse on an empty stomach or at night</td>
            <td>Excess stomach acid irritates the inflamed stomach lining</td>
          </tr>
          <tr>
            <td>Bloating</td>
            <td>Feeling full quickly or experiencing tightness after eating little food</td>
            <td>Slowed digestion keeps food longer in the stomach</td>
          </tr>
          <tr>
            <td>Nausea</td>
            <td>Feeling sick after meals or with strong smells or medicines</td>
            <td>Inflammation in the stomach lining sends signals to the brain</td>
          </tr>
          <tr>
            <td>Excess Gas</td>
            <td>Frequent burping or passing gas</td>
            <td>Food ferments due to delayed digestion</td>
          </tr>
          <tr>
            <td>Silent Gastritis</td>
            <td>No pain, but fatigue or weakness in older adults</td>
            <td>Poor absorption leads to iron or vitamin B12 deficiency</td>
          </tr>
        </tbody>
      </table>

      <h2 id="warning-signs" data-toc-title="Severe Warning Signs">Severe Warning Signs of Gastritis</h2>
      <table>
        <thead>
          <tr>
            <th>Warning Sign</th>
            <th>What You May Notice</th>
            <th>What It Means</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vomiting blood</td>
            <td>Red or dark material in vomit</td>
            <td>Severe damage to the lining of your stomach or food pipe, linked to erosive Gastritis or pylori infection</td>
          </tr>
          <tr>
            <td>Black Stools</td>
            <td>Black, sticky, tar-like stools</td>
            <td>Gastrointestinal bleeding caused by chronic Gastritis or stomach ulcers</td>
          </tr>
        </tbody>
      </table>

      <h2 id="complications" data-toc-title="Complications of Gastritis">Possible Complications from Gastritis</h2>
      <table>
        <thead>
          <tr>
            <th>Complication</th>
            <th>What Happens</th>
            <th>Why It Is Serious</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stomach Ulcers</td>
            <td>Chronic inflammation damages the stomach lining and forms open sores</td>
            <td>Causes burning pain, nausea, vomiting, and may need surgery if untreated</td>
          </tr>
          <tr>
            <td>Gastrointestinal Bleeding</td>
            <td>Gastritis or ulcers injure blood vessels</td>
            <td>Leads to vomiting blood or black stools, and needs urgent treatment</td>
          </tr>
          <tr>
            <td>Perforation</td>
            <td>Bacteria from the stomach can leak into the abdominal cavity, causing peritonitis, which is a severe infection of the lining of the abdomen.</td>
            <td>Bacteria enter the abdominal cavity and cause a life-threatening infection</td>
          </tr>
          <tr>
            <td>Changes in Cell Growth</td>
            <td>Long-term Gastritis leads to atrophic Gastritis</td>
            <td>Raising the risk of stomach cancer</td>
          </tr>
        </tbody>
      </table>

      <h2 id="diagnosis" data-toc-title="Diagnosing Gastritis">Diagnosing Gastritis</h2>
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>What It Shows</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Upper Endoscopy</td>
            <td>A tube with a camera examines the stomach and the food pipe, a procedure performed at SRM Global Hospitals. Doctors can take small tissue samples or biopsy samples to diagnose Gastritis or H pylori infection.</td>
          </tr>
          <tr>
            <td>Barium Swallow</td>
            <td>A liquid coats the digestive tract, showing inflammation or ulcers on X-ray</td>
          </tr>
          <tr>
            <td>Stool Test</td>
            <td>Detects H pylori bacteria and hidden blood in the stool</td>
          </tr>
          <tr>
            <td>Breath Test</td>
            <td>Measures gases released after swallowing a solution. Highly accurate for H pylori detection without Endoscopy</td>
          </tr>
        </tbody>
      </table>

      <h2 id="treatment" data-toc-title="Gastritis Treatment">Gastritis Treatment</h2>
      <ArticleImage
        src="image-1.webp"
        alt="Doctor checking a patient with stomach pain"
      />

      <h3>Quadruple Therapy for H Pylori Infection</h3>
      <ol>
        <li>Two antibiotics (clarithromycin, amoxicillin, or metronidazole)</li>
        <li>Proton pump inhibitors to reduce stomach acid.</li>
        <li>A bismuth compound to coat the stomach lining and block bacteria</li>
      </ol>
      <p>
        Duration: 10&ndash;14 days. Over 90% success in treating H pylori, as follows in treatment protocols at SRM Global Hospitals.
      </p>

      <h3>New Generation Medicines</h3>
      <ul>
        <li><strong>P-CABs (like Vonoprazan):</strong> Suppress stomach acid quickly for the long term, which could be helpful to prevent chronic inflammation and H pylori eradication at the early stage of Gastritis.</li>
        <li><strong>Mucosal Protectors (like Rebamipide):</strong> Boost mucus development in the stomach lining along with tissue repair, reducing gastritis pain and erosive gastritis risk.</li>
      </ul>

      <h3>Special Care</h3>
      <ul>
        <li><strong>Vitamin B12 Supplementation:</strong> prevents fatigue, anaemia, and nerve problems necessary with autoimmune Gastritis</li>
        <li><strong>Stress Management:</strong> Relaxation, yoga, meditation, and counselling reduce stress-induced Gastritis and improve digestive system healing.</li>
      </ul>

      <h3 id="lifestyle" data-toc-title="Lifestyle and Dietary Changes">Lifestyle and Dietary Changes</h3>
      <ul>
        <li><strong>Vitamin B12 Supplementation:</strong> prevents fatigue, anaemia, and nerve problems necessary with autoimmune Gastritis</li>
        <li><strong>Stress Management:</strong> Relaxation, yoga, meditation, and counselling reduce stress-induced Gastritis and improve digestive system healing.</li>
      </ul>

      <table>
        <thead>
          <tr>
            <th>Change</th>
            <th>What to Do</th>
            <th>Why It Helps</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Smaller, Frequent Meals</td>
            <td>Eat smaller portions more often instead of heavy meals</td>
            <td>Reduces stomach acid overload, supports healing of the stomach lining, and lowers gastritis pain</td>
          </tr>
          <tr>
            <td>Avoid Trigger Foods</td>
            <td>Limit spicy, fried, and processed foods</td>
            <td>It prevents gastritis symptoms, erosive Gastritis, and chronic inflammation.</td>
          </tr>
          <tr>
            <td>Avoid alcohol and limit caffeine.</td>
            <td>Reduce coffee, tea, energy drinks, carbonated drinks, and drinking too much alcohol, as these can stimulate stomach acid production and worsen gastritis symptoms.</td>
            <td>Lowers stomach acid secretion and protects the stomach lining</td>
          </tr>
          <tr>
            <td>Nutritious Foods</td>
            <td>Choose whole grains, lean meats, low-acid fruits, and gentle vegetables</td>
            <td>Supports tissue repair, helps neutralise stomach acid, and improves digestion</td>
          </tr>
          <tr>
            <td>Probiotics</td>
            <td>Yoghurt, kefir, or approved dietary supplements</td>
            <td>Restore gut bacteria and lower the risk of repeat bacterial infection</td>
          </tr>
        </tbody>
      </table>

      <h2 id="conclusion" data-toc-title="Guard Gastric Health">Guard Gastric Health, Gain Goodness!</h2>
      <ArticleImage
        src="image-2.webp"
        alt="Healthy man giving thumbs up after gastritis treatment"
      />
      <p>
        Gastritis affects the stomach lining and can disrupt digestion and nutrient absorption. Recognising symptoms of Gastritis reduces the risk of chronic inflammation, stomach ulcers, internal bleeding, and long-term diseases such as stomach cancer. The symptoms, such as vomiting blood, black stools, persistent stomach pain or unexplained weight loss, require immediate medical evaluation to prevent severe complications.
      </p>
      <p>
        SRM Global Hospital cares for Gastritis through structured diagnosis, evidence-based treatment, and continuous follow-up support, which helps to prevent further complications. Whether Helicobacter pylori infection, autoimmune Gastritis, bile reflux, or use of nonsteroidal anti-inflammatory drugs, advanced care guides effective gastritis treatment and recovery.
      </p>
      <p>Persistent gastritis pain needs medical attention, not delay.</p>
      <p>
        Book a consultation at <a href="/contact">SRM Global Hospitals</a> for a precise diagnosis and focused treatment.
      </p>

      <h2 id="faqs" data-toc-title="FAQs on Gastritis">FAQs on Gastritis</h2>

      <h3>1. Why do I get loss of appetite and stomach pain with Gastritis?</h3>
      <p>
        The stomach walls could get swollen due to Gastritis, so digestion slows down when the gut lining is weak. The stomach pain, bloating, belching, nausea, or vomiting are due to inflammation of the stomach lining. Acute inflammation worsens due to infections, drinking too much alcohol, smoking, caffeine, or carbonated drinks. Chronic inflammation or repeated episodes of Gastritis may require careful monitoring and treatment.
      </p>

      <h3>2. Could my stomach pain from Gastritis be more serious?</h3>
      <p>
        Yes. Untreated Gastritis can lead to serious problems such as bleeding, ulcers in the stomach wall. Vomiting blood or passing black stools shows internal bleeding and needs urgent medical help.
      </p>

      <h3>3. What can cause damage to the stomach lining and trigger Gastritis?</h3>
      <p>
        Drinking too much alcohol, smoking, and the unprescribed, frequent use of pain relievers as NSAIDs can damage the stomach lining, leading to erosive Gastritis or stomach ulcers. Major surgery, critical illness, or trauma injuries can also trigger acute Gastritis by reducing the blood supply to the stomach wall.
      </p>

      <h3>4. How is Gastritis treated?</h3>
      <p>
        Doctors treat Gastritis based on the cause, using antibiotics to remove infection and PPIs to reduce stomach acid. Completing the full course of medicine allows the stomach lining to heal and prevents the problem from returning. Lifestyle changes like avoiding inflammatory foods, avoiding alcohol, limiting caffeine and managing stress help reduce gastritis symptoms and promote healing of the stomach lining.
      </p>
      <p>
        In cases of autoimmune Gastritis, dietary supplements like vitamin B12 or iron may be needed to prevent further complications.
      </p>

      <h3>5. When should I seek immediate medical attention for Gastritis?</h3>
      <p>
        Severe and persistent symptoms such as recurring stomach pain, frequent nausea, vomiting, unexplained weight loss or warning signs like blood vomiting or black stools, require immediate evaluation by a gastroenterologist. Early and accurate diagnosis, followed by proper gastritis treatment, can prevent further complications such as chronic Gastritis, stomach ulcers, or stomach cancer.
      </p>
    </article>
  );
}
