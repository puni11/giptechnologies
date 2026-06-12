
import BlogSection from "@/component/BlogSection";
import GlobePulse from "@/component/GlobePulse";
import Image from "next/image";

export default function Page(){
    return(
        <div className="min-h-screen mt-24 px-8 font-sans">
           <div className="relative h-[85vh] w-full flex items-end justify-start p-8 md:p-16 lg:p-24 overflow-hidden rounded-3xl mb-20">
      
      {/* --- Background Image Layer --- */}
      <div className="absolute inset-0 z-0">
    <GlobePulse />
        
        {/* Optional but recommended: A dark gradient overlay so your white text is always readable regardless of the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>

      {/* --- Text Content Layer --- */}
      {/* 'relative z-10' ensures the text sits on top of the absolute background image */}
    
      
    </div>
     <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 z-10 text-white text-center w-full px-4 py-10 h-70 bg-gray-100 max-w-7xl mx-auto rounded-lg">
 <div className="flex flex-col items-center justify-center ">
     <h1 className="text-3xl md:text-5xl font-medium mb-4 leading-tight tracking-tight text-black">
    Insights, Trending Technology News & Blogs
  </h1>
  <p className="text-md text-gray-800 max-w-3xl mx-auto">
    We are a team of industry experts who share their frontline experience, actionable insights, and technical know-how to drive your digital transformation. 
  </p>
  <div className="flex gap-12 mt-4">
    <div>
        <span className="text-gray-500 text-sm">Author-</span>
        <p className="text-gray-900 text-md">Puneet Sharma</p>
    </div>
    <div>
        <span className="text-gray-500 text-sm">Published-</span>
        <p className="text-gray-900 text-md">26 June 2026</p>
    </div>
  </div>
 </div>
</div>
<section className="min-h-screen bg-white pt-20 px-6 md:px-12 lg:px-24 font-sans text-[#111111] ">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro paragraph */}
        <p className="text-[#555555] text-[15px] md:text-base leading-[1.8] mb-16">
          As AI systems move from experimental labs to the front lines of corporate decision-making, the need for ethical guardrails has never been more urgent. At Daemon, we believe that transparency is not just a feature; it is the fundamental requirement for the future of digital trust.
        </p>

        {/* Large Highlight Text */}
        <h2 className="text-[2rem] md:text-3xl font-light tracking-tight text-[#333333] leading-[1.15] mb-20">
          The goal of ethical AI is not to limit the power of the machine, but to ensure that its power is always aligned with the values of the people it serves.
        </h2>

        {/* Section 1 */}
        <div className="mb-14">
          <h3 className="text-xl md:text-[22px] font-medium tracking-tight mb-4">The Rise of Algorithmic Accountability</h3>
          <p className="text-[#555555] text-[15px] md:text-base leading-[1.8]">
            In an era where AI can determine everything from insurance premiums to supply chain priorities, the "Black Box" model of machine learning is no longer acceptable. Stakeholders and regulators are demanding to see the "why" behind every automated outcome. We are shifting toward a framework of Explainable AI (XAI), where every prediction is backed by a clear, human-readable audit trail.
          </p>
        </div>

        {/* Section 2 with Unordered List */}
        <div className="mb-14">
          <h3 className="text-xl md:text-[22px] font-medium tracking-tight mb-4">Core Principles of Ethical Design</h3>
          <p className="text-[#555555] text-[15px] md:text-base leading-[1.8] mb-4">
            To ensure our systems remain unbiased and fair, we adhere to four primary pillars:
          </p>
          <ul className="list-disc pl-5 text-[#555555] text-[15px] md:text-base leading-[1.8] space-y-1.5 marker:text-gray-400">
            <li><span className="font-medium text-gray-900">Bias Detection:</span> Constant monitoring of training data to identify and neutralize historical prejudice.</li>
            <li><span className="font-medium text-gray-900">Transparency:</span> Providing users with the specific data points that influenced a given AI output.</li>
            <li><span className="font-medium text-gray-900">Human Oversight:</span> Ensuring that a human expert always has the final authority on critical decisions.</li>
            <li><span className="font-medium text-gray-900">Data Privacy:</span> Using differential privacy to protect individuals while still gaining group insights.</li>
          </ul>
        </div>

        {/* Section 3 with Ordered List */}
        <div className="mb-16">
          <h3 className="text-xl md:text-[22px] font-medium tracking-tight mb-4">Mitigating Bias in Large-Scale Models</h3>
          <p className="text-[#555555] text-[15px] md:text-base leading-[1.8] mb-4">
            Bias is often an invisible ghost in the machine, inherited from flawed historical datasets. Our approach at Daemon involves a rigorous "De-biasing" phase during model training. We use adversarial testing to probe our own networks, searching for edge cases where the model might treat similar inputs differently based on protected characteristics.
          </p>
          <p className="text-[#555555] text-[15px] md:text-base leading-[1.8] mb-4">
            Our Verification Workflow:
          </p>
          <ol className="list-decimal pl-5 text-[#555555] text-[15px] md:text-base leading-[1.8] space-y-1.5 marker:text-gray-400">
            <li><span className="font-medium text-gray-900">Baseline Testing:</span> Identifying the standard distribution of outputs across diverse groups.</li>
            <li><span className="font-medium text-gray-900">Adversarial Probing:</span> Stress-testing the model with intentionally skewed data to find weaknesses.</li>
            <li><span className="font-medium text-gray-900">Corrective Fine-Tuning:</span> Adjusting the weights to ensure neutral and equitable outcomes.</li>
          </ol>
        </div>

        {/* Added Table Section */}
        <div className="mb-16">
          <h3 className="text-xl md:text-[22px] font-medium tracking-tight mb-6">Global Regulatory Frameworks</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[15px] md:text-base">
              <thead>
                <tr className="border-b-2 border-gray-900 text-gray-900">
                  <th className="py-4 pr-4 font-medium w-[25%]">Framework</th>
                  <th className="py-4 px-4 font-medium w-[25%]">Jurisdiction</th>
                  <th className="py-4 pl-4 font-medium w-[50%]">Core Mandate</th>
                </tr>
              </thead>
              <tbody className="text-[#555555]">
                <tr className="border-b border-gray-200">
                  <td className="py-5 pr-4 text-gray-900 font-medium align-top">EU AI Act</td>
                  <td className="py-5 px-4 align-top">European Union</td>
                  <td className="py-5 pl-4 align-top">Enforces strict transparency and risk-management protocols for high-risk AI deployments.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-5 pr-4 text-gray-900 font-medium align-top">AI Bill of Rights</td>
                  <td className="py-5 px-4 align-top">United States</td>
                  <td className="py-5 pl-4 align-top">Safeguards against algorithmic discrimination and mandates automated system transparency.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-5 pr-4 text-gray-900 font-medium align-top">AIDA</td>
                  <td className="py-5 px-4 align-top">Canada</td>
                  <td className="py-5 pl-4 align-top">Regulates international and interprovincial trade in AI systems to prevent biased outputs.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Final Sections */}
        <div className="mb-14">
          <h3 className="text-xl md:text-[22px] font-medium tracking-tight mb-4">The Regulatory Landscape: Navigating Compliance</h3>
          <p className="text-[#555555] text-[15px] md:text-base leading-[1.8]">
            With the emergence of the EU AI Act and similar global regulations, ethical AI is now a legal necessity. Companies that do not prioritize transparency risk massive fines and, more importantly, the total loss of consumer trust. By building these ethical considerations into the architecture from day one, we help our clients stay ahead of the regulatory curve.
          </p>
        </div>

        <div className="mb-14">
          <h3 className="text-xl md:text-[22px] font-medium tracking-tight mb-4">Conclusion: The Responsibility of Innovation</h3>
          <p className="text-[#555555] text-[15px] md:text-base leading-[1.8] mb-4">
            Building powerful AI is a technical challenge, but building <em>responsible</em> AI is a moral one. At Daemon, we take this responsibility seriously. We are not just engineers; we are architects of a future where technology acts as a fair and unbiased partner to humanity.
          </p>
          <p className="text-[#555555] text-[15px] md:text-base leading-[1.8]">
            As we continue to push the boundaries of what is possible, we remain committed to the idea that innovation without ethics is a hollow victory. By prioritizing transparency and accountability today, we are ensuring a safer, more equitable digital world for everyone tomorrow.
          </p>
        </div>

      </div>
    </section>


    <BlogSection />
        </div>
    )
}