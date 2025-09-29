import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Zap,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Search,
  AlertTriangle,
  TrendingUp,
  Globe,
  Copy,
  Brain,
  Share2,
  Play,
  Star,
  Database,
  BarChart3,
  Clock,
  Smartphone,
  Chrome,
  Verified
} from 'lucide-react';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';

const Landing = () => {
  const [newsUrl, setNewsUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = async () => {
    if (!newsUrl.trim()) return;

    setIsAnalyzing(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock analysis result
    const result = {
      credibilityScore: Math.floor(Math.random() * 100),
      status: Math.random() > 0.5 ? 'reliable' : 'questionable',
      factors: [
        'Source reputation analysis',
        'Content sentiment evaluation',
        'Fact-checking cross-reference',
        'Linguistic pattern analysis'
      ]
    };

    setAnalysisResult(result);
    setIsAnalyzing(false);
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Detection',
      description: 'Advanced machine learning algorithms analyse content patterns, source credibility, and linguistic markers to identify misinformation.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Real-time Analysis',
      description: 'Get instant results with millisecond processing that analyses content in real-time without compromising accuracy.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Source Verification',
      description: 'Comprehensive database of trusted sources with real-time credibility scoring and bias detection.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Multimedia Verification',
      description: 'Detect deepfakes, manipulated images, and altered videos using cutting-edge computer vision technology.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Confidence Scoring',
      description: 'Detailed confidence scores with explanations help you understand the reliability of each piece of content.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Trending Dashboard',
      description: 'Stay informed about emerging misinformation campaigns and trending fake news patterns.',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const howItWorks = [
    {
      icon: Copy,
      title: 'Paste Content',
      description: 'Simply paste a news link, article text, or upload media content you want to verify.'
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Our AI models analyse the content across the various authentic platform or news letters.'
    },
    {
      icon: Target,
      title: 'Get Results',
      description: 'Receive detailed confidence scores, explanations, and source information.'
    },
    {
      icon: Share2,
      title: 'Learn & Share',
      description: 'Access educational resources and share findings to help others.'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah',
      role: 'Data Journalist, Professor',
      content: 'Fake News Detector has revolutionised how my students approach fact-checking. The accuracy and speed are unmatched.',
      rating: 5
    },
    {
      name: 'Dr. Salman',
      role: 'News Journalist',
      content: 'As a newsroom Journalist, this tool has become indispensable. It helps us verify sources quickly and maintain editorial integrity.',
      rating: 5
    },
    {
      name: 'Dr. Aisha',
      role: 'Media Literacy Researcher',
      content: 'The detailed explanations help users understand not just what is false, but why it\'s categorised as such.',
      rating: 5
    }
  ];

  const stats = [
    { label: '99.6% Accuracy', value: '99.6%' },
    { label: 'Real-time Results', value: '<1s' },
    { label: 'Privacy Protected', value: '100%' },
    { label: 'Always Available', value: '24/7' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                <span className=" md:text-8xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Fake News Dectector
                </span>
                <br />
               
              </h1>
              <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
               Fake News Detector detects the news with the help of Ai.
              </p>



              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Analyse News Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Mock Browser Header */}
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-gray-600 rounded ml-4 px-3 py-1">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Fake News Detector</span>
                    </div>
                  </div>
                </div>

                {/* Mock Content */}
                <div className="p-6">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg overflow-hidden mb-4">
                    <img
                      src="https://www.hf.uio.no/ilos/forskning/senter-slavisk-osteuropa/aktuelt/2025/fake-ki.jpg"
                      alt="AI Technology"
                      className="w-full h-50 object-cover opacity-90"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                      LIVE
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Check the Latest Real News with Fake News Detector
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    I am a Fake News Detector. I can detect the news with the help of AI. Just click on the button to analyze the news.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Working Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our Fake News Detection process is designed to be simple, fast, and accurate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 w-fit mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    {index < howItWorks.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full">
                        <div className="border-t-2 border-dashed border-gray-300 dark:border-gray-600 -translate-x-1/2"></div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools to combat misinformation and promote digital literacy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-r ${feature.color} rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Watch how our AI analyses content and provides detailed verification results
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
                  alt="Demo Screenshot"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Experts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See what professionals are saying about Fake News Detector
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join the Fight Against Misinformation
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Be part of a community committed to truth and transparency. Start verifying content today and help create a more informed digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
