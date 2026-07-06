import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { ExperienceEducation } from "@/components/portfolio/ExperienceEducation";
import { Skills } from "@/components/portfolio/Skills";
import { Achievements } from "@/components/portfolio/Achievements";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Journal } from "@/components/portfolio/Journal";
import { Contact } from "@/components/portfolio/Contacts";
import { Footer } from "@/components/portfolio/Footer";
import { Chatbot } from "@/components/portfolio/Chatbot";

const Index = () => {
    return (
        <ThemeProvider>
            <div className="min-h-dvh bg-background text-foreground overflow-x-hidden">
                <Nav />
                <main>
                    <Hero />
                    <About />
                    <Projects />
                    <ExperienceEducation />
                    <Skills />
                    <Achievements />
                    <Testimonials />
                    <Journal />
                    <Contact />
                </main>
                <Footer />
                <Chatbot />
            </div>
        </ThemeProvider>
    );
};

export default Index;
