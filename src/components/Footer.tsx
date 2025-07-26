"use client"

import Link from 'next/link'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                {/* Cloud icon with wifi signals */}
                <svg width="28" height="28" viewBox="0 0 32 32" className="text-accent">
                  {/* Cloud shape */}
                  <path
                    d="M24 16c0-1.1-.4-2.1-1-3a6 6 0 0 0-11.5-2c-.3 0-.5 0-.8.1A4 4 0 0 0 6 15a4 4 0 0 0 1 7.9h15a4 4 0 0 0 2-7.9z"
                    fill="currentColor"
                    className="opacity-90"
                  />
                  {/* WiFi signals */}
                  <path
                    d="M16 20v2m-4 2h8m-6-2h4m-2-2v2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold" style={{color: '#1e3a8a'}}>ClickStorm</span>
            </div>
            <p className="text-muted-foreground">
              Help business owners and ecommerce brands grow their revenue without spending money on ads through strategic email marketing campaigns.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/askvinrocco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 border border-accent/30 hover:border-accent rounded-md transition-colors glow-hover"
              >
                <span className="text-lg">📱</span>
              </a>
              <a
                href="https://linkedin.com/in/askvin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 border border-accent/30 hover:border-accent rounded-md transition-colors glow-hover"
              >
                <span className="text-lg">💼</span>
              </a>
              <a
                href="https://x.com/copyvin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 border border-accent/30 hover:border-accent rounded-md transition-colors glow-hover"
              >
                <span className="text-lg">🔗</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-accent">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#" className="hover:text-accent transition-colors">Email Marketing</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Sales Pages</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Website Copy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Ad Copy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Content Strategy</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-accent">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Templates</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Email Signup */}
          <div className="space-y-4">
            <h3 className="font-semibold text-accent">Grab my FREE Email Templates</h3>
            <div className="space-y-3">
              <div data-uid="05c8cbd7a4" id="ck-footer-signup"></div>
              <Script
                async
                data-uid="05c8cbd7a4"
                src="https://askvin.kit.com/05c8cbd7a4/index.js"
              />
              <a
                href="https://emailrainmaker.kit.com/022cf2042e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <Button className="w-full glow-hover electric-gradient text-primary-foreground text-sm">
                  Get FREE Email Templates
                </Button>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-sm">
            Copyright©️2025 | ClickStorm Media |
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-accent transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
