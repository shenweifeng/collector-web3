import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, TrendingUp, Bell } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { News } from '@/api/entities';

export default function NewsSection() {
  const { t, language } = useLanguage();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const newsData = await News.list('-created_date', 6);
      setNews(newsData);
    } catch (error) {
      console.error('Error loading news:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      platform: 'bg-purple-100 text-purple-800',
      token: 'bg-blue-100 text-blue-800',
      partnership: 'bg-green-100 text-green-800',
      event: 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      platform: t('平台动态', 'Platform'),
      token: t('代币资讯', 'Token'),
      partnership: t('合作伙伴', 'Partnership'),
      event: t('活动预告', 'Event')
    };
    return labels[category] || category;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US');
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('新闻与公告', 'News & Announcements')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('关注最新动态，掌握项目进展', 'Stay updated with the latest developments and project progress')}
          </p>
        </motion.div>

        {/* Featured Stats */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                $0.001
              </h3>
              <p className="text-gray-400">{t('COLL代币价格', 'COLL Token Price')}</p>
              <span className="text-green-400 text-sm">+12.5%</span>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
            <CardContent className="p-6 text-center">
              <Bell className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                {news.filter(n => n.is_featured).length}
              </h3>
              <p className="text-gray-400">{t('重要公告', 'Important Announcements')}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
            <CardContent className="p-6 text-center">
              <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                30
              </h3>
              <p className="text-gray-400">{t('IDO倒计时(天)', 'IDO Countdown (Days)')}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* News Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-purple-500/20 animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-gray-700 rounded mb-2"></div>
                  <div className="h-6 bg-gray-700 rounded"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-20 bg-gray-700 rounded"></div>
                </CardContent>
              </Card>
            ))
          ) : news.length > 0 ? (
            news.map((item, index) => (
              <Card 
                key={item.id} 
                className="bg-white/5 backdrop-blur-sm border-purple-500/20 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(item.category)}>
                      {getCategoryLabel(item.category)}
                    </Badge>
                    {item.is_featured && (
                      <Badge variant="destructive">
                        {t('重要', 'Important')}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-white text-lg line-clamp-2">
                    {language === 'zh' ? item.title_zh : item.title_en}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {language === 'zh' ? item.content_zh : item.content_en}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">
                      {formatDate(item.created_date)}
                    </span>
                    <Button variant="ghost" size="sm" className="text-purple-400 hover:text-white">
                      {t('阅读更多', 'Read More')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">
                {t('暂无新闻动态', 'No news available')}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}