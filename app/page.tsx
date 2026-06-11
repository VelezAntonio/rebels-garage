import { Button } from "@/components/ui/button"
import { PhoneCall, Mail, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import GallerySection from "@/components/gallery-section"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="The Rebels Garage Logo" width={120} height={60} className="h-12 w-auto rounded-lg" />
            <span className="text-xl font-bold tracking-tight">The Rebels Garage</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:text-primary">
              Gallery
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+17029354200" className="hidden md:flex items-center gap-2 text-sm font-medium">
              <PhoneCall className="h-4 w-4" />
              <span>(702) 935-4200</span>
            </a>
            <Button asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Auto body repair shop"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 lg:py-40 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Expert Vehicle Bodywork & Repairs
            </h1>
            <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-200">
              From dents to full collision repairs, we ensure top-quality service to get your vehicle looking and
              performing like new.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Request a Quote</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/20 text-white border-white hover:bg-background/30"
                asChild
              >
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mt-4 max-w-3xl text-muted-foreground">
                We specialize in comprehensive bodywork and repairs for a wide range of vehicles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="Collision Repair"
                description="Complete collision repair services to restore your vehicle to pre-accident condition."
                icon="car"
              />
              <ServiceCard
                title="Dent Removal"
                description="Professional dent removal without damaging your vehicle's paint."
                icon="tool"
              />
              <ServiceCard
                title="Custom Paint"
                description="Expert color matching and custom paint jobs for all vehicles."
                icon="paintBucket"
              />
              <ServiceCard
                title="RV & Box Truck Repairs"
                description="Specialized repairs for recreational vehicles and commercial box trucks."
                icon="truck"
              />
              <ServiceCard
                title="UTV & Can-Am Repairs"
                description="Expert repairs for UTVs, Can-Ams, RZRs and other off-road vehicles."
                icon="jeep"
              />
              <ServiceCard
                title="Frame Straightening"
                description="Precision frame straightening to ensure your vehicle's structural integrity."
                icon="ruler"
              />
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="group" asChild>
                <a href="#contact">
                  Get a Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">About The Rebels Garage</h2>
              <p className="mt-4 text-muted-foreground text-center">
                With years of experience in the automotive repair industry, The Rebels Garage has built a reputation
                for excellence in bodywork and collision repair.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Expert Technicians</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team consists of certified professionals with years of experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Quality Materials</h3>
                    <p className="text-sm text-muted-foreground">
                      We use only the highest quality parts and materials for all repairs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Satisfaction Guaranteed</h3>
                    <p className="text-sm text-muted-foreground">
                      We stand behind our work with a satisfaction guarantee on all services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Versatile Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      From cars to RVs, UTVs to box trucks - we repair them all with the same attention to detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Paint Job Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Custom Paint Transformations</h2>
              <p className="mt-4 max-w-3xl text-muted-foreground">
                See the stunning results of our expert custom paint services. We transform vehicles with precision color matching and flawless finishes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="absolute top-4 left-4 bg-foreground text-background px-3 py-1 rounded-full text-sm font-medium z-10">
                  Before
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image 
                    src="/custom-paint-before.jpg" 
                    alt="BMW X6 before custom paint - original white color" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium z-10">
                  After
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image 
                    src="/custom-paint-after.jpg" 
                    alt="BMW X6 after custom paint - stunning emerald green metallic finish" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-medium">BMW X6 Complete Color Change</p>
              <p className="text-muted-foreground">From factory white to a stunning custom emerald green metallic finish</p>
              <Button className="mt-6" asChild>
                <a href="#contact">Get Your Custom Quote</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <GallerySection />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
              <p className="mt-4 max-w-3xl text-muted-foreground">
                Don't just take our word for it. Here's what our satisfied customers have to say about our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                name="John D."
                vehicle="Ford F-150"
                quote="After a bad accident, I thought my truck was done for. The Rebels Garage restored it to better than new condition. I couldn't be happier with their work!"
                rating={5}
              />
              <TestimonialCard
                name="Sarah M."
                vehicle="Can-Am Maverick"
                quote="Finding someone who knows how to properly repair my Can-Am was a challenge until I found The Rebels Garage. Their expertise with off-road vehicles is unmatched."
                rating={5}
              />
              <TestimonialCard
                name="Robert T."
                vehicle="Winnebago RV"
                quote="The team at Rebels Garage did an amazing job repairing the damage to my RV after a tree branch fell on it. Professional service from start to finish."
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
                <p className="mt-4 text-muted-foreground">
                  Have questions or need a quote? Reach out to us and we'll get back to you as soon as possible.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <PhoneCall className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">(702) 935-4200</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">info@rebelsauto.us</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-sm text-muted-foreground">2695 S Decatur Blvd. Suite 400, Las Vegas NV 89112</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-sm text-muted-foreground">Monday-Friday: 8am-5:30pm</p>
                      <p className="text-sm text-muted-foreground">Saturday: 9am-1pm</p>
                      <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="The Rebels Garage Logo" width={100} height={50} className="h-10 w-auto rounded-lg" />
                <span className="text-lg font-bold">The Rebels Garage</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Expert bodywork and repairs for cars, UTVs, box trucks, RVs, Can-Ams, and RZRs.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-muted-foreground hover:text-foreground">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-foreground">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} The Rebels Garage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
