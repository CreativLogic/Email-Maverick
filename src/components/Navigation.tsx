"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center space-x-1">
              <div className="relative">
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
              </div>
              <span className="text-xl font-bold" style={{color: '#1e3a8a'}}>ClickStorm</span>
            </div>
            <Badge variant="secondary" className="ml-2 electric-gradient text-primary-foreground">
              Pro
            </Badge>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-all duration-300 hover:text-accent glow-hover px-3 py-2 rounded-md ${
                pathname === '/' ? 'text-accent bg-accent/10' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-all duration-300 hover:text-accent glow-hover px-3 py-2 rounded-md ${
                pathname === '/blog' ? 'text-accent bg-accent/10' : 'text-muted-foreground'
              }`}
            >
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <Button
            className="glow-hover electric-gradient text-primary-foreground font-semibold"
            size="sm"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-border">
        <div className="px-4 py-2 space-y-1">
          <Link
            href="/"
            className={`block px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
              pathname === '/' ? 'text-accent bg-accent/10' : 'text-muted-foreground hover:text-accent'
            }`}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={`block px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
              pathname === '/blog' ? 'text-accent bg-accent/10' : 'text-muted-foreground hover:text-accent'
            }`}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}
