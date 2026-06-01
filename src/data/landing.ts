export const navItems = [
  { label: "Phương pháp", href: "#method" },
  { label: "Lộ trình", href: "#courses" },
  { label: "Hành trình", href: "#journey" },
  { label: "Camp/Retreat", href: "#retreats" },
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
  { label: "Hơi thở", title: "Đọc tín hiệu", body: "Đưa nhịp thở sâu trở lại để cơ thể bớt căng, ngực mở hơn và tâm trí có điểm tựa." },
  { label: "Trục dáng", title: "Cân chỉnh bộ khung", body: "Định tuyến cổ, vai, cột sống, hông để vóc dáng cân đối và chuyển động nhẹ hơn." },
  { label: "Phong thái", title: "Duy trì khí chất", body: "Rèn dáng đi, dáng đứng, ánh nhìn và nhịp hiện diện để kết quả đi vào đời sống." },
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
    cta: "Bắt đầu khóa nền tảng",
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
    cta: "Trao đổi lộ trình HLV",
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

export const retreatHighlights = [
  {
    eyebrow: "Đi chữa lành",
    title: "Rời nhịp sống căng để nghe lại cơ thể",
    body: "Không gian tách khỏi lịch làm việc dày đặc, giúp bạn chậm lại, thở sâu hơn và nhận ra điều cơ thể đang báo hiệu.",
  },
  {
    eyebrow: "Thải độc nhịp sống",
    title: "Reset ăn uống, nghỉ ngơi và năng lượng",
    body: "Tập trung vào nhịp sinh hoạt nhẹ hơn: vận động vừa sức, bữa ăn lành mạnh, ngủ nghỉ và giảm kích thích quá tải.",
  },
  {
    eyebrow: "Đi camp",
    title: "Trải nghiệm cùng cộng đồng BODY TALK",
    body: "Cùng luyện thở, chuyển động, chia sẻ và giữ động lực trong một nhóm có cùng mong muốn chăm sóc thân - tâm - trí.",
  },
] as const;

export const retreatRhythm = [
  { time: "Sáng", title: "Đánh thức cơ thể", body: "Thở, mở khớp, đi bộ nhẹ và quan sát vùng căng." },
  { time: "Trưa", title: "Nạp đúng nhiên liệu", body: "Body Meal nhẹ, nước, nghỉ sâu và điều chỉnh nhịp năng lượng." },
  { time: "Chiều", title: "Cân chỉnh & phục hồi", body: "Chuyển động chậm, giãn cơ, thả lỏng và chăm sóc cảm nhận cơ thể." },
  { time: "Tối", title: "Lắng xuống", body: "Thiền, viết cảm nhận và đặt lại ý định sau chuyến đi." },
] as const;

export const retreatFit = [
  "Người đang mệt vì áp lực công việc, lịch sinh hoạt dày và khó tự nghỉ đúng cách.",
  "Người muốn trải nghiệm BODY TALK trước khi đi vào lộ trình dài hơn.",
  "Người cần một cộng đồng nhẹ nhàng để bắt đầu lại thói quen vận động, ăn uống và lắng nghe cơ thể.",
] as const;

export const lifeHousePillars = ["Sức khỏe", "Nội tâm", "Mối quan hệ", "Tài chính"] as const;

export const ecosystemOfferings = [
  {
    kicker: "Học",
    title: "Khóa học BODY TALK",
    body: "Nền tảng, 30 ngày chỉnh dáng và 90 ngày Thân - Tâm - Trí để chọn đúng điểm bắt đầu.",
  },
  {
    kicker: "Hồi phục",
    title: "Phòng hồi phục cơ thể",
    body: "Không gian hỗ trợ thả lỏng, lắng nghe và chăm sóc cảm nhận cơ thể sau vận động hoặc căng thẳng.",
  },
  {
    kicker: "Trải nghiệm",
    title: "Camp, Retreat & thải độc nhịp sống",
    body: "Những ngày rời nhịp sống thường ngày để luyện thở, chuyển động, ăn uống nhẹ và kết nối sâu hơn.",
  },
  {
    kicker: "Duy trì",
    title: "Video, Body Meal & cộng đồng",
    body: "Tài nguyên học, gợi ý dinh dưỡng và cộng đồng giúp thói quen mới không bị đứt đoạn.",
  },
] as const;

export const learningTracks = [
  { count: "968K", title: "Nền tảng hơi thở", body: "Làm chủ nhịp thở, mở ngực và xây lại nhận thức cơ thể cho người mới.", status: "12 bài học", cta: "Bắt đầu 12 ngày với 968K", muted: false },
  { count: "9.968K", title: "Chỉnh dáng 30 ngày", body: "Điều chỉnh vai, cổ, cột sống và nhận ưu đãi 02 buổi xả cơ trị giá 1 triệu.", status: "Tối đa 5 học viên", cta: "Giữ 1 suất chỉnh dáng 30 ngày", muted: false },
  { count: "3.968K", title: "Thân - Tâm - Trí 90 ngày", body: "Hành trình chuyên sâu kết nối luyện tập, thói quen sống và nội lực.", status: "Lựa chọn tối ưu", cta: "Chọn lộ trình 90 ngày", muted: false },
] as const;

export const videoCoursePreview = {
  eyebrow: "Bài học video đầu tiên",
  status: "Đang biên soạn",
  title: "Module mở đầu: Hơi thở mở ngực",
  duration: "Sắp cập nhật",
  body: "Khung xem trước cho bài hướng dẫn thở, mở ngực và nhận diện trục cơ thể. Video sẽ được cập nhật khi giáo trình hoàn tất.",
} as const;

export const videoCoursePlaceholders = [
  {
    status: "Sắp mở",
    title: "Hơi thở",
    duration: "Sắp cập nhật",
    body: "Các bài ngắn giúp đưa nhịp thở sâu trở lại và làm mềm vùng cổ vai ngực.",
  },
  {
    status: "Sắp mở",
    title: "Chỉnh dáng",
    duration: "Sắp cập nhật",
    body: "Chuỗi hướng dẫn theo từng vùng: cổ, vai, cột sống, hông và dáng đứng.",
  },
  {
    status: "Sắp mở",
    title: "Thân - Tâm - Trí",
    duration: "Sắp cập nhật",
    body: "Tài nguyên đồng hành cho nhịp sống, thiền định, dinh dưỡng và nội lực.",
  },
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
    imageOrientation: "portrait",
  },
  {
    name: "Katherine Trinh",
    role: "60 tuổi · Mỹ · Học online qua Zoom",
    quote: "Chuyển đổi vóc dáng và cải thiện sức khỏe đáng kể nhờ học online qua Zoom.",
    image: "/testimonials/katherine-trinh.png",
    imageOrientation: "landscape",
  },
] as const;

export const faqs = [
  {
    question: "Tôi nên bắt đầu từ lộ trình nào?",
    answer:
      "Nếu chưa rõ tình trạng, hãy gửi thông tin trước để được soi điểm bắt đầu. 12 ngày dành cho nền tảng hơi thở và trục dáng. 30 ngày phù hợp khi cần chỉnh sâu. 90 ngày dành cho hành trình Thân - Tâm - Trí bền hơn.",
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
  {
    question: "Camp, retreat hoặc thải độc nhịp sống dành cho ai?",
    answer:
      "Đây là điểm chạm bổ trợ cho người muốn tạm rời nhịp sống căng, lắng nghe cơ thể, ăn uống nhẹ hơn và duy trì thói quen chăm sóc thân - tâm. Nội dung được tư vấn theo tình trạng thực tế, không thay thế chẩn đoán hay điều trị y khoa.",
  },
] as const;

export const programs = ["Chưa rõ, cần soi tình trạng", "Yoga Phong Thái Cơ Bản", "30 Ngày Chỉnh Dáng", "90 Ngày Thân Tâm Trí", "Camp / Retreat / Thải độc nhịp sống", "Phòng hồi phục cơ thể", "Đào Tạo HLV & Nhượng Quyền"] as const;
