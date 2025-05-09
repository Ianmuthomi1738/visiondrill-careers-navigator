
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { 
  Award, 
  BookOpen, 
  BriefcaseIcon, 
  LayoutDashboardIcon, 
  MessageSquare, 
  Search, 
  UserIcon 
} from "lucide-react";

const features = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "AI-Powered Job Matching",
    description: "Our intelligent system finds the perfect job matches based on your skills, experience, and preferences."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Skills Assessment",
    description: "Identify your strengths and areas for improvement through integrated assessments and get a personalized readiness score."
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Microlearning Paths",
    description: "Fill skill gaps with personalized learning recommendations and track your progress toward career goals."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "AI Interview Practice",
    description: "Practice interviews with our AI coach that provides feedback on your responses, tone, and delivery."
  }
];

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Unlock Your Career Potential with AI-Powered Guidance
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Visiondrill Careers Navigator uses advanced AI to match your skills with the perfect job, identify growth opportunities, and guide your career journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                  <Link to="/profile">Create Your Profile</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white/10">
                  <Link to="/jobs">Explore Jobs</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                alt="Career growth" 
                className="rounded-lg shadow-xl max-w-md w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-lg bg-accent">
              <p className="text-3xl font-bold text-primary mb-2">93%</p>
              <p className="text-gray-600">Placement Rate</p>
            </div>
            <div className="p-6 rounded-lg bg-accent">
              <p className="text-3xl font-bold text-primary mb-2">10,000+</p>
              <p className="text-gray-600">Available Jobs</p>
            </div>
            <div className="p-6 rounded-lg bg-accent">
              <p className="text-3xl font-bold text-primary mb-2">500+</p>
              <p className="text-gray-600">Employer Partners</p>
            </div>
            <div className="p-6 rounded-lg bg-accent">
              <p className="text-3xl font-bold text-primary mb-2">150+</p>
              <p className="text-gray-600">Skill Courses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How Visiondrill Careers Works</h2>
            <p className="text-gray-600">
              Our intelligent platform combines AI technology with personalized career development to help you find and succeed in your dream job.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover-scale">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Your Career Journey with Us</h2>
            <p className="text-gray-600">
              Follow these simple steps to kickstart your professional growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold mb-4">1</div>
              <div className="flex justify-center">
                <UserIcon size={48} className="text-primary mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
              <p className="text-gray-600">Build your comprehensive profile with our AI-powered onboarding wizard.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold mb-4">2</div>
              <div className="flex justify-center">
                <LayoutDashboardIcon size={48} className="text-primary mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Explore Your Dashboard</h3>
              <p className="text-gray-600">Get insights on your career readiness, skill gaps, and personalized recommendations.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold mb-4">3</div>
              <div className="flex justify-center">
                <BriefcaseIcon size={48} className="text-primary mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Apply to Top Jobs</h3>
              <p className="text-gray-600">Get matched with opportunities aligned with your skills and career goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Career Journey?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their careers with Visiondrill Careers Navigator.
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
            <Link to="/profile">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
