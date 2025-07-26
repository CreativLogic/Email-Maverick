"use client"

import { useState } from 'react'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Email Marketing', 'Conversion', 'Strategy', 'Case Studies']

  const articles = [
    {
      id: 1,
      title: "The Psychology Behind High-Converting Email Subject Lines",
      excerpt: "Discover the cognitive triggers that make subscribers click open and how to implement them in your campaigns.",
      category: "Email Marketing",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "📧",
      featured: true
    },
    {
      id: 2,
      title: "10 Email Formulas That Convert Every Time",
      excerpt: "Master these proven frameworks to write compelling emails that drive action and increases conversions.",
      category: "Email Marketing",
      readTime: "12 min read",
      date: "Dec 12, 2024",
      image: "✍️",
      featured: true
    },
    {
      id: 3,
      title: "How We Increased Client Revenue by 347% with Email Automation",
      excerpt: "A detailed breakdown of the strategy and tactics we used to transform our client's email marketing.",
      category: "Case Studies",
      readTime: "15 min read",
      date: "Dec 10, 2024",
      image: "📈",
      featured: false
    },
    {
      id: 4,
      title: "The Ultimate Guide to A/B Testing Your Email Campaigns",
      excerpt: "Learn how to systematically test and optimize your emails for maximum conversion rates.",
      category: "Strategy",
      readTime: "10 min read",
      date: "Dec 8, 2024",
      image: "🧪",
      featured: false
    },
    {
      id: 5,
      title: "Email Sequences That Convert: 7 Essential Elements",
      excerpt: "The must-have components every high-converting email sequence needs to turn subscribers into customers.",
      category: "Conversion",
      readTime: "9 min read",
      date: "Dec 5, 2024",
      image: "🚀",
      featured: false
    },
    {
      id: 6,
      title: "Email Personalization Beyond First Names",
      excerpt: "Advanced personalization techniques that create deeper connections with your subscribers.",
      category: "Email Marketing",
      readTime: "7 min read",
      date: "Dec 3, 2024",
      image: "👤",
      featured: false
    }
  ]

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory)

  const featuredArticles = articles.filter(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <Badge className="electric-gradient text-primary-foreground float-animation">
              Email Marketing Insights & Strategies
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold electric-text">
              The ClickStorm Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert insights, proven strategies, and actionable tips to elevate your email marketing game.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-card/30 sticky top-16 z-40 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`glow-hover transition-all duration-300 ${
                  selectedCategory === category
                    ? "electric-gradient text-primary-foreground"
                    : "border-accent/30 text-muted-foreground hover:text-accent hover:border-accent"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === 'All' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 electric-text">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="navy-gradient border-accent/20 glow-hover group overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="electric-gradient text-primary-foreground">
                        Featured
                      </Badge>
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">{article.image}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors cursor-pointer">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="border-accent/30 text-accent">
                          {article.category}
                        </Badge>
                        <span>{article.readTime}</span>
                      </div>
                      <span>{article.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold electric-text">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <span className="text-muted-foreground">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedCategory === 'All' ? regularArticles : filteredArticles).map((article) => (
              <Card key={article.id} className="navy-gradient border-accent/20 glow-hover group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      {article.category}
                    </Badge>
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">{article.image}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-accent transition-colors cursor-pointer line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card via-background to-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto float-animation">
              <span className="text-3xl">📬</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold electric-text">
              Never Miss Our Latest Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get weekly email marketing strategies and exclusive case studies delivered to your inbox.
            </p>

            <div data-uid="05c8cbd7a4" className="max-w-lg mx-auto"></div>
            <Script
              async
              data-uid="05c8cbd7a4"
              src="https://askvin.kit.com/05c8cbd7a4/index.js"
            />
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 electric-text text-center">Explore by Topic</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(1).map((category) => {
              const articleCount = articles.filter(article => article.category === category).length
              return (
                <Card
                  key={category}
                  className="navy-gradient border-accent/20 glow-hover cursor-pointer group"
                  onClick={() => setSelectedCategory(category)}
                >
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-accent group-hover:text-primary transition-colors mb-2">
                      {category}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {articleCount} article{articleCount !== 1 ? 's' : ''}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
