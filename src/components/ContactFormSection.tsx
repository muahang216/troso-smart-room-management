import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageCircle, Send, Phone, User, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactFormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    rooms: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Integrate with backend to send email notification
    // For now, show success message
    setTimeout(() => {
      toast({
        title: "Yêu cầu đã được gửi!",
        description: "Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất.",
      });
      setFormData({ name: "", phone: "", rooms: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact-form" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Yêu cầu cấp tài khoản
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Điền thông tin bên dưới, chúng tôi sẽ liên hệ tư vấn và cấp tài khoản cho bạn trong 24h.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Gửi yêu cầu
                </CardTitle>
                <CardDescription>
                  Điền đầy đủ thông tin để được hỗ trợ nhanh nhất
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Họ và tên
                    </Label>
                    <Input
                      id="name"
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Số điện thoại
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0945 700 813"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rooms" className="flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      Số lượng phòng
                    </Label>
                    <Input
                      id="rooms"
                      type="number"
                      placeholder="10"
                      min="1"
                      value={formData.rooms}
                      onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & QR */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    Liên hệ nhanh qua Zalo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Bấm nút bên dưới để chat trực tiếp với Admin, được tư vấn và chốt đơn ngay!
                  </p>
                  <Button className="w-full gap-2" asChild>
                    <a href="https://zalo.me/0945700813" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      Chat Zalo ngay
                    </a>
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    Hotline: <span className="font-semibold text-foreground">0945 700 813</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-lg">Thanh toán chuyển khoản</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-background rounded-lg p-4 border">
                    <p className="text-sm text-muted-foreground mb-2">Thông tin chuyển khoản:</p>
                    <div className="space-y-1 text-sm">
                      <p><span className="text-muted-foreground">Ngân hàng:</span> <span className="font-semibold">MB Bank</span></p>
                      <p><span className="text-muted-foreground">STK:</span> <span className="font-semibold">0945700813</span></p>
                      <p><span className="text-muted-foreground">Chủ TK:</span> <span className="font-semibold">EZTRO</span></p>
                    </div>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Nội dung chuyển khoản:</p>
                    <p className="font-mono font-semibold text-sm text-foreground">SĐT - Mua Goi [Tên gói]</p>
                    <p className="text-xs text-muted-foreground mt-1">Ví dụ: 0901234567 - Mua Goi Pro</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
