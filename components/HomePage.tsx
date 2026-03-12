"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import {
  Menu,
  X,
  CheckCircle,
  FileText,
  Anchor,
  Facebook,
  Mail,
  ChevronDown,
  Truck,
  Ship,
  Globe,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isRtl = locale === "ar";

  const LocaleSwitcher = () => (
    <div className="flex gap-1.5 bg-gray-100 p-1 rounded-full">
      {(["fr", "en", "ar"] as const).map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${locale === l
              ? "bg-[#0F2244] text-white shadow"
              : "text-gray-500 hover:text-[#0F2244]"
            }`}
        >
          {l}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-white font-sans">

      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/logo_taklalog.jpeg"
              alt="taklalog logo"
              width={160}
              height={64}
              className="h-14 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "#about", label: t("nav.about") },
              { href: "#services", label: t("nav.services") },
              { href: "#partners", label: t("nav.partners") },
              { href: "#contact", label: t("nav.contact") },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#0F2244] font-semibold text-sm hover:text-[#F97316] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LocaleSwitcher />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-orange-400/40 transform hover:-translate-y-0.5"
            >
              {t("nav.requestQuote")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <LocaleSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#0F2244] hover:text-[#F97316] transition"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-4 flex flex-col gap-2">
                {[
                  { href: "#about", label: t("nav.about") },
                  { href: "#services", label: t("nav.services") },
                  { href: "#partners", label: t("nav.partners") },
                  { href: "#contact", label: t("nav.contact") },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-[#0F2244] font-semibold hover:bg-orange-50 hover:text-[#F97316] transition"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 text-center bg-[#F97316] text-white px-4 py-3 rounded-xl font-bold"
                >
                  {t("nav.requestQuote")}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0F2244]">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#F97316]/10 blur-[120px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-300/5 blur-[80px]" />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle, #F97316 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={isRtl ? "text-right" : ""}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/15 border border-[#F97316]/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
              <span className="text-[#F97316] text-sm font-semibold tracking-wide">
                {t("hero.title1")} • {t("hero.title2")}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              {t("hero.title3")}
              <br />
              <span className="text-[#F97316]">taklalog</span>
            </h1>

            <p className="text-lg text-blue-200/80 max-w-xl mb-10 leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-[0_8px_25px_rgba(249,115,22,0.4)] hover:shadow-[0_8px_35px_rgba(249,115,22,0.6)] transform hover:-translate-y-1"
              >
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-[#F97316] text-white hover:text-[#F97316] px-8 py-4 rounded-full font-bold text-base transition-all transform hover:-translate-y-1"
              >
                {t("hero.contactUs")}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
              {[
                { num: "24/7", label: locale === "ar" ? "دعم مستمر" : locale === "fr" ? "Support continu" : "Support" },
                { num: "100%", label: locale === "ar" ? "تغطية وطنية" : locale === "fr" ? "Couverture nationale" : "National coverage" },
                { num: "5", label: locale === "ar" ? "شراكات عالمية" : locale === "fr" ? "Partenaires mondiaux" : "Global partners" },
              ].map((stat, i) => (
                <div key={i} className={isRtl ? "text-right" : ""}>
                  <div className="text-3xl font-extrabold text-[#F97316]">{stat.num}</div>
                  <div className="text-sm text-blue-300/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Logo showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-white/5" />
              <div className="absolute inset-8 rounded-full bg-white/10 flex items-center justify-center shadow-2xl overflow-hidden">
                <Image
                  src="/logo_taklalog.jpeg"
                  alt="taklalog"
                  width={320}
                  height={320}
                  className="object-contain p-6"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-[#F97316] font-bold text-sm tracking-widest uppercase mb-3">
                {t("about.title")}
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0F2244] leading-tight mb-6">
                {t("about.subtitle")}
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p className="font-semibold text-[#0F2244]">{t("about.p3")}</p>
              </div>
            </motion.div>

            {/* Vision card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="bg-[#0F2244] rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#F97316]/10 rounded-full blur-2xl" />
                <Globe className="w-12 h-12 text-[#F97316] mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t("vision.title")}</h3>
                <p className="text-blue-200 leading-relaxed">{t("vision.desc")}</p>
              </div>
              {/* Decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F97316] rounded-2xl -z-10 opacity-60 blur-sm" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F97316] rounded-2xl -z-10 opacity-30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F97316] font-bold text-sm tracking-widest uppercase">taklalog</span>
            <h2 className="text-4xl font-extrabold text-[#0F2244] mt-2 mb-4">{t("values.title")}</h2>
            <div className="w-20 h-1 bg-[#F97316] mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, title: t("values.trustTitle"), desc: t("values.trustDesc") },
              { icon: Truck, title: t("values.profTitle"), desc: t("values.profDesc") },
              { icon: Ship, title: t("values.speedTitle"), desc: t("values.speedDesc") },
              { icon: Globe, title: t("values.innovTitle"), desc: t("values.innovDesc") },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#F97316]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0F2244] flex items-center justify-center mb-6 group-hover:bg-[#F97316] transition-colors">
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2244] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Why choose us */}
          <div className="mt-20 bg-[#0F2244] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#F97316]/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8">{t("why.title")}</h3>
              <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                {[t("why.f1"), t("why.f2"), t("why.f3"), t("why.f4"), t("why.f5")].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F97316] mt-0.5 shrink-0" />
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#F97316] text-lg font-semibold italic border-l-4 border-[#F97316] pl-4">
                {t("why.footer")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F97316] font-bold text-sm tracking-widest uppercase">taklalog</span>
            <h2 className="text-4xl font-extrabold text-[#0F2244] mt-2 mb-4">{t("services.title")}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">{t("services.subtitle")}</p>
            <div className="w-20 h-1 bg-[#F97316] mx-auto rounded-full mt-6" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: t("services.s1Title"),
                features: [t("services.s1F1"), t("services.s1F2"), t("services.s1F3"), t("services.s1F4")],
              },
              {
                icon: FileText,
                title: t("services.s2Title"),
                features: [t("services.s2F1"), t("services.s2F2"), t("services.s2F3"), t("services.s2F4")],
              },
              {
                icon: Anchor,
                title: t("services.s3Title"),
                features: [t("services.s3F1"), t("services.s3F2"), t("services.s3F3"), t("services.s3F4")],
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 bg-white"
              >
                {/* Card header */}
                <div className="bg-[#0F2244] p-8 relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#F97316]/10 rounded-full group-hover:bg-[#F97316]/20 transition-colors" />
                  <div className="w-14 h-14 rounded-xl bg-[#F97316] flex items-center justify-center mb-4 relative z-10">
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white relative z-10">{s.title}</h3>
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-3">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-2 w-2 h-2 rounded-full bg-[#F97316] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section id="partners" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#F97316] font-bold text-sm tracking-widest uppercase">Global Network</span>
            <h2 className="text-4xl font-extrabold text-[#0F2244] mt-2 mb-4">{t("partners.title")}</h2>
            <div className="w-20 h-1 bg-[#F97316] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl font-semibold text-[#0F2244] mb-4">{t("partners.subtitle")}</p>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>{t("partners.desc1")}</p>
                <p>{t("partners.desc2")}</p>
                <p className="font-semibold text-[#0F2244]">{t("partners.desc3")}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "Maersk", src: "/Maersk_Logo.png", url: "https://www.maersk.com/" },
                { name: "CMA CGM", src: "/CMA_CGM_logo.png", url: "https://www.cma-cgm.fr/" },
                { name: "MSC", src: "/Msc_logo.jpg", url: "https://www.msc.com/" },
                { name: "ARKAS Line", src: "/Arkas_line_logo.jpg", url: "https://arkasline.com/" },
                { name: "Hapag-Lloyd", src: "/hapag-lloyd_logo.png", url: "https://www.hapag-lloyd.com/" },
                { name: "taklalog", src: "/logo_taklalog.jpeg", url: "#" },
              ].map((partner, i) => (
                <motion.a
                  key={i}
                  href={partner.url}
                  target={partner.url === "#" ? undefined : "_blank"}
                  rel={partner.url === "#" ? undefined : "noopener noreferrer"}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 flex items-center justify-center shadow-sm border border-gray-100 hover:border-[#F97316]/40 hover:shadow-md transition-all aspect-[3/2] overflow-hidden group"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      fill
                      className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER / CONTACT ─── */}
      <footer id="contact" className="bg-[#0F2244] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F97316] via-orange-400 to-[#F97316]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-4 inline-block mb-6 shadow-lg">
                <Image
                  src="/logo_taklalog.jpeg"
                  alt="taklalog"
                  width={160}
                  height={64}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-blue-200 text-base leading-relaxed max-w-sm">{t("footer.text")}</p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-[#F97316]">{t("footer.contact")}</h4>
              <ul className="space-y-4">
                {[
                  "Medlemine@taklalog.com",
                  "Aghoudous@taklalog.com",
                  "Outhmane@taklalog.com",
                ].map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="flex items-start gap-3 text-blue-200 hover:text-[#F97316] transition-colors text-sm group"
                    >
                      <Mail className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-[#F97316]" />
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-[#F97316]">{t("footer.follow")}</h4>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/taklalog"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#F97316] flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://tiktok.com/@taklalog"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#F97316] flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/22200000000"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-300 text-sm">
            <p>{t("footer.allRights")}</p>
            <span>Français • English • العربية</span>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING SOCIAL BUTTONS ─── */}
      <div className={`fixed bottom-6 ${isRtl ? "left-6" : "right-6"} flex flex-col gap-3 z-50`}>
        {/* TikTok */}
        <motion.a
          href="https://tiktok.com/@taklalog"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        </motion.a>

        {/* Facebook Messenger */}
        <motion.a
          href="https://m.me/taklalog"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-lg"
        >
          <Facebook className="w-6 h-6" />
        </motion.a>

        {/* WhatsApp - pulsing */}
        <motion.a
          href="https://wa.me/22200000000"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] relative"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <svg className="w-8 h-8 fill-current relative z-10" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
