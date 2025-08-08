import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Users } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Sparkles,
      title: t('100亿COLL代币经济体系', '10 Billion COLL Token Economy'),
      description: t('永不增发的稀缺性代币', 'Deflationary scarce token system')
    },
    {
      icon: Shield,
      title: t('物理卡牌→NFT确权→交易闭环', 'Physical Cards → NFT Rights → Trading Loop'),
      description: t('独创的实物与数字资产绑定', 'Unique physical-digital asset binding')
    },
    {
      icon: Users,
      title: t('共建者社区治理机制', 'Community Governance System'),
      description: t('去中心化的社区自治', 'Decentralized community governance')
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Title */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Collector.fun
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-gray-300">
              {t('比特币生态的卡牌数藏革命', 'Digital Collectibles Revolution on Bitcoin Layer 2')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('全球首家潮流现实卡牌与比特币NFT结合的web3平台', 'The first decentralized platform perfectly combining physical cards with NFTs')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/*<Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4 h-auto"
            >
              {t('参与IDO', 'Join IDO')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>*/}
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white text-lg px-8 py-4 h-auto"
            >
              {t('了解COLL代币', 'Learn About COLL')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-lg px-8 py-4 h-auto"
            >
              {t('加入共建者计划', 'Join Builders Program')}
            </Button>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}