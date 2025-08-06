import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flame, Wallet, Award, Vote, DollarSign, TrendingUp } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function BuildersSection() {
  const { t } = useLanguage();

  const requirements = [
    {
      icon: Flame,
      title: t('销毁50万枚COLL', 'Burn 500K COLL'),
      description: t('通过销毁代币获得共建者身份', 'Gain builder status by burning tokens')
    },
    {
      icon: Wallet,
      title: t('单钱包绑定', 'Single Wallet Binding'),
      description: t('每个钱包地址绑定唯一身份', 'Each wallet address binds to unique identity')
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: t('生态池分配', 'Ecosystem Pool Allocation'),
      description: t('生态池20%加权分配', '20% weighted allocation from ecosystem pool'),
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: DollarSign,
      title: t('BTC分红', 'BTC Dividends'),
      description: t('平台收益10%的BTC分红', '10% BTC dividends from platform revenue'),
      color: 'from-blue-500 to-green-500'
    },
    {
      icon: Vote,
      title: t('治理特权', 'Governance Privileges'),
      description: t('2倍投票权重', '2x voting power'),
      color: 'from-green-500 to-yellow-500'
    }
  ];

  const costAdvantageData = [
    { month: t('第1月', 'Month 1'), cost: 500000, builders: 100 },
    { month: t('第3月', 'Month 3'), cost: 750000, builders: 300 },
    { month: t('第6月', 'Month 6'), cost: 1200000, builders: 600 },
    { month: t('第12月', 'Month 12'), cost: 2000000, builders: 1000 },
  ];

  return (
    <section id="builders" className="py-20 bg-gradient-to-b from-black to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('共建者计划', 'Builders Program')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('成为平台共建者，享受专属权益和治理特权', 'Become a platform builder and enjoy exclusive benefits and governance privileges')}
          </p>
        </motion.div>

        {/* Requirements */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                {t('获取条件', 'Requirements')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500">
                      <req.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{req.title}</h3>
                      <p className="text-gray-400">{req.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                {t('立即成为共建者', 'Become a Builder Now')}
              </Button>
            </CardContent>
          </Card>

          {/* Cost Advantage Chart */}
          <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                {t('早期参与者成本优势', 'Early Participant Cost Advantage')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={costAdvantageData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === 'cost' ? `${value.toLocaleString()} COLL` : value,
                        name === 'cost' ? t('成本', 'Cost') : t('共建者数量', 'Builders Count')
                      ]}
                      labelStyle={{ color: '#000' }}
                    />
                    <Line type="monotone" dataKey="cost" stroke="#EF4444" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                {t('随着时间推移，成为共建者的成本将持续上升', 'The cost of becoming a builder will continue to rise over time')}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Benefits */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-purple-500/20 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}