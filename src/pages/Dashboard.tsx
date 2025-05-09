
import MainLayout from "@/layouts/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, BookOpen, BriefcaseIcon, ChevronRight, MessageSquare, UserIcon } from "lucide-react";
import { SkillGap } from "@/utils/types";

// Mock data
const mockUser = {
  id: "1",
  name: "Alex Johnson",
  email: "alex@example.com",
  profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  title: "Frontend Developer",
  location: "Nairobi, Kenya",
  skills: ["React", "JavaScript", "HTML/CSS", "UI/UX", "TypeScript"],
  readinessScore: 76,
};

const mockRecommendedJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechSolutions Inc.",
    location: "Nairobi, Kenya",
    matchScore: 92,
  },
  {
    id: "2",
    title: "React Developer",
    company: "InnovateCorp",
    location: "Remote",
    matchScore: 87,
  },
  {
    id: "3",
    title: "UI/UX Developer",
    company: "DesignHub",
    location: "Mombasa, Kenya",
    matchScore: 81,
  },
];

const mockSkillGaps: SkillGap[] = [
  {
    skill: "TypeScript",
    proficiency: 60,
    required: 80,
    courses: [
      {
        id: "course1",
        title: "TypeScript Masterclass",
        provider: "Visiondrill",
        duration: "4 weeks",
        level: "Intermediate",
        url: "#",
      },
    ],
  },
  {
    skill: "React Testing",
    proficiency: 40,
    required: 75,
    courses: [
      {
        id: "course2",
        title: "Testing React Applications",
        provider: "Visiondrill",
        duration: "3 weeks",
        level: "Intermediate",
        url: "#",
      },
    ],
  },
  {
    skill: "Redux",
    proficiency: 50,
    required: 70,
    courses: [
      {
        id: "course3",
        title: "Redux Fundamentals",
        provider: "Visiondrill",
        duration: "2 weeks",
        level: "Intermediate",
        url: "#",
      },
    ],
  },
];

const mockUpcomingEvents = [
  {
    id: "event1",
    title: "Mock Interview Session",
    date: "Tomorrow, 10:00 AM",
    type: "Interview",
  },
  {
    id: "event2",
    title: "TypeScript Fundamentals",
    date: "Wednesday, 2:00 PM",
    type: "Course",
  },
];

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/4">
            <Card className="mb-6">
              <CardHeader className="pb-4">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img 
                      src={mockUser.profileImage} 
                      alt={mockUser.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-center">{mockUser.name}</CardTitle>
                  <CardDescription className="text-center">{mockUser.title}</CardDescription>
                  <div className="text-sm text-gray-500 flex items-center mt-1">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                    </svg>
                    {mockUser.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Career Readiness</span>
                    <span className="text-sm font-medium">{mockUser.readinessScore}%</span>
                  </div>
                  <Progress value={mockUser.readinessScore} className="h-2" />
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {mockUser.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs bg-accent px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/profile">Edit Profile</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockUpcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded">
                      {event.type === 'Interview' ? (
                        <MessageSquare size={16} className="text-primary" />
                      ) : (
                        <BookOpen size={16} className="text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{event.title}</p>
                      <p className="text-xs text-gray-500">{event.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" size="sm" className="w-full justify-between">
                  <Link to="/calendar">View Calendar
                    <ChevronRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-3/4 space-y-6">
            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="hover-scale">
                <CardHeader className="pb-2">
                  <div className="bg-primary/10 w-10 h-10 flex items-center justify-center rounded-lg mb-2">
                    <BriefcaseIcon size={20} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Job Matches</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-500">View jobs specifically matched to your profile.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/jobs">Explore Jobs</Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover-scale">
                <CardHeader className="pb-2">
                  <div className="bg-primary/10 w-10 h-10 flex items-center justify-center rounded-lg mb-2">
                    <Award size={20} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Skill Assessment</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-500">Take assessments to identify your strengths and areas for growth.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/assessment">Start Assessment</Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover-scale">
                <CardHeader className="pb-2">
                  <div className="bg-primary/10 w-10 h-10 flex items-center justify-center rounded-lg mb-2">
                    <MessageSquare size={20} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Interview Practice</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-500">Practice with our AI-powered mock interviews.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/interviews">Start Practice</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Recommended Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended Jobs</CardTitle>
                <CardDescription>Based on your profile and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRecommendedJobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                      <div>
                        <h4 className="font-medium">{job.title}</h4>
                        <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {job.matchScore}% Match
                        </span>
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/jobs/${job.id}`}>View</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link to="/jobs">
                    View All Recommendations
                    <ChevronRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Skill Gaps & Learning */}
            <Card>
              <CardHeader>
                <CardTitle>Skill Development</CardTitle>
                <CardDescription>Recommended learning paths based on your career goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockSkillGaps.map((skill) => (
                    <div key={skill.skill} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.skill}</span>
                        <span className="text-sm text-gray-500">
                          {skill.proficiency}% / {skill.required}% Required
                        </span>
                      </div>
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                          <div
                            className="bg-primary"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                          <div
                            className="bg-gray-300 opacity-30 absolute h-2"
                            style={{
                              left: `${skill.proficiency}%`,
                              width: `${skill.required - skill.proficiency}%`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="bg-accent rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium">{skill.courses[0].title}</p>
                            <p className="text-xs text-gray-500">
                              {skill.courses[0].provider} • {skill.courses[0].duration} • {skill.courses[0].level}
                            </p>
                          </div>
                          <Button asChild size="sm">
                            <Link to={`/courses/${skill.courses[0].id}`}>Start</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link to="/learning">
                    View All Courses
                    <ChevronRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
