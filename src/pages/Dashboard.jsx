import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  ExternalLink,
  BarChart3,
  Globe,
  Shield,
  Target
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import { faker } from '@faker-js/faker';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const Dashboard = () => {
  const { user } = useAuth();
  const [newsUrl, setNewsUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!newsUrl.trim()) return;
    setIsAnalyzing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsAnalyzing(false);
    setNewsUrl('');
  };

  // Generate mock data
  const stats = {
    articlesAnalysed: 12847,
    fakeNewsDetected: 3291,
    accuracyRate: 96.8,
    processingSpeed: 1.2
  };

  const recentAnalyses = [
    {
      id: 1,
      title: 'Breaking: Scientists Discover New Species in Deep Ocean',
      source: 'nature.com',
      confidence: '94% confidence',
      timeAgo: '2 hours ago',
      status: 'reliable',
      score: 94
    },
    {
      id: 2,
      title: 'Local Man Claims He Can Predict Weather with His Pet Cat',
      source: 'localnews.net',
      confidence: '67% confidence',
      timeAgo: '5 hours ago',
      status: 'questionable',
      score: 67
    },
    {
      id: 3,
      title: 'Celebrity Death Hoax Spreads Rapidly on Social Media',
      source: 'unknown',
      confidence: '8% confidence',
      timeAgo: '1 day ago',
      status: 'unreliable',
      score: 8
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Real-time Analysis',
      description: 'Get instant results with our advanced AI models that process information in milliseconds.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Source Verification',
      description: 'Comprehensive source credibility checking using our extensive database of trusted publishers.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Trend Monitoring',
      description: 'Stay updated with trending misinformation patterns and emerging fake news campaigns.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'reliable':
        return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20';
      case 'questionable':
        return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20';
      case 'unreliable':
        return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'reliable':
        return <CheckCircle className="h-4 w-4" />;
      case 'questionable':
        return <AlertCircle className="h-4 w-4" />;
      case 'unreliable':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-2">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl overflow-hidden mb-6 relative">
            <img
              src="https://img.pikbest.com/wp/202347/hands-raised-cartoon-hand-adorable-ai-robot-in-3d-rendering_9760458.jpg!sw800"
              alt="AI Technology"
              className="w-full h-64 sm:h-80 object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                  Welcome to Fake News Detector
                </h1>
                <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
                  We analyses the fake news using your text, images and urls which is provided by you and we give you the accurate results to make sure about the news.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Articles Analysed', value: stats.articlesAnalysed.toLocaleString(), icon: BarChart3 },
            { label: 'Fake News Detected', value: stats.fakeNewsDetected.toLocaleString(), icon: AlertCircle },
            { label: 'Accuracy Rate', value: `${stats.accuracyRate}%`, icon: Target },
            { label: 'Processing Speed', value: `${stats.processingSpeed}s`, icon: Clock }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {stat.label}
                    </p>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-4">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min((index + 1) * 25, 100)}%` }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Analysis History */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Recent Analysis History
                  </h3>
                </div>
                <Button variant="ghost" size="sm">
                  View All Analyses
                </Button>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Your latest fact-checking results and analyses
              </p>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {recentAnalyses.map((analysis, index) => (
                <motion.div
                  key={analysis.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(analysis.status)}`}>
                          {getStatusIcon(analysis.status)}
                          <span className="ml-1 capitalize">{analysis.status}</span>
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {analysis.confidence}
                        </span>
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">
                        {analysis.title}
                      </h4>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center space-x-1">
                          <Globe className="h-3 w-3" />
                          <span>{analysis.source}</span>
                        </span>
                        <span>{analysis.timeAgo}</span>
                      </div>
                    </div>
                    <div className="ml-4 flex items-center space-x-2">
                      <div className="text-right">
                        <div className={`text-lg font-bold ${analysis.score >= 70 ? 'text-green-600 dark:text-green-400' :
                            analysis.score >= 40 ? 'text-yellow-600 dark:text-yellow-400' :
                              'text-red-600 dark:text-red-400'
                          }`}>
                          {analysis.score}%
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Overview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${feature.color} rounded-lg p-3 shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
