
import portfolioData from "../data";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative bg-[#F3E8DC] dark:bg-[#2D201E] text-[#3B2523] dark:text-[#FFF9F3] py-24 md:py-32 px-6 scroll-mt-20 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">

          <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
            Proof of
            <br />
            <span className="font-serif italic font-normal text-[#702F3D] dark:text-[#D6A0A8]">
              progress.
            </span>
          </h2>

          <p className="text-[#806C64] dark:text-[#D8C2B6] leading-8 max-w-md">
            Every certificate represents time spent learning,
            discovering new skills, and taking another step forward
            in my journey in technology.
          </p>

        </div>

        {/* Horizontal Certificate Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {portfolioData.certificates.map((certificate, index) => (
            <article
              key={index}
              className="group bg-[#FFF9F3] dark:bg-[#30211F] border border-[#E5D3C7] dark:border-[#493431] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >

              {/* Certificate Preview */}
              <div className="aspect-[4/3] flex items-center justify-center bg-[#EAD9D0] dark:bg-[#3B2926] overflow-hidden p-3">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Certificate Information */}
              <div className="p-6">

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#702F3D] dark:text-[#D6A0A8] mb-4">
                  Certificate {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-xl md:text-2xl font-bold leading-snug mb-6 group-hover:text-[#702F3D] dark:group-hover:text-[#D6A0A8] transition-colors duration-300">
                  {certificate.title}
                </h3>

                <div className="space-y-4 mb-7">

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#A98578] dark:text-[#B58B70] mb-2">
                      Issuing Organization
                    </p>

                    <p className="text-sm font-medium text-[#755F57] dark:text-[#E8D8CC]">
                      {certificate.issuer}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#A98578] dark:text-[#B58B70] mb-2">
                      Date Received
                    </p>

                    <p className="text-sm font-medium text-[#755F57] dark:text-[#E8D8CC]">
                      {certificate.date}
                    </p>
                  </div>

                </div>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-sm font-bold text-[#702F3D] dark:text-[#D6A0A8] border-b border-[#702F3D] dark:border-[#D6A0A8] pb-2 hover:gap-6 transition-all duration-300"
                >
                  View Certificate <span>↗</span>
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>

      {/* Background Decoration */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-[#B58B70]/15 pointer-events-none"></div>
      <div className="absolute bottom-20 -left-32 w-72 h-72 rounded-full border border-[#702F3D]/10 pointer-events-none"></div>

    </section>
  );
}
