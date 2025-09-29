import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { faker } from '@faker-js/faker';
import { Search, ChevronDown, User, Calendar, Clock, Eye, Share2, ArrowRight } from 'lucide-react';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const Articles = () => {
  const articles = Array.from({ length: 6 }, () => ({
    id: faker.string.uuid(),
    image: `https://picsum.photos/seed/${faker.string.uuid()}/400/250`,
    category: faker.helpers.arrayElement(['Research Paper', 'Industry Report', 'Case Study', 'Tutorial', 'Deep Dive']),
    tags: faker.helpers.arrayElements(['Deep Learning', 'AI Ethics', 'NLP', 'Fact-Checking', 'Social Media'], { min: 2, max: 3 }),
    title: faker.lorem.sentence({ min: 5, max: 8 }),
    description: faker.lorem.paragraph(),
    author: faker.person.fullName(),
    date: faker.date.past({ years: 1 }).toLocaleDateString('en-GB'),
    readTime: faker.number.int({ min: 5, max: 20 }),
    views: faker.number.int({ min: 500, max: 5000 }),
  }));

  const ArticleCard = ({ article, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col group"
    >
      <div className="relative">
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <span className="absolute top-4 left-4 px-2 py-1 text-xs font-semibold rounded bg-blue-500 text-white">{article.category}</span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex-1">{article.title}</h3>
        <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
          <span className="flex items-center gap-1"><User className="h-3 w-3" /> {article.author}</span>
          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {article.date}</span>
          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {article.readTime} min read</span>
          <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {new Intl.NumberFormat('en-GB', { notation: 'compact', compactDisplay: 'short' }).format(article.views)}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">{tag}</span>
          ))}
        </div>
        <div className="mt-auto flex justify-between items-center">
          <Button size="sm">Read</Button>
          <Button variant="ghost" size="sm"><Share2 className="h-4 w-4" /></Button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 ">
      <Navbar/>
      <div className="relative bg-gray-800 py-24 sm:py-32 lg:mt-8">
        <img
          src="https://t4.ftcdn.net/jpg/05/65/56/73/360_F_565567342_28W7zxxmagIhQ08d6RfsdCqNMIJfCSNu.jpg"
          alt="Abstract network"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Research & Articles</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our latest research, technical insights, and industry analyses in the field of AI-powered fact-checking and misinformation detection.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8"
        >
          <div className="relative w-full md:max-w-md">
            <Input placeholder="Search articles, papers, and guides..." className="pl-10" />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary">All Articles</Button>
            <Button variant="ghost">Featured</Button>
            <Button variant="ghost">Recent</Button>
            <Button variant="ghost" className="flex items-center gap-1">Latest <ChevronDown className="h-4 w-4" /></Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Stay Updated</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Subscribe to our newsletter for the latest research and insights.</p>
          <form className="mt-6 max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit">Subscribe</Button>
          </form>
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
};

export default Articles;
