import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "Ibiza Signature Escape",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "An immersion in the essence of Ibiza: secret beaches, private sunsets, art, and your own rhythm. For those seeking the extraordinary in the Mediterranean.",
  },
  {
    title: "Nomad Creative Retreat",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "A retreat for restless minds: nature, inspiration, remote work, and authentic connections. An oasis for founders, makers, and creatives.",
  },
  {
    title: "Ritual Journey",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    description: "A journey of reconnection: silence, art, nature, and sensorial experiences. For those seeking meaning and renewal.",
  },
];

export default function FlagshipExperiences() {
  return (
    <section className="flagship-experiences">
      <h3>Experiências Flagship</h3>
      <div className="flagship-cards">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.title} {...exp} />
        ))}
      </div>
    </section>
  );
}