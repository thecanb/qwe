/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowRight, 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Rocket, 
  ShieldCheck, 
  Zap 
} from "lucide-react";
import { useRef } from "react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden dot-grid">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 bg-white">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-sky-50/50 rounded-full blur-[120px]"
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-sky-50/50 rounded-l-full -z-10 border-l border-y border-sky-100" />
      </div>

      {/* Header */}
      <header className="p-10 flex justify-between items-center z-20 sticky top-0 bg-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sky-200 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-sky-500 rounded-sm rotate-45"></div>
          </div>
          <span className="font-black tracking-tighter text-xl uppercase">Inovaris.</span>
        </div>
        <nav className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-widest text-slate-400">
          <a href="#expertise" className="hover:text-sky-500 transition-colors">Expertise</a>
          <a href="#process" className="hover:text-sky-500 transition-colors">Process</a>
          <a href="#tech" className="hover:text-sky-500 transition-colors">Stack</a>
          <a href="#location" className="hover:text-sky-500 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col justify-center px-10 pt-20 pb-32 max-w-7xl mx-auto min-h-[80vh]">
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pill w-fit mb-8"
          >
            London Based Software Lab
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="massive-text text-slate-900 mb-6"
          >
            Inovaris<br /><span className="text-sky-200">Tech.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl text-xl text-slate-500 font-light leading-relaxed mb-12"
          >
            Transforming complex business challenges into seamless digital experiences through cutting-edge engineering and visionary design.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          {[
            { title: "AI Solutions", desc: "Advanced machine learning models for predictive analytics and smarter operations." },
            { title: "Cloud Native", desc: "Scalable infrastructure built for modern high-traffic apps and high-security needs." },
            { title: "UX/UI Systems", desc: "Human-centric interfaces that drive meaningful engagement and conversion." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-sky-200 pl-8"
            >
              <h3 className="font-black text-slate-800 uppercase text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Expertise Section */}
      <section id="expertise" className="py-40 px-10 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] uppercase font-bold text-sky-400 tracking-[0.2em] mb-4 block">Core Capabilities</span>
              <h2 className="text-6xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
                Expertise Driven By <span className="text-sky-400 italic font-light">Innovation</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <Code2 />, title: "Engineering", desc: "Crafting robust architectures with modern tech stacks." },
                  { icon: <ShieldCheck />, title: "Security", desc: "Enterprise-grade protection for your digital assets." },
                  { icon: <Globe />, title: "Scalability", desc: "Cloud infrastructures designed for global demand." },
                  { icon: <Zap />, title: "Performance", desc: "Ultra-fast response times and optimized systems." }
                ].map((item, idx) => (
                  <div key={idx} className="group cursor-default">
                    <div className="text-sky-400 mb-4 transform group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="font-bold uppercase text-sm tracking-widest mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-800 rounded-full flex items-center justify-center p-20 border border-slate-700 animate-pulse-slow">
                <div className="w-full h-full border border-sky-500/20 rounded-full flex items-center justify-center">
                  <div className="w-2/3 h-2/3 border border-sky-500/40 rounded-full flex items-center justify-center animate-spin-slow">
                    <Cpu className="w-20 h-20 text-sky-400 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-40 px-10 max-w-7xl mx-auto border-t border-sky-100">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <span className="text-[10px] uppercase font-bold text-sky-400 tracking-widest mb-4 block">How We Work</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9] mb-8">
              A Systematic Approach to <span className="text-sky-200">Excellence.</span>
            </h2>
            <p className="text-slate-500 font-light leading-relaxed">
              We've refined our engineering process to prioritize speed without compromising on the architectural integrity of the product.
            </p>
          </div>
          <div className="md:w-2/3 space-y-16">
            {[
              { num: "01", title: "Discovery & Strategy", desc: "Deep dive into your business logic, goals, and user needs to build a solid technical roadmap." },
              { num: "02", title: "Design & Prototype", desc: "Creating high-fidelity UI systems and interactive prototypes to validate the user experience." },
              { num: "03", title: "Agile Engineering", desc: "Iterative development cycles with continuous integration, ensuring transparent and rapid progress." },
              { num: "04", title: "Scale & Support", desc: "Deployment to world-class cloud infrastructure with ongoing monitoring and optimization." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-10 items-start border-b border-sky-50 pb-10">
                <span className="text-4xl font-black text-sky-100 italic">{step.num}</span>
                <div>
                  <h4 className="text-xl font-black uppercase text-slate-800 mb-2">{step.title}</h4>
                  <p className="text-slate-500 font-light leading-relaxed max-w-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tech" className="py-20 bg-sky-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col mb-16">
             <span className="text-[10px] uppercase font-bold text-sky-400 tracking-widest mb-4">The Stack</span>
             <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900">Battle-Tested Components.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-sky-100 border border-sky-100">
            {[
              "React", "TypeScript", "Node.js", "Next.js", "Python", "Go",
              "AWS", "Google Cloud", "PostgreSQL", "Redis", "Docker", "Kubernetes"
            ].map((tech, i) => (
              <div key={i} className="bg-white p-10 flex items-center justify-center group hover:bg-sky-50 transition-colors">
                <span className="font-bold text-slate-300 group-hover:text-sky-500 transition-colors uppercase tracking-widest text-[10px]">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="location" className="py-40 px-10 max-w-7xl mx-auto relative dot-grid">
         <div className="grid md:grid-cols-5 gap-20">
            <div className="md:col-span-3">
               <span className="text-[10px] uppercase font-bold text-sky-400 tracking-widest mb-4 block">Get In Touch</span>
               <h2 className="text-8xl font-black uppercase tracking-tighter text-slate-900 leading-[0.85] mb-12">
                  Start Your <span className="text-sky-200">Next</span> Chapter.
               </h2>
               <div className="space-y-12">
                  <div className="flex gap-8 items-start">
                    <div className="w-12 h-12 bg-sky-50 rounded-full flex-shrink-0 flex items-center justify-center text-sky-500">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-[10px] uppercase font-bold text-sky-400 tracking-widest block mb-2">Location</span>
                        <address className="text-slate-500 not-italic uppercase font-bold text-sm tracking-tight leading-tight">
                          17 Green Lanes, London<br />
                          N16 9BS, London, GB
                        </address>
                    </div>
                  </div>
                  <div className="flex gap-8 items-start">
                    <div className="w-12 h-12 bg-sky-50 rounded-full flex-shrink-0 flex items-center justify-center text-sky-500">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-[10px] uppercase font-bold text-sky-400 tracking-widest block mb-2">Inquiries</span>
                        <a href="mailto:info@inovaristechnologies.co.uk" className="text-slate-500 text-lg font-light hover:text-sky-500 transition-colors">
                          info@inovaristechnologies.co.uk
                        </a>
                    </div>
                  </div>
               </div>
            </div>
            
            <div className="md:col-span-2 relative">
               <div className="w-full aspect-square bg-sky-100 rounded-3xl overflow-hidden border border-sky-200 shadow-xl relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-16 h-16 text-sky-500 fill-sky-200 animate-bounce" />
                  </div>
                  <div className="absolute bottom-10 left-10 right-10 bg-white p-6 border border-sky-100 shadow-lg">
                    <span className="text-[10px] uppercase font-bold text-sky-400 mb-1 block">Live Status</span>
                    <p className="text-xs font-black uppercase text-slate-800">Our London HQ is currently open for project consulting.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Banner */}
      <div className="h-40 border-y border-sky-100 bg-sky-50/50 flex items-center overflow-hidden">
        <div className="text-[120px] font-black text-white whitespace-nowrap animate-marquee select-none uppercase tracking-tighter">
          ENGINEERING VISIONARY EXPERIENCES . INOVARIS . LONDON BASED . 
        </div>
      </div>

      {/* Footer */}
      <footer className="h-40 bg-white flex items-center px-10 justify-between relative z-20 border-t border-sky-100">
        <div className="flex gap-16">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-sky-400 mb-1 tracking-widest">Headquarters</span>
            <span className="text-xs text-slate-500 font-bold uppercase">17 Green Lanes, London N16 9BS, GB</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <span>© 2026 INOVARIS TECHNOLOGIES</span>
          <div className="w-1.5 h-1.5 bg-sky-200 rounded-full"></div>
          <span>LONDON</span>
        </div>
      </footer>
    </div>
  );
}
