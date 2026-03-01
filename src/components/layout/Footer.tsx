import * as React from "react"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, Globe } from "lucide-react"
import { Logo } from "@/components/common/Logo"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layer 1: Brand & Tagline */}
        <div className="py-12 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/">
            <Logo />
          </Link>
          <p className="text-slate-500 text-sm font-medium text-center md:text-right">
            Digital transformation that actually works.
          </p>
        </div>

        {/* Layer 2: Navigation & Actions */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Company */}
          <div className="space-y-6">
            <h3 className="font-bold text-slate-900">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-600 hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-brand-orange transition-colors">Services</Link></li>
              <li><Link to="/careers" className="text-slate-600 hover:text-brand-orange transition-colors">Careers</Link></li>
              <li><Link to="/testimonials" className="text-slate-600 hover:text-brand-orange transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h3 className="font-bold text-slate-900">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/search" className="text-slate-600 hover:text-brand-orange transition-colors">Search Projects</Link></li>
              <li><Link to="/list" className="text-slate-600 hover:text-brand-orange transition-colors">List Asset</Link></li>
              <li><Link to="/marketplace" className="text-slate-600 hover:text-brand-orange transition-colors">Marketplace</Link></li>
              <li><Link to="/insights" className="text-slate-600 hover:text-brand-orange transition-colors">Insights</Link></li>
              <li><Link to="/agents" className="text-slate-600 hover:text-brand-orange transition-colors">Find Agents</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h3 className="font-bold text-slate-900">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-brand-blue" />
                </div>
                <a href="mailto:info@minexchange.com" className="text-slate-600 hover:text-brand-orange transition-colors">
                  info@minexchange.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-brand-blue" />
                </div>
                <span className="text-slate-600">+61 8 9000 0000</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-brand-blue" />
                </div>
                <span className="text-slate-600">
                  100 St Georges Terrace,<br />Perth WA 6000
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Actions */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <Button variant="outline" className="rounded-full border-slate-200 text-slate-700 hover:bg-slate-50 gap-2">
              <Globe className="h-4 w-4" />
              English
            </Button>
            
            <div className="flex items-center gap-3">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-brand-orange transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-brand-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-brand-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-brand-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Layer 3: Legal */}
        <div className="py-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} The Minexchange. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link to="/legal/terms" className="hover:text-slate-900 transition-colors">Terms & Conditions</Link>
            <Link to="/legal/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link to="/legal/cookies" className="hover:text-slate-900 transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

