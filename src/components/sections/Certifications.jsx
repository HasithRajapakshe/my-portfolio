import { certifications } from "../../data/certifications";
import SectionHeader from "../ui/SectionHeader";
import CertificateCard from "../ui/CertificateCard";

export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certificates" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader label="Credentials" title="Certifications" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertificateCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
