import { Building2, MapPin, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "150+", label: "Chủ trọ tin dùng" },
  { icon: Building2, value: "500+", label: "Phòng được quản lý" },
  { icon: MapPin, value: "2", label: "Quận tại Cần Thơ" },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      
      <div className="container mx-auto px-4 relative">
        {/* Main content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Được tin dùng bởi{" "}
            <span className="gradient-accent-text">+150 chủ trọ</span>
            {" "}tại Ninh Kiều & Cái Răng
          </h2>
          <p className="text-lg text-muted-foreground">
            TroSo đã giúp hàng trăm chủ trọ tại Cần Thơ tiết kiệm thời gian và tăng hiệu quả quản lý.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center p-8 glass-card rounded-2xl animate-fade-up-delay-${index + 1}`}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">Đối tác</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="glass-card px-6 py-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">ĐH</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm">ĐH Nam Cần Thơ</p>
                  <p className="text-xs text-muted-foreground">Đối tác giáo dục</p>
                </div>
              </div>
            </div>
            <div className="glass-card px-6 py-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold">TF</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm">TechForge</p>
                  <p className="text-xs text-muted-foreground">Đối tác công nghệ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
