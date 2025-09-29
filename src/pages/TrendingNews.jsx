import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { faker } from '@faker-js/faker';
import { TrendingUp, Map, BarChart3, ChevronDown, Clock, Users, ShieldCheck, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import Button from '../components/UI/Button';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const TrendingNews = () => {
  const [activeTab, setActiveTab] = useState('stories');

  const stats = [
    { label: 'Active Campaigns', value: '127', icon: AlertTriangle, change: '+12%', changeType: 'bad' },
    { label: 'Total Reach', value: '12.4M', icon: Users, change: '+5.2M', changeType: 'bad' },
    { label: 'Stories Debunked', value: '3,241', icon: ShieldCheck, change: '+480', changeType: 'good' },
    { label: 'Avg. Response Time', value: '2.3h', icon: Clock, change: '-0.5h', changeType: 'good' },
  ];

  const trendingStories = Array.from({ length: 5 }, () => ({
    id: faker.string.uuid(),
    risk: faker.helpers.arrayElement(['High Risk', 'Medium Risk', 'Low Risk']),
    tags: [faker.word.noun(), faker.word.noun()],
    title: faker.lorem.sentence(),
    reach: faker.number.int({ min: 100000, max: 5000000 }),
    timeAgo: faker.number.int({ min: 1, max: 24 }),
    platforms: faker.helpers.arrayElements(['Twitter', 'Facebook', 'TikTok', 'Telegram', 'YouTube', 'WhatsApp'], { min: 1, max: 3 }),
    verification: faker.helpers.arrayElement(['Fact-checked: False', 'Partially False', 'Debunked', 'Dangerous Falsehood']),
  }));

  const getRiskColor = (risk) => {
    if (risk === 'High Risk') return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
    if (risk === 'Medium Risk') return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
  };
  
  const getVerificationIcon = (verification) => {
    if (verification.includes('False')) return <AlertTriangle className="h-4 w-4 text-red-500" />;
    return <CheckCircle className="h-4 w-4 text-green-500" />;
  };

  const renderTrendingStories = () => (
    <div className="space-y-4">
      {trendingStories.map((story, index) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <div className="flex items-center flex-wrap gap-2 mb-2">
                <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${getRiskColor(story.risk)}`}>{story.risk}</span>
                {story.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 capitalize">{tag}</span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{story.title}</h3>
              <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {new Intl.NumberFormat('en-GB', { notation: 'compact', compactDisplay: 'short' }).format(story.reach)} reach</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {story.timeAgo} hours ago</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-4 sm:mt-0 sm:ml-4">
              <Button variant="outline" size="sm">View Details</Button>
              <Button size="sm">Track Campaign</Button>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Platforms Affected</h4>
                <div className="flex flex-wrap gap-2">
                  {story.platforms.map(platform => (
                    <span key={platform} className="px-2 py-1 text-xs font-medium rounded bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">{platform}</span>
                  ))}
                </div>
              </div>
              <div className="text-left sm:text-right">
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Verification Status</h4>
                <div className="flex items-center gap-2">
                  {getVerificationIcon(story.verification)}
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{story.verification}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderPlaceholderTab = (title, icon) => {
    const Icon = icon;
    return (
      <div className="flex flex-col items-center justify-center h-96 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <Icon className="h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-1">This feature is coming soon.</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-2">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5 lg:mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Trending Misinformation</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Real-time monitoring of fake news patterns and misinformation campaigns worldwide.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex gap-2">
            <Button variant="secondary" className="flex items-center gap-2">Global <ChevronDown className="h-4 w-4" /></Button>
            <Button variant="secondary" className="flex items-center gap-2">24 Hours <ChevronDown className="h-4 w-4" /></Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            Live monitoring active
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</h3>
                  <Icon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className={`text-sm font-medium mt-1 ${stat.changeType === 'good' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} vs last period
                </p>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mb-6">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'stories', name: 'Trending Stories', icon: TrendingUp },
                { id: 'map', name: 'Global Map', icon: Map },
                { id: 'analytics', name: 'Analytics', icon: BarChart3 },
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {activeTab === 'stories' && renderTrendingStories()}
          {activeTab === 'map' && renderPlaceholderTab('Global Map', Map)}
          {activeTab === 'analytics' && renderPlaceholderTab('Analytics Dashboard', BarChart3)}
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
};

export default TrendingNews;
