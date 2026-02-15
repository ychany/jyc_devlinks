import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ProfileSection />
        <ProjectsGrid />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
