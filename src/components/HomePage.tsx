"use client"

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function HomePage() {
  const [typedText, setTypedText] = useState('')
  const fullText = "Words That Convert. Stories That Sell."

  useEffect(() => {
    let currentIndex = 0
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="electric-gradient text-primary-foreground mb-4 float-animation">
                The Email Rainmaker
              </Badge>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">
                <span className="cursor-glow">{typedText}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto slide-in-up">
                I help business owners and ecommerce brands grow their revenue without spending money on ads.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto slide-in-up">
                Build a revenue stream that works 24/7, doesn't depend on algorithm changes, and gets stronger every month.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-in-up">
              <Button
                size="lg"
                className="glow-hover electric-gradient text-primary-foreground px-8 py-6 text-lg font-semibold"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glow-hover border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center float-animation">
          <span className="text-2xl">✍️</span>
        </div>
        <div className="absolute top-32 right-16 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center float-animation" style={{animationDelay: '1s'}}>
          <span className="text-xl">📧</span>
        </div>
        <div className="absolute bottom-32 left-20 w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center float-animation" style={{animationDelay: '2s'}}>
          <span className="text-xl">📈</span>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 electric-text">Hey, I'm Vin Rocco</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              I help business owners and ecommerce brands grow their revenue without spending money on ads.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Build a revenue stream that works 24/7, doesn't depend on algorithm changes, and gets stronger every month.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="navy-gradient border-accent/20 glow-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <CardTitle className="text-accent">Abandoned Carts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our clever formula that turns abandoned carts into upsells.
                </p>
              </CardContent>
            </Card>

            <Card className="navy-gradient border-accent/20 glow-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <CardTitle className="text-accent">Launches</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  What if you could sell daily without burning out your list?
                </p>
              </CardContent>
            </Card>

            <Card className="navy-gradient border-accent/20 glow-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <CardTitle className="text-accent">Re-Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Revive your cold list and turn them into loyal buyers with our reactivation campaigns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 electric-text">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Strategic email marketing solutions to grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="navy-gradient border-accent/20 glow-hover group">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <span className="text-3xl">🛒</span>
                </div>
                <CardTitle className="text-accent">Abandoned Carts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our clever formula that turns abandoned carts into upsells.</p>
              </CardContent>
            </Card>

            <Card className="navy-gradient border-accent/20 glow-hover group">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <span className="text-3xl">🚀</span>
                </div>
                <CardTitle className="text-accent">Launches</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">What if you could sell daily without burning out your list?</p>
              </CardContent>
            </Card>

            <Card className="navy-gradient border-accent/20 glow-hover group">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <span className="text-3xl">📧</span>
                </div>
                <CardTitle className="text-accent">Re-Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Revive your cold list and turn them into loyal buyers with our reactivation campaigns.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 electric-text">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real results for real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="navy-gradient border-accent/20 glow-hover">
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold electric-text mb-2">347%</div>
                  <Badge className="electric-gradient text-primary-foreground">
                    Open Rate Increase
                  </Badge>
                </div>
                <CardTitle className="text-accent text-center">TechStart Inc.</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground font-medium mb-2">347% increase in email open rates</p>
                <p className="text-sm text-muted-foreground">Complete email marketing overhaul resulted in massive engagement boost</p>
              </CardContent>
            </Card>

            <Card className="navy-gradient border-accent/20 glow-hover">
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold electric-text mb-2">$2.3M</div>
                  <Badge className="electric-gradient text-primary-foreground">
                    Additional Revenue
                  </Badge>
                </div>
                <CardTitle className="text-accent text-center">E-Commerce Pro</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground font-medium mb-2">$2.3M additional revenue</p>
                <p className="text-sm text-muted-foreground">Sales page optimization drove significant revenue growth</p>
              </CardContent>
            </Card>

            <Card className="navy-gradient border-accent/20 glow-hover">
              <CardHeader>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold electric-text mb-2">89%</div>
                  <Badge className="electric-gradient text-primary-foreground">
                    Conversion Boost
                  </Badge>
                </div>
                <CardTitle className="text-accent text-center">SaaS Solutions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground font-medium mb-2">89% conversion rate improvement</p>
                <p className="text-sm text-muted-foreground">Landing page copy redesign nearly doubled conversions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card via-background to-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-5xl font-bold electric-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's create email campaigns that drive real results for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="glow-hover electric-gradient text-primary-foreground px-12 py-6 text-xl font-semibold"
              >
                Get Your Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glow-hover border-accent text-accent hover:bg-accent hover:text-accent-foreground px-12 py-6 text-xl"
              >
                View Portfolio
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="text-accent">✓</span>
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent">✓</span>
                <span>Free revisions</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent">✓</span>
                <span>Expert support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 electric-text">Grab my FREE Email Templates</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get weekly email marketing strategies and exclusive insights delivered to your inbox.
          </p>

          <div className="space-y-4 mb-6">
            <div data-uid="05c8cbd7a4"></div>
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
              <Button className="w-full glow-hover electric-gradient text-primary-foreground py-3 font-semibold">
                Get FREE Email Templates
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
