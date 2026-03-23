"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    // 幻灯片 1：保持智能锁旗舰感
    title: "Precision Installed",
    highlight: "Smart Locks",
    description: "Military-grade biometrics. Keyless peace of mind for Adelaide families.",
    imagePath: "https://wp.adesmarthome.com.au/wp-content/uploads/hero-lock-1.jpg", // 锁的图片
  },
  {
    // 幻灯片 2：【新增】引入监控业务
    title: "24/7 Crystal Clear",
    highlight: "CCTV Systems",
    description: "Monitor your perimeter remotely. Expert installation and setup in Adelaide.",
    imagePath: "https://wp.adesmarthome.com.au/wp-content/uploads/hero-cctv-1.jpg", // 【修改】这里替换为 WP 后台的监控实拍图 URL
  },
  {
    // 幻灯片 3：强调综合安防
    title: "Total Home",
    highlight: "Security Solutions",
    description: "Integrating locks and cameras for a seamless, secure Adelaide living experience.",
    imagePath: "https://wp.adesmarthome.com.au/wp-content/uploads/hero-combined-1.jpg", // 【修改】这里替换为综合安防的图片 URL
  },
];

export function HeroCarousel() {
  return (
    <div className="absolute inset-0 z-0">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full overflow-hidden">
            {/* 渐变遮罩：增强文字可读性 */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
            
            {/* 背景图片 */}
            <Image
              src={slide.imagePath}
              alt={`${slide.title} ${slide.highlight}`}
              fill
              className="object-cover object-center transform scale-105"
              priority={index === 0}
            />
            
            {/* 底部品牌金暗光装饰 */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#c5a47e]/10 blur-[150px] rounded-full pointer-events-none z-20" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
