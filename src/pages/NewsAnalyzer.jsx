import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as LinkIcon, FileText, Upload, Search, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const NewsAnalyzer = () => {
  const [analysisType, setAnalysisType] = useState('url');
  const [inputValue, setInputValue] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = async () => {
    if (!inputValue.trim()) return;
    setIsAnalyzing(true);
    setAnalysisResult(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2500));

    const score = Math.floor(Math.random() * 100);
    let status, summary, color;

    if (score >= 75) {
      status = 'Reliable';
      summary = 'Content appears to be from a reputable source with verifiable facts.';
      color = 'success';
    } else if (score >= 40) {
      status = 'Questionable';
      summary = 'Content contains some factual inconsistencies or is from a source with mixed reliability.';
      color = 'yellow';
    } else {
      status = 'Unreliable';
      summary = 'Content is likely misinformation, containing multiple factual errors or from a known unreliable source.';
    }

    setAnalysisResult({
      score,
      status,
      summary,
      color,
      source: 'example.com',
      date: new Date().toLocaleDateString('en-GB'),
      keyFactors: [
        { name: 'Source Credibility', score: Math.floor(Math.random() * 100) },
        { name: 'Fact-Checking', score: Math.floor(Math.random() * 100) },
        { name: 'Sentiment Analysis', score: Math.floor(Math.random() * 100) },
        { name: 'Linguistic Patterns', score: Math.floor(Math.random() * 100) },
      ],
    });
    setIsAnalyzing(false);
  };

  const tabs = [
    { id: 'url', name: 'URL', icon: LinkIcon },
    { id: 'text', name: 'Text', icon: FileText },
    { id: 'media', name: 'Media', icon: Upload },
  ];

  const renderInput = () => {
    switch (analysisType) {
      case 'url':
        return (
          <Input
            placeholder="https://example.com/news-article"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full"
          />
        );
      case 'text':
        return (
          <textarea
            placeholder="Paste the article text here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full h-40 p-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        );
      case 'media':
        return (
          <div className="w-full h-40 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800/50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Upload className="h-8 w-8 text-gray-400 mb-2" />
            <p className="text-gray-600 dark:text-gray-400">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-500">Image or Video file</p>
          </div>
        );
      default:
        return null;
    }
  };

  const ResultScore = ({ score, color }) => {
    const colorClasses = {
      success: 'text-success-500',
      yellow: 'text-yellow-500',
      danger: 'text-danger-500',
    };
    const bgClasses = {
      success: 'bg-success-500',
      yellow: 'bg-yellow-500',
      danger: 'bg-danger-500',
    };

    return (
      <div className="relative w-40 h-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200 dark:text-gray-700"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          <motion.circle
            className={colorClasses[color]}
            strokeWidth="10"
            strokeDasharray={2 * Math.PI * 45}
            strokeDashoffset={2 * Math.PI * 45 * (1 - score / 100)}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            transform="rotate(-90 50 50)"
            initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
            animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - score / 100) }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-4xl font-bold ${colorClasses[color]}`}>{score}</span>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/ 100</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">News Analyzer</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Get instant, AI-powered analysis of any news content.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
        >
          <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
            <nav className="-mb-px flex space-x-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => { setAnalysisType(tab.id); setInputValue(''); setAnalysisResult(null); }}
                    className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                      analysisType === tab.id
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

          <div className="space-y-4">
            {renderInput()}
            <Button
              onClick={handleAnalyze}
              isLoading={isAnalyzing}
              disabled={!inputValue.trim() || isAnalyzing}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              size="lg"
            >
              <Search className="h-5 w-5 mr-2" />
              Analyze Now
            </Button>
          </div>
        </motion.div>

        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <LoadingSpinner size="xl" className="mx-auto" />
            <p className="mt-4 text-gray-600 dark:text-gray-400">Analyzing content... This may take a moment.</p>
          </motion.div>
        )}

        {analysisResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Analysis Result</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 flex flex-col items-center justify-center text-center">
                <ResultScore score={analysisResult.score} color={analysisResult.color} />
                <p className={`mt-2 text-xl font-semibold ${
                  analysisResult.color === 'success' ? 'text-success-500' :
                  analysisResult.color === 'yellow' ? 'text-yellow-500' : 'text-danger-500'
                }`}>
                  {analysisResult.status}
                </p>
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Summary</h3>
                  <p className="text-gray-600 dark:text-gray-400">{analysisResult.summary}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Key Factors</h3>
                  <ul className="space-y-2 mt-2">
                    {analysisResult.keyFactors.map(factor => (
                      <li key={factor.name} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">{factor.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-800 dark:text-gray-200">{factor.score}/100</span>
                          <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${factor.score}%` }}></div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NewsAnalyzer;
