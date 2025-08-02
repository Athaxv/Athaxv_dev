import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from "lucide-react"

interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  gpa?: string
  honors?: string[]
  coursework?: string[]
  activities?: string[]
  description?: string
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology",
    institution: "Maharaja Surajmal Institute of Technology",
    location: "Stanford, CA",
    period: "2023 - 2027",
    gpa: "8.5/10.0",
    honors: ["Summa Cum Laude", "Dean's List"],
    coursework: ["Machine Learning", "Distributed Systems", "Advanced Algorithms", "Computer Vision"],
    activities: ["Teaching Assistant", "Research Lab Member"],
    description:
      "Specialized in artificial intelligence and machine learning with focus on computer vision applications.",
  },
//   {
//     degree: "Bachelor of Science in Software Engineering",
//     institution: "University of California, Berkeley",
//     location: "Berkeley, CA",
//     period: "2018 - 2022",
//     gpa: "3.8/4.0",
//     honors: ["Magna Cum Laude", "Phi Beta Kappa"],
//     coursework: ["Data Structures", "Software Architecture", "Database Systems", "Web Development"],
//     activities: ["ACM President", "Hackathon Organizer", "Peer Tutor"],
//     description: "Comprehensive foundation in software engineering principles with emphasis on full-stack development.",
//   },
  {
    degree: "High School",
    institution: "A.S.N Senior Secondary School",
    location: "Delhi, India",
    period: "2010 - 2022",
    gpa: "85 Percent",
    honors: ["Valedictorian", "National Merit Scholar"],
    activities: ["Computer Science Club Founder", "Math Olympiad Team"],
    description: "Strong academic foundation with early focus on STEM subjects and leadership development.",
  },
]

export default function EducationSection() {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/10 dark:bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-black dark:text-white" />
            <span className="text-sm font-medium text-black dark:text-white">Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">Academic Journey</h2>
          <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
            A comprehensive educational foundation built through rigorous academic programs and hands-on learning
            experiences.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-black/20 dark:bg-white/20 hidden md:block" />

          <div className="space-y-6">
            {educationData.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black shadow-2xl hidden md:block" />

                <Card className="md:ml-16 group hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-white/10 transition-all duration-300 border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 bg-white dark:bg-black">
                  <CardContent className="p-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      {/* Main Content */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-2">
                          <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors border border-black/10 dark:border-white/10">
                            <GraduationCap className="w-6 h-6 text-black dark:text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-black dark:text-white mb-2">{item.degree}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-black/60 dark:text-white/60 mb-3">
                              <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                <span className="font-medium">{item.institution}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{item.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{item.period}</span>
                              </div>
                            </div>
                            {/* {item.description && (
                              <p className="text-black/80 dark:text-white/80 mb-4">{item.description}</p>
                            )} */}
                          </div>
                        </div>

                        {/* GPA */}
                        {item.gpa && (
                          <div className="flex items-center gap-2 mb-4 p-3 bg-black/5 dark:bg-white/5 rounded-lg border border-black/10 dark:border-white/10">
                            <Award className="w-4 h-4 text-black dark:text-white" />
                            <span className="font-semibold text-black dark:text-white">GPA: {item.gpa}</span>
                          </div>
                        )}

                        {/* Honors */}
                        {/* {item.honors && item.honors.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-black dark:text-white mb-2">Honors & Awards</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.honors.map((honor, honorIndex) => (
                                <Badge
                                  key={honorIndex}
                                  className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 border-0 font-medium"
                                >
                                  {honor}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )} */}

                        {/* Coursework */}
                        {/* {item.coursework && item.coursework.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-black dark:text-white mb-2">
                              Relevant Coursework
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.coursework.map((course, courseIndex) => (
                                <Badge
                                  key={courseIndex}
                                  variant="outline"
                                  className="border-black/30 dark:border-white/30 text-black/80 dark:text-white/80 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                                >
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )} */}

                        {/* Activities */}
                        {/* {item.activities && item.activities.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-black dark:text-white mb-2 flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              Activities & Leadership
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.activities.map((activity, activityIndex) => (
                                <Badge
                                  key={activityIndex}
                                  variant="outline"
                                  className="border-black/30 dark:border-white/30 text-black/80 dark:text-white/80 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                                >
                                  {activity}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )} */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
            <div className="text-3xl font-bold text-black dark:text-white mb-2">6+</div>
            <div className="text-sm text-black/60 dark:text-white/60">Years of Study</div>
          </div>
          <div className="text-center p-6 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
            <div className="text-3xl font-bold text-black dark:text-white mb-2">3.85</div>
            <div className="text-sm text-black/60 dark:text-white/60">Average GPA</div>
          </div>
          <div className="text-center p-6 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
            <div className="text-3xl font-bold text-black dark:text-white mb-2">15+</div>
            <div className="text-sm text-black/60 dark:text-white/60">Core Courses</div>
          </div>
          <div className="text-center p-6 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
            <div className="text-3xl font-bold text-black dark:text-white mb-2">5+</div>
            <div className="text-sm text-black/60 dark:text-white/60">Leadership Roles</div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
