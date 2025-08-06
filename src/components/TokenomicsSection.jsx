import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coins, TrendingDown, Lock, Zap } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function TokenomicsSection() {
  const { t } = useLanguage();

  const tokenDistribution = [
    { name: t('IDO公募', 'IDO Public Sale'), value: 10, color: '#8B5CF6' },
    { name: t('创世团队', 'Genesis Team'), value: 20, color: '#3B82F6' },
    { name: t('生态池', 'Ecosystem Pool'), value: 70, color: '#10B981' }
  ];

  const deflationData = [
    { year: t('第1年', 'Year 1'), circulation: 100 },
    { year: t('第2年', 'Year 2'), circulation: 85 },
    { year: t('第3年', 'Year 3'), circulation: 72 },
    { year: t('第4年', 'Year 4'), circulation: 65 },
    { year: t('第5年', 'Year 5'), circulation: 60 }
  ];

  const features = [
    {
      icon: Coins,
      title: t('手续费折扣', 'Fee Discount'),
      description: t('持有COLL享受平台交易手续费优惠', 'Hold COLL for platform trading fee discounts')
    },
    {
      icon: TrendingDown,
      title: t('质押收益', 'Staking Rewards'),
      description: t('年化8-15%的质押收益', '8-15% APY staking rewards')
    },
    {
      icon: Lock,
      title: t('治理投票', 'Governance Voting'),
      description: t('参与平台重大决策投票', 'Participate in major platform decisions')
    },
    {
      icon: Zap,
      title: t('共建者权益', 'Builder Benefits'),
      description: t('获得生态池分配和BTC分红', 'Receive ecosystem pool allocation and BTC dividends')
    }
  ];

  return (
    <section id="token" className="py-20 bg-gradient-to-b from-black to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('COLL代币经济', 'COLL Tokenomics')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('基于比特币二层协议的100亿枚永不增发代币体系', '10 billion never-inflated token system based on Bitcoin Layer 2 protocol')}
          </p>
        </motion.div>

        {/* Token Overview */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Distribution Chart */}
          <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                {t('代币分配', 'Token Distribution')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tokenDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {tokenDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, t('占比', 'Percentage')]}
                      labelStyle={{ color: '#000' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {tokenDistribution.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-white font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Deflation Mechanism */}
          <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">
                {t('通缩机制', 'Deflation Mechanism')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={deflationData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="year" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, t('流通量', 'Circulation')]}
                      labelStyle={{ color: '#000' }}
                    />
                    <Bar dataKey="circulation" fill="#8B5CF6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <p>• {t('20%平台收益用于回购销毁', '20% platform revenue for buyback and burn')}</p>
                <p>• {t('生态释放量的60%直接销毁', '60% of ecosystem release directly burned')}</p>
                <p>• {t('5年内预计减少流通量40%', '40% circulation reduction expected in 5 years')}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Core Functions */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-purple-500/20 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}