import React, { useState, useEffect, useRef } from 'react';
import { Shield, Ghost, Network, Cpu, Lock, Terminal, ChevronRight, Github, Mail, Server, Activity, Menu, X, ArrowRight, Zap, Database } from 'lucide-react';

const PhantomGridLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-0 -left-4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-1/4 -right-4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <Ghost className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full group-hover:bg-cyan-400/40 transition-all"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                PHANTOM <span className="text-gradient">GRID</span>
              </span>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#features" 
                onClick={(e) => smoothScroll(e, 'features')}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium relative group"
              >
                Công nghệ lõi
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#architecture" 
                onClick={(e) => smoothScroll(e, 'architecture')}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium relative group"
              >
                Kiến trúc
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#roadmap" 
                onClick={(e) => smoothScroll(e, 'roadmap')}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium relative group"
              >
                Lộ trình
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="https://github.com/haidang24/phantom-grid" 
                target="_blank" 
                rel="noreferrer" 
                className="glass px-5 py-2.5 rounded-lg text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2 text-sm font-medium group"
              >
                <Github size={16} /> 
                GitHub
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800/50 bg-slate-950/98 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-3">
              <a 
                href="#features" 
                onClick={(e) => smoothScroll(e, 'features')}
                className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                Công nghệ lõi
              </a>
              <a 
                href="#architecture" 
                onClick={(e) => smoothScroll(e, 'architecture')}
                className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                Kiến trúc
              </a>
              <a 
                href="#roadmap" 
                onClick={(e) => smoothScroll(e, 'roadmap')}
                className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                Lộ trình
              </a>
              <a 
                href="https://github.com/haidang24/phantom-grid" 
                target="_blank" 
                rel="noreferrer"
                className="block px-4 py-2 glass text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors flex items-center gap-2"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyan-500/20 mb-8 group hover:border-cyan-500/40 transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-xs font-mono text-slate-300 group-hover:text-cyan-400 transition-colors">
              v1.0 Public Release Available
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="text-white">Next-Gen Active Defense</span>
            <br />
            <span className="text-gradient animate-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Powered by eBPF
            </span>
          </h1>
          
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
            Biến hạ tầng mạng của bạn thành một <span className="text-cyan-400 font-semibold">"mê cung số"</span>. 
            Chủ động đánh lừa, phát hiện và cô lập kẻ tấn công ngay tại cấp độ Kernel với công nghệ eBPF tiên tiến.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 flex items-center justify-center gap-2 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Terminal size={20} />
                Deploy Agent
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="group glass px-8 py-4 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              Đọc Whitepaper
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Terminal Preview */}
          <div className="mt-20 mx-auto max-w-5xl glass rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl text-left font-mono text-sm backdrop-blur-xl">
            <div className="flex items-center gap-2 px-5 py-3 bg-slate-900/80 border-b border-slate-700/50">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-3 text-slate-400 text-xs">root@phantom-grid:~#</span>
            </div>
            <div className="p-6 space-y-3 bg-gradient-to-b from-slate-900/90 to-slate-950/90">
              <p className="text-green-400 flex items-center gap-2">
                <span className="text-cyan-400">$</span> ./phantom-agent start --mode=active
              </p>
              <p className="text-slate-300">[INFO] Loading eBPF programs into kernel...</p>
              <p className="text-slate-300">[INFO] Attaching XDP hook to eth0... <span className="text-green-400 font-semibold">✓ OK</span></p>
              <p className="text-slate-300">[INFO] Phantom Protocol (SPA) initialized.</p>
              <p className="text-slate-300">[INFO] The Mirage Deception Engine is active.</p>
              <p className="text-blue-400 font-semibold">[PROTECT] Port 22 (SSH) is now INVISIBLE to unauthorized scans.</p>
              <p className="text-purple-400 animate-pulse flex items-center gap-2">
                <span>_</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Section */}
      <section id="features" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Giải Pháp <span className="text-gradient">Công Nghệ</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Phantom Grid không sử dụng tường lửa truyền thống. Chúng tôi can thiệp trực tiếp vào luồng dữ liệu tại tầng thấp nhất của Linux với công nghệ eBPF/XDP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - The Phantom Protocol */}
            <div className="group relative glass rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Lock className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  The Phantom Protocol
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6 text-base">
                  Sử dụng Single Packet Authorization (SPA). Server hoàn toàn "tàng hình" (Dead Host) trước các công cụ quét mạng như Nmap.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm">Chặn đứng Brute-force</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm">Zero Trust Access</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 - The Mirage */}
            <div className="group relative glass rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Activity className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  The Mirage
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6 text-base">
                  Tạo ra hàng nghìn dịch vụ giả lập (Fake Services) trên các cổng trống. Kẻ tấn công sẽ bị lạc trong mê cung thông tin giả.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">Anti-Reconnaissance</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">Phản hồi gói tin giả tại XDP</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 - The Portal */}
            <div className="group relative glass rounded-2xl p-8 border border-slate-700/50 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/0 group-hover:from-pink-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Network className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                  The Portal
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6 text-base">
                  Tự động chuyển hướng (Transparent Redirection) kẻ tấn công vào môi trường Honeypot cô lập để điều tra hành vi.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                    <span className="text-sm">High-Fidelity Forensics</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                    <span className="text-sm">Bảo vệ tài sản thực</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Stats */}
      <section id="architecture" ref={statsRef} className="relative py-24 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Kiến Trúc <span className="text-gradient">Công Nghệ</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Hiệu suất vượt trội với công nghệ tiên tiến nhất
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Zap, label: 'eBPF/XDP', value: 'Core Technology', colorClass: 'cyan' },
              { icon: Activity, label: '< 1ms', value: 'Độ trễ xử lý', colorClass: 'green' },
              { icon: Server, label: 'Golang', value: 'High Perf Agent', colorClass: 'blue' },
              { icon: Database, label: 'Docker', value: 'Isolation Env', colorClass: 'purple' },
            ].map((stat, index) => {
              const colorClasses = {
                cyan: {
                  border: 'hover:border-cyan-500/50',
                  bg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
                  text: 'text-cyan-400'
                },
                green: {
                  border: 'hover:border-green-500/50',
                  bg: 'bg-green-500/10 group-hover:bg-green-500/20',
                  text: 'text-green-400'
                },
                blue: {
                  border: 'hover:border-blue-500/50',
                  bg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
                  text: 'text-blue-400'
                },
                purple: {
                  border: 'hover:border-purple-500/50',
                  bg: 'bg-purple-500/10 group-hover:bg-purple-500/20',
                  text: 'text-purple-400'
                }
              };
              const colors = colorClasses[stat.colorClass];
              
              return (
                <div 
                  key={index}
                  className={`glass rounded-2xl p-6 border border-slate-700/50 ${colors.border} transition-all duration-300 hover:scale-105 text-center group`}
                >
                  <div className={`inline-flex p-3 rounded-xl ${colors.bg} mb-4 transition-colors`}>
                    <stat.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className={`text-3xl md:text-4xl font-extrabold text-white mb-2 ${
                    statsVisible ? 'animate-in fade-in slide-in-from-bottom-4 duration-500' : ''
                  }`} style={{ animationDelay: `${index * 100}ms` }}>
                    {stat.label}
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{stat.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Lộ Trình <span className="text-gradient">Phát Triển</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Tầm nhìn và kế hoạch phát triển dài hạn
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-slate-700 to-slate-700"></div>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="relative flex items-start md:items-center gap-6 md:odd:flex-row-reverse">
                <div className="relative z-10 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 border-4 border-slate-950">
                  <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="flex-1 md:w-[calc(50%-4rem)] glass rounded-2xl p-6 md:p-8 border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-2">
                    <span className="text-green-400 font-bold text-lg">Giai đoạn 1</span>
                    <span className="text-xs text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full">Hoàn thành</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Core Foundation: Xây dựng nhân eBPF XDP/TC, hoàn thiện giao thức SPA và Agent Golang.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative flex items-start md:items-center gap-6 md:even:flex-row-reverse">
                <div className="relative z-10 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border-4 border-slate-950">
                  <Cpu className="w-8 h-8 md:w-10 md:h-10 text-slate-400" />
                </div>
                <div className="flex-1 md:w-[calc(50%-4rem)] glass rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-2">
                    <span className="text-white font-bold text-lg">Giai đoạn 2</span>
                    <span className="text-xs text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full">Q1-Q2 2026</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Intelligence & Integration: Tích hợp AI (Adaptive Deception) và đẩy log về SIEM (Splunk/Elastic).
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative flex items-start md:items-center gap-6 md:odd:flex-row-reverse">
                <div className="relative z-10 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border-4 border-slate-950">
                  <Server className="w-8 h-8 md:w-10 md:h-10 text-slate-400" />
                </div>
                <div className="flex-1 md:w-[calc(50%-4rem)] glass rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-2">
                    <span className="text-white font-bold text-lg">Giai đoạn 3</span>
                    <span className="text-xs text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full">Q3-Q4 2026</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Ecosystem Expansion: Cloud-Native Security cho Kubernetes & Marketplace cho Honeypot templates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-xl py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Ghost className="w-7 h-7 text-cyan-400" />
                <span className="text-xl font-bold text-white">
                  PHANTOM <span className="text-gradient">GRID</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm">
                © 2025 Mai Hải Đăng. All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="mailto:maidang24112004@gmail.com" 
                className="glass p-3 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://github.com/haidang24/phantom-grid" 
                target="_blank" 
                rel="noreferrer" 
                className="glass p-3 rounded-xl text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhantomGridLanding;