/* =========================================================
   RMUTT 09412214 — Applied Physics Laboratory
   Live Google Sheets Sync (Automatic on Page Load / Refresh)
   ========================================================= */

const SHEET_ID = "1n1PDUxvN13XIeIN3ca0w_qLNGR8izkxY1BlqWOSjehU";

const SHEET_NAMES = [
  "Home",
  "Instructors",
  "Outcomes",
  "Assessment",
  "Grading",
  "Schedule",
  "Group",
];

// Fallback data used only if offline or Google Sheet is unreachable
const FALLBACK_DATA = {
  Home: [
    ["ชื่อวิชาภาษาไทย", "ปฏิบัติการฟิสิกส์ประยุกต์"],
    ["ชื่อวิชาภาษาอังกฤษ", "Applied Physics Laboratory"],
    ["รหัสวิชา", "09412214"],
    ["จำนวนหน่วยกิต", "1(0-3)"],
    ["หลักสูตรและประเภทของรายวิชา", "หลักสูตรวิทยาศาสตรบัณฑิต หมวดวิชาเฉพาะ สาขาวิชาฟิสิกส์ประยุกต์ (ปี 2564)"],
    ["ภาคการศึกษา", "2/2569"],
    ["อาจารย์ผู้รับผิดชอบรายวิชา", "ผศ.ดร.ศราวุธ ใจเย็น"],
    ["ชั้นปีที่เรียน", "นักศึกษาหลักสูตรฟิสิกส์ประยุกต์ ชั้นปีที่ 2"],
    ["รายวิชาบังคับก่อน", "09410134 ปฏิบัติการฟิสิกส์ 2 (Physics Laboratory 2)"],
    ["สถานที่เรียน", "ห้องปฏิบัติการฟิสิกส์ประยุกต์ อาคาร คณะวิทยาศาสตร์และเทคโนโลยี"],
    ["วันเวลาเรียน", "วันอังคาร เวลา 9.00 - 12.00 น."],
    ["คำอธิบายรายวิชาภาษาไทย", "ปฏิบัติการฟิสิกส์ในระดับสูงเพื่อพัฒนาทักษะฟิสิกส์ดั้งเดิมและฟิสิกส์แผนใหม่"],
    ["คำอธิบายรายวิชาภาษาอังกฤษ", "Experiments on advanced physics in order to improve skills in classical and modern physics"],
  ],
  Instructors: [
    ["อาจารย์ผู้สอน", "ผศ.ดร.ศราวุธ ใจเย็น", "E-mail: sarawut@rmutt.ac.th", "ห้อง ST1709", "025494193"],
    ["อาจารย์ผู้สอน", "ผศ.ดร.นิธิวัฒน์ ชูสกุล", "E-mail: cnwatthn@rmutt.ac.th", "ห้อง ST1705", "025494186"],
    ["อาจารย์ผู้สอน", "ผศ.ดร.เดี่ยว อภัยราช", "E-mail: deaw_a@rmutt.ac.th", "ห้อง ST1702", "025494187"],
    ["อาจารย์ผู้สอน", "ผศ.ดร.นฤทธิ์ ฝ่ายบุตร", "E-mail: narit_f@rmutt.ac.th", "ห้อง ST1702", "025494187"],
    ["อาจารย์ผู้สอน", "ผศ.ดร.รัศมีรักษ์ หนูนุรักษ์", "E-mail: russameeruk_n@rmutt.ac.th", "ห้อง ST1702", "025494187"],
    ["อาจารย์ผู้สอน", "ดร.ชนกนันท์ บางเลี้ยง", "E-mail: chanoknan@rmutt.ac.th", "ห้อง ST1705", "025494186"],
  ],
  Outcomes: [
    ["ผลลัพธ์การเรียนรู้ของรายวิชา (Course Learning Outcomes : CLOs)", ""],
    ["ผลลัพธ์การเรียนรู้ของรายวิชา", "สัดส่วนการประเมิน (%)"],
    ["CLO1: เข้าเรียนตรงเวลา เก็บอุปกรณ์การทดลอง จัดห้องปฏิบัติการให้อยู่สภาพเดิม", "10"],
    ["CLO2: ลงมือปฏิบัติการทดลอง บันทึก วิเคราะห์ สรุป และอภิปรายผลการทดลองปฏิบัติการฟิสิกส์ขั้นสูงที่เกี่ยวข้องได้", "42"],
    ["CLO3: ใช้สมการเชิงเส้นในการวิเคราะห์ผลจากการทดลองได้", "12"],
    ["CLO4: เขียนรายงานผลการทดลองโดยสืบค้นข้อมูลได้อย่างถูกต้อง", "12"],
    ["CLO5: มีส่วนร่วมในการทำงานเป็นทีม มีภาวะความเป็นผู้นำและผู้ตามที่ดี แก้ไขปัญหาในการทำงานเป็นทีมได้", "9"],
    ["CLO6: ใช้อุปกรณ์การทดลองได้ถูกต้องตามคู่มือและไม่เกิดความเสียหาย", "3"],
    ["CLO7: เขียนรายงานโดยใช้ไวยากรณ์ถูกต้องตามหลักภาษาได้", "12"],
  ],
  Assessment: [
    ["วิธีการประเมินผลลัพธ์การเรียนรู้ (Assessment Methods)", ""],
    ["วิธีการประเมินผลลัพธ์การเรียนรู้", "สัดส่วนการประเมิน (%)"],
    ["การเข้าชั้นเรียนและการมีส่วนร่วมในชั้นเรียน", "10"],
    ["รายงานผลการทดลอง", "48"],
    ["สังเกตทักษะการปฏิบัติการของนักศึกษา", "12"],
    ["การสอบกลางภาค", "15"],
    ["การสอบปลายภาค", "15"],
  ],
  Grading: [
    ["ให้เป็นไปตามประกาศมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี เรื่อง เกณฑ์การวัดและประเมินผลการศึกษาระดับปริญญาตรี โดยการประเมินผลการศึกษาในแต่ละรายวิชากำหนดเป็นระดับคะแนน ค่าระดับคะแนนต่อหน่วยกิต และผลการศึกษา ดังต่อไปนี้", "", ""],
    ["ระดับคะแนน", "ค่าระดับคะแนนต่อหน่วยกิต", "ช่วงคะแนน"],
    ["A", "4.0", "80-100"],
    ["B+", "3.5", "75-79"],
    ["B", "3.0", "70-74"],
    ["C+", "2.5", "65-69"],
    ["C", "2.0", "60-64"],
    ["D+", "1.5", "55-59"],
    ["D", "1.0", "50-54"],
    ["F", "0", "0-49"],
    ["โดยนักศึกษาจะต้องได้รับสัญลักษณ์ D ขึ้นไป จึงจะผ่านเกณฑ์", "", ""],
    ["หากนักศึกษามีข้อสงสัย ข้องใจ หรือต้องการอุทธรณ์ในเรื่องการจัดกิจกรรมการเรียนการสอน รวมถึงการประเมินผลการเรียน สามารถแจ้งความประสงค์การอุทธรณ์โดยการเขียนใบคำร้องที่ ธุรการสาขา/ภาควิชา เพื่อพิจารณาดำเนินการต่อไป หากไม่ได้รับการแก้ไขปัญหาให้ติดต่อเขียนคำร้องที่ งานทะเบียนและวัดผล ฝ่ายวิชาการ คณะวิทยาศาสตร์และเทคโนโลยี เพื่อเสนอเรื่องดังกล่าวต่อคณะในการพิจารณาดำเนินการต่อไป", "", ""],
  ],
  Schedule: [
    ["กลางภาค", "", "", "", "", "", "", "", "", ""],
    ["การทดลองที่", "ชื่อการทดลอง", "ห้องเรียน", "ผู้สอน", "1 ธ.ค. 69", "8 ธ.ค. 69", "15 ธ.ค. 69", "22 ธ.ค. 69", "5 ม.ค. 70", "12 ม.ค. 70"],
    ["1", "การตรวจวัดรังสีแกมมาด้วยเครื่องวิเคราะห์สัญญาณแบบหลายช่อง", "ST1712/2", "ผศ.ดร.ศราวุธ ใจเย็น", "กลุ่ม 1", "", "", "", "กลุ่ม 3", "กลุ่ม 2"],
    ["2", "การตรวจวัดปริมาณเมฆที่ปกคลุมท้องฟ้าด้วยวิธีการวิเคราะห์ภาพถ่าย", "ST11001", "ผศ.ดร.นิธิวัฒน์ ชูสกุล", "กลุ่ม 2", "กลุ่ม 1", "", "", "", "กลุ่ม 3"],
    ["3", "เทอร์โมคัปเปิล", "ST1713", "ผศ.ดร.เดี่ยว อภัยราช", "กลุ่ม 3", "กลุ่ม 2", "กลุ่ม 1", "", "", ""],
    ["4", "โพลาไรเซชันของแสง", "ST1714/1", "ผศ.ดร.นฤทธิ์ ฝ่ายบุตร", "", "กลุ่ม 3", "กลุ่ม 2", "กลุ่ม 1", "", ""],
    ["5", "การเลี้ยวเบนของแสงผ่านแผ่น CD และ DVD", "ST1712/1", "ผศ.ดร.รัศมีรักษ์ หนูนุรักษ์", "", "", "กลุ่ม 3", "กลุ่ม 2", "กลุ่ม 1", ""],
    ["6", "การศึกษาการขยายตัวของเอกภพด้วย Hubble Diagram", "ST1710", "ดร.ชนกนันท์ บางเลี้ยง", "", "", "", "กลุ่ม 3", "กลุ่ม 2", "กลุ่ม 1"],
    ["สอบกลางภาค วันที่ 21 มกราคม พ.ศ. 2570 เวลา 13.00 - 16.00 น.", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["ปลายภาค", "", "", "", "", "", "", "", "", ""],
    ["การทดลองที่", "ชื่อการทดลอง", "ห้องเรียน", "ผู้สอน", "26 ม.ค. 70", "2 ก.พ. 70", "9 ก.พ. 70", "16 ก.พ. 70", "23 ก.พ. 70", "2 มี.ค. 70"],
    ["7", "การหาธาตุองค์ประกอบด้วยเทคนิคการเรืองรังสีเอกซ์", "ST1712/2", "ผศ.ดร.ศราวุธ ใจเย็น", "กลุ่ม 1", "", "", "", "กลุ่ม 3", "กลุ่ม 2"],
    ["8", "การตรวจวัดอุณหภูมิเชิงพื้นที่", "ST11001", "ผศ.ดร.นิธิวัฒน์ ชูสกุล", "กลุ่ม 2", "กลุ่ม 1", "", "", "", "กลุ่ม 3"],
    ["9", "แผ่นเพลเทียร์", "ST1713", "ผศ.ดร.เดี่ยว อภัยราช", "กลุ่ม 3", "กลุ่ม 2", "กลุ่ม 1", "", "", ""],
    ["10", "การแทรกสอดแบบเฟบริ-เปอร์โรท์", "ST1714/1", "ผศ.ดร.นฤทธิ์ ฝ่ายบุตร", "", "กลุ่ม 3", "กลุ่ม 2", "กลุ่ม 1", "", ""],
    ["11", "Michelson Interferometer", "ST1712/1", "ผศ.ดร.รัศมีรักษ์ หนูนุรักษ์", "", "", "กลุ่ม 3", "กลุ่ม 2", "กลุ่ม 1", ""],
    ["12", "ผลกระทบของไอน้ำในบรรยากาศต่อการวัดรังสีคอสมิก", "ST1710", "ดร.ชนกนันท์ บางเลี้ยง", "", "", "", "กลุ่ม 3", "กลุ่ม 2", "กลุ่ม 1"],
    ["สอบปลายภาค วันที่ 15 มีนาคม พ.ศ. 2570 เวลา 13.00 - 16.00 น.", "", "", "", "", "", "", "", "", ""],
  ],
  Group: [
    ["กลุ่มที่", "รหัสนักศึกษา", "ชื่อ สกุล"],
    ["1", "112233445566-1", "กิตติพงศ์ วัฒนากูล"],
    ["1", "112233445566-2", "ณัฐธิดา ศรีสุวรรณ"],
    ["1", "112233445566-3", "ธนกฤต อัครเดชา"],
    ["1", "112233445566-4", "ปิยะดา พงษ์ไพบูลย์"],
    ["2", "112233445566-5", "ภานุวัฒน์ เจริญสุข"],
    ["2", "112233445566-6", "วรัญญา กิจจานนท์"],
    ["2", "112233445566-7", "ศุภณัฐ บุญมีชัย"],
    ["2", "112233445566-8", "สิริยากร ทองประเสริฐ"],
    ["3", "112233445566-9", "อภิสิทธิ์ รัตนวงศ์"],
    ["3", "112233445566-1", "ชนิกานต์ วงศ์สุวรรณ"],
    ["3", "112233445566-2", "พัชรพล ดำรงค์ศิลป์"],
    ["3", "112233445566-3", "มนัสนันท์ แสงจันทร์"],
    ["3", "112233445566-4", "รัชชานนท์ สุขสวัสดิ์"],
  ],
};

const DEFAULT_EXAM_NOTES = [
  "สอบกลางภาค วันที่ 21 มกราคม พ.ศ. 2570 เวลา 13.00 - 16.00 น.",
  "สอบปลายภาค วันที่ 15 มีนาคม พ.ศ. 2570 เวลา 13.00 - 16.00 น.",
];

/* ---------- Utilities ---------- */
function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cleanText(val) {
  if (val === null || val === undefined) return "";
  return String(val).trim();
}

function parseGvizTable(gvizData) {
  if (!gvizData || !gvizData.table) return [];
  const cols = gvizData.table.cols || [];
  const rawRows = gvizData.table.rows || [];
  const rows = [];

  const headerLabels = cols.map((c) => cleanText(c && c.label));
  if (headerLabels.some((v) => v !== "")) {
    rows.push(headerLabels);
  }

  for (const r of rawRows) {
    const cells = (r && r.c) || [];
    const rowArr = [];
    for (let i = 0; i < cols.length; i++) {
      const cell = cells[i];
      if (!cell || (cell.v === null && cell.f === undefined)) {
        rowArr.push("");
      } else if (cell.f !== undefined && cell.f !== null && String(cell.f).trim() !== "") {
        rowArr.push(cleanText(cell.f));
      } else {
        rowArr.push(cleanText(cell.v));
      }
    }
    rows.push(rowArr);
  }
  return rows;
}

function extractGvizJson(rawText) {
  const start = rawText.indexOf("{");
  const end = rawText.lastIndexOf("}");
  if (start === -1 || end === -1) {
    throw new Error("Invalid GViz response");
  }
  return JSON.parse(rawText.slice(start, end + 1));
}

async function fetchSheetViaFetch(sheetName) {
  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq` +
    `?tqx=out:json&headers=0&sheet=${encodeURIComponent(sheetName)}&_=${Date.now()}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();
  return parseGvizTable(extractGvizJson(text));
}

function fetchSheetViaJsonp(sheetName) {
  return new Promise((resolve, reject) => {
    const cbName =
      "__gvizCb_" +
      sheetName.replace(/[^a-zA-Z0-9]/g, "") +
      "_" +
      Math.random().toString(36).slice(2, 9);
    const script = document.createElement("script");
    const timer = setTimeout(() => {
      cleanup();
      reject(new Error("JSONP timeout"));
    }, 9000);

    function cleanup() {
      clearTimeout(timer);
      if (script.parentNode) script.parentNode.removeChild(script);
      delete window[cbName];
    }

    window[cbName] = (payload) => {
      cleanup();
      try {
        resolve(parseGvizTable(payload));
      } catch (err) {
        reject(err);
      }
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("JSONP load error"));
    };

    script.src =
      `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq` +
      `?tqx=responseHandler:${cbName}&headers=0&sheet=${encodeURIComponent(sheetName)}&_=${Date.now()}`;
    document.head.appendChild(script);
  });
}

async function loadSheet(sheetName) {
  try {
    const rows = await fetchSheetViaFetch(sheetName);
    if (rows && rows.length > 0) return rows;
  } catch (_) {
    // Fall through to JSONP (works for file:// and strict CORS environments)
  }

  try {
    const rows = await fetchSheetViaJsonp(sheetName);
    if (rows && rows.length > 0) return rows;
  } catch (_) {
    // Fall through to embedded fallback data
  }

  return FALLBACK_DATA[sheetName] || [];
}

/* ---------- Section Renderers ---------- */
function renderHome(rows) {
  const container = document.getElementById("home-content");
  const validRows = rows.filter((r) => cleanText(r[0]) || cleanText(r[1]));
  if (!validRows.length) {
    container.innerHTML = `<p>ไม่พบข้อมูลรายวิชา</p>`;
    return;
  }

  const infoMap = {};
  const metaRows = [];
  let descTh = "";
  let descEn = "";

  for (const row of validRows) {
    const label = cleanText(row[0]);
    const value = cleanText(row[1]);
    if (!label && !value) continue;
    infoMap[label] = value;

    if (label.includes("คำอธิบายรายวิชาภาษาไทย")) {
      descTh = value;
    } else if (label.includes("คำอธิบายรายวิชาภาษาอังกฤษ")) {
      descEn = value;
    } else {
      metaRows.push([label, value]);
    }
  }

  // Sync top-left course code & fallback hero banner text from Home sheet
  const code = infoMap["รหัสวิชา"] || "09412214";
  const sem = infoMap["ภาคการศึกษา"] || "2/2569";
  const titleEn = infoMap["ชื่อวิชาภาษาอังกฤษ"] || "Applied Physics Laboratory";
  const titleTh = infoMap["ชื่อวิชาภาษาไทย"] || "ปฏิบัติการฟิสิกส์ประยุกต์";

  const brandEl = document.getElementById("brand-code");
  if (brandEl) brandEl.textContent = code;
  const heroMetaEl = document.getElementById("hero-meta");
  const heroEnEl = document.getElementById("hero-title-en");
  const heroThEl = document.getElementById("hero-title-th");
  if (heroMetaEl) heroMetaEl.textContent = `RMUTT ${code} · Semester ${sem}`;
  if (heroEnEl) heroEnEl.textContent = titleEn;
  if (heroThEl) heroThEl.textContent = titleTh;
  document.title = `${code} ${titleTh} — ${titleEn}`;

  let html = `<table class="course-info-table"><tbody>`;
  for (const [label, value] of metaRows) {
    html += `
      <tr>
        <th>${escapeHtml(label)}</th>
        <td>${escapeHtml(value)}</td>
      </tr>`;
  }
  html += `</tbody></table>`;

  if (descTh || descEn) {
    html += `<div class="description-box"><h3>คำอธิบายรายวิชา (Course Description)</h3>`;
    if (descTh) html += `<p>${escapeHtml(descTh)}</p>`;
    if (descEn) html += `<p>${escapeHtml(descEn)}</p>`;
    html += `</div>`;
  }

  container.innerHTML = html;
}

function renderInstructors(rows) {
  const container = document.getElementById("instructors-content");
  const validRows = rows.filter((r) => cleanText(r[1]) || cleanText(r[0]));

  // Deduplicate only if someone lists an instructor as both ผู้รับผิดชอบรายวิชา and อาจารย์ผู้สอน
  const teachingNames = new Set(
    validRows
      .filter((r) => cleanText(r[0]).includes("อาจารย์ผู้สอน"))
      .map((r) => cleanText(r[1]))
  );

  const filtered = validRows.filter((r) => {
    const role = cleanText(r[0]);
    const name = cleanText(r[1]);
    if (!name) return false;
    if (role.includes("ผู้รับผิดชอบ") && teachingNames.has(name)) {
      return false;
    }
    return true;
  });

  if (!filtered.length) {
    container.innerHTML = `<p>ไม่พบข้อมูลอาจารย์ผู้สอน</p>`;
    return;
  }

  let html = `<div class="instructors-grid">`;
  for (const r of filtered) {
    const role = cleanText(r[0]) || "อาจารย์ผู้สอน";
    const name = cleanText(r[1]);
    const rawEmail = cleanText(r[2]);
    const emailAddr = rawEmail.replace(/^e-?mail\s*:\s*/i, "").trim();
    const room = cleanText(r[3]);
    const phone = cleanText(r[4]);

    html += `
      <article class="instructor-card">
        <span class="instructor-role">${escapeHtml(role)}</span>
        <h3 class="instructor-name">${escapeHtml(name)}</h3>
        <ul class="instructor-meta">
          ${
            emailAddr
              ? `<li><span class="meta-label">E-mail:</span><a href="mailto:${escapeHtml(emailAddr)}">${escapeHtml(emailAddr)}</a></li>`
              : ""
          }
          ${
            room
              ? `<li><span class="meta-label">ห้องพัก:</span><span>${escapeHtml(room.replace(/^ห้อง\s*/, ""))}</span></li>`
              : ""
          }
          ${
            phone
              ? `<li><span class="meta-label">โทรศัพท์:</span><a href="tel:${escapeHtml(phone.replace(/[^0-9+]/g, ""))}">${escapeHtml(phone)}</a></li>`
              : ""
          }
        </ul>
      </article>`;
  }
  html += `</div>`;
  container.innerHTML = html;
}

function renderOutcomes(rows) {
  const container = document.getElementById("outcomes-content");
  const validRows = rows.filter((r) => r.some((c) => cleanText(c) !== ""));

  // Locate header row (contains สัดส่วนการประเมิน or ผลลัพธ์การเรียนรู้)
  let headerIdx = validRows.findIndex(
    (r) =>
      r.some((c) => cleanText(c).includes("สัดส่วน")) ||
      (cleanText(r[0]) === "CLO" && cleanText(r[1]).includes("ผลลัพธ์"))
  );
  if (headerIdx === -1) headerIdx = 0;

  const headerRow = validRows[headerIdx] || [];
  const dataRows = validRows.slice(headerIdx + 1);
  const isThreeCol =
    cleanText(headerRow[0]).toUpperCase() === "CLO" && cleanText(headerRow[2]) !== "";

  let totalPct = 0;
  let bodyHtml = "";

  for (const r of dataRows) {
    let text = "";
    let pctStr = "";

    if (isThreeCol) {
      const code = cleanText(r[0]);
      const desc = cleanText(r[1]);
      pctStr = cleanText(r[2]);
      if (!code && !desc) continue;
      text = code ? `<span class="clo-prefix">${escapeHtml(code)}:</span> ${escapeHtml(desc)}` : escapeHtml(desc);
    } else {
      const raw = cleanText(r[0]);
      pctStr = cleanText(r[1]);
      if (!raw) continue;
      const cloMatch = raw.match(/^(CLO\s*\d+\s*:?)(.*)$/i);
      if (cloMatch) {
        const prefix = cloMatch[1].endsWith(":") ? cloMatch[1] : `${cloMatch[1]}:`;
        text = `<span class="clo-prefix">${escapeHtml(prefix)}</span>${escapeHtml(cloMatch[2])}`;
      } else {
        text = escapeHtml(raw);
      }
    }

    const num = parseFloat(pctStr.replace(/%/g, ""));
    if (!Number.isNaN(num)) totalPct += num;
    const displayPct = pctStr ? (pctStr.includes("%") ? pctStr : `${pctStr}%`) : "-";

    bodyHtml += `
      <tr>
        <td>${text}</td>
        <td class="text-center pct-value">${escapeHtml(displayPct)}</td>
      </tr>`;
  }

  container.innerHTML = `
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>ผลลัพธ์การเรียนรู้ของรายวิชา (Course Learning Outcomes : CLOs)</th>
            <th class="text-center" style="width: 180px;">สัดส่วนการประเมิน (%)</th>
          </tr>
        </thead>
        <tbody>${bodyHtml}</tbody>
        <tfoot>
          <tr>
            <td class="text-right">รวมทั้งหมด</td>
            <td class="text-center pct-value">${Number.isInteger(totalPct) ? totalPct : totalPct.toFixed(1)}%</td>
          </tr>
        </tfoot>
      </table>
    </div>`;
}

function renderAssessment(rows) {
  const container = document.getElementById("assessment-content");
  const validRows = rows.filter((r) => r.some((c) => cleanText(c) !== ""));

  let headerIdx = validRows.findIndex((r) =>
    r.some((c) => cleanText(c).includes("สัดส่วน"))
  );
  if (headerIdx === -1) headerIdx = 0;

  const dataRows = validRows.slice(headerIdx + 1);
  let totalPct = 0;
  let bodyHtml = "";

  for (const r of dataRows) {
    const method = cleanText(r[0]);
    const pctStr = cleanText(r[1]);
    if (!method) continue;

    const num = parseFloat(pctStr.replace(/%/g, ""));
    if (!Number.isNaN(num)) totalPct += num;
    const displayPct = pctStr ? (pctStr.includes("%") ? pctStr : `${pctStr}%`) : "-";

    bodyHtml += `
      <tr>
        <td>${escapeHtml(method)}</td>
        <td class="text-center pct-value">${escapeHtml(displayPct)}</td>
      </tr>`;
  }

  container.innerHTML = `
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th>วิธีการประเมินผลลัพธ์การเรียนรู้ (Assessment Methods)</th>
            <th class="text-center" style="width: 180px;">สัดส่วนการประเมิน (%)</th>
          </tr>
        </thead>
        <tbody>${bodyHtml}</tbody>
        <tfoot>
          <tr>
            <td class="text-right">รวมทั้งหมด</td>
            <td class="text-center pct-value">${Number.isInteger(totalPct) ? totalPct : totalPct.toFixed(1)}%</td>
          </tr>
        </tfoot>
      </table>
    </div>`;
}

function renderGrading(rows) {
  const container = document.getElementById("grading-content");
  const validRows = rows.filter((r) => r.some((c) => cleanText(c) !== ""));

  const headerIdx = validRows.findIndex(
    (r) => cleanText(r[0]).includes("ระดับคะแนน") || cleanText(r[2]).includes("ช่วงคะแนน")
  );

  let introText = "";
  let gradeRows = [];
  const footerNotes = [];

  if (headerIdx !== -1) {
    if (headerIdx > 0) {
      introText = validRows
        .slice(0, headerIdx)
        .map((r) => cleanText(r[0]))
        .filter(Boolean)
        .join(" ");
    }
    for (let i = headerIdx + 1; i < validRows.length; i++) {
      const c0 = cleanText(validRows[i][0]);
      const c1 = cleanText(validRows[i][1]);
      const c2 = cleanText(validRows[i][2]);
      if (c0 && (c1 !== "" || c2 !== "")) {
        gradeRows.push([c0, c1, c2]);
      } else if (c0) {
        footerNotes.push(c0);
      }
    }
  }

  let html = "";
  if (introText) {
    html += `<p class="grading-intro">${escapeHtml(introText)}</p>`;
  }

  html += `
    <div class="table-wrap grading-table-wrap">
      <table class="data-table">
        <thead>
          <tr>
            <th class="text-center">ระดับคะแนน</th>
            <th class="text-center">ค่าระดับคะแนนต่อหน่วยกิต</th>
            <th class="text-center">ช่วงคะแนน</th>
          </tr>
        </thead>
        <tbody>`;

  for (const [grade, gpa, range] of gradeRows) {
    const isF = grade.toUpperCase() === "F";
    html += `
      <tr>
        <td class="text-center"><span class="grade-badge ${isF ? "grade-f" : ""}">${escapeHtml(grade)}</span></td>
        <td class="text-center">${escapeHtml(gpa)}</td>
        <td class="text-center">${escapeHtml(range)}</td>
      </tr>`;
  }

  html += `</tbody></table></div>`;

  footerNotes.forEach((note, idx) => {
    if (idx === 0) {
      html += `<p class="grading-pass-note">${escapeHtml(note)}</p>`;
    } else {
      html += `<div class="grading-appeal-box">${escapeHtml(note)}</div>`;
    }
  });

  container.innerHTML = html;
}

function renderSchedule(rows) {
  const container = document.getElementById("schedule-content");

  // Locate table header rows reliably even if GViz drops text in numeric Column A
  const headerIndices = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i] || [];
    const joined = row.map((c) => cleanText(c)).join(" ");
    if (
      joined.includes("ชื่อการทดลอง") ||
      (joined.includes("ห้องเรียน") && joined.includes("ผู้สอน"))
    ) {
      headerIndices.push(i);
    }
  }

  const effectiveRows = headerIndices.length > 0 ? rows : FALLBACK_DATA.Schedule;
  const effectiveHeaders = [];
  for (let i = 0; i < effectiveRows.length; i++) {
    const joined = (effectiveRows[i] || []).map((c) => cleanText(c)).join(" ");
    if (
      joined.includes("ชื่อการทดลอง") ||
      (joined.includes("ห้องเรียน") && joined.includes("ผู้สอน"))
    ) {
      effectiveHeaders.push(i);
    }
  }

  const defaultTitles = ["กลางภาค", "ปลายภาค"];
  let html = "";

  for (let b = 0; b < effectiveHeaders.length; b++) {
    const hIdx = effectiveHeaders[b];
    const nextHIdx = b + 1 < effectiveHeaders.length ? effectiveHeaders[b + 1] : effectiveRows.length;

    // Look for a section title just before this header row
    let blockTitle = defaultTitles[b] || `ช่วงที่ ${b + 1}`;
    for (let k = hIdx - 1; k >= Math.max(0, hIdx - 3); k--) {
      const candidate = (effectiveRows[k] || []).map(cleanText).find(Boolean);
      if (candidate && !candidate.includes("สอบ") && !candidate.includes("กลุ่ม")) {
        blockTitle = candidate;
        break;
      }
    }

    const headerRow = effectiveRows[hIdx] || [];
    // Determine active columns in header row
    const colCount = Math.max(
      4,
      headerRow.reduce((max, cell, idx) => (cleanText(cell) ? idx + 1 : max), 4)
    );

    const headers = [];
    for (let c = 0; c < colCount; c++) {
      let label = cleanText(headerRow[c]);
      if (c === 0 && !label) label = "การทดลองที่";
      headers.push(label);
    }

    const expRows = [];
    let examNote = "";

    for (let i = hIdx + 1; i < nextHIdx; i++) {
      const r = effectiveRows[i] || [];
      const nonEmpty = r.map(cleanText).filter(Boolean);
      if (!nonEmpty.length) continue;

      const joined = nonEmpty.join(" ");
      if (joined.includes("สอบกลางภาค") || joined.includes("สอบปลายภาค") || joined.startsWith("สอบ")) {
        examNote = joined;
        continue;
      }
      if (joined === "กลางภาค" || joined === "ปลายภาค") {
        continue;
      }

      // Experiment row has experiment name in col 1
      if (cleanText(r[1])) {
        expRows.push(r);
      }
    }

    // If GViz dropped Column A's exam text because Column A is typed as numeric,
    // use the matching exam note from the sheet snapshot
    if (!examNote && DEFAULT_EXAM_NOTES[b]) {
      examNote = DEFAULT_EXAM_NOTES[b];
    }

    html += `
      <div class="schedule-block">
        <h3 class="schedule-block-title">${escapeHtml(blockTitle)}</h3>
        <div class="table-wrap">
          <table class="data-table schedule-table">
            <thead>
              <tr>
                ${headers
                  .map((h, idx) => {
                    const align = idx === 0 || idx >= 4 ? "text-center" : "";
                    return `<th class="${align}">${escapeHtml(h)}</th>`;
                  })
                  .join("")}
              </tr>
            </thead>
            <tbody>`;

    for (let idx = 0; idx < expRows.length; idx++) {
      const r = expRows[idx];
      html += `<tr>`;
      for (let c = 0; c < colCount; c++) {
        let val = cleanText(r[c]);
        if (c === 0) {
          html += `<td class="text-center">${escapeHtml(val || String(b * 6 + idx + 1))}</td>`;
        } else if (c === 1) {
          html += `<td class="exp-title">${escapeHtml(val)}</td>`;
        } else if (c === 2) {
          html += `<td class="room-col">${escapeHtml(val)}</td>`;
        } else if (c === 3) {
          html += `<td class="teacher-col">${escapeHtml(val)}</td>`;
        } else {
          html += `<td class="date-cell">${escapeHtml(val)}</td>`;
        }
      }
      html += `</tr>`;
    }

    html += `</tbody></table></div>`;
    if (examNote) {
      html += `<div class="exam-notice">${escapeHtml(examNote)}</div>`;
    }
    html += `</div>`;
  }

  container.innerHTML = html || `<p>ไม่พบข้อมูลตารางปฏิบัติการ</p>`;
}

function renderGroup(rows) {
  const container = document.getElementById("group-content");
  const validRows = rows.filter((r) => r.some((c) => cleanText(c) !== ""));

  let headerIdx = validRows.findIndex(
    (r) =>
      r.some((c) => cleanText(c).includes("รหัสนักศึกษา")) ||
      r.some((c) => cleanText(c).includes("ชื่อ"))
  );

  const effectiveRows = headerIdx !== -1 ? validRows : FALLBACK_DATA.Group;
  if (headerIdx === -1) headerIdx = 0;

  const headerRow = effectiveRows[headerIdx] || [];
  const studentRows = effectiveRows
    .slice(headerIdx + 1)
    .filter((r) => cleanText(r[1]) || cleanText(r[2]));

  // Display strictly 3 columns: กลุ่มที่, รหัสนักศึกษา, ชื่อ สกุล
  const col0Label = cleanText(headerRow[0]) || "กลุ่มที่";
  const col1Label = cleanText(headerRow[1]) || "รหัสนักศึกษา";
  const col2Label = cleanText(headerRow[2]) || "ชื่อ สกุล";

  const theadHtml = `
    <tr>
      <th class="text-center" style="width: 150px;">${escapeHtml(col0Label)}</th>
      <th class="text-center" style="width: 240px;">${escapeHtml(col1Label)}</th>
      <th>${escapeHtml(col2Label)}</th>
    </tr>`;

  // Assign distinct pastel color band per unique group value
  const groupColorMap = new Map();
  let nextColorIdx = 0;
  let prevGroup = null;
  let tbodyHtml = "";

  for (const r of studentRows) {
    const grp = cleanText(r[0]) || prevGroup || "-";
    const studentId = cleanText(r[1]);
    const studentName = cleanText(r[2]);

    if (!groupColorMap.has(grp)) {
      groupColorMap.set(grp, nextColorIdx % 6);
      nextColorIdx++;
    }
    const bandClass = `group-band-${groupColorMap.get(grp)}`;
    const dividerClass = prevGroup !== null && prevGroup !== grp ? " group-divider" : "";
    prevGroup = grp;

    tbodyHtml += `
      <tr class="${bandClass}${dividerClass}">
        <td class="text-center"><span class="group-pill">กลุ่ม ${escapeHtml(grp)}</span></td>
        <td class="text-center student-id">${escapeHtml(studentId)}</td>
        <td class="student-name">${escapeHtml(studentName)}</td>
      </tr>`;
  }

  container.innerHTML = `
    <div class="table-wrap">
      <table class="data-table group-table">
        <thead>${theadHtml}</thead>
        <tbody>${tbodyHtml}</tbody>
      </table>
    </div>`;
}

/* ---------- Navigation & Scroll Spy ---------- */
function setupNavigation() {
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", () => {
      const expanded = mobileMenu.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", String(expanded));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const sections = SHEET_NAMES.map((name) =>
    document.getElementById(name.toLowerCase())
  ).filter(Boolean);
  const allNavLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");

  function setActiveLink(id) {
    allNavLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );
    sections.forEach((sec) => observer.observe(sec));
  }
}

/* ---------- Hero Banner Image Fallback ---------- */
function setupBannerFallback() {
  const img = document.getElementById("hero-banner-img");
  const fallback = document.getElementById("hero-banner-fallback");
  if (!img || !fallback) return;

  img.addEventListener("error", () => {
    img.style.display = "none";
    fallback.classList.add("visible");
  });
}

/* ---------- Initialize & Fetch Latest Google Sheet Data ---------- */
async function init() {
  setupNavigation();
  setupBannerFallback();

  const [home, instructors, outcomes, assessment, grading, schedule, group] =
    await Promise.all(SHEET_NAMES.map((name) => loadSheet(name)));

  renderHome(home);
  renderInstructors(instructors);
  renderOutcomes(outcomes);
  renderAssessment(assessment);
  renderGrading(grading);
  renderSchedule(schedule);
  renderGroup(group);
}

document.addEventListener("DOMContentLoaded", init);
