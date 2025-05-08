
import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { BriefcaseIcon, MapPinIcon, Search, Calendar, SlidersHorizontal } from "lucide-react";
import { Job } from "@/utils/types";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Mock data
const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechSolutions Inc.",
    companyLogo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    location: "Nairobi, Kenya",
    workStyle: "hybrid",
    description: "We are looking for an experienced Frontend Developer to join our team...",
    responsibilities: [
      "Design and implement user-facing features",
      "Optimize applications for maximum speed",
      "Collaborate with back-end developers and web designers",
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Strong proficiency in JavaScript, HTML, CSS",
      "Experience with React, Redux, and TypeScript",
    ],
    skills: ["React", "TypeScript", "Redux", "HTML/CSS", "Jest"],
    salary: {
      min: 80000,
      max: 120000,
      currency: "KES",
    },
    postedDate: "2023-05-01",
    matchScore: 92,
  },
  {
    id: "2",
    title: "React Developer",
    company: "InnovateCorp",
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    location: "Remote",
    workStyle: "remote",
    description: "Join our team as a React Developer to build innovative web applications...",
    responsibilities: [
      "Build reusable components and libraries",
      "Translate designs into high-quality code",
      "Optimize components for maximum performance",
    ],
    requirements: [
      "3+ years of experience with React",
      "Strong understanding of JavaScript fundamentals",
      "Experience with RESTful APIs",
    ],
    skills: ["React", "JavaScript", "Redux", "RESTful API", "HTML/CSS"],
    salary: {
      min: 70000,
      max: 90000,
      currency: "KES",
    },
    postedDate: "2023-05-05",
    matchScore: 87,
  },
  {
    id: "3",
    title: "UI/UX Developer",
    company: "DesignHub",
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    location: "Mombasa, Kenya",
    workStyle: "in-person",
    description: "We're looking for a talented UI/UX Developer to create amazing user experiences...",
    responsibilities: [
      "Create user-centered designs",
      "Develop UI mockups and prototypes",
      "Conduct user research and testing",
    ],
    requirements: [
      "3+ years of experience in UI/UX development",
      "Proficiency in design tools like Figma or Sketch",
      "Strong portfolio showcasing UI/UX projects",
    ],
    skills: ["UI/UX Design", "HTML/CSS", "JavaScript", "Figma", "User Research"],
    salary: {
      min: 60000,
      max: 85000,
      currency: "KES",
    },
    postedDate: "2023-05-08",
    matchScore: 81,
  },
  {
    id: "4",
    title: "Frontend Engineer",
    company: "WebSolutions Ltd",
    companyLogo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    location: "Nairobi, Kenya",
    workStyle: "hybrid",
    description: "Join our team of passionate frontend engineers to build responsive web applications...",
    responsibilities: [
      "Implement responsive designs",
      "Optimize application performance",
      "Write clean, maintainable code",
    ],
    requirements: [
      "2+ years of experience in frontend development",
      "Experience with modern JavaScript frameworks",
      "Knowledge of responsive design principles",
    ],
    skills: ["JavaScript", "HTML/CSS", "React", "Responsive Design"],
    postedDate: "2023-05-10",
    matchScore: 78,
  },
];

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilteredJobs(
      mockJobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
  
  return (
    <MainLayout>
      {/* Hero Section with Glassmorphic Search Bar */}
      <div className="relative bg-gradient-to-b from-primary/20 to-secondary/10 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Find Your Perfect Job Match</h1>
            <p className="text-lg text-foreground/80">
              Discover opportunities tailored to your skills, experience, and career goals
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8">
            <form onSubmit={handleSearch} className="relative flex gap-2 bg-background/40 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-lg">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/70" size={18} />
                <Input 
                  type="text" 
                  placeholder="Search for jobs, companies, or locations" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-transparent border-primary/20 focus-visible:ring-primary/50"
                />
              </div>
              <Button type="submit" className="relative group overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative">Search</span>
                <span className="absolute inset-0 rounded-md border border-primary/50 group-hover:border-white/20 transition-colors"></span>
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filters Toggle */}
          <div className="lg:hidden w-full mb-4">
            <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Filters</span> 
                  <SlidersHorizontal size={16} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4">
                <FiltersPanel />
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky top-4">
              <Card className="bg-background/70 backdrop-blur-md border border-white/10 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-primary">Filters</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <ScrollArea className="h-[calc(100vh-220px)] pr-4">
                    <FiltersPanel />
                  </ScrollArea>
                </CardContent>
                <CardFooter className="border-t border-border/50 bg-muted/30">
                  <Button variant="outline" size="sm" className="w-full hover:bg-primary/10">Reset Filters</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          
          {/* Jobs Listing */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground/90">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
              </h2>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[180px] bg-background/70 border-white/10">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Sort by: Relevance</SelectItem>
                  <SelectItem value="recent">Sort by: Most Recent</SelectItem>
                  <SelectItem value="salary-high">Sort by: Salary (High to Low)</SelectItem>
                  <SelectItem value="salary-low">Sort by: Salary (Low to High)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-6 animate-fade-in">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-16 bg-background/30 backdrop-blur-sm rounded-xl border border-white/10">
                <p className="text-lg text-foreground/70 mb-4">No jobs found matching your search criteria.</p>
                <Button variant="outline" onClick={() => setFilteredJobs(mockJobs)} className="border-primary/30 hover:border-primary hover:bg-primary/10">
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Extracted Filters panel component for reuse
const FiltersPanel = () => {
  return (
    <div className="space-y-6">
      {/* Work Style Filter */}
      <div>
        <h4 className="font-medium mb-3 text-foreground/90">Work Style</h4>
        <div className="space-y-2">
          {["Remote", "Hybrid", "In-Person"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={`job-type-${type.toLowerCase()}`} className="data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
              <label htmlFor={`job-type-${type.toLowerCase()}`} className="text-sm text-foreground/80 cursor-pointer">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <Separator className="bg-border/30" />
      
      {/* Experience Level */}
      <div>
        <h4 className="font-medium mb-3 text-foreground/90">Experience Level</h4>
        <div className="space-y-2">
          {["Entry Level", "Mid Level", "Senior", "Executive"].map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox id={`exp-${level.toLowerCase().replace(" ", "-")}`} className="data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
              <label htmlFor={`exp-${level.toLowerCase().replace(" ", "-")}`} className="text-sm text-foreground/80 cursor-pointer">
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <Separator className="bg-border/30" />
      
      {/* Salary Range */}
      <div>
        <h4 className="font-medium mb-3 text-foreground/90">Salary Range</h4>
        <Select>
          <SelectTrigger className="bg-background/50 border-white/10">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="0-50000">0 - 50,000 KES</SelectItem>
            <SelectItem value="50000-80000">50,000 - 80,000 KES</SelectItem>
            <SelectItem value="80000-120000">80,000 - 120,000 KES</SelectItem>
            <SelectItem value="120000+">120,000+ KES</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Separator className="bg-border/30" />
      
      {/* Skills */}
      <div>
        <h4 className="font-medium mb-3 text-foreground/90">Skills</h4>
        <div className="space-y-2">
          {["JavaScript", "React", "TypeScript", "UI/UX", "HTML/CSS"].map((skill) => (
            <div key={skill} className="flex items-center space-x-2">
              <Checkbox id={`skill-${skill.toLowerCase().replace("/", "-")}`} className="data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
              <label htmlFor={`skill-${skill.toLowerCase().replace("/", "-")}`} className="text-sm text-foreground/80 cursor-pointer">
                {skill}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Card className="group overflow-hidden bg-background/70 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,157,224,0.15)]">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-14 w-14 rounded-lg bg-accent/30 flex items-center justify-center overflow-hidden backdrop-blur-sm border border-white/10 group-hover:border-primary/20 transition-colors">
            {job.companyLogo ? (
              <img src={job.companyLogo} alt={job.company} className="h-full w-full object-cover" />
            ) : (
              <BriefcaseIcon className="h-8 w-8 text-primary/80" />
            )}
          </div>
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
              {job.matchScore && (
                <span className="inline-flex items-center bg-primary/10 text-primary text-xs px-3 py-1 rounded-full mt-1 md:mt-0 border border-primary/20">
                  {job.matchScore}% Match
                </span>
              )}
            </div>
            <p className="text-foreground/70 text-sm">{job.company}</p>
            <div className="flex flex-wrap gap-y-2 mt-3">
              <div className="flex items-center text-foreground/60 text-sm mr-4">
                <MapPinIcon size={16} className="mr-1 text-primary/70" />
                {job.location}
              </div>
              <div className="flex items-center text-foreground/60 text-sm mr-4">
                <BriefcaseIcon size={16} className="mr-1 text-primary/70" />
                {job.workStyle.charAt(0).toUpperCase() + job.workStyle.slice(1)}
              </div>
              <div className="flex items-center text-foreground/60 text-sm mr-4">
                <Calendar size={16} className="mr-1 text-primary/70" />
                {new Date(job.postedDate).toLocaleDateString()}
              </div>
              {job.salary && (
                <div className="text-foreground/60 text-sm">
                  {job.salary.currency} {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()}
                </div>
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.skills.slice(0, 4).map((skill) => (
                <span key={skill} className="bg-secondary/10 border border-secondary/20 text-xs px-3 py-1 rounded-full text-foreground/80">
                  {skill}
                </span>
              ))}
              {job.skills.length > 4 && (
                <span className="bg-secondary/10 border border-secondary/20 text-xs px-3 py-1 rounded-full text-foreground/80">
                  +{job.skills.length - 4} more
                </span>
              )}
            </div>
            <div className="mt-5 flex gap-3">
              <Button asChild className="relative group overflow-hidden">
                <Link to={`/jobs/${job.id}`}>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative">Apply Now</span>
                </Link>
              </Button>
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10 hover:text-primary">
                Save Job
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobsPage;
