import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Calendar, 
  Settings, 
  Bell, 
  Lock,
  CheckCircle,
  AlertCircle,
  FileText,
  Edit3,
  Camera
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import { faker } from '@faker-js/faker';

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });

  // Generate fake data for user stats
  const userStats = {
    articlesAnalysed: faker.number.int({ min: 50, max: 500 }),
    fakeNewsDetected: faker.number.int({ min: 10, max: 150 }),
    accuracyRate: faker.number.float({ min: 85, max: 98, fractionDigits: 1 }),
    lastActive: faker.date.recent({ days: 7 }).toISOString().split('T')[0]
  };

  const recentAnalyses = Array.from({ length: 5 }, () => ({
    id: faker.string.uuid(),
    title: faker.lorem.sentence({ min: 5, max: 10 }),
    url: faker.internet.url(),
    credibilityScore: faker.number.int({ min: 20, max: 95 }),
    status: faker.helpers.arrayElement(['reliable', 'questionable', 'unreliable']),
    date: faker.date.recent({ days: 30 }).toISOString().split('T')[0],
    source: faker.company.name()
  }));

  const handleSaveProfile = () => {
    // Here you would typically save to backend
    setIsEditing(false);
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: User },
    { id: 'history', name: 'History', icon: FileText },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'reliable':
        return 'text-success-600 dark:text-success-400 bg-success-50 dark:bg-success-900/20';
      case 'questionable':
        return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20';
      case 'unreliable':
        return 'text-danger-600 dark:text-danger-400 bg-danger-50 dark:bg-danger-900/20';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="relative">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="h-24 w-24 rounded-full border-4 border-blue-200 dark:border-blue-800"
            />
            <button className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                  <span>{user?.name}</span>
                  {user?.verified && (
                    <CheckCircle className="h-6 w-6 text-blue-500" />
                  )}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1 mt-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {user?.joinedDate}</span>
                </p>
              </div>
              
              <Button
                onClick={() => setIsEditing(!isEditing)}
                variant="outline"
                className="mt-4 sm:mt-0"
              >
                <Edit3 className="h-4 w-4 mr-2" />
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
            </div>
          </div>
        </div>

        {isEditing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              />
              <Input
                label="Email Address"
                type="email"
                value={editData.email}
                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
              />
            </div>
            <div className="flex space-x-4 mt-4">
              <Button onClick={handleSaveProfile}>
                Save Changes
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {userStats.articlesAnalysed}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Articles Analysed</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-danger-100 dark:bg-danger-900/30 rounded-lg p-3">
              <AlertCircle className="h-6 w-6 text-danger-600 dark:text-danger-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {userStats.fakeNewsDetected}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Fake News Detected</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-success-100 dark:bg-success-900/30 rounded-lg p-3">
              <CheckCircle className="h-6 w-6 text-success-600 dark:text-success-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {userStats.accuracyRate}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {userStats.lastActive}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Last Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Analyses
        </h3>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {recentAnalyses.map((analysis, index) => (
          <motion.div
            key={analysis.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
                  {analysis.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {analysis.source} • {analysis.date}
                </p>
                <a
                  href={analysis.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-1 block truncate"
                >
                  {analysis.url}
                </a>
              </div>
              <div className="ml-4 flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {analysis.credibilityScore}%
                  </p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(analysis.status)}`}>
                    {analysis.status}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Account Settings
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Email Notifications
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Receive updates about your analyses
                </p>
              </div>
            </div>
            <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-blue-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Lock className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Two-Factor Authentication
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Add an extra layer of security
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Enable
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Danger Zone
        </h3>
        <div className="space-y-4">
          <Button variant="danger" className="w-full sm:w-auto">
            Delete Account
          </Button>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Once you delete your account, there is no going back. Please be certain.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Profile Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage your account and view your analysis history
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'history' && renderHistory()}
          {activeTab === 'settings' && renderSettings()}
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
