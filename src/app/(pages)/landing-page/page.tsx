/* eslint-disable react/no-unescaped-entities */
'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const LandingPage = () => {
  return (
    <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} className="relative min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <header className="absolute top-0 w-full px-6 py-4 flex items-center justify-between z-20 bg-black/40 backdrop-blur-md shadow-md">
        <div className="text-xl font-bold tracking-wider uppercase">ApplyFlow</div>
        <nav className="space-x-6 text-sm hidden md:flex">
          <a href="#features" className="hover:text-gray-300 transition">Features</a>
          <a href="#testimonials" className="hover:text-gray-300 transition">Testimonials</a>
          <a href="#faq" className="hover:text-gray-300 transition">FAQ</a>
          <a href="#about" className="hover:text-gray-300 transition">About</a>
        </nav>
        {/* <Button className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-lg">Get Started</Button> */}
        <Button className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-primary to-indigo-600 hover:from-blue-400 hover:to-indigo-500 shadow-xl transition-transform transform hover:-translate-y-1">
          Start Now
        </Button>
      </header>

      {/* Hero Section */}
      <motion.section variants={fadeIn} className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">

        <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-lg ">
          Automate & Optimize Your <span className="bg-clip-text text-transparent bg-gradient-to-br from-secondary to-indigo-600 hover:from-blue-400 hover:to-indigo-500  shadow-primary-foreground/20 "  >Job</span> Applications
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          ApplyFlow helps you streamline applications, generate custom CVs, and prepare for interviews—all in one place.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-primary to-indigo-600 hover:from-blue-400 hover:to-indigo-500 shadow-xl transition-transform transform hover:-translate-y-1">
            Start Now
          </Button>
          <Button className="px-6 py-3 text-lg font-semibold border  text-secondary-foreground border-primary bg-secondary backdrop-blur-md hover:bg-primary/70 hover:text-primary-foreground shadow-xl transition-transform transform hover:-translate-y-1">
            Learn More
          </Button>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section id="features" variants={fadeIn} className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Why Choose ApplyFlow?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Feature title="AI-Powered CV Optimization" description="Generate tailored resumes that match job descriptions perfectly." />
          <Feature title="Automated Job Applications" description="Apply to multiple positions in one click with optimized templates." />
          <Feature title="Interview Readiness" description="Prepare with smart FAQs, negotiation strategies, and industry insights." />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section id="about" variants={fadeIn} className="max-w-5xl mx-auto px-4 py-16 text-center">
        <motion.div whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }}>

          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Who We Are
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            ApplyFlow was built by a team of passionate professionals who have experienced firsthand the frustration of job searching. Our mission is to streamline and automate the process so you can focus on what truly matters—landing your dream job.
          </p>
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section id="testimonials" variants={fadeIn} className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Testimonial author="Sarah K, Project Manager" content="ApplyFlow revolutionized the way I apply for jobs. I landed my dream position in just two weeks!" />
          <Testimonial author="David M, Web Developer" content="This tool saved me so much time! The AI-optimized CV helped me stand out instantly." />
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section id="faq" variants={fadeIn} className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Frequently Asked Questions
        </h2>
        <FAQ question="Is ApplyFlow free to use?" answer="Yes! We offer a free plan with essential features, and premium upgrades for advanced users." />
        <FAQ question="How secure is my data?" answer="Your data is encrypted and never shared with third parties." />
        <FAQ question="Can I customize my CV?" answer="Absolutely! Our AI dynamically adapts your CV to match job descriptions and increase your chances." />
        <FAQ question="How does interview preparation work?" answer="ApplyFlow generates interview-specific questions, suggested answers, and negotiation tips tailored to each job application." />

      </motion.section>

      {/* FAQ Section
      <section id="faq" className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Frequently Asked Questions
        </h2>
        <Accordion>
          <AccordionContent>

            <AccordionItem title="Is ApplyFlow free to use?" content="Yes! We offer a free plan with essential features, and premium upgrades for advanced users." />
            <AccordionItem title="How secure is my data?" content="Your data is encrypted and never shared with third parties." />
            <AccordionItem title="Can I customize my CV?" content="Absolutely! Our AI dynamically adapts your CV to match job descriptions and increase your chances." />
            <AccordionItem title="How does interview preparation work?" content="ApplyFlow generates interview-specific questions, suggested answers, and negotiation tips tailored to each job application." />
          </AccordionContent>
        </Accordion>
      </section> */}

      {/* Call to Action */}
      <motion.section variants={fadeIn} className="relative z-10 mt-16 mb-24 text-center px-4">
        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Get Your Dream Job Faster
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Automate your job search and focus on what really matters. Start using ApplyFlow today.
          </p>
          <div className="mt-6">
            {/* <Button className="px-8 py-4 text-xl font-semibold bg-primary hover:bg-primary/90 shadow-lg transition-transform transform hover:-translate-y-1">
              Get Started Now
            </Button> */}
            <Button className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-primary to-indigo-600 hover:from-blue-400 hover:to-indigo-500 shadow-xl transition-transform transform hover:-translate-y-1">
              Get Started Now
            </Button>
          </div>
        </motion.div>
      </motion.section>
    </motion.div >
  );
};
const FAQ = ({ question, answer }: { question: string; answer: string }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
      <Card className="bg-card p-6 rounded-xl shadow-lg border border-border backdrop-blur-lg">
        <CardContent>
          <h3 className="text-xl font-semibold text-foreground mb-2">{question}</h3>
          <p className="text-muted-foreground">{answer}</p>
        </CardContent>
      </Card>
    </motion.div>
  </motion.div >
);
const Testimonial = ({ author, content }: { author: string; content: string }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
    <motion.div whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }}>

      <Card className="bg-card p-6 rounded-xl shadow-lg border border-border backdrop-blur-lg">
        <CardContent className="text-center">
          <p className="text-lg italic text-muted-foreground">"{content}"</p>
          <h3 className="text-xl font-semibold text-foreground mt-4">{author}</h3>
        </CardContent>
      </Card>
    </motion.div>
  </motion.div>
);

const Feature = ({ title, description }: { title: string; description: string }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>

      <Card className="bg-card p-6 rounded-xl shadow-lg border border-border backdrop-blur-lg">
        <CardContent className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground mt-2">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  </motion.div>
);

export default LandingPage;
