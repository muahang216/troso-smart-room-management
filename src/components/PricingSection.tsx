import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Miễn phí",
    rooms: "1-5 phòng",
    monthlyPrice: "0đ",
    yearlyPrice: "0đ",
    description: "Dành cho chủ trọ nhỏ",
    features: ["Quản lý tối đa 5 phòng", "AI Scan cơ bản", "Thanh toán QR", "Hỗ trợ qua email"],
    highlighted: false,
    cta: "Bắt đầu miễn phí"
  },
  {
    name: "Cá nhân",
    rooms: "6-15 phòng",
    monthlyPrice: "200.000đ",
    yearlyPrice: "2.000.000đ",
    description: "Phổ biến nhất",
    features: ["Quản lý tối đa 15 phòng", "AI Scan không giới hạn", "Thanh toán QR tự động", "Báo cáo Excel", "Hỗ trợ ưu tiên"],
    highlighted: true,
    cta: "Chọn gói này"
  },
  {
    name: "Phát triển",
    rooms: "16-35 phòng",
    monthlyPrice: "450.000đ",
    yearlyPrice: "4.500.000đ",
    description: "Dành cho nhà trọ lớn",
    features: ["Quản lý tối đa 35 phòng", "Tất cả tính năng Cá nhân", "Đa người quản lý", "Thống kê nâng cao", "Hỗ trợ 24/7"],
    highlighted: false,
    cta: "Chọn gói này"
  },
  {
    name: "Chuyên nghiệp",
    rooms: "36-50 phòng",
    monthlyPrice: "700.000đ",
    yearlyPrice: "7.000.000đ",
    description: "Dành cho chuỗi nhà trọ",
    features: ["Quản lý tối đa 50 phòng", "Tất cả tính năng Phát triển", "API tích hợp", "Tài khoản không giới hạn", "Quản lý đa chi nhánh"],
    highlighted: false,
    cta: "Chọn gói này"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bảng giá dịch vụ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chọn gói phù hợp với quy mô nhà trọ của bạn. Tiết kiệm 2 tháng khi thanh toán theo năm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.highlighted 
                  ? "border-2 border-primary shadow-lg scale-[1.02]" 
                  : "border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Phổ biến nhất
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.rooms}</CardDescription>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary">{plan.monthlyPrice}</div>
                  <div className="text-sm text-muted-foreground">/tháng</div>
                  <div className="text-sm text-accent-foreground mt-2 bg-accent/50 rounded-md py-1 px-2 inline-block">
                    {plan.yearlyPrice}/năm
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? "bg-primary hover:bg-primary/90" 
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom plan */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-dashed border-2">
            <CardContent className="py-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Gói Tùy chỉnh</h3>
              <p className="text-muted-foreground mb-4">
                Trên 50 phòng? Liên hệ ngay để nhận báo giá phù hợp với quy mô của bạn.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Liên hệ tư vấn
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
