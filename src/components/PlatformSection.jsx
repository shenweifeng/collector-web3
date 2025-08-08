import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scan, Link2, Truck, Gamepad2, Trophy, Coins } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

export default function PlatformSection() {
  const { t } = useLanguage();

  const nftFeatures = [
    {
      icon: Scan,
      title: t('AI图像识别', 'AI Image Recognition'),
      description: t('AI图像识别+人工复核鉴定', 'AI image recognition + manual verification')
    },
    {
      icon: Link2,
      title: t('哈希绑定', 'Hash Binding'),
      description: t('唯一哈希绑定物理卡牌与NFT', 'Unique hash binding physical cards with NFTs')
    },
    {
      icon: Truck,
      title: t('物流追踪', 'Logistics Tracking'),
      description: t('物流全程上链追踪', 'Full logistics tracking on-chain')
    }
  ];

  const defiFeatures = [
    {
      icon: Coins,
      title: t('COLL质押池', 'COLL Staking Pool'),
      description: t('年化8-15%收益', '8-15% APY returns'),
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Link2,
      title: t('NFT质押协议', 'NFT Staking Protocol'),
      description: t('卡牌NFT质押协议', 'Card NFT staking protocol'),
      color: 'from-blue-500 to-green-500'
    }
  ];

  const gameFeatures = [
    {
      icon: Gamepad2,
      title: t('对战游戏', 'Battle Games'),
      description: t('卡牌对战游戏引擎', 'Card battle game engine'),
      color: 'from-green-500 to-yellow-500'
    },
    {
      icon: Trophy,
      title: t('赛事系统', 'Tournament System'),
      description: t('COLL计价奖金池', 'COLL-denominated prize pools'),
      color: 'from-yellow-500 to-red-500'
    }
  ];

  return (
    <section id="platform" className="py-20 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('平台功能', 'Platform Features')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('集NFT铸造交易、DeFi协议、娱乐生态于一体的综合平台', 'Comprehensive platform integrating NFT rights, DeFi protocols, and entertainment ecosystem')}
          </p>
        </motion.div>

        {/* NFT System */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <Scan className="w-8 h-8 text-purple-400 mr-3" />
                {t('卡牌NFT系统', 'Card NFT System')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {nftFeatures.map((feature, index) => (
                  <div key={index} className="text-center p-6 bg-white/5 rounded-xl">
                    <feature.icon className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* DeFi Protocol */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  {t('DeFi协议', 'DeFi Protocol')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {defiFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color}`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gaming Ecosystem */}
            <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  {t('娱乐生态', 'Entertainment Ecosystem')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {gameFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color}`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}