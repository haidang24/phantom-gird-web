import React, { useState, useEffect, useRef } from 'react';
import { Shield, Ghost, Network, Cpu, Lock, Terminal, ChevronRight, Github, Mail, Server, Activity, Menu, X, ArrowRight, Zap, Database, AlertTriangle, Target, Building2, Cloud, Brain, BarChart3, CheckCircle2, Play, Eye, EyeOff, RefreshCw } from 'lucide-react';

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
                href="#demo" 
                onClick={(e) => smoothScroll(e, 'demo')}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium relative group"
              >
                Demo
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#problem" 
                onClick={(e) => smoothScroll(e, 'problem')}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium relative group"
              >
                Thách thức
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#features" 
                onClick={(e) => smoothScroll(e, 'features')}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium relative group"
              >
                Công nghệ lõi
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#differentiators" 
                onClick={(e) => smoothScroll(e, 'differentiators')}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium relative group"
              >
                Ưu điểm
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
                href="#demo" 
                onClick={(e) => smoothScroll(e, 'demo')}
                className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                Demo
              </a>
              <a 
                href="#problem" 
                onClick={(e) => smoothScroll(e, 'problem')}
                className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                Thách thức
              </a>
              <a 
                href="#features" 
                onClick={(e) => smoothScroll(e, 'features')}
                className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                Công nghệ lõi
              </a>
              <a 
                href="#differentiators" 
                onClick={(e) => smoothScroll(e, 'differentiators')}
                className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                Ưu điểm
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
            Trong kỷ nguyên của các cuộc tấn công mạng tinh vi (APT), tư duy phòng thủ truyền thống dựa trên "tường lửa" và "chữ ký" đã trở nên lỗi thời. 
            Phantom Grid biến hạ tầng mạng của bạn thành một <span className="text-cyan-400 font-semibold">"mê cung số"</span>, 
            chủ động đánh lừa, phát hiện và cô lập kẻ tấn công trước khi thiệt hại xảy ra.
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
            <a
              href="/PhantomGird-Whitepaper.pdf"
              download="PhantomGrid-Whitepaper.pdf"
              className="group glass px-8 py-4 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Đọc Whitepaper
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
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

      {/* Interactive Demo Section */}
      <DemoSection />

      {/* Problem Statement Section */}
      <section id="problem" className="relative py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Bối Cảnh & <span className="text-gradient">Thách Thức</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Sự bất đối xứng trong an ninh mạng là quá lớn: Đội ngũ bảo mật phải đúng 100% thời gian, trong khi kẻ tấn công chỉ cần đúng một lần.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Weaknesses */}
            <div className="glass rounded-2xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Điểm Yếu Cốt Tử</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Di chuyển ngang (Lateral Movement)</h4>
                    <p className="text-slate-400 text-sm">Sau khi xâm nhập, hacker tự do trinh sát mạng nội bộ. Các giải pháp hiện tại thiếu khả năng kiểm soát luồng giao thông Đông-Tây hiệu quả.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Thời gian phát hiện chậm</h4>
                    <p className="text-slate-400 text-sm">Trung bình hacker nằm vùng trong hệ thống <span className="text-red-400 font-semibold">21 ngày</span> trước khi bị phát hiện.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Bề mặt tấn công rộng</h4>
                    <p className="text-slate-400 text-sm">Các dịch vụ quản trị (SSH, Admin Panel) thường phải mở port, tạo cơ hội cho Brute-force và khai thác Zero-day.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitations */}
            <div className="glass rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Hạn Chế Giải Pháp Truyền Thống</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Firewall/IPS</h4>
                    <p className="text-slate-400 text-sm">Dựa trên tập luật tĩnh, dễ bị qua mặt bởi mã hóa hoặc kỹ thuật giả mạo IP.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Honeypot truyền thống</h4>
                    <p className="text-slate-400 text-sm">Tốn kém tài nguyên, độ trễ cao, dễ bị hacker phát hiện là môi trường giả lập (Fingerprinting).</p>
                  </div>
                </div>
              </div>
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
                <p className="text-slate-400 leading-relaxed mb-4 text-base">
                  <span className="text-cyan-400 font-semibold">Nguyên lý:</span> "Không thể tấn công thứ bạn không nhìn thấy."
                </p>
                <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                  Áp dụng cho các cổng dịch vụ quan trọng (SSH, Database, Admin Panel). Mặc định, eBPF DROP toàn bộ gói tin. 
                  Server hoàn toàn "chết" (Dead Host) dưới góc nhìn của hacker. Single Packet Authorization (SPA) mở cửa sổ kết nối 30 giây chỉ cho IP được xác thực.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">Chặn đứng Brute-force</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">Zero Trust Access thực thụ</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">Invisible Infrastructure</span>
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
                <p className="text-slate-400 leading-relaxed mb-4 text-base">
                  <span className="text-purple-400 font-semibold">Nguyên lý:</span> "Tạo nhiễu loạn để che giấu tín hiệu thật."
                </p>
                <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                  Áp dụng cho hàng nghìn cổng không sử dụng. Thay vì trả về RST, eBPF XDP hook tự động sinh ra SYN-ACK giả mạo, 
                  mô phỏng hàng loạt dịch vụ phổ biến (HTTP, FTP, Telnet). Hacker sẽ bị choáng ngợp bởi hàng ngàn cổng "mở".
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">Anti-Reconnaissance</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">Phản hồi gói tin giả tại XDP</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">High-Fidelity Deception</span>
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
                <p className="text-slate-400 leading-relaxed mb-4 text-base">
                  <span className="text-pink-400 font-semibold">Công nghệ:</span> Transparent Redirection (DNAT không trạng thái).
                </p>
                <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                  Khi hacker tương tác sâu hơn với "Dịch vụ ma", lưu lượng mạng bị âm thầm chuyển hướng sang Container Honeypot để thu thập hành vi. 
                  Quá trình chuyển hướng trong suốt, không thay đổi địa chỉ IP đích.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-pink-400" />
                    <span className="text-sm">High-Fidelity Forensics</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-pink-400" />
                    <span className="text-sm">Bảo vệ tài sản thực</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-pink-400" />
                    <span className="text-sm">Real-time Threat Detection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators Section */}
      <section id="differentiators" className="relative py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Tính Năng <span className="text-gradient">Vượt Trội</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Những điểm khác biệt làm nên sức mạnh của Phantom Grid
            </p>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 border border-slate-700/50 overflow-x-auto">
            <div className="min-w-full">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left py-4 px-6 text-cyan-400 font-bold text-lg">Tính năng</th>
                    <th className="text-left py-4 px-6 text-cyan-400 font-bold text-lg">Mô tả kỹ thuật</th>
                    <th className="text-left py-4 px-6 text-cyan-400 font-bold text-lg">Lợi ích doanh nghiệp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-cyan-400" />
                        <span className="font-semibold text-white">Invisible Infrastructure</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-slate-300 text-sm">
                      Ứng dụng SPA (Single Packet Authorization) để ẩn hoàn toàn các port dịch vụ quan trọng
                    </td>
                    <td className="py-5 px-6 text-slate-300 text-sm">
                      Loại bỏ <span className="text-green-400 font-semibold">100%</span> rủi ro từ các cuộc tấn công quét lỗ hổng tự động
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-3">
                        <Activity className="w-5 h-5 text-purple-400" />
                        <span className="font-semibold text-white">High-Fidelity Deception</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-slate-300 text-sm">
                      Tạo ra hàng nghìn "bẫy" giả lập (Fake Services) mà không tốn tài nguyên phần cứng
                    </td>
                    <td className="py-5 px-6 text-slate-300 text-sm">
                      Phát hiện hacker ngay từ giai đoạn <span className="text-purple-400 font-semibold">trinh sát</span> (Pre-attack phase)
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-blue-400" />
                        <span className="font-semibold text-white">Kernel-Level Performance</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-slate-300 text-sm">
                      Xử lý gói tin tại tầng XDP (trước khi cấp phát bộ nhớ sk_buff của OS)
                    </td>
                    <td className="py-5 px-6 text-slate-300 text-sm">
                      Độ trễ <span className="text-blue-400 font-semibold">&lt; 1ms</span>, không ảnh hưởng đến hiệu năng server production
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-pink-400" />
                        <span className="font-semibold text-white">Real-time Forensics</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-slate-300 text-sm">
                      Ghi lại toàn bộ hành vi trong Honeypot (Keystrokes, File uploads)
                    </td>
                    <td className="py-5 px-6 text-slate-300 text-sm">
                      Cung cấp bằng chứng số (Digital Forensics) chính xác để vá lỗ hổng
                    </td>
                  </tr>
                </tbody>
              </table>
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

      {/* Market & Business Model Section */}
      <section id="market" className="relative py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Thị Trường & <span className="text-gradient">Mô Hình</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Giải pháp được thiết kế cho các tổ chức có yêu cầu bảo mật cao nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Critical Infrastructure</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Chính phủ, Điện lực, Viễn thông với yêu cầu chống APT (Advanced Persistent Threats) cao nhất.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">BFSI Sector</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ngân hàng, Tài chính, Bảo hiểm cần bảo vệ dữ liệu nhạy cảm và tuân thủ các quy định nghiêm ngặt.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud Providers</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Các đơn vị cung cấp hạ tầng muốn tăng cường bảo mật cho khách hàng (Security-as-a-Service).
              </p>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Mô Hình Triển Khai</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">On-Premises Agent</h4>
                  <p className="text-slate-400 text-sm">
                    Cài đặt trực tiếp trên các máy chủ vật lý (Bare-metal) để bảo vệ hạ tầng tại chỗ.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Kubernetes Sidecar</h4>
                  <p className="text-slate-400 text-sm">
                    Triển khai như một DaemonSet để bảo vệ toàn bộ Cluster (Cloud-Native).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative py-32 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Lộ Trình <span className="text-gradient">Phát Triển</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Tầm nhìn và kế hoạch phát triển dài hạn với những mốc quan trọng
            </p>
          </div>
          
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1">
              <div className="absolute inset-0 bg-gradient-to-b from-green-500 via-blue-500 via-purple-500 to-slate-700 opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/80 via-blue-500/50 to-transparent" style={{ height: '33%' }}></div>
            </div>
            
            <div className="space-y-16">
              {/* Phase 1 - Completed */}
              <div className="relative group">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  {/* Icon Badge */}
                  <div className="relative z-20 flex-shrink-0 md:w-1/2 md:flex md:justify-end">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/40 border-4 border-slate-950 group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-950 flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-slate-950" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="relative md:w-1/2">
                    <div className="glass rounded-3xl p-8 border-2 border-green-500/40 bg-gradient-to-br from-green-500/5 to-transparent hover:border-green-500/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-1 group/card">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-3">
                        <div>
                          <span className="inline-flex items-center gap-2 text-green-400 font-bold text-xl mb-2">
                            Giai đoạn 1
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-xs font-semibold text-green-400 bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30">
                          <CheckCircle2 className="w-3 h-3" />
                          Hoàn thành
                        </span>
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-3">Core Foundation</h3>
                      <p className="text-slate-300 leading-relaxed mb-4">
                        Xây dựng nhân eBPF XDP/TC, hoàn thiện giao thức SPA và Agent Golang.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">eBPF/XDP</span>
                        <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">SPA Protocol</span>
                        <span className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">Golang Agent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 - In Progress */}
              <div className="relative group">
                <div className="flex flex-col md:flex-row-reverse md:items-center gap-8">
                  {/* Icon Badge */}
                  <div className="relative z-20 flex-shrink-0 md:w-1/2 md:flex md:justify-start">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-2xl shadow-blue-500/40 border-4 border-slate-950 group-hover:scale-110 transition-transform duration-300">
                        <Cpu className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-400 rounded-full border-4 border-slate-950 flex items-center justify-center animate-pulse">
                          <div className="w-2 h-2 bg-slate-950 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="relative md:w-1/2 md:text-right">
                    <div className="glass rounded-3xl p-8 border-2 border-blue-500/40 bg-gradient-to-br from-blue-500/5 to-transparent hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1 group/card">
                      <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-start mb-4 gap-3">
                        <div>
                          <span className="inline-flex items-center gap-2 text-blue-400 font-bold text-xl mb-2">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                            Giai đoạn 2
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30">
                          Q1-Q2 2026
                        </span>
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-3">Intelligence & Integration</h3>
                      <p className="text-slate-300 leading-relaxed mb-4">
                        Tích hợp AI (Adaptive Deception) để học hành vi hacker và tự động thay đổi cấu hình bẫy. 
                        Đẩy log về SIEM (Splunk/Elasticsearch).
                      </p>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">AI Integration</span>
                        <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">SIEM</span>
                        <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">Adaptive Deception</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 - Upcoming */}
              <div className="relative group">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  {/* Icon Badge */}
                  <div className="relative z-20 flex-shrink-0 md:w-1/2 md:flex md:justify-end">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-500/40 border-4 border-slate-950 group-hover:scale-110 transition-transform duration-300">
                        <Server className="w-10 h-10 md:w-12 md:h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="relative md:w-1/2">
                    <div className="glass rounded-3xl p-8 border-2 border-purple-500/40 bg-gradient-to-br from-purple-500/5 to-transparent hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-1 group/card">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-3">
                        <div>
                          <span className="inline-flex items-center gap-2 text-purple-400 font-bold text-xl mb-2">
                            Giai đoạn 3
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">
                          Q3-Q4 2026
                        </span>
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-3">Ecosystem Expansion</h3>
                      <p className="text-slate-300 leading-relaxed mb-4">
                        Cloud-Native Security cho Kubernetes & Service Mesh (Istio/Linkerd). 
                        Marketplace cho phép cộng đồng đóng góp các mẫu Honeypot templates mới.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">Kubernetes</span>
                        <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">Service Mesh</span>
                        <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">Marketplace</span>
                      </div>
                    </div>
                  </div>
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
                © 2025 Mai Hải Đăng -HD24SecurityLabs. All rights reserved.
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

// Demo Section Component
const DemoSection = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [activeDemo, setActiveDemo] = useState(null);

  const portScanDemo = {
    before: [
      { cmd: '$ nmap -p- 192.168.1.100', delay: 500 },
      { cmd: '', delay: 300, output: 'Starting Nmap 7.94...' },
      { cmd: '', delay: 300, output: 'Nmap scan report for 192.168.1.100' },
      { cmd: '', delay: 200, output: 'PORT     STATE    SERVICE' },
      { cmd: '', delay: 200, output: '22/tcp   open     ssh      ⚠️ EXPOSED' },
      { cmd: '', delay: 200, output: '80/tcp   open     http' },
      { cmd: '', delay: 200, output: '443/tcp  open     https' },
      { cmd: '', delay: 200, output: '3306/tcp open     mysql    ⚠️ EXPOSED' },
      { cmd: '', delay: 300, output: 'Nmap done: 1 IP address (4 open ports)' },
    ],
    after: [
      { cmd: '$ nmap -p- 192.168.1.100', delay: 500 },
      { cmd: '', delay: 300, output: 'Starting Nmap 7.94...' },
      { cmd: '', delay: 300, output: 'Nmap scan report for 192.168.1.100' },
      { cmd: '', delay: 500, output: 'PORT     STATE    SERVICE' },
      { cmd: '', delay: 300, output: '22/tcp   filtered ssh      ✅ HIDDEN' },
      { cmd: '', delay: 200, output: '80/tcp   open     http' },
      { cmd: '', delay: 200, output: '443/tcp  open     https' },
      { cmd: '', delay: 200, output: '3306/tcp filtered mysql    ✅ HIDDEN' },
      { cmd: '', delay: 200, output: '8080/tcp open     http-proxy' },
      { cmd: '', delay: 200, output: '9090/tcp open     http-alt' },
      { cmd: '', delay: 300, output: '... (1000+ fake services detected)' },
      { cmd: '', delay: 300, output: 'Nmap done: 1 IP address (1000+ open ports)' },
      { cmd: '', delay: 200, output: '⚠️  Attacker confused by fake services!' },
    ]
  };

  const runDemo = async (type) => {
    setIsRunning(true);
    setActiveDemo(type);
    setDemoStep(0);
    const steps = portScanDemo[type];
    
    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, steps[i].delay));
      setDemoStep(i + 1);
    }
    
    setTimeout(() => setIsRunning(false), 1000);
  };

  return (
    <section id="demo" className="relative py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Trải Nghiệm <span className="text-gradient">Demo</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Xem Phantom Grid hoạt động trong thực tế - So sánh trước và sau khi triển khai
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Before - Without Phantom Grid */}
          <div className="glass rounded-2xl p-6 border border-red-500/30 hover:border-red-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <h3 className="text-xl font-bold text-white">Trước khi triển khai</h3>
              </div>
              <button
                onClick={() => runDemo('before')}
                disabled={isRunning}
                className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm font-medium transition-all disabled:opacity-50 flex items-center gap-2"
              >
                <Play size={14} />
                Chạy Demo
              </button>
            </div>
            <div className="bg-slate-950 rounded-xl p-4 font-mono text-sm h-80 overflow-y-auto">
              <div className="space-y-1">
                {activeDemo === 'before' && portScanDemo.before.slice(0, demoStep).map((step, idx) => (
                  <div key={idx} className="flex flex-wrap gap-2">
                    {step.cmd && <span className="text-green-400">{step.cmd}</span>}
                    {step.output && (
                      <span className={step.output.includes('⚠️') ? 'text-red-400' : 'text-slate-300'}>
                        {step.output}
                      </span>
                    )}
                  </div>
                ))}
                {isRunning && activeDemo === 'before' && demoStep === 0 && (
                  <span className="text-purple-400 animate-pulse">_</span>
                )}
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              ⚠️ Server dễ bị tấn công: Ports quan trọng đang mở và có thể nhìn thấy
            </p>
          </div>

          {/* After - With Phantom Grid */}
          <div className="glass rounded-2xl p-6 border border-green-500/30 hover:border-green-500/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-400" />
                <h3 className="text-xl font-bold text-white">Sau khi triển khai</h3>
              </div>
              <button
                onClick={() => runDemo('after')}
                disabled={isRunning}
                className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg text-sm font-medium transition-all disabled:opacity-50 flex items-center gap-2"
              >
                <Play size={14} />
                Chạy Demo
              </button>
            </div>
            <div className="bg-slate-950 rounded-xl p-4 font-mono text-sm h-80 overflow-y-auto">
              <div className="space-y-1">
                {activeDemo === 'after' && portScanDemo.after.slice(0, demoStep).map((step, idx) => (
                  <div key={idx} className="flex flex-wrap gap-2">
                    {step.cmd && <span className="text-green-400">{step.cmd}</span>}
                    {step.output && (
                      <span className={
                        step.output.includes('✅') ? 'text-green-400' :
                        step.output.includes('⚠️') ? 'text-yellow-400' :
                        'text-slate-300'
                      }>
                        {step.output}
                      </span>
                    )}
                  </div>
                ))}
                {isRunning && activeDemo === 'after' && demoStep === 0 && (
                  <span className="text-purple-400 animate-pulse">_</span>
                )}
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              ✅ Server được bảo vệ: Ports quan trọng đã ẩn, kẻ tấn công bị đánh lừa bởi fake services
            </p>
          </div>
        </div>

        {/* Key Features Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <EyeOff className="w-5 h-5 text-cyan-400" />
              <h4 className="font-bold text-white">Port Invisibility</h4>
            </div>
            <p className="text-sm text-slate-400">
              Port 22 (SSH) và 3306 (MySQL) hoàn toàn "tàng hình" trước công cụ quét Nmap
            </p>
          </div>
          <div className="glass rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Network className="w-5 h-5 text-purple-400" />
              <h4 className="font-bold text-white">Fake Services</h4>
            </div>
            <p className="text-sm text-slate-400">
              Hàng nghìn cổng giả lập được tạo ra tự động để đánh lừa kẻ tấn công
            </p>
          </div>
          <div className="glass rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Activity className="w-5 h-5 text-pink-400" />
              <h4 className="font-bold text-white">Real-time Detection</h4>
            </div>
            <p className="text-sm text-slate-400">
              Phát hiện ngay khi kẻ tấn công cố gắng quét và tương tác với server
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhantomGridLanding;