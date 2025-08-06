import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Twitter, MessageCircle, FileText, Mail } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: MessageCircle, label: 'Discord', href: '#' },
    { icon: MessageCircle, label: 'Telegram', href: '#' }
  ];

  const quickLinks = [
    { label: t('白皮书', 'Whitepaper'), href: '#', icon: FileText },
    { label: t('技术文档', 'Documentation'), href: '#', icon: FileText },
    { label: t('联系我们', 'Contact Us'), href: '#', icon: Mail }
  ];

  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-white font-bold text-xl">Collector.fun</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('基于比特币二层的数字收藏品革命平台，首个将物理卡牌与NFT完美结合的去中心化生态。', 'Revolutionary digital collectibles platform on Bitcoin Layer 2, the first decentralized ecosystem perfectly combining physical cards with NFTs.')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t('快速链接', 'Quick Links')}
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t('订阅更新', 'Stay Updated')}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {t('订阅我们的新闻简报，获取最新项目动态', 'Subscribe to our newsletter for the latest project updates')}
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder={t('输入邮箱地址', 'Enter email address')}
                className="w-full px-3 py-2 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                {t('订阅', 'Subscribe')}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Collector.fun. {t('保留所有权利', 'All rights reserved')}.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              {t('隐私政策', 'Privacy Policy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              {t('服务条款', 'Terms of Service')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              {t('免责声明', 'Disclaimer')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}