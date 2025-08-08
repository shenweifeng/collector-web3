import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Calendar } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

export default function RoadmapSection() {
  const { t } = useLanguage();

  const phases = [
    {
      phase: t('第一阶段', 'Phase 1'),
      duration: t('30天', '30 Days'),
      status: 'active',
      items: [
        t('比特币生态协议搭建', 'Bitcoin ecological protocol construction'),
        t('COLL代币发行及IDO', 'COLL Token Issuance and IDO'),
        // t('核心团队组建完成', 'Core Team Assembly Complete'),
        t('启动全球社区建设', 'Start building a global community')
      ]
    },
    {
      phase: t('第二阶段', 'Phase 2'),
      duration: t('60天', '60 Days'),
      status: 'upcoming',
      items: [
        t('卡牌确权→NFT铸造→交易闭环', 'Card Rights → NFT Minting → Trading Loop'),
        t('物流追踪系统上线', 'Logistics Tracking System Launch'),
        t('AI识别系统部署', 'AI Recognition System Deployment'),
        t('首批合作伙伴签约', 'First Batch Partner Agreements')
      ]
    },
    {
      phase: t('第三阶段', 'Phase 3'),
      duration: t('12-24个月', '12-24 Months'),
      status: 'future',
      items: [
        t('DeFi扩展与娱乐生态', 'DeFi Expansion and Entertainment Ecosystem'),
        t('交易所上市计划', 'Exchange Listing Plan'),
        t('全球合作伙伴计划', 'Global Partnership Program'),
        t('卡牌对战游戏上线', 'Card Battle Game Launch')
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'from-green-500 to-blue-500';
      case 'upcoming':
        return 'from-blue-500 to-purple-500';
      case 'future':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <Clock className="w-6 h-6 text-white" />;
      case 'upcoming':
        return <Calendar className="w-6 h-6 text-white" />;
      case 'future':
        return <CheckCircle className="w-6 h-6 text-white" />;
      default:
        return <Clock className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('发展路线图', 'Development Roadmap')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('清晰的发展路径，稳步推进项目建设', 'Clear development path, steadily advancing project construction')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 hidden lg:block"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Node */}
                <div className="relative lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getStatusColor(phase.status)} flex items-center justify-center`}>
                    {getStatusIcon(phase.status)}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 lg:w-5/12">
                  <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20 hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white text-2xl flex items-center justify-between">
                        {phase.phase}
                        {/*<span className="text-sm font-normal text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
                          {phase.duration}
                        </span>*/}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}