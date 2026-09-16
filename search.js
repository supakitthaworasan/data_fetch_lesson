// สร้างฟังก์ชันรับค่าเพื่อเปลี่ยน URL แบบไดนามิก
const fetchGames = async (searchQuery = "", page = 1, limit = 10) => {
    // ใช้ Template Literals ประกอบ URL พร้อม Query Parameters
    const url = `http://localhost:2001/game/search?q=${searchQuery}&page=${page}&limit=${limit}`;

    try {
        const response = await fetch(url, {
            method: "GET" // ลบ Header ที่ไม่จำเป็นออก
        });

        // ดักจับ Error กรณี HTTP Status ไม่ใช่ 200-299
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        console.log("Data:", result);
        
        // คืนค่าข้อมูลเพื่อนำไปใช้ต่อท้าย Array (Load More) หรือสร้าง UI
        return result;

    } catch (error) {
        console.error("Fetch error:", error);
    }
};

// --- ตัวอย่างการเรียกใช้งาน ---

// 1. โหลดข้อมูลครั้งแรก (หน้า 1)
fetchGames("", 1, 10);

// 2. เมื่อผู้ใช้พิมพ์หาคำว่า "mario"
// fetchGames("mario", 1, 10);

// 3. เมื่อผู้ใช้กดปุ่ม Load More เพื่อดูหน้า 2
// fetchGames("", 2, 10);