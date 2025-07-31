import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "AI-Powered Learning",
    description:
      "Tailored learning paths based on your progress and goals.",
  },
  {
    title: "Interactive Courses",
    description:
      "Engage with interactive lessons, quizzes, and real-time feedback.",
  },
  {
    title: "Progress Tracking",
    description:
      "Comprehensive analytics to monitor your learning journey.",
  },
];

const steps = [
  {
    title: 'Sign Up',
    description: 'Create your free account in minutes.',
  },
  {
    title: 'Explore Courses',
    description: 'Browse through our vast library of AI-powered courses.',
  },
  {
    title: 'Start Learning',
    description: 'Begin your personalized learning journey today!',
  },
];

const testimonials = [
  {
    name: 'John Doe',
    role: 'Student',
    avatar: 'https://placehold.co/100x100/E2E8F0/4A5568?text=JD',
    quote: '"The AI powered feedback has been a game-changer for my learning. It\'s like having a personal tutor!"',
  },
  {
    name: 'Jane Smith',
    role: 'Educator',
    avatar: 'https://placehold.co/100x100/E2E8F0/4A5568?text=JS',
    quote: '"Integrating AI into my teaching has never been easier. The platform is intuitive and powerful."',
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      {/* <nav className="flex items-center justify-between py-6 px-10 max-w-7xl mx-auto"> */}
      <nav className="p-6 flex justify-between items-center shadow-sm">
        <div className="text-teal-500 font-bold text-4xl">LearnSphere</div>
        {/* <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <li>
            <Link href="#" className="hover:text-teal-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-teal-500">
              Features
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-teal-500">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-teal-500">
              Contact
            </Link>
          </li>
        </ul> */}
        <Link href={'/workspace'}>
        <button className="bg-blue-600 text-white font-bold py-2 px-8 rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          Get Started
        </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="text-center mx-auto px-6 py-20">
        <h1 className="text-6xl px-10 font-bold mb-6">
          Unlock Your Potential with{" "}
          <span className="text-teal-500">AI-Powered Learning</span> 🚀
        </h1>
        <p className="text-gray-600 text-xl mb-10">
          Experience personalized learning paths, instant feedback, and
          intelligent insights.
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="/workspace">
          <button className="bg-blue-600 text-white font-bold py-3 px-12 rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            Get Started
          </button>
          </Link>
          <Link href="/workspace">
          <button className="bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-300 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            Learn More 💪
          </button>
          </Link>
        </div>
      </section>


      {/* Hero Image */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <Image
          src="/landing.jpg"
          alt="Happy learners"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg"
          priority
        />
      </section>
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-10">Why Choose Us?</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-500 to-blue-600 py-16 sm:py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              How It Works 🤫
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-blue-700 bg-opacity-50 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-blue-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              What Our Users Say 😍
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center mb-4">
                  <Image
                    // src={testimonial.avatar}
                    src={'/landing.jpg'}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey? 🚀
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners achieving their goals with our AI platform.
          </p>
          <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            Sign Up for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 text-center">
        <p>© {new Date().getFullYear()} LearnSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}

