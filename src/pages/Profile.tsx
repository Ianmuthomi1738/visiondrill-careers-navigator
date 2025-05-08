
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, LinkedinIcon, Upload } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    title: "",
    summary: "",
    location: "",
    linkedin: "",
    workStyle: "",
    salaryMin: "",
    salaryMax: "",
    salaryCurrency: "KES",
    preferredLocations: [],
    skills: "",
    experience: [],
    education: [],
  });
  
  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  
  const handleNext = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const handlePrevious = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  const handleFinish = () => {
    toast({
      title: "Profile Created Successfully",
      description: "Your professional profile has been set up. You can now start your career journey.",
    });
    navigate("/dashboard");
  };
  
  const handleLinkedInImport = () => {
    toast({
      title: "LinkedIn Import",
      description: "LinkedIn import feature would be integrated here.",
    });
  };
  
  const renderWizardStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input 
                id="fullName" 
                value={formData.fullName} 
                onChange={(e) => handleChange("fullName", e.target.value)} 
                placeholder="John Doe" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={formData.email} 
                onChange={(e) => handleChange("email", e.target.value)} 
                placeholder="john@example.com" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input 
                id="phone" 
                value={formData.phone} 
                onChange={(e) => handleChange("phone", e.target.value)} 
                placeholder="+254 XXX XXX XXX" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="title">Professional Title</Label>
              <Input 
                id="title" 
                value={formData.title} 
                onChange={(e) => handleChange("title", e.target.value)} 
                placeholder="Frontend Developer" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Current Location</Label>
              <Input 
                id="location" 
                value={formData.location} 
                onChange={(e) => handleChange("location", e.target.value)} 
                placeholder="Nairobi, Kenya" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="summary">Professional Summary</Label>
              <Textarea 
                id="summary" 
                value={formData.summary} 
                onChange={(e) => handleChange("summary", e.target.value)} 
                placeholder="Write a brief professional summary about yourself" 
                rows={4} 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile URL (Optional)</Label>
              <div className="flex gap-2">
                <Input 
                  id="linkedin" 
                  value={formData.linkedin} 
                  onChange={(e) => handleChange("linkedin", e.target.value)} 
                  placeholder="https://linkedin.com/in/username" 
                />
                <Button type="button" variant="outline" onClick={handleLinkedInImport}>
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  Import
                </Button>
              </div>
            </div>
            
            <div className="pt-4 flex justify-end">
              <Button onClick={handleNext}>Continue</Button>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="workStyle">Preferred Work Style</Label>
              <Select 
                value={formData.workStyle} 
                onValueChange={(value) => handleChange("workStyle", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select work style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                  <SelectItem value="in-person">In-Person</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Salary Expectations</Label>
              <div className="grid grid-cols-4 gap-4">
                <Select 
                  value={formData.salaryCurrency} 
                  onValueChange={(value) => handleChange("salaryCurrency", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="KES">KES</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                  </SelectContent>
                </Select>
                <div className="col-span-3 grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="Minimum" 
                    type="number" 
                    value={formData.salaryMin} 
                    onChange={(e) => handleChange("salaryMin", e.target.value)} 
                  />
                  <Input 
                    placeholder="Maximum" 
                    type="number" 
                    value={formData.salaryMax} 
                    onChange={(e) => handleChange("salaryMax", e.target.value)} 
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="preferredLocations">Preferred Locations</Label>
              <Input 
                id="preferredLocations" 
                placeholder="E.g., Nairobi, Mombasa, Remote" 
              />
              <p className="text-xs text-gray-500">Enter multiple locations separated by commas</p>
            </div>
            
            <div className="pt-4 flex justify-between">
              <Button variant="outline" onClick={handlePrevious}>Back</Button>
              <Button onClick={handleNext}>Continue</Button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <Textarea 
                id="skills" 
                value={formData.skills} 
                onChange={(e) => handleChange("skills", e.target.value)} 
                placeholder="E.g., JavaScript, React, UI Design, Project Management" 
                rows={3} 
              />
              <p className="text-xs text-gray-500">Enter multiple skills separated by commas</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <Label>Resume/CV</Label>
                <Button variant="outline" size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload
                </Button>
              </div>
              <div className="border border-dashed rounded-lg p-8 text-center">
                <div className="space-y-2">
                  <p className="text-sm">Drag and drop your resume/CV here or click upload</p>
                  <p className="text-xs text-gray-500">Supported formats: PDF, DOCX (Max 5MB)</p>
                </div>
              </div>
              <p className="text-sm mt-4">
                Our AI will automatically parse your resume to extract experience, education, and additional skills.
              </p>
            </div>
            
            <div className="pt-4 flex justify-between">
              <Button variant="outline" onClick={handlePrevious}>Back</Button>
              <Button onClick={handleNext}>Continue</Button>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div className="rounded-lg bg-green-50 border border-green-100 p-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
              <div>
                <p className="font-medium">Profile Setup Complete!</p>
                <p className="text-sm text-gray-600">
                  You've completed the basic profile setup. You can now access your dashboard.
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="font-medium">What's Next?</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-1 mr-2 mt-1">
                    <CheckCircle className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">View your career dashboard with personalized insights</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-1 mr-2 mt-1">
                    <CheckCircle className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">Take skill assessments to improve your readiness score</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-1 mr-2 mt-1">
                    <CheckCircle className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">Explore job opportunities matched to your profile</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-1 mr-2 mt-1">
                    <CheckCircle className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">Practice interviews with our AI-powered mock interview tool</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-4 flex justify-between">
              <Button variant="outline" onClick={handlePrevious}>Back</Button>
              <Button onClick={handleFinish}>Go to Dashboard</Button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Your Professional Profile</h1>
            <p className="text-gray-600">
              Set up your profile to unlock personalized job recommendations and career insights
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex flex-col items-center">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= stepNumber ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step > stepNumber ? <CheckCircle className="h-5 w-5" /> : stepNumber}
                  </div>
                  <span className="text-xs mt-2 text-gray-500 hidden sm:block">
                    {stepNumber === 1 && "Basic Info"}
                    {stepNumber === 2 && "Preferences"}
                    {stepNumber === 3 && "Skills & Resume"}
                    {stepNumber === 4 && "Complete"}
                  </span>
                </div>
              ))}
            </div>
            <div className="overflow-hidden h-2 mt-4">
              <div 
                className="bg-primary h-2 transition-all duration-300 ease-out"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <Card className="p-6">
            <Tabs defaultValue="wizard">
              <TabsList className="mb-6">
                <TabsTrigger value="wizard">Setup Wizard</TabsTrigger>
                <TabsTrigger value="linkedin">Import from LinkedIn</TabsTrigger>
              </TabsList>
              
              <TabsContent value="wizard">
                {renderWizardStep()}
              </TabsContent>
              
              <TabsContent value="linkedin">
                <div className="py-10 text-center space-y-6">
                  <LinkedinIcon className="h-16 w-16 mx-auto text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Import Your LinkedIn Profile</h3>
                    <p className="text-gray-600 mb-6">
                      Quickly set up your profile by importing your professional details from LinkedIn.
                    </p>
                    <Button onClick={handleLinkedInImport}>
                      <LinkedinIcon className="mr-2 h-4 w-4" />
                      Connect LinkedIn
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
