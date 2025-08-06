import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Truck, Shield, Gamepad2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

export default function PartnersSection() {
  const { t } = useLanguage();

  const partnerCategories = [
    {
      icon: Building2,
      title: t('交易所合作伙伴', 'Exchange Partners'),
      partners: [t('欧易', 'OKX'), t('币安', 'Binance'), t('火币', 'Huobi'), t('Gate.io', 'Gate.io')],
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Gamepad2,
      title: t('卡牌品牌合作', 'Card Brand Partners'),
      partners: [t('泡泡玛特', 'POP MART'), t('宝可梦', 'Pokémon'), t('迪士尼', 'Disney'), t('万代', 'Bandai')],
      color: 'from-blue-500 to-green-500'
    },
    {
      icon: Truck,
      title: t('物流合作伙伴', 'Logistics Partners'),
      partners: [t('顺丰', 'SF Express'), t('中通', 'ZTO'), t('圆通', 'YTO'), t('申通', 'STO')],
      color: 'from-green-500 to-yellow-500'
    },
    {
      icon: Shield,
      title: t('保险服务商', 'Insurance Providers'),
      partners: [t('平安保险', 'Ping An'), t('太平洋保险', 'CPIC'), t('人保', 'PICC'), t('国寿', 'China Life')],
      color: 'from-yellow-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('合作伙伴', 'Partners')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('与行业领导者携手，构建完善的生态体系', 'Partnering with industry leaders to build a comprehensive ecosystem')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-purple-500/20 hover:bg-white/10 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-white text-lg flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {category.partners.map((partner, partnerIndex) => (
                      <div
                        key={partnerIndex}
                        className="bg-white/5 rounded-lg p-3 text-center text-gray-300 hover:bg-white/10 transition-all duration-200"
                      >
                        <span className="text-sm font-medium">{partner}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            {t('* 以上为预期合作伙伴，最终合作关系以官方公告为准', '* Above are expected partners, final partnerships subject to official announcements')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}