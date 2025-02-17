'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Globe, Building, Briefcase, Shield, Phone, Mail, MapPin, Sprout, BarChart, Users, BookOpen } from 'lucide-react'


const date = new Date();
let year = date.getFullYear()


export default function AxisWealthHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }



  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
        <img alt='logo' src='/logo.png' className='w-54 md:h-10' />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-600 hover:text-[#38b6ff] transition-colors">Services</a>
          <a href="#target-market" className="text-gray-600 hover:text-[#38b6ff] transition-colors">Target Market</a>
          <a href="#advantages" className="text-gray-600 hover:text-[#38b6ff] transition-colors">Advantages</a>
          <a href="#partnerships" className="text-gray-600 hover:text-[#38b6ff] transition-colors">Partnerships</a>
        <a href="#contact" className="text-gray-600 hover:text-[#38b6ff] transition-colors">Contact</a>
        </nav>
        <button
          className="md:hidden text-gray-600 hover:text-[#38b6ff] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <ChevronDown className={`w-6 h-6 transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <a href="#services" className="text-gray-600 hover:text-[#38b6ff] transition-colors">Services</a>
            <a href="#target-market" className="text-gray-600 hover:text-[#38b6ff] transition-colors">Target Market</a>
            <a href="#advantages" className="text-gray-600 hover:text-[#38b6ff] transition-colors">Advantages</a>
            <a href="#partnerships" className="text-gray-600 hover:text-[#38b6ff] transition-colors">Partnerships</a>
            <a href="#contact" className="text-gray-600 hover:text-[#38b6ff] transition-colors">Contact</a>
          </div>
        </nav>
      )}
    </header>

    <main>
      <section className=" bg-[url('/axis-back.jpg')] text-white py-20">
  
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Global Asset Management, Simplified
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            We are a specialized remote management firm dedicated to overseeing and managing business ventures, startups, real estate, agricultural assets  and project expansions for absentee owners, 
            expatriates, and international investors.
          </motion.p>
          <motion.div
            className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              To offer professional, transparent, and trustworthy remote management services, ensuring
              clients' assets are managed with excellence and reliability across borders.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building, title: "Real Estate Management", description: "Property management and construction oversight for absentee owners" },
              { icon: Sprout, title: "Farming and Agricultural Management", description: "Farm operation oversight with sustainable practices and long-term planning" },
              { icon: Briefcase, title: "Asset Acquisition", description: "Investment opportunity research and management for global clients" },
              { icon: BarChart, title: "Project Management", description: "Expansion project management ensuring compliance and efficient delivery" },
              { icon: Shield, title: "Financial Reporting and Compliance", description: "Regular updates, compliance management, and performance reporting" },
              { icon: BookOpen, title: "Business Training/Management", description: "Entrepreneurship training using ILO manual and business grant management" },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <service.icon className="w-12 h-12 text-[#38b6ff] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="target-market" className="bg-gray-100 py-16 bg-[url('/axis-wealth.jpg')]" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Target Market</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "High-Net-Worth Individuals", description: "Wealthy individuals with diverse global portfolios seeking reliable asset management" },
              { title: "Expatriates and Global Nomads", description: "Individuals needing local management for properties and businesses in their home country" },
              { title: "International Investors", description: "Investors looking to manage assets in various markets remotely" },
              { title: "Corporations", description: "Businesses with international operations requiring efficient remote project and asset management" },
              { title: "Small and Medium Scale Enterprises", description: "Partnerships with government institutions, NGOs, and private entities to grow the country's GDP" },
            ].map((market, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{market.title}</h3>
                <p className="text-gray-600">{market.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Competitive Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Specialization in Remote Management", description: "Expertise in managing international assets across real estate, agriculture, and investments" },
              { title: "Local Partnerships", description: "Extensive network of local contractors, service providers, and legal experts" },
              { title: "Transparency and Trust", description: "Commitment to clear communication, regular reporting, and compliance" },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-[#38b6ff] text-white p-6 rounded-lg shadow-md"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p>{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="partnerships" className="bg-gray-100 py-16  bg-[url('/axis-market.jpg')] ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Partnerships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building, title: "Local Property Managers", description: "For ground-level property and construction management" },
              { icon: Briefcase, title: "Investment and Legal Advisors", description: "To ensure compliance and optimal asset structuring" },
              { icon: Users, title: "Local Contractors", description: "For ongoing building and contracting" },
              { icon: Globe, title: "Government Bodies", description: "For social economic development driving the agenda of GDP growth" },
            ].map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <partner.icon className="w-12 h-12 text-[#38b6ff] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{partner.title}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Simplify Your Global Asset Management?</h2>
          <p className="text-xl mb-8">Contact us today to learn how we can help you manage your international investments.</p>
          <a
            href="mailto:axiswealthmanagement24@gmail.com"
            className="bg-[#38b6ff] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#38b6ff] transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>

    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">AXIS WEALTH ASSET MANAGEMENT</h3>
            <p className="mb-4">Specialized remote management for global assets and investments</p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+260 762638285 / +260 975454437</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:axiswealthmanagement24@gmail.com" className="hover:text-[#38b6ff] transition-colors">axiswealthmanagement24@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <a href="https://axis-management.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#38b6ff] transition-colors">axis-management.vercel.app</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#38b6ff] transition-colors">Services</a></li>
              <li><a href="#target-market" className="hover:text-[#38b6ff] transition-colors">Target Market</a></li>
              <li><a href="#advantages" className="hover:text-[#38b6ff] transition-colors">Advantages</a></li>
              <li><a href="#partnerships" className="hover:text-[#38b6ff] transition-colors">Partnerships</a></li>
              <li><a href="#" className="hover:text-[#38b6ff] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#38b6ff] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {year} AXIS WEALTH ASSET MANAGEMENT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
  )
}