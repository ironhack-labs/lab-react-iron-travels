// Card para Flagship Experience
export default function ExperienceCard({ image, title, description }) {
  return (
    <div className="experience-card">
      <img src={image} alt={title} className="experience-image" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
