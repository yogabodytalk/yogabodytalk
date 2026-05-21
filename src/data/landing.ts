export const navItems = [
  { label: "Phương pháp", href: "#method" },
  { label: "Lộ trình", href: "#courses" },
  { label: "Hành trình", href: "#journey" },
  { label: "Master", href: "#master" },
  { label: "Tư vấn", href: "#contact" },
] as const;

export const heroStats = [
  { value: "4 tuần", label: "Nền tảng hơi thở" },
  { value: "30 ngày", label: "Chỉnh dáng chuyên sâu" },
  { value: "90 ngày", label: "Thân - Tâm - Trí" },
] as const;

export const painPoints = [
  { number: "01", title: "Vai gù, cổ rùa", body: "Vùng cổ vai gáy bị kéo căng khiến dáng đứng khép lại và thiếu tự tin khi xuất hiện." },
  { number: "02", title: "Hơi thở nông", body: "Nhịp thở ngắn làm cơ thể nhanh mệt, ngực không mở và năng lượng khó duy trì." },
  { number: "03", title: "Cơ thể cứng", body: "Khớp hông, vai, lưng thiếu linh hoạt làm chuyển động kém mềm mại và nặng nề." },
  { number: "04", title: "Thiếu khí chất", body: "Dáng đi, dáng ngồi và biểu cảm cơ thể chưa tạo được cảm giác thanh lịch tự nhiên." },
] as const;

export const methodPillars = [
  { label: "Hơi thở", title: "Làm chủ nguồn năng lượng", body: "Đưa nhịp thở sâu trở lại để mở ngực, định tâm và giải phóng căng thẳng." },
  { label: "Trục dáng", title: "Cân chỉnh cấu trúc cơ thể", body: "Định tuyến cổ, vai, cột sống, hông để vóc dáng cân đối và chuyển động nhẹ hơn." },
  { label: "Phong thái", title: "Tỏa sáng từ sự tự tin bên trong", body: "Rèn dáng đi, dáng đứng, ánh nhìn và khí chất thanh lịch trong đời sống hằng ngày." },
] as const;

export const courses = [
  {
    meta: "Nền tảng",
    title: "12 Ngày Nền Tảng",
    icon: "breath",
    time: "Cho người mới bắt đầu",
    badge: "",
    price: "968.000 VNĐ",
    priceNote: "Học nền tảng hơi thở và trục dáng",
    body: "Học cách thở chuẩn, làm mềm cơ thể và đặt lại nền tảng dáng đứng.",
    items: ["Hơi thở và mở ngực", "Linh hoạt vai, cổ, hông", "Dáng đứng và dáng ngồi"],
    highlight: "Phù hợp để bắt đầu nhẹ nhàng, hiểu cơ thể và sửa những thói quen cơ bản.",
    offer: "",
    cta: "Bắt đầu 12 ngày với 968K",
    featured: false,
  },
  {
    meta: "Chuyên sâu",
    title: "30 Ngày Chỉnh Dáng",
    icon: "alignment",
    time: "Lớp nhỏ hoặc cá nhân",
    badge: "",
    price: "9.968.000 VNĐ",
    priceNote: "Tối đa 5 học viên",
    body: "Mentor chỉnh từng điểm sai lệch để cải thiện vai, cổ, lưng và trục cơ thể.",
    items: ["Tối đa 5 học viên offline", "20 buổi chỉnh sửa chuyên sâu", "Theo dõi tiến trình từng tuần"],
    highlight: "Tặng 02 buổi xả cơ, giãn cơ, đả thông kinh lạc trị giá 1.000.000 VNĐ.",
    offer: "Tặng 02 buổi xả cơ, giãn cơ, đả thông kinh lạc trị giá 1.000.000 VNĐ.",
    cta: "Giữ 1 suất chỉnh dáng 30 ngày",
    featured: false,
  },
  {
    meta: "Chuyển hóa",
    title: "90 Ngày Thân Tâm Trí",
    icon: "balance",
    time: "12 tuần hybrid",
    badge: "Lựa chọn tối ưu",
    price: "3.968.000 VNĐ",
    priceNote: "Chuyển hóa thân - tâm - trí",
    body: "Kết hợp chỉnh dáng, nội lực, thói quen sống và tư duy chăm sóc cơ thể.",
    items: ["Định tuyến bộ khung", "Nhận thức nội tâm", "Lối sống và dinh dưỡng"],
    highlight: "Lựa chọn cân bằng cho người muốn duy trì kết quả và xây thói quen dài hơn.",
    offer: "",
    cta: "Chọn lộ trình 90 ngày",
    featured: false,
  },
  {
    meta: "Truyền nhân",
    title: "Đào Tạo HLV & Nhượng Quyền",
    icon: "mentor",
    time: "Đồng hành 1 năm",
    badge: "",
    price: "150.000.000 VNĐ",
    priceNote: "Tối đa 3 người",
    body: "Lộ trình dành cho học viên muốn trở thành người hướng dẫn và phát triển mô hình BODY TALK.",
    items: ["Đào tạo chuyên môn", "Đồng hành vận hành", "Chuyển giao hệ thống"],
    highlight: "Lộ trình riêng cho người muốn học sâu, được kèm sát và chuyển giao hệ thống.",
    offer: "",
    cta: "Đặt lịch trao đổi nhượng quyền",
    featured: false,
  },
] as const;

export const bodyMachinePrinciples = [
  {
    icon: "frame",
    title: "Bộ khung",
    body: "Cổ, vai, cột sống và hông được nắn chỉnh để dáng đứng trở về trục tự nhiên.",
  },
  {
    icon: "fuel",
    title: "Nhiên liệu",
    body: "Dinh dưỡng và thói quen được cá nhân hóa để cơ thể có đủ năng lượng phục hồi.",
  },
  {
    icon: "driver",
    title: "Người cầm lái",
    body: "Tư duy tích cực, thiền định và hơi thở giúp bạn giữ hướng đi bình tĩnh, bền bỉ.",
  },
] as const;

export const journeySteps = [
  { number: "01", title: "Lắng nghe tín hiệu cơ thể", body: "Đọc vùng căng, hơi thở và thói quen đang khiến cỗ máy cơ thể vận hành nặng nề." },
  { number: "02", title: "Xây lại bộ khung và hơi thở", body: "Nắn chỉnh cổ, vai, cột sống, hông và đưa nhịp thở sâu trở lại làm nền." },
  { number: "03", title: "Nạp đúng nhiên liệu sống", body: "Điều chỉnh dinh dưỡng, nhịp sinh hoạt và năng lượng phục hồi theo từng cơ địa." },
  { number: "04", title: "Cầm lái phong thái mới", body: "Rèn tư duy, thiền định và hiện diện để thân - tâm - trí đi đúng hướng lâu dài." },
] as const;

export const learningTracks = [
  { count: "968K", title: "Nền tảng hơi thở", body: "Làm chủ nhịp thở, mở ngực và xây lại nhận thức cơ thể cho người mới.", status: "12 bài học", cta: "Bắt đầu 12 ngày với 968K", muted: false },
  { count: "9.968K", title: "Chỉnh dáng 30 ngày", body: "Điều chỉnh vai, cổ, cột sống và nhận ưu đãi 02 buổi xả cơ trị giá 1 triệu.", status: "Tối đa 5 học viên", cta: "Giữ 1 suất chỉnh dáng 30 ngày", muted: false },
  { count: "3.968K", title: "Thân - Tâm - Trí 90 ngày", body: "Hành trình chuyên sâu kết nối luyện tập, thói quen sống và nội lực.", status: "Lựa chọn tối ưu", cta: "Chọn lộ trình 90 ngày", muted: false },
] as const;

export const proofItems = [
  {
    src: "/docs/z7710226061539_d0a5964d9f9d45a445fc3abe02c65b0f.jpg",
    alt: "Tài liệu khóa Yoga Phong Thái cơ bản",
    caption: "Tài liệu khóa cơ bản",
  },
  {
    src: "/docs/z7710226763217_e07956752ad176247bc2f37c4ea2c518.jpg",
    alt: "Tài liệu lộ trình 30 ngày chỉnh dáng",
    caption: "Lộ trình 30 ngày",
  },
  {
    src: "/docs/z7710226376419_97422f5a7095c35533f071f5eedcd439.jpg",
    alt: "Tài liệu chương trình 90 ngày Thân Tâm Trí",
    caption: "Chương trình 90 ngày",
  },
] as const;

export const testimonials = [
  {
    name: "Doanh nhân Mai Son",
    role: "Doanh nhân · Áp lực thương trường",
    quote:
      "Học được cách lắng nghe cơ thể và tìm thấy sự bình yên trong tâm hồn giữa muôn vàn áp lực thương trường.",
    image: "/testimonials/mai-son.png",
  },
  {
    name: "Katherine Trinh",
    role: "60 tuổi · Mỹ · Học online qua Zoom",
    quote: "Chuyển đổi vóc dáng và cải thiện sức khỏe đáng kể nhờ học online qua Zoom.",
    image: "/testimonials/katherine-trinh.png",
  },
] as const;

export const faqs = [
  {
    question: "Tôi nên bắt đầu từ lộ trình nào?",
    answer:
      "4 tuần dành cho nền tảng hơi thở và trục dáng. 30 ngày phù hợp khi cần chỉnh dáng sâu. 90 ngày dành cho hành trình Thân - Tâm - Trí bền hơn.",
  },
  {
    question: "BODY TALK khác gì yoga thông thường?",
    answer:
      "BODY TALK bắt đầu từ lắng nghe cơ thể, hơi thở và trục dáng trước khi đi vào động tác. Mục tiêu không chỉ là tập được một tư thế, mà là hiểu cơ thể để chỉnh đúng và giữ phong thái tự nhiên hơn.",
  },
  {
    question: "Master Thu Nhanh đồng hành ra sao?",
    answer:
      "Cô quan sát hơi thở, trục dáng, vai cổ gáy và nhịp sống hiện tại để gợi ý điểm bắt đầu phù hợp. Khi vào lộ trình, phần điều chỉnh sẽ đi theo tình trạng cơ thể thật của từng học viên.",
  },
] as const;

export const programs = ["Yoga Phong Thái Cơ Bản", "30 Ngày Chỉnh Dáng", "90 Ngày Thân Tâm Trí", "Đào Tạo HLV & Nhượng Quyền"] as const;
