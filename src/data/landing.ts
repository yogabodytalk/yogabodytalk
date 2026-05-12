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
    time: "Cho người mới bắt đầu",
    body: "Học cách thở chuẩn, làm mềm cơ thể và đặt lại nền tảng dáng đứng.",
    items: ["Hơi thở và mở ngực", "Linh hoạt vai, cổ, hông", "Dáng đứng và dáng ngồi"],
    featured: false,
  },
  {
    meta: "Chuyên sâu",
    title: "30 Ngày Chỉnh Dáng",
    time: "Lớp nhỏ hoặc cá nhân",
    body: "Mentor chỉnh từng điểm sai lệch để cải thiện vai, cổ, lưng và trục cơ thể.",
    items: ["Tối đa 5 học viên offline", "20 buổi chỉnh sửa chuyên sâu", "Theo dõi tiến trình từng tuần"],
    featured: true,
  },
  {
    meta: "Chuyển hóa",
    title: "90 Ngày Thân Tâm Trí",
    time: "12 tuần hybrid",
    body: "Kết hợp chỉnh dáng, nội lực, thói quen sống và tư duy chăm sóc cơ thể.",
    items: ["Định tuyến bộ khung", "Nhận thức nội tâm", "Lối sống và dinh dưỡng"],
    featured: false,
  },
] as const;

export const journeySteps = [
  { number: "01", title: "Lắng nghe", body: "Đọc tín hiệu cơ thể, xác định vùng căng và mục tiêu thay đổi của từng học viên." },
  { number: "02", title: "Nền tảng", body: "Xây lại hơi thở, sự linh hoạt và ý thức trục cơ thể trong từng chuyển động." },
  { number: "03", title: "Chỉnh sửa", body: "Căn chỉnh vai, cổ, cột sống, hông và các thói quen làm sai lệch vóc dáng." },
  { number: "04", title: "Chuyển hóa", body: "Biến kỹ thuật thành phong thái: đi, đứng, ngồi, thở và hiện diện tự tin hơn." },
] as const;

export const learningTracks = [
  { count: "12 bài", title: "Nền tảng hơi thở", body: "Làm chủ nhịp thở, mở ngực và xây lại nhận thức cơ thể cho người mới.", status: "Thư viện học", muted: false },
  { count: "20 buổi", title: "Chỉnh dáng 30 ngày", body: "Điều chỉnh vai, cổ, cột sống và các thói quen làm sai lệch vóc dáng.", status: "Thư viện học", muted: false },
  { count: "12 tuần", title: "Thân - Tâm - Trí 90 ngày", body: "Hành trình chuyên sâu kết nối luyện tập, thói quen sống và nội lực.", status: "Sắp mở", muted: true },
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

export const faqs = [
  { question: "Ai phù hợp với Yoga Phong Thái?", answer: "Phù hợp với phụ nữ muốn cải thiện dáng, vai cổ gáy, hơi thở, sự linh hoạt và phong thái khi xuất hiện." },
  { question: "30 ngày khác gì 90 ngày?", answer: "30 ngày tập trung chỉnh dáng chuyên sâu. 90 ngày mở rộng sang thân - tâm - trí, thói quen sống và duy trì kết quả." },
  { question: "Có cần nền tảng yoga trước không?", answer: "Không bắt buộc. Lớp cơ bản được thiết kế để học viên bắt đầu từ hơi thở, trục dáng và chuyển động an toàn." },
  { question: "Học online hay offline?", answer: "Có thể tư vấn theo nhu cầu. Lớp offline phù hợp người cần chỉnh lỗi trực tiếp, còn online phù hợp duy trì luyện tập linh hoạt." },
] as const;

export const programs = ["Yoga Phong Thái Cơ Bản", "30 Ngày Chỉnh Dáng", "90 Ngày Thân Tâm Trí"] as const;
