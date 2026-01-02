import { Camera, QrCode, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI Scan thông minh",
    description: "Nói không với ghi chép thủ công. Camera tự động đọc số điện nước trong 1 giây.",
    gradient: "from-primary to-primary/70",
  },
  {
    icon: QrCode,
    title: "Thanh toán VietQR",
    description: "Tiền về tài khoản ngay lập tức. Tự động gạch nợ. Không lo thất thoát.",
    gradient: "from-accent to-accent/70",
  },
  {
    icon: BarChart3,
    title: "Báo cáo minh bạch",
    description: "Biểu đồ doanh thu trực quan. Xuất file Excel nộp báo cáo dễ dàng.",
    gradient: "from-primary to-accent",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tính năng <span className="gradient-text">"Sát thủ"</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mọi thứ bạn cần để quản lý nhà trọ hiệu quả, tiết kiệm thời gian và tối ưu lợi nhuận.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`group glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-fade-up-delay-${index + 1}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Tìm hiểu thêm</span>
                <span className="text-lg">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
