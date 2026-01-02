import { Button } from "@/components/ui/button";
import { Smartphone, Globe } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary">Miễn phí cho 10 phòng đầu tiên</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="gradient-text">EZTRO</span>
              <span className="text-foreground"> - Giải pháp </span>
              <span className="gradient-accent-text">nhà trọ số</span>
              <span className="text-foreground"> cho người Cần Thơ</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up-delay-1">
              Tự động chốt điện nước bằng AI. Thanh toán 1 chạm qua QR. 
              <span className="font-semibold text-foreground"> Miễn phí trọn đời cho 10 phòng đầu tiên.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
              <Button size="lg" className="group gap-3 text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                <Smartphone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Tải ngay trên Android
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-3 text-base px-8 py-6 border-2 hover:bg-secondary transition-all"
              >
                <Globe className="w-5 h-5" />
                Dùng bản Web cho Chủ trọ
              </Button>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-4 pt-4 animate-fade-up-delay-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 border-2 border-background flex items-center justify-center text-primary-foreground text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">+150</span> chủ trọ đang sử dụng
              </div>
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up-delay-2">
            <div className="relative animate-float">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[3rem] blur-2xl scale-90" />
              
              {/* Phone mockup */}
              <img 
                src={phoneMockup} 
                alt="EZTRO App trên điện thoại" 
                className="relative w-72 md:w-80 lg:w-96 drop-shadow-2xl"
              />

              {/* Floating cards */}
              <div className="absolute -left-8 top-1/4 glass-card rounded-xl p-3 animate-fade-up-delay-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Thanh toán</p>
                    <p className="text-sm font-semibold text-foreground">+2.500.000đ</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/3 glass-card rounded-xl p-3 animate-fade-up-delay-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-lg">📊</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">AI Scan</p>
                    <p className="text-sm font-semibold text-foreground">1 giây</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
