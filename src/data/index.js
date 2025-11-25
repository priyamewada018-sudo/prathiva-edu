import colleges from './colleges.js';
import { exams } from './exams.js';
import { latestNews } from './news.js';

const topColleges = colleges.slice(0, 6);

const tools = [
  { name: 'College Predictor', description: 'Predict colleges based on your rank', icon: 'GraduationCap' },
  { name: 'Rank Predictor', description: 'Estimate your rank from marks', icon: 'TrendingUp' },
  { name: 'Compare Colleges', description: 'Compare multiple colleges', icon: 'GitCompare' },
  { name: 'Admission Alerts', description: 'Get notified about admissions', icon: 'Bell' }
];

const categories = [
  { name: 'Engineering', icon: 'Cpu', count: '5000+' },
  { name: 'Medical', icon: 'Heart', count: '2000+' },
  { name: 'Management', icon: 'Briefcase', count: '3000+' },
  { name: 'Law', icon: 'Scale', count: '1500+' },
  { name: 'Design', icon: 'Palette', count: '800+' },
  { name: 'Arts', icon: 'BookOpen', count: '4000+' }
];

export { topColleges, exams, latestNews, tools, categories, colleges };
