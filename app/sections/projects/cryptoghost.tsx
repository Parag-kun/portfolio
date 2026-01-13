"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projectImages = [
  {
    src: "/cryptoghost/landing.png",
    caption:
      "Sleek and intuitive landing page for the next generation of crypto analytics.",
    title: "Landing Page",
  },
  {
    src: "/cryptoghost/token-table.png",
    caption:
      "Comprehensive market overview with real-time data streaming and advanced filtering.",
    title: "Market Dashboard",
  },
  {
    src: "/cryptoghost/token-detail.png",
    caption:
      "Deep-dive analytics for any token, featuring live price charts and social sentiment analysis.",
    title: "Token Analytics",
  },
  {
    src: "/cryptoghost/fresh-wallets.png",
    caption:
      "Identify 'Smart Money' movements with our proprietary fresh wallet tracking system.",
    title: "Wallet Tracker",
  },
  {
    src: "/cryptoghost/nft.png",
    caption:
      "Granular NFT marketplace explorer with trait rarity and floor price historical data.",
    title: "NFT Explorer",
  },
  {
    src: "/cryptoghost/bubble.png",
    caption:
      "Dynamic market visualization using interactive bubble charts to spot trends instantly.",
    title: "Market Visualizer",
  },
];

export default function CryptoGhost() {
  return (
    <div className="py-20 px-4 md:px-8 lg:px-20 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-center">
            <a
              href="https://cryptoghost.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-6xl font-bold italic tracking-tighter underline"
            >
              CRYPTOGHOST.AI
            </a>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed text-center">
            A comprehensive crypto and NFT analytics platform designed for power
            users. Built with a focus on real-time data, intuitive
            visualizations, and actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projectImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-16/10 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src={image.src}
                  alt={`CryptoGhost project: ${image.title} - ${image.caption}`}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {image.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
